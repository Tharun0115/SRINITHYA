/**
 * Search Functionality
 * Handles searching through productData and rendering results.
 */

document.addEventListener('DOMContentLoaded', () => {
    initSearch();
});

// Re-initialize on Router navigation (if navigating back to home)
window.addEventListener('router:navigation-complete', () => {
    initSearch();
});

function initSearch() {
    const searchInput = document.getElementById('catalogue-search');
    if (!searchInput) return;

    let currentSearchResults = [];

    // Debounce to prevent excessive rendering
    const debounce = (func, wait) => {
        let timeout;
        return function(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    };

    const toggleOriginalContent = (show) => {
        const productsSection = document.getElementById('products');
        if (!productsSection) return;
        const container = productsSection.querySelector('.max-w-7xl');
        if (!container) return;

        Array.from(container.children).forEach(child => {
            if (child.id !== 'search-results-section') {
                show ? child.classList.remove('hidden') : child.classList.add('hidden');
            }
        });
    };

    const resetSearch = () => {
        const resultsSection = document.getElementById('search-results-section');
        if (resultsSection) resultsSection.classList.add('hidden');
        toggleOriginalContent(true);
    };

    const updateCategoryDropdown = () => {
        const select = document.getElementById('search-category-filter');
        if (!select) return;

        // Extract unique categories from current results
        const categories = [...new Set(currentSearchResults.map(p => p._searchCategory))].filter(Boolean).sort();
        
        // Helper to format "bar-benders" to "Bar Benders"
        const formatLabel = (str) => str.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

        if (categories.length <= 1) {
            // Hide dropdown wrapper if only 1 or 0 categories
            select.parentElement.classList.add('hidden');
        } else {
            select.parentElement.classList.remove('hidden');
            select.innerHTML = '<option value="">All Categories</option>' + 
                categories.map(c => `<option value="${c}">${formatLabel(c)}</option>`).join('');
            select.value = ""; // Reset selection on new search
        }
    };

    const renderFilteredResults = () => {
        const select = document.getElementById('search-category-filter');
        const category = select ? select.value : "";
        const query = searchInput.value;

        const results = category 
            ? currentSearchResults.filter(p => p._searchCategory === category) 
            : currentSearchResults;

        const countEl = document.getElementById('search-count');
        if (countEl) {
            const catText = category ? ` in ${category.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}` : '';
            countEl.textContent = `Found ${results.length} matching items for "${query}"${catText}`;
        }

        if (results.length > 0) {
            window.renderProductCards('search-results-grid', results);
        } else {
            document.getElementById('search-results-grid').innerHTML = `
                <div class="col-span-full flex flex-col items-center justify-center py-16 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
                    <div class="relative mb-6">
                        <i class="fa-solid fa-box-open text-8xl text-gray-200"></i>
                        <i class="fa-solid fa-magnifying-glass absolute -bottom-2 -right-2 text-4xl text-gray-400 bg-gray-50 rounded-full p-1 border-4 border-gray-50"></i>
                    </div>
                    <h4 class="text-2xl font-bold text-gray-700 mb-2">No products found</h4>
                    <p class="text-gray-500 text-center max-w-md">
                        ${category ? 'Try switching back to "All Categories".' : `We couldn't find any matches for "<span class="font-semibold text-gray-800">${query}</span>".`}
                        <br>Try checking for typos or using broader keywords.
                    </p>
                </div>
            `;
        }
    };

    const performSearch = (query) => {
        if (!window.productData || !window.renderProductCards) return;

        const term = query.toLowerCase().trim();
        const productsSection = document.getElementById('products');
        
        // 1. Setup Search Results Container (if not exists)
        let resultsSection = document.getElementById('search-results-section');
        
        if (!resultsSection && productsSection) {
            const container = productsSection.querySelector('.max-w-7xl');
            if (container) {
                const div = document.createElement('div');
                div.id = 'search-results-section';
                div.className = 'hidden mb-12 animate-fade-in-up';
                div.innerHTML = `
                    <div class="text-center mb-8 border-b border-gray-200 pb-4">
                        <h3 class="text-3xl font-bold text-primary">Search Results</h3>
                        <p id="search-count" class="text-gray-600 mt-2 font-medium"></p>
                        <div class="flex flex-col md:flex-row justify-center items-center gap-4 mt-4">
                            
                            <div class="relative hidden">
                                <select id="search-category-filter" class="appearance-none bg-white border border-gray-300 text-gray-700 py-2 pl-4 pr-10 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary cursor-pointer font-medium min-w-[200px]">
                                    <option value="">All Categories</option>
                                </select>
                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <i class="fa-solid fa-chevron-down text-xs"></i>
                                </div>
                            </div>

                            <button id="clear-search-btn" class="text-sm text-red-500 hover:text-red-700 font-bold underline flex items-center gap-2 transition-colors">
                                <i class="fa-solid fa-xmark"></i> Clear Search
                            </button>
                        </div>
                    </div>
                    <div id="search-results-grid" class="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8"></div>
                `;
                
                // Insert before the first content in the container
                container.prepend(div);
                resultsSection = div;
                
                // Bind Clear Button
                const clearAction = () => {
                    searchInput.value = '';
                    resetSearch();
                };
                document.getElementById('clear-search-btn').addEventListener('click', clearAction);
                document.getElementById('search-category-filter').addEventListener('change', renderFilteredResults);
            }
        }

        // 3. Reset if query is empty
        if (term.length < 2) {
            resetSearch();
            return;
        }

        // 4. Flatten Product Data
        let allProducts = [];
        Object.entries(window.productData).forEach(([key, category]) => {
            const defaultCat = key.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

            if (Array.isArray(category)) {
                category.forEach(p => {
                    const cat = (p.compare && p.compare.category) ? p.compare.category : defaultCat;
                    allProducts.push({ ...p, _searchCategory: cat });
                });
            } else if (typeof category === 'object') {
                // Handle nested categories (e.g. handy-vibration-models)
                Object.values(category).forEach(subCat => {
                    if (Array.isArray(subCat)) {
                        subCat.forEach(p => {
                            const cat = (p.compare && p.compare.category) ? p.compare.category : defaultCat;
                            allProducts.push({ ...p, _searchCategory: cat });
                        });
                    }
                });
            }
        });

        // 5. Filter Products
        currentSearchResults = allProducts.filter(p => {
            const nameMatch = p.name && p.name.toLowerCase().includes(term);
            const modelMatch = p.model && p.model.toLowerCase().includes(term);
            const descMatch = p.description && p.description.toLowerCase().includes(term);
            const specsMatch = p.specs && p.specs.some(s => s.text && s.text.toLowerCase().includes(term));
            
            return nameMatch || modelMatch || descMatch || specsMatch;
        });

        // 6. Render Results
        if (resultsSection) {
            resultsSection.classList.remove('hidden');
            toggleOriginalContent(false);
            
            updateCategoryDropdown();
            renderFilteredResults();

            // Scroll to results if user is far up (e.g. at Hero)
            const navbarHeight = document.getElementById('navbar')?.offsetHeight || 80;
            const targetPosition = resultsSection.getBoundingClientRect().top + window.scrollY - navbarHeight - 20;
            
            // Only scroll if we are not already looking at it
            if (Math.abs(window.scrollY - targetPosition) > 300) {
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            }
        }
    };

    // Tooltip Setup
    let tooltip = document.getElementById('search-tooltip');
    if (tooltip) tooltip.remove(); // Remove old tooltip to ensure fresh render

    tooltip = document.createElement('div');
    tooltip.id = 'search-tooltip';
    tooltip.className = 'absolute top-1/2 transform -translate-y-1/2 flex items-center gap-2 pointer-events-none transition-opacity duration-200 opacity-0 z-10';
    tooltip.innerHTML = `
        <i class="fa-solid fa-arrow-turn-down transform rotate-90 text-secondary text-lg animate-pulse"></i>
        <span class="text-gray-400 text-sm font-medium whitespace-nowrap">Press Enter to See Results</span>
    `;
    
    const parent = searchInput.parentElement;
    if (parent) {
        if (window.getComputedStyle(parent).position === 'static') {
            parent.classList.add('relative');
        }
        parent.appendChild(tooltip);
    }

    // Mirror for text width measurement
    let mirror = document.getElementById('search-input-mirror');
    if (!mirror) {
        mirror = document.createElement('span');
        mirror.id = 'search-input-mirror';
        mirror.style.cssText = 'position:absolute; visibility:hidden; white-space:pre; left:-9999px; top:-9999px;';
        document.body.appendChild(mirror);
    }

    const updateTooltip = () => {
        if (!tooltip || !mirror) return;
        
        const val = searchInput.value;
        if (val.length === 0) {
            tooltip.classList.add('opacity-0');
            return;
        }

        const styles = window.getComputedStyle(searchInput);
        mirror.style.font = styles.font;
        mirror.style.fontSize = styles.fontSize;
        mirror.style.fontFamily = styles.fontFamily;
        mirror.style.fontWeight = styles.fontWeight;
        mirror.style.letterSpacing = styles.letterSpacing;
        mirror.textContent = val;

        const paddingLeft = parseFloat(styles.paddingLeft) || 0;
        const textWidth = mirror.offsetWidth;
        const scrollLeft = searchInput.scrollLeft;
        
        const leftPos = paddingLeft + textWidth - scrollLeft + 12;
        
        tooltip.style.left = `${leftPos}px`;
        tooltip.classList.remove('opacity-0');
    };

    // Event Listeners
    searchInput.addEventListener('input', (e) => {
        if (e.target.value.trim() === '') {
            resetSearch();
            if (tooltip) tooltip.classList.add('opacity-0');
        } else {
            updateTooltip();
        }
    });

    // Update tooltip on scroll/click/keyup to handle cursor movement/scrolling
    ['scroll', 'click', 'keyup'].forEach(evt => {
        searchInput.addEventListener(evt, () => {
            if (searchInput.value.trim() !== '') updateTooltip();
        });
    });

    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (tooltip) tooltip.classList.add('opacity-0');
            performSearch(searchInput.value);
        }
    });

    searchInput.addEventListener('blur', () => {
        if (tooltip) tooltip.classList.add('opacity-0');
    });

    searchInput.addEventListener('focus', () => {
        if (searchInput.value.trim() !== '') {
            updateTooltip();
        }
    });
}