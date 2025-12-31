// c:\Users\store\OneDrive\Desktop\SRINITHYA\navbar.js

/**
 * Determines the root path based on the script tag src.
 * This allows the navbar to work correctly in subdirectories.
 */
function getRootPath() {
    // Try document.currentScript first (more reliable)
    if (document.currentScript) {
        const src = document.currentScript.getAttribute('src');
        if (src) {
            const lastSlash = Math.max(src.lastIndexOf('/'), src.lastIndexOf('\\'));
            return lastSlash !== -1 ? src.substring(0, lastSlash + 1) : './';
        }
    }
    // Fallback for older browsers or modules
    const scripts = document.getElementsByTagName('script');
    for (let script of scripts) {
        if (script.src && script.src.includes('navbar.js')) {
            const src = script.getAttribute('src');
            // Handle both forward and backward slashes
            const lastSlash = Math.max(src.lastIndexOf('/'), src.lastIndexOf('\\'));
            return lastSlash !== -1 ? src.substring(0, lastSlash + 1) : './';
        }
    }
    return './';
}

const rootPath = getRootPath();

// Navbar HTML Template
const navbarHTML = `
    <nav class="bg-white shadow-md fixed w-full z-50 transition-all duration-300 ease-in-out will-change-transform transform-gpu" id="navbar">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:grid md:grid-cols-1 transition-all duration-300 ease-in-out group" id="nav-container">
                <div class="flex justify-between items-center py-2 transition-all duration-300 ease-in-out w-full" id="top-bar">
                <a href="${rootPath}index.html" class="flex items-center relative group flex-1 transition-all duration-300 ease-in-out cursor-pointer" id="brand-wrapper">
                    <img src="${rootPath}Assets/logo.png" alt="Srinithya Engineering Logo" class="h-16 w-auto mr-2 relative z-20 transition-all duration-300 ease-in-out" width="64" height="64" id="nav-logo">
                    <div class="relative overflow-hidden px-2 py-1 flex-grow text-center transition-all duration-300 ease-in-out" id="name-strip">
                        <span class="font-extrabold text-2xl md:text-4xl text-primary relative z-10 transition-all duration-300 ease-in-out md:whitespace-nowrap tracking-tight drop-shadow-sm block" id="company-name">SRINITHYA ENGINEERING PRIVATE LIMITED</span>
                        
                        <!-- Construction Animations Layer -->
                        <div class="absolute inset-0 pointer-events-none z-0 overflow-hidden transition-opacity duration-300 ease-in-out" id="animation-layer">
                            <!-- 3D Road Surface -->
                            <div class="absolute bottom-0 left-0 w-full h-4 bg-gray-600 opacity-20 transform origin-bottom" style="transform: perspective(100px) rotateX(30deg);">
                                <div class="absolute top-1/2 left-0 w-full border-t border-dashed border-white opacity-70"></div>
                            </div>

                            <!-- Flights -->
                            <div class="animate-fly top-2 opacity-30 text-blue-500 flex items-center" style="animation-delay: 2s;">
                                <div class="flex flex-col space-y-1 mr-0.5 transform -rotate-12 origin-right opacity-60 blur-[0.5px]">
                                    <div class="w-32 h-0.5 bg-gradient-to-r from-transparent to-gray-400"></div>
                                    <div class="w-32 h-0.5 bg-gradient-to-r from-transparent to-gray-400"></div>
                                </div>
                                <i class="fa-solid fa-plane text-xs transform -rotate-12"></i>
                            </div>
                            <div class="animate-fly top-4 opacity-20 text-gray-500 flex items-center" style="animation-delay: 15s; animation-duration: 30s;">
                                <div class="flex flex-col space-y-1 mr-0.5 transform rotate-6 origin-right opacity-60 blur-[0.5px]">
                                    <div class="w-40 h-0.5 bg-gradient-to-r from-transparent to-gray-500"></div>
                                    <div class="w-40 h-0.5 bg-gradient-to-r from-transparent to-gray-500"></div>
                                </div>
                                <i class="fa-solid fa-plane text-xs transform rotate-6"></i>
                            </div>
                            
                            <!-- City Flyover -->
                            <div class="absolute bottom-0 left-0 w-full h-full pointer-events-none opacity-20 z-0">
                                <div class="absolute bottom-2 left-[-10%] w-[120%] h-24 border-t-8 border-gray-400 rounded-[50%]"></div>
                            </div>

                            <!-- Singapore Towers & Skyscrapers -->
                            <div class="absolute bottom-1 left-1 md:left-4 flex items-end space-x-1 opacity-30 text-gray-500 z-10">
                                <!-- Singapore MBS Style -->
                                <div class="relative flex items-end mx-2">
                                    <div class="absolute -top-1 left-[-10%] w-[120%] h-1.5 bg-gray-500 rounded-full"></div>
                                    <i class="fa-solid fa-building text-3xl transform scale-y-125 mx-[1px]"></i>
                                    <i class="fa-solid fa-building text-3xl transform scale-y-125 mx-[1px]"></i>
                                    <i class="fa-solid fa-building text-3xl transform scale-y-125 mx-[1px]"></i>
                                </div>
                                <i class="fa-solid fa-building text-4xl"></i>
                                <i class="fa-solid fa-hotel text-3xl"></i>
                            </div>

                            <!-- High Tech City Skyline -->
                            <div class="hidden md:flex absolute bottom-1 right-1/4 items-end space-x-0.5 opacity-20 text-gray-400">
                                <i class="fa-solid fa-building text-2xl"></i>
                                <i class="fa-solid fa-hotel text-3xl"></i>
                                <i class="fa-solid fa-gopuram text-2xl"></i>
                                <i class="fa-solid fa-landmark text-xl"></i>
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

                            <!-- Car 1 with Smoke -->
                            <div class="animate-roll bottom-1 text-red-600 opacity-50 flex items-center" style="animation-duration: 10s;">
                                <div class="w-24 h-2 bg-gradient-to-r from-transparent to-gray-400 opacity-60 mr-1 rounded-l-full"></div>
                                <i class="fa-solid fa-car-side text-lg"></i>
                            </div>
                           
                            <!-- Scrap Straightener (Gears) -->
                            <div class="absolute -top-2 -right-2 text-gray-300 opacity-30 animate-spin">
                                <i class="fa-solid fa-gear text-xl"></i>
                            </div>
                            
                            <!-- Building Construction (Bars rising) -->
                            <div class="hidden md:flex absolute bottom-1 right-1/4 space-x-1 opacity-30">
                                <div class="w-1 bg-gray-300 h-2 animate-pulse"></div>
                                <div class="w-1 bg-gray-300 h-4 animate-pulse delay-75"></div>
                                <div class="w-1 bg-gray-300 h-3 animate-pulse delay-150"></div>
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
                    <a href="${rootPath}index.html#manufacturing" class="text-gray-700 hover:text-secondary font-medium px-2 py-1">Manufacturing</a>
                    <a href="${rootPath}index.html#trading" class="text-gray-700 hover:text-secondary font-medium px-2 py-1">Catalogue</a>
                    <a href="${rootPath}index.html#contact" class="bg-primary text-white px-5 py-2 rounded hover:bg-blue-800 transition">Get in Touch</a>
                    <button onclick="toggleCart()" class="relative text-gray-700 hover:text-secondary font-medium px-2 py-1 ml-2" title="View Estimate Cart">
                        <i class="fa-solid fa-file-invoice-dollar text-2xl"></i>
                        <span id="cart-badge" class="absolute -top-1 -right-1 bg-secondary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center hidden">0</span>
                    </button>
                </div>
            </div>
        </div>

        <div id="mobile-menu" class="hidden md:hidden bg-white border-t border-gray-100 w-full shadow-lg absolute left-0 top-full">
            <div class="px-4 pt-2 pb-4 space-y-1 flex flex-col">
                <a href="${rootPath}index.html#home" class="block text-gray-700 hover:text-secondary hover:bg-gray-50 font-medium px-3 py-3 rounded mobile-link">Home</a>
                <a href="${rootPath}about.html" class="block text-gray-700 hover:text-secondary hover:bg-gray-50 font-medium px-3 py-3 rounded mobile-link">About Us</a>
                <a href="${rootPath}index.html#manufacturing" class="block text-gray-700 hover:text-secondary hover:bg-gray-50 font-medium px-3 py-3 rounded mobile-link">Manufacturing</a>
                <a href="${rootPath}index.html#trading" class="block text-gray-700 hover:text-secondary hover:bg-gray-50 font-medium px-3 py-3 rounded mobile-link">Catalogue</a>
                <a href="${rootPath}index.html#contact" class="block text-primary font-bold hover:bg-gray-50 px-3 py-3 rounded mobile-link">Get in Touch</a>
                <button onclick="toggleCart()" class="block w-full text-left text-gray-700 hover:text-secondary hover:bg-gray-50 font-medium px-3 py-3 rounded mobile-link">View Estimate Cart</button>
            </div>
        </div>
    </nav>
`;

