document.addEventListener('DOMContentLoaded', () => {

    const heavyMachinery = [
        {
            title: "Bar Cutting Machine",
            image: "./Assets/bar_cutter.png",
            imageWebp: "./Assets/bar_cutter.webp",
            description: "Hydraulic cutting for TMT bars up to 42mm. Low noise, high efficiency.",
            features: ["Heavy Duty Gearbox", "ISO Certified Components"],
            link: "Product_details/bar_cutting_models.html"
        },
        {
            title: "Bar Bending Machine",
            image: "./Assets/bar_bender.png",
            imageWebp: "./Assets/bar_bender.webp",
            description: "Automatic bending with digital control panel. Angles range 0-360 degrees.",
            features: ["CNC Control Options", "Emergency Stop Safety"],
            link: "Product_details/bar_bending_models.html"
        },
        {
            title: "Scrap Straightener",
            image: "./Assets/scrap_straightener.png",
            imageWebp: "./Assets/scrap_straightener.webp",
            description: "Now your scrap is no more scrap.",
            features: ["Multiple models", "Overload Protection"],
            link: "Product_details/scrap_straightener_models.html"
        },
        {
            title: "Suspended Scaffold Solution",
            image: "./Assets/srp.png",
            imageWebp: "./Assets/srp.webp",
            description: "Customizable high-safety suspended platforms for facade work.",
            features: ["Model: ZLP800", "Customizable Platform Size", "Adjustable Rope Length"],
            link: "Product_details/suspended_rope_platform.html"
        },
        {
            title: "Road Rollers",
            image: "./Assets/road_roller.png",
            imageWebp: "./Assets/road_roller.webp",
            description: "Ride-on and Walk-behind rollers for road construction.",
            features: ["Ride-on & Walk-behind", "Heavy Duty Compaction"],
            link: "Product_details/road_roller_models.html"
        },
        
        
    ];

    const lightEquipment = [
        {
            title: "Vibrators",
            image: "./Assets/electrical_vibrator.png",
            imageWebp: "./Assets/electrical_vibrator.webp",
            description: "A wide range of concrete vibrators for perfect consolidation.",
            features: ["High Frequency Pokers", "Electric & Petrol Motors"],
            link: "Product_details/vibrators.html"
        },
        {
            title: "Mini Lift / Crane",
            image: "./Assets/srp.png",
            imageWebp: "./Assets/srp.webp",
            description: "Compact mini crane for lifting materials up to 30m.",
            features: ["300Kg & 500Kg Capacity", "360 degree rotation"],
            link: "Product_details/mini_lift_models.html"
        },
        {
            title: "Industrial Cutting Tools",
            image: "./Assets/bar_cutter.png",
            imageWebp: "./Assets/bar_cutter.webp",
            description: "Precision tools for groove and core cutting applications.",
            features: ["Groove Cutters", "Core Cutters"],
            link: "Product_details/industrial_cutting_tools.html"
        },
        {
            title: "Plate Compactors",
            image: "./Assets/plate_compactor.png",
            imageWebp: "./Assets/plate_compactor.webp",
            description: "For soil, asphalt, and paving stone compaction.",
            features: ["Forward & Reversible", "Petrol & Diesel Engines"],
            link: "Product_details/plate_compactor_models.html"
        },
        {
            title: "Surface Smootheners",
            image: "./Assets/Others/logo.png",
            description: "High-quality finishing with Power Trowels and Screed Vibrators.",
            features: ["Power Trowels (Petrol/Electric)", "Screed Vibrators & Blades"],
            link: "Product_details/surface_smootheners.html"
        },
        {
            title: "Concrete Mixers",
            image: "./Assets/Others/logo.png",
            description: "Portable 1-bag and 2-bag mixers for any site.",
            features: ["Heavy-Duty Chassis", "Electric & Diesel Options"],
            link: "Product_details/concrete_mixer_models.html"
        },
        {
            title: "Shutter Vibrators",
            image: "./Assets/electrical_vibrator.png",
            imageWebp: "./Assets/electrical_vibrator.webp",
            description: "External vibrators for formwork, ensuring void-free concrete.",
            features: ["High Frequency Models", "3-Phase Power Options"],
            link: "Product_details/shutter_vibrator_models.html"
        },
        {
            title: "Portable Bar Equipment",
            image: "./Assets/bar_bender.png",
            imageWebp: "./Assets/bar_bender.webp",
            description: "Lightweight, on-site solutions for rebar cutting and bending.",
            features: ["Portable Cutters up to 32mm", "Portable Benders up to 32mm"],
            link: "Product_details/portable_bar_processing_models.html"
        },
        {
            title: "Earth Compactors",
            image: "./Assets/Others/logo.png",
            description: "Heavy-duty surface compaction for soil and sub-base layers.",
            features: ["Walk-behind & Trench models", "Remote/Wired control options"],
            link: "Product_details/earth_compactor_models.html"
        },
        {
            title: "High Frequency Pokers",
            image: "./Assets/electrical_vibrator.png",
            imageWebp: "./Assets/electrical_vibrator.webp",
            description: "Internal concrete vibration needles for superior consolidation.",
            features: ["40mm & 60mm Diameters", "Hose lengths up to 12 meters"],
            link: "Product_details/high_frequency_poker_models.html"
        },
        {
            title: "High Frequency Converters",
            image: "./Assets/Others/logo.png",
            description: "Reliable power conversion for high-frequency concrete vibrators.",
            features: ["2 & 4 Outlet Models", "Converts 415V to 42V/200Hz"],
            link: "Product_details/high_frequency_converter_models.html"
        },
        {
            title: "Handy Vibrator Solution",
            image: "./Assets/electrical_vibrator.png",
            imageWebp: "./Assets/electrical_vibrator.webp",
            description: "Portable and efficient vibration solutions.",
            features: ["Hand Held Motors", "800W - 1600W Options"],
            link: "Product_details/handy_vibration_models.html"
        },
        {
            title: "Mechanical Pokers",
            image: "./Assets/electrical_vibrator.png",
            imageWebp: "./Assets/electrical_vibrator.webp",
            description: "High-quality vibration needles for various applications.",
            features: ["Handy & Hand-Held Needles", "Mechanical Needles"],
            link: "Product_details/mechanical_poker_models.html"
        }
    ];

    function createProductCard(product, delay) {
        const pictureTag = product.imageWebp 
            ? `<picture>
                    <source srcset="${product.imageWebp}" type="image/webp">
                    <img onclick="openImageModal(this.src)" src="${product.image}" alt="${product.title}" loading="lazy" decoding="async" class="h-full w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-110 cursor-pointer" width="300" height="300">
                </picture>`
            : `<img onclick="openImageModal(this.src)" src="${product.image}" alt="${product.title}" loading="lazy" decoding="async" class="h-full w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-110 cursor-pointer" width="300" height="200">`;

        return `
        <div class="border border-gray-200 rounded-xl overflow-hidden hover:border-primary hover:shadow-[0_0_20px_rgba(30,58,138,0.15)] transition-all duration-300 flex flex-col h-full group bg-white">
            <div class="h-64 bg-gray-100 flex items-center justify-center overflow-hidden">
                ${pictureTag}
            </div>
            <div class="p-6 flex flex-col flex-grow">
                <h3 class="text-xl font-bold mb-2 text-gray-900">${product.title}</h3>
                <p class="text-gray-600 text-sm mb-4">${product.description}</p>
                <ul class="text-sm text-gray-600 mb-4 space-y-1 flex-grow">
                    ${product.features.map(feature => `<li><i class="fa-solid fa-check text-green-600 mr-2"></i> ${feature}</li>`).join('')}
                </ul>
                <a href="${product.link}" class="block text-center w-full border border-primary text-primary py-2 rounded hover:bg-primary hover:text-white transition mt-auto">Details</a>
            </div>
        </div>
        `;
    }

    const heavyContainer = document.getElementById('heavy-machinery-grid');
    const lightContainer = document.getElementById('light-machinery-grid');

    if (heavyContainer) {
        heavyContainer.innerHTML = heavyMachinery.map((product, index) => createProductCard(product, (index + 1) * 100)).join('');
    }

    if (lightContainer) {
        lightContainer.innerHTML = lightEquipment.map((product, index) => createProductCard(product, (index + 1) * 100)).join('');
    }

    // Set up the Intersection Observer for fade-in animations
    // This needs to run *after* the cards are injected into the DOM.
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { threshold: 0.1 });

    // Observe all elements with the .fade-in-section class, both static and dynamic.
    document.querySelectorAll('.fade-in-section').forEach(section => {
        observer.observe(section);
    });
});
