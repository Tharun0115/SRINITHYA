// Automatically inject the Outfit font with all weights (including 900 for extra thickness)
(function() {
    // We append the link to ensure weight 900 is available, even if a previous link exists
    var link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
})();

function getRootPath() {
    // A simpler, more direct approach based on the URL path. If the path contains '/Product_details/', we are in a subdirectory.
    return window.location.pathname.includes('/Product_details/') ? '../' : './';
}
const rootPath = getRootPath(),
    navbarHTML = `
    <nav class="bg-white/90 backdrop-blur-md border-b border-gray-200/50 fixed w-full z-50 transition-all duration-300 ease-in-out will-change-transform transform-gpu" id="navbar">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:grid md:grid-cols-1 transition-all duration-300 ease-in-out" id="nav-container">
                <div class="flex justify-between items-center py-1 md:py-2 transition-all duration-300 ease-in-out w-full" id="top-bar">
                <a href="${rootPath}index.html" class="flex items-center relative group flex-1 transition-all duration-300 ease-in-out cursor-pointer" id="brand-wrapper">
                    <img src="${rootPath}Assets/Others/logo.png" alt="Srinithya Engineering Logo" class="h-8 md:h-16 w-auto mr-2 relative z-20 transition-all duration-300 ease-in-out" width="64" height="64" id="nav-logo">
                    <div class="relative overflow-hidden px-2 py-1 flex-grow text-center transition-all duration-300 ease-in-out" id="name-strip">
                        <!-- Updated to font-black (weight 900) for maximum thickness -->
                        <span class="font-black text-[11px] sm:text-sm md:text-4xl text-primary relative z-10 transition-all duration-300 ease-in-out whitespace-nowrap tracking-tight drop-shadow-sm block" id="company-name">SRINITHYA ENGINEERING PRIVATE LIMITED</span>
                        
                        <!-- Construction Animations Layer -->
                        <div class="absolute inset-0 pointer-events-none z-0 overflow-hidden transition-opacity duration-300 ease-in-out" id="animation-layer">
                            <!-- 3D Road Surface -->
                            <div class="absolute bottom-0 left-0 w-full h-2.5 md:h-4 bg-gray-600 opacity-60 transform origin-bottom" style="transform: perspective(100px) rotateX(30deg);">
                                <div class="absolute top-1/2 left-0 w-full border-t border-dashed border-white opacity-70"></div>
                            </div>

                            <!-- Building Construction -->
                            <div class="absolute bottom-0.5 md:bottom-2 left-1 md:left-6 flex items-end z-20">
                                <img src="${rootPath}Assets/Custom%20Icons/building-construction1.png" alt="Building Construction1" class="h-4 md:h-8 opacity-40">
                                <img src="${rootPath}Assets/Custom%20Icons/building-construction2.png" alt="Building Construction2" class="h-5 md:h-10 opacity-40 transform scale-x-[-1]">
                                <div class="animate-bounce-subtle -ml-2">
                                    <img src="${rootPath}Assets/Custom%20Icons/worker.png" alt="Worker" class="h-2.5 md:h-5 opacity-60">
                                </div>
                                <div class="animate-bounce-subtle" style="animation-delay: 1s;">
                                    <img src="${rootPath}Assets/Custom%20Icons/worker.png" alt="Worker" class="h-2.5 md:h-5 opacity-60 transform scale-x-[-1]">
                                </div>
                            </div>

                            <!-- Twin Towers & Skyscrapers -->
                            <div class="hidden md:flex absolute bottom-1 left-1/3 items-end space-x-1 opacity-30 text-gray-500">
                                <div class="flex flex-col items-center">
                                    <i class="fa-solid fa-satellite-dish text-xs mb-1"></i>
                                    <i class="fa-solid fa-building text-4xl transform scale-y-150 origin-bottom"></i>
                                </div>
                                <i class="fa-solid fa-building text-4xl transform scale-y-150 origin-bottom"></i>
                                <i class="fa-solid fa-city text-3xl"></i>
                            </div>

                            <!-- Crane Truck with Smoke -->
                            <div class="animate-roll bottom-1 opacity-90 flex items-end z-30" style="animation-duration: 38s;">
                                <div class="w-16 h-2 bg-gradient-to-r from-transparent to-gray-400 opacity-50 mb-2 rounded-l-full"></div>
                                <img src="${rootPath}Assets/Custom%20Icons/crane-truck.png" alt="Crane Truck" class="h-3.5 md:h-6 w-auto transform scale-x-[-1]">
                            </div>

                            <!-- Road Roller (Opposite Direction) -->
                            <div class="animate-roll bottom-1 opacity-90 flex items-end z-20" style="animation-duration: 45s; animation-direction: reverse;">
                                <img src="${rootPath}Assets/Custom%20Icons/RR-Icon.png" alt="Road Roller" class="h-3.5 md:h-6 w-auto transform scale-x-[-1]">
                            </div>
                        </div>
                    </div>
                </a>
                
                <div class="md:hidden flex items-center">
                    <button id="mobile-menu-button" class="text-gray-700 hover:text-primary focus:outline-none p-2">
                        <i class="fa-solid fa-bars text-2xl"></i>
                    </button>
                </div>
                </div>
                <div class="hidden md:flex items-center justify-center w-full py-2 border-t border-gray-100 space-x-8 transition-all duration-300 ease-in-out" id="nav-links">
                    <a href="${rootPath}index.html#home" class="text-gray-700 hover:text-secondary font-medium px-2 py-1">Home</a>
                    <a href="${rootPath}about.html" class="text-gray-700 hover:text-secondary font-medium px-2 py-1">About Us</a>
                    <a href="${rootPath}services.html" class="text-gray-700 hover:text-secondary font-medium px-2 py-1">Services</a>
                    
                    <!-- Megamenu Trigger -->
                    <div class="relative group" id="products-menu-container">
                        <button type="button" class="text-gray-700 group-hover:text-secondary font-medium px-2 py-1 flex items-center gap-1 outline-none focus:outline-none">
                            <span>Products</span>
                            <i class="fa-solid fa-chevron-down text-xs transition-transform duration-200 group-hover:rotate-180"></i>
                        </button>
                        
                        <div class="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-screen max-w-5xl hidden group-hover:block opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 ease-in-out z-[-1] group-hover:z-10">
                            <div class="bg-white shadow-2xl rounded-lg border border-gray-200/50 overflow-hidden">
                                <div class="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6 p-8">
                                    
                                    <div class="space-y-3">
                                        <h3 class="text-sm font-bold text-primary uppercase tracking-wider border-b pb-2 mb-3">Heavy Machinery</h3>
                                        <a href="${rootPath}Product_details/bar_cutting_models.html" class="megamenu-link"><i class="fa-solid fa-scissors w-6 text-secondary"></i> Bar Cutting Machines</a>
                                        <a href="${rootPath}Product_details/bar_bending_models.html" class="megamenu-link"><i class="fa-solid fa-rotate-left w-6 text-secondary"></i> Bar Bending Machines</a>
                                        <a href="${rootPath}Product_details/scrap_straightener_models.html" class="megamenu-link"><i class="fa-solid fa-recycle w-6 text-secondary"></i> Scrap Straighteners</a>
                                        <a href="${rootPath}Product_details/road_roller_models.html" class="megamenu-link"><i class="fa-solid fa-road w-6 text-secondary"></i> Road Rollers</a>
                                        <a href="${rootPath}Product_details/suspended_rope_platform.html" class="megamenu-link"><i class="fa-solid fa-elevator w-6 text-secondary"></i> Suspended Platforms</a>
                                        <a href="${rootPath}Product_details/mini_lift_models.html" class="megamenu-link"><i class="fa-solid fa-dolly w-6 text-secondary"></i> Mini Lifts / Cranes</a>
                                        <a href="${rootPath}Product_details/industrial_cutting_tools.html" class="megamenu-link"><i class="fa-solid fa-crosshairs w-6 text-secondary"></i> Industrial Cutters</a>
                                    </div>
                                    
                                    <div class="md:col-span-2">
                                        <h3 class="text-sm font-bold text-primary uppercase tracking-wider border-b pb-2 mb-3">Light Equipment</h3>
                                        <div class="grid grid-cols-2 gap-x-8 gap-y-3">
                                            <a href="${rootPath}Product_details/plate_compactor_models.html" class="megamenu-link"><i class="fa-solid fa-compress w-6 text-secondary"></i> Plate Compactors</a>
                                            <a href="${rootPath}Product_details/surface_smootheners.html" class="megamenu-link"><i class="fa-solid fa-ruler-horizontal w-6 text-secondary"></i> Surface Smootheners</a>
                                            <a href="${rootPath}Product_details/concrete_mixer_models.html" class="megamenu-link"><i class="fa-solid fa-blender w-6 text-secondary"></i> Concrete Mixers</a>
                                            <a href="${rootPath}Product_details/Vibrators.html" class="megamenu-link"><i class="fa-solid fa-bolt w-6 text-secondary"></i> Vibrators</a>
                                            <a href="${rootPath}Product_details/shutter_vibrator_models.html" class="megamenu-link"><i class="fa-solid fa-industry w-6 text-secondary"></i> Shutter Vibrators</a>
                                            <a href="${rootPath}Product_details/high_frequency_converter_models.html" class="megamenu-link"><i class="fa-solid fa-wave-square w-6 text-secondary"></i> HF Converters</a>
                                            <a href="${rootPath}Product_details/high_frequency_poker_models.html" class="megamenu-link"><i class="fa-solid fa-plug-circle-bolt w-6 text-secondary"></i> HF Pokers</a>
                                            <a href="${rootPath}Product_details/handy_vibration_models.html" class="megamenu-link"><i class="fa-solid fa-hand-fist w-6 text-secondary"></i> Handy Vibrators</a>
                                            <a href="${rootPath}Product_details/mechanical_poker_models.html" class="megamenu-link"><i class="fa-solid fa-gears w-6 text-secondary"></i> Mechanical Pokers</a>
                                            <a href="${rootPath}Product_details/earth_compactor_models.html" class="megamenu-link"><i class="fa-solid fa-mound w-6 text-secondary"></i> Earth Compactors</a>
                                            <a href="${rootPath}Product_details/dewatering_pump.html" class="megamenu-link"><i class="fa-solid fa-droplet w-6 text-secondary"></i> Dewatering Pumps</a>
                                            <a href="${rootPath}Product_details/portable_bar_processing_models.html" class="megamenu-link"><i class="fa-solid fa-toolbox w-6 text-secondary"></i> Portable Bar Tools</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="bg-gray-50 p-4 text-center border-t">
                                    <a href="${rootPath}index.html#products" class="text-sm font-semibold text-primary hover:text-secondary transition-colors">View Full Product Catalogue <i class="fa-solid fa-arrow-right ml-1"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <a href="${rootPath}index.html#contact" class="bg-primary text-white px-5 py-2 rounded hover:bg-blue-800 transition">Get in Touch</a>
                    <button onclick="toggleCart()" class="relative text-gray-700 hover:text-secondary font-medium px-2 py-1 ml-2" title="View Estimate Cart">
                        <i class="fa-solid fa-cart-shopping text-2xl"></i>
                        <span id="cart-badge" class="absolute -top-1 -right-1 bg-secondary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center hidden">0</span>
                    </button>
                </div>
            </div>
        </div>
        <div id="scroll-progress" class="h-1 bg-secondary w-0 transition-all duration-100 ease-out"></div>

        <div id="mobile-menu" class="hidden md:hidden bg-white border-t border-gray-100 w-full shadow-lg absolute left-0 top-full max-h-[80vh] overflow-y-auto">
            <div class="px-4 pt-2 pb-4 space-y-1 flex flex-col">
                <a href="${rootPath}index.html#home" class="block text-gray-700 hover:text-secondary hover:bg-gray-50 font-medium px-3 py-3 rounded mobile-link">Home</a>
                <a href="${rootPath}about.html" class="block text-gray-700 hover:text-secondary hover:bg-gray-50 font-medium px-3 py-3 rounded mobile-link">About Us</a>
                <a href="${rootPath}services.html" class="block text-gray-700 hover:text-secondary hover:bg-gray-50 font-medium px-3 py-3 rounded mobile-link">Services</a>
                <div>
                    <button id="mobile-products-trigger" class="w-full flex justify-between items-center text-gray-700 hover:text-secondary hover:bg-gray-50 font-medium px-3 py-3 rounded">
                        <span>Products</span>
                        <i class="fa-solid fa-chevron-down transition-transform duration-200"></i>
                    </button>
                    <div id="mobile-products-menu" class="hidden pl-4 pt-2 pb-2 border-l-2 border-gray-200 ml-3 space-y-1">
                        <a href="${rootPath}index.html#products" class="mobile-submenu-link font-bold text-primary">View All Products</a>
                        <h4 class="font-semibold text-gray-500 pt-2 text-sm">Heavy Machinery</h4>
                        <a href="${rootPath}Product_details/bar_cutting_models.html" class="mobile-submenu-link flex items-center gap-3"><i class="fa-solid fa-scissors fa-fw text-secondary text-lg"></i> Bar Cutting</a>
                        <a href="${rootPath}Product_details/bar_bending_models.html" class="mobile-submenu-link flex items-center gap-3"><i class="fa-solid fa-rotate-left fa-fw text-secondary text-lg"></i> Bar Bending</a>
                        <a href="${rootPath}Product_details/scrap_straightener_models.html" class="mobile-submenu-link flex items-center gap-3"><i class="fa-solid fa-recycle fa-fw text-secondary text-lg"></i> Scrap Straighteners</a>
                        <a href="${rootPath}Product_details/road_roller_models.html" class="mobile-submenu-link flex items-center gap-3"><i class="fa-solid fa-road fa-fw text-secondary text-lg"></i> Road Rollers</a>
                        <a href="${rootPath}Product_details/suspended_rope_platform.html" class="mobile-submenu-link flex items-center gap-3"><i class="fa-solid fa-elevator fa-fw text-secondary text-lg"></i> Suspended Platforms</a>
                        <a href="${rootPath}Product_details/mini_lift_models.html" class="mobile-submenu-link flex items-center gap-3"><i class="fa-solid fa-dolly fa-fw text-secondary text-lg"></i> Mini Lifts / Cranes</a>
                        <a href="${rootPath}Product_details/industrial_cutting_tools.html" class="mobile-submenu-link flex items-center gap-3"><i class="fa-solid fa-crosshairs fa-fw text-secondary text-lg"></i> Industrial Cutters</a>
                        <h4 class="font-semibold text-gray-500 pt-2 text-sm">Light Equipment</h4>
                        <a href="${rootPath}Product_details/plate_compactor_models.html" class="mobile-submenu-link flex items-center gap-3"><i class="fa-solid fa-compress fa-fw text-secondary text-lg"></i> Plate Compactors</a>
                        <a href="${rootPath}Product_details/surface_smootheners.html" class="mobile-submenu-link flex items-center gap-3"><i class="fa-solid fa-ruler-horizontal fa-fw text-secondary text-lg"></i> Surface Smootheners</a>
                        <a href="${rootPath}Product_details/concrete_mixer_models.html" class="mobile-submenu-link flex items-center gap-3"><i class="fa-solid fa-blender fa-fw text-secondary text-lg"></i> Concrete Mixers</a>
                        <a href="${rootPath}Product_details/Vibrators.html" class="mobile-submenu-link flex items-center gap-3"><i class="fa-solid fa-bolt fa-fw text-secondary text-lg"></i> Vibrators</a>
                        <a href="${rootPath}Product_details/shutter_vibrator_models.html" class="mobile-submenu-link flex items-center gap-3"><i class="fa-solid fa-industry fa-fw text-secondary text-lg"></i> Shutter Vibrators</a>
                        <a href="${rootPath}Product_details/high_frequency_converter_models.html" class="mobile-submenu-link flex items-center gap-3"><i class="fa-solid fa-wave-square fa-fw text-secondary text-lg"></i> HF Converters</a>
                        <a href="${rootPath}Product_details/high_frequency_poker_models.html" class="mobile-submenu-link flex items-center gap-3"><i class="fa-solid fa-plug-circle-bolt fa-fw text-secondary text-lg"></i> HF Pokers</a>
                        <a href="${rootPath}Product_details/handy_vibration_models.html" class="mobile-submenu-link flex items-center gap-3"><i class="fa-solid fa-hand-fist fa-fw text-secondary text-lg"></i> Handy Vibrators</a>
                        <a href="${rootPath}Product_details/mechanical_poker_models.html" class="mobile-submenu-link flex items-center gap-3"><i class="fa-solid fa-gears fa-fw text-secondary text-lg"></i> Mechanical Pokers</a>
                        <a href="${rootPath}Product_details/earth_compactor_models.html" class="mobile-submenu-link flex items-center gap-3"><i class="fa-solid fa-mound fa-fw text-secondary text-lg"></i> Earth Compactors</a>
                        <a href="${rootPath}Product_details/dewatering_pump.html" class="mobile-submenu-link flex items-center gap-3"><i class="fa-solid fa-droplet fa-fw text-secondary text-lg"></i> Dewatering Pumps</a>
                        <a href="${rootPath}Product_details/portable_bar_processing_models.html" class="mobile-submenu-link flex items-center gap-3"><i class="fa-solid fa-toolbox fa-fw text-secondary text-lg"></i> Portable Equipment</a>
                    </div>
                </div>
                <a href="${rootPath}index.html#contact" class="block text-primary font-bold hover:bg-gray-50 px-3 py-3 rounded mobile-link">Get in Touch</a>
                <button onclick="toggleCart()" class="block w-full text-left text-gray-700 hover:text-secondary hover:bg-gray-50 font-medium px-3 py-3 rounded mobile-link">View Estimate Cart</button>
            </div>
        </div>
    </nav>
`,
    cartModalHTML = `
    <!-- Cart/Estimate Modal -->
    <div id="cart-modal" class="fixed inset-0 z-[70] hidden">
        <div class="absolute inset-0 bg-black opacity-50 transition-opacity" onclick="toggleCart()"></div>
        <div class="absolute right-0 top-0 h-full w-full md:w-[500px] bg-white shadow-2xl transform transition-transform duration-300 translate-x-full flex flex-col" id="cart-panel">
            <div class="p-4 border-b flex justify-between items-center bg-primary text-white">
                <h2 class="text-xl font-bold"><i class="fa-solid fa-file-invoice mr-2"></i>Estimate Builder</h2>
                <div>
                    <button onclick="clearCart()" class="text-white hover:text-red-400 focus:outline-none mr-4" title="Clear Estimate">
                        <i class="fa-solid fa-trash-can"></i> Clear
                    </button>
                    <button onclick="toggleCart()" class="text-white hover:text-gray-200 focus:outline-none"><i class="fa-solid fa-xmark text-2xl"></i></button>
                </div>
            </div>
            <div class="p-4 overflow-y-auto flex-grow bg-gray-50" id="cart-items">
                <!-- Cart Items will be injected here -->
            </div>
            <div class="p-4 border-t bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
                <div class="flex justify-between items-center mb-4">
                    <span class="text-gray-600 font-medium">Estimated Total (Excl. GST):</span>
                    <span id="cart-total" class="text-2xl font-bold text-primary">₹0</span>
                </div>
                <button onclick="generatePDF()" class="w-full bg-secondary text-white font-bold py-3 rounded-lg hover:bg-yellow-600 transition shadow-md flex items-center justify-center gap-2">
                    <i class="fa-solid fa-download"></i> Download Quotation/Estimate
                </button>
            </div>
        </div>
    </div>
`,
    scrollButtonsHTML = `
    <div id="scroll-buttons" class="fixed bottom-24 right-7 z-40 hidden md:flex flex-col gap-3">
        <div class="relative group">
            <button id="scroll-up-btn" class="bg-primary text-white w-12 h-12 rounded-full shadow-lg hover:bg-blue-700 transition flex items-center justify-center opacity-90 hover:opacity-100 border-2 border-white">
                <i class="fa-solid fa-arrow-up"></i>
            </button>
            <span class="absolute right-full top-1/2 transform -translate-y-1/2 mr-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md">Scroll Up</span>
        </div>
        <div class="relative group">
            <button id="scroll-down-btn" class="bg-primary text-white w-12 h-12 rounded-full shadow-lg hover:bg-blue-700 transition flex items-center justify-center opacity-90 hover:opacity-100 border-2 border-white">
                <i class="fa-solid fa-arrow-down"></i>
            </button>
            <span class="absolute right-full top-1/2 transform -translate-y-1/2 mr-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md">Scroll Down</span>
        </div>
    </div>
`,
    toastContainerHTML = `
    <div id="toast-container" class="fixed top-24 right-4 z-[100] flex flex-col gap-2 pointer-events-none max-w-[calc(100vw-2rem)] w-auto items-end"></div>
`;

