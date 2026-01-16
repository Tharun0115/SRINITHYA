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
        let fetchUrl = url;
        let targetId = '';
        if (url.indexOf('#') !== -1) {
            const parts = url.split('#');
            fetchUrl = parts[0];
            targetId = parts[1];
        }

        const response = await fetch(fetchUrl);
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
            
            // Only remove inline scripts immediately. External scripts need time to load.
            if (!newScript.src) {
                newScript.remove();
            } else {
                // Optional: Remove after load to keep DOM clean, or just leave it.
                newScript.addEventListener('load', () => newScript.remove());
                newScript.addEventListener('error', () => newScript.remove());
            }
        });

        // The MutationObservers in product_renderer.js and product_cards.js will handle re-rendering.
        // We only need to manually re-initialize components that don't use an observer.
        setTimeout(() => {
            // Explicitly trigger home page card rendering if the function exists
            if (window.initProductCards) window.initProductCards();

            if (window.CarouselManager && typeof window.CarouselManager.start === 'function') {
                window.CarouselManager.start();
            }
        }, 50);

        // 4. Update Navbar & Footer (which are outside the main content)
        if (window.updateNavbarLinks) {
            window.updateNavbarLinks();
        }
        // Remove old footer if it exists, then re-initialize
        const existingFooter = document.querySelector('footer');
        if (existingFooter) {
            existingFooter.remove();
        }
        if (window.initFooter) {
            window.initFooter();
        }

        if (scroll) {
            if (targetId) {
                setTimeout(() => {
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                        const headerOffset = 80;
                        const elementPosition = targetElement.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.scrollY - headerOffset;
                        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                    } else {
                        window.scrollTo(0, 0);
                    }
                }, 100);
            } else {
                window.scrollTo(0, 0);
            }
        }

    } catch (error) {
        console.error('Navigation error:', error);
        window.location.reload(); // Fallback
    } finally {
        if (loader) loader.style.display = 'none';
    }
}