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
    if (loader) loader.style.display = 'flex'; // Show loader briefly

    try {
        const response = await fetch(url);
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
            // Fallback if structure is different (shouldn't happen if all pages are updated)
            window.location.reload();
            return;
        }

        // 2. Update Title
        document.title = doc.title;

        // 3. Re-execute Scripts
        // We need to find scripts in the new content and run them
        // Specifically looking for the inline script that calls renderProductCards
        const scripts = doc.querySelectorAll('#main-content script');
        scripts.forEach(oldScript => {
            const newScript = document.createElement('script');
            Array.from(oldScript.attributes).forEach(attr => newScript.setAttribute(attr.name, attr.value));
            newScript.textContent = oldScript.textContent;
            
            // If it's an inline script with renderProductCards, we might need to delay it 
            // or ensure dependencies are ready.
            // Since product_data.js and renderer are likely in head or cached, it should be fine.
            document.body.appendChild(newScript);
            // Remove immediately after execution to keep DOM clean
            document.body.removeChild(newScript);
        });

        // 3a. Re-initialize Page Components (Critical for Homepage Cards)
        // Explicitly trigger product rendering for the new page content
        if (window.autoRenderProducts) {
            window.autoRenderProducts();
        }
        
        // Re-initialize other components (Carousel, Home cards)
        setTimeout(() => {
            // initProductCards is the function exposed by the homepage script
            if (typeof window.initProductCards === 'function') {
                window.initProductCards();
            }
            if (window.CarouselManager && typeof window.CarouselManager.start === 'function') {
                window.CarouselManager.start();
            }
        }, 50);

        // 4. Update Navbar Links (Fix relative paths)
        if (window.updateNavbarLinks) {
            window.updateNavbarLinks();
        }

        // 5. Re-initialize specific UI components if needed
        if (window.initFooter) window.initFooter(); // Ensure footer events are attached if any
        
        // Re-attach compare bar logic if it exists in new content
        if (typeof window.updateCompareBar === 'function') {
            window.updateCompareBar();
        }

        if (scroll) {
            window.scrollTo(0, 0);
        }

    } catch (error) {
        console.error('Navigation error:', error);
        window.location.reload(); // Fallback
    } finally {
        if (loader) loader.style.display = 'none';
    }
}