function toggleCart() {
    const t = document.getElementById("cart-modal"),
        e = document.getElementById("cart-panel");
    t.classList.contains("hidden") ? (t.classList.remove("hidden"), setTimeout(() => e.classList.remove("translate-x-full"), 10)) : (e.classList.add("translate-x-full"), setTimeout(() => t.classList.add("hidden"), 300))
}

function initScrollButtons() {
    const t = document.getElementById("scroll-up-btn"),
        e = document.getElementById("scroll-down-btn");
    t && t.addEventListener("click", () => {
        window.scrollBy({
            top: -window.innerHeight / 2,
            behavior: "smooth"
        })
    }), e && e.addEventListener("click", () => {
        window.scrollBy({
            top: window.innerHeight / 2,
            behavior: "smooth"
        })
    })
}

function initCartAnimation() {
    const badge = document.getElementById("cart-badge");
    if (badge) {
        const observer = new MutationObserver(() => {
            const btn = badge.parentElement;
            if (btn) {
                btn.classList.remove("animate-bounce");
                void btn.offsetWidth; // Trigger reflow
                btn.classList.add("animate-bounce");
                setTimeout(() => btn.classList.remove("animate-bounce"), 1000);
            }
        });
        observer.observe(badge, { childList: true, characterData: true, subtree: true, attributes: true, attributeFilter: ["class"] });
    }
}

