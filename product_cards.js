window.initProductCards = function() {
    const heavyMachinery = [
        {
            title: "Bar Cutting Machine",
            image: "./Assets/Product Images/sbc.png",
            imageWebp: "./Assets/Product Images/sbc.webp",
            description: "Hydraulic cutting for TMT bars up to 42mm. Low noise, high efficiency.",
            features: ["Heavy Duty Gearbox", "ISO Certified Components"],
            link: "Product_details/bar_cutting_models.html"
        },
        {
            title: "Bar Bending Machine",
            image: "./Assets/Product Images/bender.png",
            imageWebp: "./Assets/Product Images/bender.webp",
            description: "Automatic bending with digital control panel. Angles range 0-360 degrees.",
            features: ["CNC Control Options", "Emergency Stop Safety"],
            link: "Product_details/bar_bending_models.html"
        },
        {
            title: "Scrap Straightener",
            image: "./Assets/Product Images/sss.png",
            imageWebp: "./Assets/Product Images/sss.webp",
            description: "Now your scrap is no more scrap.",
            features: ["Multiple models", "Overload Protection"],
            link: "Product_details/scrap_straightener_models.html"
        },
        {
            title: "Suspended Scaffold Solution",
            image: ["./Assets/Product Images/srp.jpg", "./Assets/Product Images/srp2.webp"],
            imageWebp: ["./Assets/Product Images/srp.webp", "./Assets/Product Images/srp2.webp"],
            description: "Customizable high-safety suspended platforms for facade work.",
            features: ["Model: ZLP800", "Customizable Platform Size", "Adjustable Rope Length"],
            link: "Product_details/suspended_rope_platform.html"
        },
        {
            title: "Road Rollers",
            image: ["./Assets/Product Images/srr.png", "./Assets/Product Images/swr.png"],
            imageWebp: ["./Assets/Product Images/srr.webp", "./Assets/Product Images/swr.webp"],
            description: "Ride-on and Walk-behind rollers for road construction.",
            features: ["Ride-on & Walk-behind", "Heavy Duty Compaction"],
            link: "Product_details/road_roller_models.html"
        },
        
          
        
    ];

    const lightEquipment = [
        {
            title: "Vibrators",
            image: ["./Assets/Product Images/sdv.png", "./Assets/Product Images/sev.png", "./Assets/Product Images/spv.png"],
            imageWebp: ["./Assets/Product Images/sdv.webp", "./Assets/Product Images/sev.webp", "./Assets/Product Images/spv.webp"],
            description: "A wide range of concrete vibrators for perfect consolidation.",
            features: ["High Frequency Pokers", "Electric & Petrol Motors"],
            link: "Product_details/Vibrators.html"
        },
        {
            title: "Mini Lift / Crane",
            image: "./Assets/Product Images/sml.png",
            imageWebp: "./Assets/Product Images/sml.webp",
            description: "Compact mini crane for lifting materials up to 30m.",
            features: ["300Kg & 500Kg Capacity", "360 degree rotation"],
            link: "Product_details/mini_lift_models.html"
        },
        {
            title: "Industrial Cutting Tools",
            image: ["./Assets/Product Images/core cutter.png", "./Assets/Product Images/groove.png"],
            imageWebp: ["./Assets/Product Images/core cutter.webp", "./Assets/Product Images/groove.webp"],
            description: "Precision tools for groove and core cutting applications.",
            features: ["Groove Cutters", "Core Cutters"],
            link: "Product_details/industrial_cutting_tools.html"
        },
        {
            title: "Plate Compactors",
            image: ["./Assets/Product Images/sfpc.png", "./Assets/Product Images/srpc.png"],
            imageWebp: ["./Assets/Product Images/sfpc.webp", "./Assets/Product Images/srpc.webp"],
            description: "For soil, asphalt, and paving stone compaction.",
            features: ["Forward & Reversible", "Petrol & Diesel Engines"],
            link: "Product_details/plate_compactor_models.html"
        },
        {
            title: "Surface Smootheners",
            image: ["./Assets/Product Images/screed vibrator.png", "./Assets/Product Images/sptp.png"],
            imageWebp: ["./Assets/Product Images/screed vibrator.webp", "./Assets/Product Images/sptp.webp"],
            description: "High-quality finishing with Power Trowels and Screed Vibrators.",
            features: ["Power Trowels (Petrol/Electric)", "Screed Vibrators & Blades"],
            link: "Product_details/surface_smootheners.html"
        },
        {
            title: "Concrete Handling Equipment",
            image: ["./Assets/Product Images/scme.png", "./Assets/Product Images/scpb.png"],
            imageWebp: ["./Assets/Product Images/scme.webp", "./Assets/Product Images/scpb.webp"],
            description: "Portable 1-bag and 2-bag mixers for any site.",
            features: ["Heavy-Duty Chassis", "Electric & Diesel Options"],
            link: "Product_details/concrete_mixer_models.html"
        },
        {
            title: "Shutter Vibrators",
            image: "./Assets/Product Images/shfs.png",
            imageWebp: "./Assets/Product Images/shfs.webp",
            description: "External vibrators for formwork, ensuring void-free concrete.",
            features: ["High Frequency Models", "3-Phase Power Options"],
            link: "Product_details/shutter_vibrator_models.html"
        },
        {
            title: "Portable Bar Equipment",
            image: ["./Assets/Product Images/spb.png", "./Assets/Product Images/spc.png"],
            imageWebp: ["./Assets/Product Images/spb.webp", "./Assets/Product Images/spc.webp"],
            description: "Lightweight, on-site solutions for rebar cutting and bending.",
            features: ["Portable Cutters up to 32mm", "Portable Benders up to 32mm"],
            link: "Product_details/portable_bar_processing_models.html"
        },
        {
            title: "Dewatering Pumps",
            image: "./Assets/Product Images/sdw.png",
            imageWebp: "./Assets/Product Images/sdw.webp",
            description: "Submersible flexible shaft pumps for efficient water removal.",
            features: ["2 inch & 3 inch pumps", "Petrol/Diesel/Electric"],
            link: "Product_details/dewatering_pump.html"
        },
        {
            title: "High Frequency Pokers",
            image: "./Assets/Product Images/60hf.png",
            imageWebp: "./Assets/Product Images/60hf.webp",
            description: "Internal concrete vibration needles for superior consolidation.",
            features: ["40mm & 60mm Diameters", "Hose lengths up to 12 meters"],
            link: "Product_details/high_frequency_poker_models.html"
        },
        {
            title: "High Frequency Converters",
            image: "./Assets/Product Images/hfc.png",
            imageWebp: "./Assets/Product Images/hfc.webp",
            description: "Reliable power conversion for high-frequency concrete vibrators.",
            features: ["2 & 4 Outlet Models", "Converts 415V to 42V/200Hz"],
            link: "Product_details/high_frequency_converter_models.html"
        },
        {
            title: "Handy Vibrator Solution",
            image: "./Assets/Product Images/shm800.png",
            imageWebp: "./Assets/Product Images/shm800.webp",
            description: "Portable and efficient vibration solutions.",
            features: ["Hand Held Motors", "800W - 1600W Options"],
            link: "Product_details/handy_vibration_models.html"
        },
        {
            title: "Mechanical Pokers",
            image: "./Assets/Product Images/smp.png",
            imageWebp: "./Assets/Product Images/smp.webp",
            description: "High-quality vibration needles for various applications.",
            features: ["Handy & Hand-Held Needles", "Mechanical Needles"],
            link: "Product_details/mechanical_poker_models.html"
        }
    ];

    function createProductCard(product) {
        const isProductPage = window.location.pathname.includes('/Product_details/') || window.location.pathname.includes('/Service_details/');
        const rootPath = isProductPage ? '../' : './';
        
        let imageHTML;

        const images = Array.isArray(product.image) ? product.image : [product.image];
        const webpImages = product.imageWebp ? (Array.isArray(product.imageWebp) ? product.imageWebp : [product.imageWebp]) : [];

        if (images.length > 1) {
            const imageTags = images.map((img, index) => {
                let imgSrc = img.startsWith('./') ? rootPath + img.substring(2) : img;
                let webpSrc = webpImages[index] ? (webpImages[index].startsWith('./') ? rootPath + webpImages[index].substring(2) : webpImages[index]) : null;
                
                const singleImgTag = `<img src="${imgSrc}" alt="${product.title}" class="w-full h-full object-contain" loading="lazy" decoding="async">`;

                if (webpSrc) {
                    return `<picture class="absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${index === 0 ? 'opacity-100' : 'opacity-0'}">
                                <source srcset="${webpSrc}" type="image/webp">
                                ${singleImgTag}
                            </picture>`;
                }
                return singleImgTag.replace('class="', `class="absolute inset-0 transition-opacity duration-700 ease-in-out ${index === 0 ? 'opacity-100' : 'opacity-0'} `);
            }).join('');

            const dotsTags = images.map((_, index) => 
                `<div class="w-1.5 h-1.5 rounded-full bg-primary transition-all duration-300 ${index === 0 ? 'opacity-100 w-3' : 'opacity-40'} shadow-sm"></div>`
            ).join('');

            imageHTML = `<div class="relative w-full h-full carousel-container" data-image-count="${images.length}">
                            ${imageTags}
                            <div class="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1.5 z-10 pointer-events-none dots-container">
                                ${dotsTags}
                            </div>
                         </div>`;
        } else {
            let imgSrc = images[0];
            if (imgSrc && imgSrc.startsWith('./')) {
                imgSrc = rootPath + imgSrc.substring(2);
            }
            
            let webpSrc = webpImages[0];
            if (webpSrc && webpSrc.startsWith('./')) {
                webpSrc = rootPath + webpSrc.substring(2);
            }

            const singleImgTag = `<img onclick="openImageModal('${imgSrc}')" src="${imgSrc}" alt="${product.title}" loading="lazy" decoding="async" class="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110 cursor-pointer" width="300" height="200">`;

            imageHTML = webpSrc
                ? `<picture class="w-full h-full block"><source srcset="${webpSrc}" type="image/webp">${singleImgTag}</picture>`
                : singleImgTag;
        }

        return `
        <div class="border border-gray-200 rounded-xl overflow-hidden hover:border-primary hover:shadow-[0_0_20px_rgba(30,58,138,0.15)] transition-all duration-300 flex flex-col h-full group bg-white">
            <div class="h-32 md:h-64 bg-white flex items-center justify-center overflow-hidden relative">
                ${imageHTML}
            </div>
            <div class="p-3 md:p-6 flex flex-col flex-grow">
                <h3 class="text-base md:text-xl font-bold mb-2 text-gray-900">${product.title}</h3>
                <p class="text-gray-600 text-xs md:text-sm mb-4">${product.description}</p>
                <ul class="text-xs md:text-sm text-gray-600 mb-4 space-y-1 flex-grow">
                    ${product.features.map(feature => `<li><i class="fa-solid fa-check text-green-600 mr-2" aria-hidden="true"></i> ${feature}</li>`).join('')}
                </ul>
                <a href="${product.link}" class="block text-center w-full border border-primary text-primary py-1.5 md:py-2 rounded hover:bg-primary hover:text-white transition mt-auto text-sm md:text-base" aria-label="View details for ${product.title}">Details</a>
            </div>
        </div>
        `;
    }

    const heavyContainer = document.getElementById('heavy-machinery-grid');
    const lightContainer = document.getElementById('light-machinery-grid');

    if (heavyContainer) heavyContainer.innerHTML = heavyMachinery.map(product => createProductCard(product)).join('');
    if (lightContainer) lightContainer.innerHTML = lightEquipment.map(product => createProductCard(product)).join('');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in-section').forEach(section => {
        observer.observe(section);
    });
}

