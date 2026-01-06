/**
 * Universal Compare Logic (Category-based)
 * Save this file as compare.js in your root folder.
 */

const COMPARE_STORAGE_KEY = 'srinithya_compare_storage';

document.addEventListener('DOMContentLoaded', () => {
   updateCompareBar();
});
 
function getStorageData() {
    try {
        const data = JSON.parse(localStorage.getItem(COMPARE_STORAGE_KEY));
        return (data && typeof data === 'object' && !Array.isArray(data)) ? data : {};
    } catch (e) {
        return {};
    }
}

function getCompareList(category) {
    if (!category) return [];
    const data = getStorageData();
    return Array.isArray(data[category]) ? data[category] : [];
}

function saveCompareList(category, list) {
    if (!category) return;
    const data = getStorageData();
    data[category] = list;
    localStorage.setItem(COMPARE_STORAGE_KEY, JSON.stringify(data));
}

function getCurrentPageCategory() {
    // Assumes all product cards on a page belong to the same category
    const element = document.querySelector('[data-category]');
    return element ? element.dataset.category : null;
}

// 1. Toggle Compare (Attached to Checkboxes)
window.toggleCompare = function(checkbox) {
    const card = checkbox.closest('[data-model]');
    if (!card) return;
    const model = card.dataset.model;
    if (!model) return;
    
    // Use the category from the card, or fallback to page category
    const category = card.dataset.category || getCurrentPageCategory();
    if (!category) return;

    let compareItems = getCompareList(category);

    if (checkbox.checked) {
        if (compareItems.length >= 4) {
            alert("You can only compare up to 4 models at a time.");
            checkbox.checked = false;
            return;
        }
        
        const specs = { 'Model': model, 'Category': category };
        // Get Image for preview
        const img = card.querySelector('img');
        if(img && card.dataset.previewImage !== 'false') specs['Image'] = img.src;

        // Get all data attributes dynamically
        for (const key in card.dataset) {
            if (key === 'model' || key === 'previewImage' || key === 'category') continue;
            // Format key: camelCase to Title Case
            const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
            specs[label] = card.dataset[key];
        }
        
        compareItems.push(specs);
    } else {
        compareItems = compareItems.filter(item => item.Model !== model);
    }
    
    saveCompareList(category, compareItems);
    updateCompareBar();
};

window.removeCompareItem = function(model) {
    const category = getCurrentPageCategory();
    if (!category) return;

    let compareItems = getCompareList(category);
    compareItems = compareItems.filter(item => item.Model !== model);
    
    saveCompareList(category, compareItems);
    updateCompareBar();

    // Refresh modal if open
    const modal = document.getElementById('compare-modal');
    if (modal && !modal.classList.contains('hidden')) {
        if (compareItems.length < 2) {
            closeCompareModal();
        } else {
            showCompareModal();
        }
    }
};

window.removeRowWithAnimation = function(btn) {
    const row = btn.closest('tr');
    if (row) {
        row.style.transition = 'all 0.3s ease-out';
        row.style.opacity = '0';
        row.style.transform = 'translateX(-10px)';
        setTimeout(() => row.remove(), 300);
    }
};