// Cart Modal HTML Template
const cartModalHTML = `
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
`;

// Scroll Buttons HTML Template
const scrollButtonsHTML = `
    <div class="fixed bottom-24 right-7 z-40 hidden md:flex flex-col gap-3">
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
`;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Inject Navbar at the top of body
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);
    // Inject Cart Modal at the end of body
    document.body.insertAdjacentHTML('beforeend', cartModalHTML);
    // Inject Scroll Buttons
    document.body.insertAdjacentHTML('beforeend', scrollButtonsHTML);

    initNavbar();
    initScrollButtons();

    // Handle logo link logic
    const brandWrapper = document.getElementById('brand-wrapper');
    if (brandWrapper) {
        const path = window.location.pathname;
        const pageName = path.split('/').pop();

        // Explicitly handle Product_details pages to ensure correct link
        if (path.includes('Product_details')) {
            brandWrapper.href = '../index.html';
        } 
        // Disable link on home page
        else if ((pageName === 'index.html' || pageName === '' || path === '/') && rootPath === './') {
             brandWrapper.removeAttribute('href');
             brandWrapper.style.cursor = 'default';
             brandWrapper.setAttribute('aria-current', 'page');
        }
    }
});

// Cart Toggle Function (Global)
function toggleCart() {
    const modal = document.getElementById('cart-modal');
    const panel = document.getElementById('cart-panel');
    if (modal.classList.contains('hidden')) {
        modal.classList.remove('hidden');
        setTimeout(() => panel.classList.remove('translate-x-full'), 10);
    } else {
        panel.classList.add('translate-x-full');
        setTimeout(() => modal.classList.add('hidden'), 300);
    }
}