const CarouselManager = {
    isRunning: false,
    animationFrameId: null,

    start: function() {
        if (this.isRunning) return;
        this.isRunning = true;
        this.loop();
    },

    stop: function() {
        this.isRunning = false;
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
            this.animationFrameId = null;
        }
    },

    loop: function() {
        if (!this.isRunning) return;

        const now = Date.now();
        const carousels = document.querySelectorAll('.carousel-container');

        carousels.forEach(carousel => {
            // 1. Initialize if needed (attach listeners)
            if (carousel.dataset.initialized !== 'true') {
                this.initCarousel(carousel);
            }

            // 2. Check timing for auto-rotation
            const lastSwitch = parseInt(carousel.dataset.lastSwitch || '0', 10);
            
            // Pause if hovered to prevent switching while user is looking/interacting
            if (carousel.matches(':hover')) {
                carousel.dataset.lastSwitch = now.toString();
                return;
            }

            if (now - lastSwitch > 2000) {
                this.rotate(carousel, 1);
                carousel.dataset.lastSwitch = now.toString();
            }
        });

        this.animationFrameId = requestAnimationFrame(() => this.loop());
    },

    initCarousel: function(carousel) {
        carousel.dataset.initialized = 'true';
        carousel.dataset.lastSwitch = Date.now().toString();
        carousel.style.cursor = 'pointer';

        // Click to next
        carousel.addEventListener('click', (e) => {
            e.stopPropagation();
            this.rotate(carousel, 1);
            carousel.dataset.lastSwitch = Date.now().toString(); // Reset timer
        });

        // Touch support
        let touchStartX = 0;
        carousel.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
            carousel.dataset.lastSwitch = Date.now().toString(); // Pause on touch
        }, { passive: true });

        carousel.addEventListener('touchend', (e) => {
            const touchEndX = e.changedTouches[0].screenX;
            if (touchEndX < touchStartX - 50) {
                this.rotate(carousel, 1); // Swipe Left -> Next
            } else if (touchEndX > touchStartX + 50) {
                this.rotate(carousel, -1); // Swipe Right -> Prev
            }
            carousel.dataset.lastSwitch = Date.now().toString();
        });
    },

    rotate: function(carousel, direction) {
        const imageCount = parseInt(carousel.dataset.imageCount, 10);
        if (imageCount <= 1) return;

        const images = Array.from(carousel.children).filter(el => !el.classList.contains('dots-container'));
        const dotsContainer = carousel.querySelector('.dots-container');
        const dots = dotsContainer ? Array.from(dotsContainer.children) : [];

        // Find current index
        let currentIndex = images.findIndex(img => img.classList.contains('opacity-100'));
        if (currentIndex === -1) currentIndex = 0;

        // Hide current
        images[currentIndex].classList.remove('opacity-100');
        images[currentIndex].classList.add('opacity-0');
        if (dots[currentIndex]) {
            dots[currentIndex].classList.remove('opacity-100', 'w-3');
            dots[currentIndex].classList.add('opacity-40');
        }

        // Calculate next
        let nextIndex = (currentIndex + direction + imageCount) % imageCount;

        // Show next
        images[nextIndex].classList.remove('opacity-0');
        images[nextIndex].classList.add('opacity-100');
        if (dots[nextIndex]) {
            dots[nextIndex].classList.remove('opacity-40');
            dots[nextIndex].classList.add('opacity-100', 'w-3');
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    window.initProductCards();
    CarouselManager.start();
});

window.addEventListener('pageshow', () => {
    // Ensure loop is running when page is shown (handles back/forward cache)
    CarouselManager.start();
});

document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        CarouselManager.start();
    } else {
        CarouselManager.stop();
    }
});