// 2. Update Floating Bar UI
window.updateCompareBar = function() {
    const category = getCurrentPageCategory();
    const compareBar = document.getElementById('compare-bar');
    const compareCount = document.getElementById('compare-count');
    const compareNowBtn = document.getElementById('compare-now-btn');
    const previewContainer = document.getElementById('compare-items-preview');

    // If not on a category page, hide the bar
    if (!category || !compareBar) {
        if (compareBar) {
            compareBar.classList.add('hidden');
            compareBar.classList.add('translate-y-full');
        }
        return;
    }

    const compareItems = getCompareList(category);

    // Sync checkboxes
    document.querySelectorAll('.compare-checkbox').forEach(cb => {
        const card = cb.closest('[data-model]');
        if (card) {
            const model = card.dataset.model;
            cb.checked = compareItems.some(item => item.Model === model);
        }
    });

    if (compareItems.length > 0) {
        compareBar.classList.remove('hidden');
        setTimeout(() => compareBar.classList.remove('translate-y-full'), 10);
    } else {
        compareBar.classList.add('translate-y-full');
        setTimeout(() => compareBar.classList.add('hidden'), 300);
    }

    if (compareCount) compareCount.textContent = compareItems.length;
    
    if (previewContainer) {
        previewContainer.innerHTML = compareItems.map(item => `
            <span class="bg-gray-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center">
                ${item.Model}
                <button onclick="removeCompareItem('${item.Model}')" class="ml-2 hover:text-red-300 focus:outline-none font-bold" title="Remove">&times;</button>
            </span>
        `).join('');
    }

    if (compareNowBtn) compareNowBtn.disabled = compareItems.length < 2;
};

window.clearCompare = function() {
    const category = getCurrentPageCategory();
    if (category) {
        saveCompareList(category, []);
        document.querySelectorAll('.compare-checkbox').forEach(cb => cb.checked = false);
        updateCompareBar();
    }
};

window.showCompareModal = function() {
    const category = getCurrentPageCategory();
    if (!category) return;
    
    const compareItems = getCompareList(category);
    if (compareItems.length < 2) return;

    const modal = document.getElementById('compare-modal');
    const modalBody = document.getElementById('compare-modal-body');
    
    // Extract all unique keys
    let allKeys = [];
    compareItems.forEach(item => {
        Object.keys(item).forEach(key => {
            if (key !== 'Model' && key !== 'Image' && key !== 'Category' && !allKeys.includes(key)) {
                allKeys.push(key);
            }
        });
    });

    let html = `
        <div class="flex justify-end mb-2">
            <button onclick="showCompareModal()" class="text-sm text-gray-500 hover:text-primary transition-colors flex items-center gap-1">
                <i class="fa-solid fa-rotate-left"></i> Restore Hidden Rows
            </button>
        </div>
        <div class="overflow-x-auto"><table class="w-full border-collapse text-left text-sm">`;
    
    // Header (Models)
    html += '<thead><tr><th class="p-3 border-b-2 border-gray-200 font-bold text-primary bg-gray-50">Feature</th>';
    compareItems.forEach(item => {
        html += `<th class="p-3 border-b-2 border-gray-200 font-bold text-primary text-center bg-gray-50 relative">
            <button onclick="removeCompareItem('${item.Model}')" class="absolute top-1 right-1 text-gray-400 hover:text-red-500 p-1" title="Remove">
                <i class="fa-solid fa-circle-xmark text-lg"></i>
            </button>
            ${item.Image ? `<img src="${item.Image}" class="h-16 mx-auto mb-2 object-contain">` : ''}
            <div class="mt-2">${item.Model}</div>
        </th>`;
    });
    html += '</tr></thead><tbody>';

    // Rows
    allKeys.forEach(key => {
        html += `<tr class="hover:bg-gray-50 even:bg-gray-50 group">
            <td class="p-3 border-b border-gray-200 font-semibold text-gray-700 relative pl-8">
                <button onclick="removeRowWithAnimation(this)" class="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity" title="Remove Row">
                    <i class="fa-solid fa-xmark"></i>
                </button>
                ${key}
            </td>`;
        compareItems.forEach(item => {
            html += `<td class="p-3 border-b border-gray-200 text-center text-gray-600">${item[key] || '-'}</td>`;
        });
        html += '</tr>';
    });

    html += '</tbody></table></div>';
    
    if (modalBody) modalBody.innerHTML = html;
    if (modal) modal.classList.remove('hidden');
};

window.closeCompareModal = function() {
    const modal = document.getElementById('compare-modal');
    if (modal) modal.classList.add('hidden');
};