window.showToast = function(message, undoCallback) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = "bg-gray-900 text-white px-4 py-3 rounded-lg shadow-xl flex items-center gap-3 transition-all duration-300 transform translate-x-full opacity-0 pointer-events-auto border-l-4 border-secondary min-w-[280px]";
    
    toast.innerHTML = `
        <div class="bg-green-500 rounded-full p-1 flex-shrink-0">
            <i class="fa-solid fa-check text-white text-[10px]"></i>
        </div>
        <span class="font-medium text-sm flex-grow leading-tight">${message}</span>
    `;

    if (undoCallback && typeof undoCallback === 'function') {
        const undoBtn = document.createElement('button');
        undoBtn.className = "ml-2 text-secondary hover:text-yellow-400 font-bold text-xs uppercase tracking-wide border-l border-gray-600 pl-3 whitespace-nowrap transition-colors";
        undoBtn.textContent = "Undo";
        undoBtn.onclick = () => {
            undoCallback();
            dismissToast(toast);
        };
        toast.appendChild(undoBtn);
    }

    container.appendChild(toast);

    requestAnimationFrame(() => {
        setTimeout(() => {
            toast.classList.remove('translate-x-full', 'opacity-0');
        }, 10);
    });

    setTimeout(() => {
        dismissToast(toast);
    }, 4000);
};

