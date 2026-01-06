/**
 * Creates the HTML for a single product card.
 * @param {object} product - The product data object.
 * @returns {string} - The HTML string for the product card.
 */
function createProductCard(product) {
    const rootPath = window.location.pathname.includes('/Product_details/') ? '../' : './';

    // Generate data attributes for the compare functionality
    const compareDataAttributes = product.compare ? Object.entries(product.compare)
        .map(([key, value]) => `data-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}="${value}"`)
        .join(' ') : '';

    // Generate badge if it exists
    const badgeHTML = product.badge ? `<span class="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-2 py-1 rounded">${product.badge}</span>` : '';

    // Generate feature list
    const specsHTML = (product.specs || []).map(spec => `
        <li class="flex items-center">
            <i class="${spec.icon || 'fa-solid fa-check'} text-primary w-6" aria-hidden="true"></i>
            <span>${spec.text}</span>
        </li>
    `).join('');

    // Generate action buttons
    const actionsHTML = (product.actions || []).map(action => {
        if (action.type === 'cart') {
            const params = `'${action.name}', ${action.price}, '${action.hsn}', ${action.gst}`;
            return `<button onclick="addToCart(${params})" class="w-full bg-secondary text-white py-1.5 md:py-2 rounded font-bold hover:bg-yellow-600 transition text-xs md:text-sm" aria-label="Add ${action.name} to Estimate"><i class="fa-solid fa-plus" aria-hidden="true"></i> Add</button>`;
        }
        if (action.type === 'enquire') {
            return `<button class="w-full bg-primary text-white font-bold py-1.5 md:py-2 rounded hover:bg-blue-800 text-xs md:text-sm transition" aria-label="Enquire about ${product.name}">Enquire</button>`;
        }
        if (action.type === 'enquire-link') {
            return `<a href="${rootPath}${action.href}" class="w-full bg-secondary text-white py-1.5 md:py-2 rounded font-bold hover:bg-yellow-600 transition mt-auto text-xs md:text-sm" aria-label="Enquire now about ${product.name}"><i class="fa-solid fa-headset" aria-hidden="true"></i> Enquire</a>`;
        }
        return '';
    }).join('');

    // Determine if compare functionality should be enabled for this card
    const compareCheckboxHTML = product.compare ? `
        <div class="flex justify-end -mt-2 -mr-2">
            <label class="flex items-center space-x-2 text-sm font-medium text-gray-600 cursor-pointer p-2 hover:bg-gray-100 rounded-full">
                <input type="checkbox" class="compare-checkbox h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" onchange="toggleCompare(this)">
                <span>Compare</span>
            </label>
        </div>` : '';

    // Card classes and structure
    const imageSrc = product.image.startsWith('http') ? product.image : rootPath + product.image.replace('./', '');
    const imageClass = product.imageClass || 'object-cover';
    const imageContainerClass = product.imageContainerClass || 'h-32 md:h-64';
    const cardWrapperClass = product.cardWrapperClass || 'bg-white rounded-xl border border-gray-200 hover:border-primary hover:shadow-[0_0_20px_rgba(30,58,138,0.15)] transition-all duration-300 group flex flex-col';

    return `
        <div class="${cardWrapperClass}" ${compareDataAttributes}>
            <div class="${imageContainerClass} bg-gray-100 flex items-center justify-center relative overflow-hidden">
                <img onclick="openImageModal('${imageSrc}')" src="${imageSrc}" alt="${product.name}" width="600" height="400" loading="lazy" decoding="async" class="w-full h-full ${imageClass} transition-transform duration-300 group-hover:scale-110 cursor-pointer">
                ${badgeHTML}
            </div>
            <div class="p-2 md:p-6 text-center flex flex-col flex-grow">
                ${compareCheckboxHTML}
                <h3 class="text-sm md:text-2xl font-bold text-gray-900 mb-1 md:mb-2 leading-tight">${product.name}</h3>
                <p class="text-xs md:text-sm text-gray-600 mb-2 md:mb-4 flex-grow line-clamp-2">${product.description}</p>
                <ul class="text-xs md:text-sm text-left text-gray-700 space-y-1 md:space-y-2 mb-3 md:mb-6 inline-block w-full px-1 md:px-4">
                    ${specsHTML}
                </ul>
                <div class="flex flex-col gap-2 mt-auto">
                    ${actionsHTML}
                </div>
            </div>
        </div>
    `;
}

/**
 * Renders product cards into a specified container.
 * @param {string} containerId - The ID of the element to render cards into.
 * @param {Array<object>} products - An array of product data objects.
 */
function renderProductCards(containerId, products) {
    const container = document.getElementById(containerId);
    if (container && products && Array.isArray(products)) {
        container.innerHTML = products.map(createProductCard).join('');
        // After rendering cards, update the compare bar to find the new checkboxes and category.
        if (typeof window.updateCompareBar === 'function') {
            window.updateCompareBar();
        }
    }
}