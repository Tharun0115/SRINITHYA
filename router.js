document.addEventListener('DOMContentLoaded', () => {
    // Initialize Router
    initRouter();
});

function initRouter() {
    document.body.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        
        // Ignore if not a link, or external, or hash link, or specific download/mail links
        if (!link || 
            link.target === '_blank' || 
            link.getAttribute('href').startsWith('#') || 
            link.getAttribute('href').startsWith('mailto:') || 
            link.getAttribute('href').startsWith('tel:') ||
            link.hasAttribute('download')) {
            return;
        }

        // Prevent default navigation
        e.preventDefault();
        const href = link.href;

        navigateTo(href);
    });

    // Handle Back/Forward buttons
    window.addEventListener('popstate', () => {
        loadPage(window.location.href, false);
    });
}

async function navigateTo(url) {
    history.pushState(null, null, url);
    await loadPage(url, true);
}

async function loadPage(url, scroll = true) {
    const loader = document.getElementById('loader-wrapper');
    // if (loader) loader.style.display = 'flex'; // Disable full loader for smooth transition
    document.body.style.cursor = 'wait'; // Show wait cursor during fetch

    try {
        // Check for file protocol (fetch won't work locally without a server)
        if (window.location.protocol === 'file:') {
            throw new Error("Cannot use SPA router on file:// protocol");
        }

        const response = await fetch(url);
        if (!response.ok) throw new Error("Page not found");
        
        const html = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        // 1. Swap Main Content
        const newContent = doc.getElementById('main-content');
        const currentContent = document.getElementById('main-content');

        if (newContent && currentContent) {
            currentContent.innerHTML = newContent.innerHTML;
            // Update classes to match (e.g., padding differences)
            currentContent.className = newContent.className;
        } else {
            // Fallback if structure is different
            window.location.href = url;
            return;
        }

        // 2. Update Title
        document.title = doc.title;

        // 3. Re-initialize Page Components
        // Explicitly trigger product rendering for the new page content
        if (window.autoRenderProducts) {
            window.autoRenderProducts();
        }
        
        // Re-initialize other components (Carousel, Home cards)
        // Use setTimeout to ensure DOM is fully updated before querying elements
        setTimeout(() => {
            reinitPageComponents();
        }, 200);

        // 4. Update Navbar Links (Fix relative paths)
        if (window.updateNavbarLinks) {
            window.updateNavbarLinks();
        }

        // 5. Re-initialize specific UI components
        if (window.initFooter) window.initFooter();
        
        // Re-attach compare bar logic if it exists in new content
        if (typeof window.updateCompareBar === 'function') {
            window.updateCompareBar();
        }

        if (scroll) {
            window.scrollTo(0, 0);
        }

    } catch (error) {
        console.warn('Router fallback to full reload:', error);
        window.location.href = url; // Fallback to standard navigation
    } finally {
        if (loader) loader.style.display = 'none';
    }
}

function reinitPageComponents() {
    // 1. Re-initialize Homepage Cards (if on homepage)
    if (typeof window.initProductCards === 'function') {
        window.initProductCards();
    }
    
    // 2. Restart Carousel (if on homepage)
    if (window.CarouselManager && typeof window.CarouselManager.start === 'function') {
        window.CarouselManager.start();
    }
}