function dismissToast(toast) {
    toast.classList.add('translate-x-full', 'opacity-0');
    setTimeout(() => {
        if (toast.parentElement) {
            toast.parentElement.removeChild(toast);
        }
    }, 300);
};

function makeNavbarLinksAbsolute() {
    const links = document.querySelectorAll('#navbar a, #mobile-menu a');
    links.forEach(link => {
        if (link.getAttribute('href') && !link.getAttribute('href').startsWith('#') && !link.getAttribute('href').startsWith('javascript')) {
            link.href = link.href; // Forces browser to resolve relative path to absolute
        }
    });
}

async function navigateTo(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        const text = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'text/html');

        // Update History and Title
        window.history.pushState({}, '', url);
        document.title = doc.title;

        // Persistent Elements to Keep
        const persistentIds = ['navbar', 'cart-modal', 'scroll-buttons', 'toast-container', 'mobile-menu'];

        // Remove non-persistent elements from current body
        Array.from(document.body.children).forEach(child => {
            if (!persistentIds.includes(child.id) && child.tagName !== 'SCRIPT') {
                // Remove everything except persistent UI and scripts
                // We keep scripts generally, but specifically we want to remove page-specific content
                // Actually, we should remove old page scripts if possible, but usually they are just definitions.
                // We definitely skip removing navbar.js script tag if it exists in body
                if (child.tagName === 'SCRIPT' && child.src.includes('navbar.js')) return;
                child.remove();
            }
        });

        // Inject new content
        Array.from(doc.body.children).forEach(child => {
            // Skip navbar.js in new content to prevent re-initialization
            if (child.tagName === 'SCRIPT' && child.src.includes('navbar.js')) return;
            
            // Import and append new node
            const importedNode = document.importNode(child, true);
            document.body.appendChild(importedNode);

            // Manually execute scripts
            if (importedNode.tagName === 'SCRIPT') {
                const newScript = document.createElement('script');
                if (importedNode.src) {
                    newScript.src = importedNode.src;
                    newScript.defer = importedNode.defer;
                    newScript.async = importedNode.async;
                } else {
                    newScript.textContent = importedNode.textContent;
                }
                importedNode.remove();
                document.body.appendChild(newScript);
            }
        });

        // Scroll to top
        window.scrollTo(0, 0);

        // Re-check brand link state
        const brandWrapper = document.getElementById("brand-wrapper");
        if (brandWrapper) {
            const currentPath = window.location.pathname;
            const pageName = currentPath.split("/").pop();
            if (pageName === "index.html" || pageName === "") {
                brandWrapper.removeAttribute("href");
                brandWrapper.style.cursor = "default";
                brandWrapper.setAttribute("aria-current", "page");
            } else {
                brandWrapper.href = new URL("index.html", document.baseURI).href;
                brandWrapper.style.cursor = "pointer";
                brandWrapper.removeAttribute("aria-current");
            }
        }

    } catch (error) {
        console.error("Navigation failed:", error);
        window.location.href = url; // Fallback to full reload
    }
}