// Scroll Buttons Logic
function initScrollButtons() {
    const upBtn = document.getElementById('scroll-up-btn');
    const downBtn = document.getElementById('scroll-down-btn');

    if (upBtn) {
        upBtn.addEventListener('click', () => {
            window.scrollBy({ top: -window.innerHeight / 2, behavior: 'smooth' });
        });
    }

    if (downBtn) {
        downBtn.addEventListener('click', () => {
            window.scrollBy({ top: window.innerHeight / 2, behavior: 'smooth' });
        });
    }
}

// Navbar Logic
function initNavbar() {
    // Mobile Menu
    const btn = document.getElementById('mobile-menu-button');
    const menu = document.getElementById('mobile-menu');
    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    }

    // Scroll Animation
    const navbar = document.getElementById('navbar');
    const navContainer = document.getElementById('nav-container');
    const topBar = document.getElementById('top-bar');
    const logo = document.getElementById('nav-logo');
    const nameStrip = document.getElementById('name-strip');
    const companyName = document.getElementById('company-name');
    const animationLayer = document.getElementById('animation-layer');
    const navLinks = document.getElementById('nav-links');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-lg');
            navContainer.classList.remove('md:grid', 'md:grid-cols-1');
            navContainer.classList.add('md:flex', 'md:flex-row', 'md:items-center');
            
            topBar.classList.remove('py-2');
            topBar.classList.add('py-1', 'md:w-auto', 'flex-shrink', 'min-w-0');
            
            logo.classList.remove('h-16');
            logo.classList.add('h-10');
            
            nameStrip.classList.remove('flex-grow', 'text-center', 'px-2', 'py-1');
            nameStrip.classList.add('ml-2', 'text-left');
            
            animationLayer.classList.add('opacity-0');
            
            companyName.classList.remove('text-2xl', 'md:text-4xl');
            companyName.classList.add('text-xs', 'md:text-base');
            
            navLinks.classList.remove('w-full', 'border-t', 'justify-center', 'py-2');
            navLinks.classList.add('justify-start', 'pl-8', 'py-1', 'flex-shrink-0');
        } else {
            navbar.classList.remove('shadow-lg');
            navContainer.classList.add('md:grid', 'md:grid-cols-1');
            navContainer.classList.remove('md:flex', 'md:flex-row', 'md:items-center');
            
            topBar.classList.add('py-2');
            topBar.classList.remove('py-1', 'md:w-auto', 'flex-shrink', 'min-w-0');
            
            logo.classList.add('h-16');
            logo.classList.remove('h-10');
            
            nameStrip.classList.add('flex-grow', 'text-center', 'px-2', 'py-1');
            nameStrip.classList.remove('ml-2', 'text-left');
            
            animationLayer.classList.remove('opacity-0');
            
            companyName.classList.add('text-2xl', 'md:text-4xl');
            companyName.classList.remove('text-xs', 'md:text-base');
            
            navLinks.classList.add('w-full', 'border-t', 'justify-center', 'py-2');
            navLinks.classList.remove('justify-start', 'pl-8', 'py-1', 'flex-shrink-0');
        }
    });
}