function initRouter() {
    document.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        if (!link) return;
        const href = link.getAttribute('href');
        if (href && !href.startsWith('#') && !href.startsWith('mailto:') && !href.startsWith('tel:') && !href.startsWith('javascript:') && link.hostname === window.location.hostname && !link.hasAttribute('download')) {
            e.preventDefault();
            navigateTo(link.href);
        }
    });
    window.addEventListener('popstate', () => window.location.reload());
}

function initNavbar() {
    const t = document.getElementById("mobile-menu-button"),
        e = document.getElementById("mobile-menu");
    t && e && t.addEventListener("click", () => {
        e.classList.toggle("hidden")
    });
    if (e) {
        e.querySelectorAll(".mobile-link, .mobile-submenu-link").forEach(l => {
            l.addEventListener("click", () => {
                e.classList.add("hidden")
            })
        })
    }
    const a = document.getElementById("mobile-products-trigger"),
        s = document.getElementById("mobile-products-menu");
    a && s && a.addEventListener("click", t => {
        t.preventDefault(), s.classList.toggle("hidden"), a.querySelector("i").classList.toggle("rotate-180")
    });
    const o = document.getElementById("navbar"),
        n = document.getElementById("nav-container"),
        i = document.getElementById("top-bar"),
        r = document.getElementById("nav-logo"),
        l = document.getElementById("name-strip"),
        d = document.getElementById("company-name"),
        c = document.getElementById("animation-layer"),
        m = document.getElementById("nav-links"),
        u = document.getElementById("scroll-progress");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50 ? (o.classList.add("shadow-md"), n.classList.remove("md:grid", "md:grid-cols-1"), n.classList.add("md:flex", "md:flex-row", "md:items-center"), i.classList.remove("md:py-2"), i.classList.add("py-1", "md:w-auto", "flex-shrink", "min-w-0"), r.classList.remove("h-8", "md:h-16"), r.classList.add("h-6"), l.classList.remove("flex-grow", "text-center", "px-2", "py-1"), l.classList.add("ml-2", "text-left"), c.classList.add("opacity-0"), d.classList.remove("text-[11px]", "sm:text-sm", "md:text-4xl"), d.classList.add("text-[10px]", "md:text-base"), m.classList.remove("w-full", "border-t", "justify-center", "py-2"), m.classList.add("justify-start", "pl-8", "py-1", "flex-shrink-0")) : (o.classList.remove("shadow-md"), n.classList.add("md:grid", "md:grid-cols-1"), n.classList.remove("md:flex", "md:flex-row", "md:items-center"), i.classList.add("md:py-2"), i.classList.remove("md:w-auto", "flex-shrink", "min-w-0"), r.classList.add("h-8", "md:h-16"), r.classList.remove("h-6"), l.classList.add("flex-grow", "text-center", "px-2", "py-1"), l.classList.remove("ml-2", "text-left"), c.classList.remove("opacity-0"), d.classList.add("text-[11px]", "sm:text-sm", "md:text-4xl"), d.classList.remove("text-[10px]", "md:text-base"), m.classList.add("w-full", "border-t", "justify-center", "py-2"), m.classList.remove("justify-start", "pl-8", "py-1", "flex-shrink-0")), u) {
            const t = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100;
            u.style.width = t + "%"
        }
    })
}
document.addEventListener("DOMContentLoaded", () => {
    document.body.insertAdjacentHTML("afterbegin", navbarHTML), document.body.insertAdjacentHTML("beforeend", cartModalHTML), document.body.insertAdjacentHTML("beforeend", scrollButtonsHTML), document.body.insertAdjacentHTML("beforeend", toastContainerHTML), initNavbar(), initScrollButtons(), initCartAnimation(), makeNavbarLinksAbsolute(), initRouter();
    const t = document.getElementById("brand-wrapper");
    if (t) {
        const e = window.location.pathname,
            a = e.split("/").pop();
        e.includes("Product_details") ? t.href = "../index.html" : "index.html" !== a && "" !== a && "/" !== e || "./" !== rootPath || (t.removeAttribute("href"), t.style.cursor = "default", t.setAttribute("aria-current", "page"))
    }
});