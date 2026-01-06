document.addEventListener('DOMContentLoaded', () => {
    // Determine path prefix based on current location to ensure links/images work from subdirectories
    const isProductPage = window.location.pathname.includes('Product_details');
    const pathPrefix = isProductPage ? '../' : './';

    // Centralized Product Database
    const searchProducts = [
        { 
            name: "Bar Cutting Machine", 
            desc: "Hydraulic cutting for TMT bars up to 42mm.",
            link: "Product_details/bar_cutting_models.html", 
            image: "Assets/bar_cutter.png",
            category: "Heavy Machinery",
            specs: "Up to 42mm TMT 4 KW Motor Reinforced Oil Bath Up to 32mm TMT 3 KW Motor Speed 32 times/min"
        },
        { 
            name: "Bar Bending Machine", 
            desc: "Automatic bending with digital control.",
            link: "Product_details/bar_bending_models.html", 
            image: "Assets/bar_bender.png",
            category: "Heavy Machinery",
            specs: "6mm - 32mm Pin Foot Pedal Emergency Stop Up to 42mm Digital CNC Panel Save Angle Presets"
        },
        { 
            name: "Scrap Straightener", 
            desc: "Straighten scrap bars efficiently.",
            link: "Product_details/scrap_straightener_models.html", 
            image: "Assets/scrap_straightener.png",
            category: "Heavy Machinery",
            specs: "4mm - 12mm 25 meters/min Coil Light Scrap 6mm - 16mm Auto-Cut Function High Precision"
        },
        { 
            name: "Road Rollers", 
            desc: "Ride-on and Walk-behind rollers.",
            link: "Product_details/road_roller_models.html", 
            image: "Assets/road_roller.png",
            category: "Heavy Machinery",
            specs: "SRR30 Ride on SWR 30 Walk behind 10 HP Diesel Engine 600mm Drum"
        },
        { 
            name: "Suspended Scaffold Solution", 
            desc: "Customizable high-safety suspended platforms (ZLP800) for facade work.",
            link: "Product_details/suspended_rope_platform.html", 
            image: "Assets/srp.png",
            category: "Heavy Machinery",
            specs: "ZLP800 Load Calibration cell Customizable Length upto 100Mtr Weight upto 1000Kgs scaffold"
        },
        { 
            name: "Mini Lift / Crane 300Kg", 
            desc: "Compact mini crane for lifting materials up to 30m.",
            link: "Product_details/mini_lift_models.html", 
            image: "Assets/srp.png",
            category: "Heavy Machinery",
            specs: "300Kg Capacity 30Mtr Height 360 degree rotation"
        },
        { 
            name: "Mini Lift / Crane 500Kg", 
            desc: "Heavy-duty mini crane for lifting materials up to 30m.",
            link: "Product_details/mini_lift_models.html", 
            image: "Assets/srp.png",
            category: "Heavy Machinery",
            specs: "500Kg Capacity 30Mtr Height 360 degree rotation"
        },
        { 
            name: "Industrial Cutting Tools", 
            desc: "Precision tools for groove and core cutting applications.",
            link: "Product_details/industrial_cutting_tools.html", 
            image: "Assets/bar_cutter.png",
            category: "Heavy Machinery",
            specs: "Groove Cutter Core Cutter SCC-90 SCC-160 SCC-200 125mm 150mm 180mm 400mm"
        },
        { 
            name: "Groove Cutter 125mm", 
            desc: "Groove cutter with 125mm cutting depth and 5 HP power.",
            link: "Product_details/industrial_cutting_tools.html", 
            image: "Assets/bar_cutter.png",
            category: "Heavy Machinery",
            specs: "125mm depth 5 HP"
        },
        { 
            name: "Groove Cutter 150mm", 
            desc: "Groove cutter with 150mm cutting depth and 5/9 HP power.",
            link: "Product_details/industrial_cutting_tools.html", 
            image: "Assets/bar_cutter.png",
            category: "Heavy Machinery",
            specs: "150mm depth 5/9 HP"
        },
        { 
            name: "Groove Cutter 180mm", 
            desc: "Groove cutter with 180mm cutting depth and 9/13 HP power.",
            link: "Product_details/industrial_cutting_tools.html", 
            image: "Assets/bar_cutter.png",
            category: "Heavy Machinery",
            specs: "180mm depth 9/13 HP"
        },
        { 
            name: "Groove Cutter 400mm", 
            desc: "Groove cutter with 400mm cutting depth and 15/20/25 HP power.",
            link: "Product_details/industrial_cutting_tools.html", 
            image: "Assets/bar_cutter.png",
            category: "Heavy Machinery",
            specs: "400mm depth 15/20/25 HP"
        },
        { 
            name: "Core Cutter SCC-90", 
            desc: "Core cutter with 90mm diameter.",
            link: "Product_details/industrial_cutting_tools.html", 
            image: "Assets/bar_cutter.png",
            category: "Heavy Machinery",
            specs: "SCC-90 90mm 1350W 1500 RPM"
        },
        { 
            name: "Dewatering Pumps", 
            desc: "Submersible flexible shaft pumps for efficient water removal.",
            link: "Product_details/dewatering_pump.html", 
            image: "Assets/electrical_vibrator.png",
            category: "Light Equipment",
            specs: "2 inch 3 inch pump water petrol diesel electric motor"
        },
        { 
            name: "2 Inch Dewatering Pump", 
            desc: "Versatile pump for general dewatering tasks.",
            link: "Product_details/dewatering_pump.html", 
            image: "Assets/electrical_vibrator.png",
            category: "Light Equipment",
            specs: "2 inch 600 ltr/min 12m lift"
        },
        { 
            name: "3 Inch Dewatering Pump", 
            desc: "Higher capacity pump for faster water removal.",
            link: "Product_details/dewatering_pump.html", 
            image: "Assets/electrical_vibrator.png",
            category: "Light Equipment",
            specs: "3 inch 800 ltr/min 12m lift"
        },
        { 
            name: "Plate Compactors", 
            desc: "For soil and asphalt compaction.",
            link: "Product_details/plate_compactor_models.html", 
            image: "Assets/plate_compactor.png",
            category: "Light Equipment",
            specs: "80 kg 15 kN 5.5 HP Petrol 150 kg 25 kN 8 HP Diesel 250 kg 35 kN 10 HP Petrol Diesel Reversible 300 kg 40 kN Hydraulic Reversible"
        },
        { 
            name: "Power Trowels", 
            desc: "Professional concrete finishing.",
            link: "Product_details/surface_smootheners.html", 
            image: "Assets/Others/logo.png", // Using logo as placeholder if specific image not available in root assets list provided
            category: "Light Equipment",
            specs: "1000 mm 4 Blades 2Hp 70Kg Honda Engine 3Hp 68Kg Crompton motor SPTE SPTP"
        },
        { 
            name: "Surface Smootheners", 
            desc: "Screed vibrators and power trowels for a perfect finish.",
            link: "Product_details/surface_smootheners.html", 
            image: "Assets/Others/logo.png",
            category: "Light Equipment",
            specs: "Screed Vibrator Power Trowel SPTE SPTP SSVE-2"
        },
        { 
            name: "Screed Vibrator SSVE-2", 
            desc: "Electric screed vibrator for leveling concrete surfaces.",
            link: "Product_details/surface_smootheners.html", 
            image: "Assets/Others/logo.png",
            category: "Light Equipment",
            specs: "2000rpm electric motor screed blade"
        },
        { 
            name: "Power Trowel SPTE Electric", 
            desc: "Electric powered trowel for concrete finishing.",
            link: "Product_details/surface_smootheners.html", 
            image: "Assets/Others/logo.png",
            category: "Light Equipment",
            specs: "3Hp 68Kg Crompton motor"
        },
        { 
            name: "Concrete Mixers", 
            desc: "Portable 1-bag / 2-bag mixers.",
            link: "Product_details/concrete_mixer_models.html", 
            image: "Assets/Others/logo.png",
            category: "Light Equipment",
            specs: "220 Litres 3 HP Electric Motor Towable 5 HP Diesel Engine 350 Litres 9 HP Diesel Engine Heavy Duty Chassis"
        },
        { 
            name: "High Frequency Converter", 
            desc: "High performance frequency generators.",
            link: "Product_details/high_frequency_converter_models.html", 
            image: "Assets/Others/logo.png",
            category: "Light Equipment",
            specs: "SHFC 35 2 Outlet SHFC 90 4 Outlet 415V 50Hz 42V 200Hz"
        },
        { 
            name: "High Frequency Poker", 
            desc: "Internal concrete vibration needles.",
            link: "Product_details/high_frequency_poker_models.html", 
            image: "Assets/electrical_vibrator.png",
            category: "Light Equipment",
            specs: "SHFN 60 58mm 42V 200Hz 12000 RPM 40MM 5Mtr 10Mtr 12Mtr Hose"
        },
        { 
            name: "Earth Compactor", 
            desc: "Heavy duty surface compaction.",
            link: "Product_details/earth_compactor_models.html", 
            image: "Assets/Others/logo.png",
            category: "Light Equipment",
            specs: "650mm 10 kN Diesel 8HP 850mm 20 kN Remote Wired"
        },
        { 
            name: "Vibrators", 
            desc: "Electric and petrol vibrators.",
            "link": "Product_details/Vibrators.html", 
            image: "Assets/electrical_vibrator.png",
            category: "Light Equipment",
            specs: "3 HP 220V 240V 12 15 A 2800 3000 RPM 380V 415V 4.5 6 A 2 HP 8 10 A"
        },
        { 
            name: "Portable Bar Equipment", 
            desc: "Portable benders and cutters.",
            link: "Product_details/portable_bar_processing_models.html", 
            image: "Assets/bar_bender.png",
            category: "Light Equipment",
            specs: "SPB25 SPB32 SPS 32 SPC25 SPC 32 Portable Bender Cutter Straightener"
        },
        { 
            name: "High Frequency Hand Held Motor", 
            desc: "Powerful hand-held motor for high frequency applications.",
            link: "Product_details/handy_vibration_models.html", 
            image: "Assets/electrical_vibrator.png",
            category: "Light Equipment",
            specs: "SHHM 2300W 16000 rpm 5.8kg"
        },
        { 
            name: "Handy Vibrator Motor 800W", 
            desc: "Compact 800W motor for light duty tasks.",
            link: "Product_details/handy_vibration_models.html", 
            image: "Assets/electrical_vibrator.png",
            category: "Light Equipment",
            specs: "SHM 800 800W 4200 rpm"
        },
        { 
            name: "Handy Vibrator Motor 1200W", 
            desc: "Versatile 1200W motor for general concrete vibration.",
            link: "Product_details/handy_vibration_models.html", 
            image: "Assets/electrical_vibrator.png",
            category: "Light Equipment",
            specs: "SHM 1200 1200W 4300 rpm"
        },
        { 
            name: "Handy Vibrator Motor 1600W", 
            desc: "High-performance 1600W motor for demanding tasks.",
            link: "Product_details/handy_vibration_models.html", 
            image: "Assets/electrical_vibrator.png",
            category: "Light Equipment",
            specs: "SHM 1600 1600W 4600 rpm"
        },
        { 
            name: "40IV High Frequency Poker", 
            desc: "Standalone poker with inbuilt frequency converter.",
            link: "Product_details/high_frequency_poker_models.html", 
            image: "Assets/electrical_vibrator.png",
            category: "Light Equipment",
            specs: "40IV 40mm Inbuilt Converter 220V"
        },
        { 
            name: "60IV High Frequency Poker", 
            desc: "High performance 60mm poker with inbuilt converter.",
            link: "Product_details/high_frequency_poker_models.html", 
            image: "Assets/electrical_vibrator.png",
            category: "Light Equipment",
            specs: "60IV 60mm Inbuilt Converter 220V"
        },
        { 
            name: "Diesel Vibrator", 
            desc: "Robust diesel-powered vibrator for heavy-duty site applications.",
            "link": "Product_details/Vibrators.html", 
            image: "Assets/electrical_vibrator.png",
            category: "Light Equipment",
            specs: "5 HP Diesel 3000 RPM Heavy Duty Frame"
        },
        { 
            name: "Petrol Vibrator", 
            desc: "Versatile petrol-powered vibrator for sites without electricity.",
            "link": "Product_details/Vibrators.html", 
            image: "Assets/electrical_vibrator.png",
            category: "Light Equipment",
            specs: "5.5 HP Petrol 3000 RPM Heavy Duty Frame"
        },
        { 
            name: "Handy Needles", 
            desc: "Compact needles compatible with Handy Vibrators.",
            link: "Product_details/mechanical_poker_models.html", 
            image: "Assets/electrical_vibrator.png",
            category: "Light Equipment",
            specs: "25mm 40mm 60mm 3Mtr 6Mtr"
        },
        { 
            name: "Hand-Held Needles", 
            desc: "Precision needles compatible with High Frequency Hand-Held Motor.",
            link: "Product_details/mechanical_poker_models.html", 
            image: "Assets/electrical_vibrator.png",
            category: "Light Equipment",
            specs: "25mm 40mm 60mm"
        },
        { 
            name: "Mechanical Needles", 
            desc: "Robust needles compatible with Petrol, Diesel and Electrical Vibrators.",
            link: "Product_details/mechanical_poker_models.html", 
            image: "Assets/electrical_vibrator.png",
            category: "Light Equipment",
            specs: "25mm 40mm 60mm"
        },
        { 
            name: "Shutter Vibrators", 
            desc: "External vibrators for formwork, ensuring void-free concrete.",
            link: "Product_details/shutter_vibrator_models.html", 
            image: "Assets/electrical_vibrator.png",
            category: "Light Equipment",
            specs: "SHFS-4215 SHFS-4210 SSV-320 SSV-310 SSV-305"
        },
        { 
            name: "Shutter Vibrator SHFS-4215", 
            desc: "High frequency shutter vibrator, 1.5 HP.",
            link: "Product_details/shutter_vibrator_models.html", 
            image: "Assets/electrical_vibrator.png",
            category: "Light Equipment",
            specs: "1.5 HP 25A 42V 200Hz 6000 RPM"
        },
        { 
            name: "Shutter Vibrator SHFS-4210", 
            desc: "High frequency shutter vibrator, 1 HP.",
            link: "Product_details/shutter_vibrator_models.html", 
            image: "Assets/electrical_vibrator.png",
            category: "Light Equipment",
            specs: "1 HP 12A 42V 200Hz 3000 RPM"
        },
        { 
            name: "Shutter Vibrator SSV-320", 
            desc: "3-phase shutter vibrator, 2 HP.",
            link: "Product_details/shutter_vibrator_models.html", 
            image: "Assets/electrical_vibrator.png",
            category: "Light Equipment",
            specs: "2 HP 3.5A 415V 50Hz 3000 RPM"
        },
        { 
            name: "Shutter Vibrator SSV-310", 
            desc: "3-phase shutter vibrator, 1 HP.",
            link: "Product_details/shutter_vibrator_models.html", 
            image: "Assets/electrical_vibrator.png",
            category: "Light Equipment",
            specs: "1 HP 1.45A 415V 50Hz 3000 RPM"
        },
        { 
            name: "Shutter Vibrator SSV-305", 
            desc: "3-phase shutter vibrator, 0.5 HP.",
            link: "Product_details/shutter_vibrator_models.html", 
            image: "Assets/electrical_vibrator.png",
            category: "Light Equipment",
            specs: "0.5 HP 0.7A 415V 50Hz 3000 RPM"
        }
    ];

    // Inject Custom Styles for Animation and Modal
    const style = document.createElement('style');
    style.textContent = `
        @keyframes searchPopIn {
            0% { opacity: 0; transform: scale(0.9) perspective(500px) translateZ(-50px); }
            100% { opacity: 1; transform: scale(1) perspective(500px) translateZ(0); }
        }
        .search-modal-anim { 
            animation: searchPopIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards; 
            transform-origin: center top;
        }
        .search-backdrop { 
            background-color: rgba(0, 0, 0, 0.6); 
            backdrop-filter: blur(5px); 
        }
        .search-card:hover { 
            transform: translateY(-4px); 
            box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.1); 
        }
    `;
    document.head.appendChild(style);

    // Inject Modal HTML Structure
    const modalHTML = `
        <div id="global-search-modal" class="fixed inset-0 z-[100] hidden search-backdrop flex items-start justify-center pt-16 px-4 transition-opacity duration-300" role="dialog" aria-modal="true" aria-label="Search Products">
            <div class="bg-white/95 w-full max-w-[80vw] rounded-2xl shadow-2xl overflow-hidden search-modal-anim flex flex-col max-h-[80vh] border border-white/20 ring-1 ring-black/5">
                
                <!-- Search Bar Row -->
                <div class="p-5 border-b border-gray-100 flex items-center gap-4 bg-white sticky top-0 z-10">
                    <div class="bg-secondary/10 p-3 rounded-full text-secondary" aria-hidden="true">
                        <i class="fa-solid fa-magnifying-glass text-xl"></i>
                    </div>
                    <input type="text" id="global-search-input" class="w-full bg-transparent text-2xl outline-none text-gray-800 placeholder-gray-400 font-medium h-12" placeholder="Search products..." autocomplete="off" aria-label="Search query">
                    <button id="close-search-modal" class="p-4 text-gray-400 hover:text-red-500 transition rounded-full hover:bg-red-50" aria-label="Close Search">
                        <i class="fa-solid fa-xmark text-2xl" aria-hidden="true"></i>
                    </button>
                </div>

                <!-- Results Area -->
                <div id="global-search-results" class="p-6 overflow-y-auto bg-gray-50/50 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 min-h-[300px]">
                    <!-- Results will be injected here -->
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // DOM Elements
    const modal = document.getElementById('global-search-modal');
    const input = document.getElementById('global-search-input');
    const closeBtn = document.getElementById('close-search-modal');
    const resultsContainer = document.getElementById('global-search-results');
    const triggerInput = document.getElementById('catalogue-search');

    // Logic Functions
    function openSearch() {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
        input.focus();
        
        // If user typed in the trigger input, copy it over
        if (triggerInput && triggerInput.value) {
            input.value = triggerInput.value;
            renderResults(input.value);
        } else {
            renderResults(''); // Show all products initially
        }
    }

    function closeSearch() {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
        if (triggerInput) triggerInput.value = '';
        input.value = '';
    }

    function renderResults(query) {
        const term = query.toLowerCase().trim();
        
        // Filter products
        const filtered = term === '' 
            ? searchProducts 
            : searchProducts.filter(p => p.name.toLowerCase().includes(term) || p.category.toLowerCase().includes(term) || (p.specs && p.specs.toLowerCase().includes(term)));

        if (filtered.length === 0) {
            resultsContainer.innerHTML = `
                <div class="col-span-full flex flex-col items-center justify-center text-gray-400 py-12">
                    <i class="fa-regular fa-face-frown text-4xl mb-4 opacity-50"></i>
                    <p class="text-lg">No products found matching "${term}"</p>
                </div>
            `;
            return;
        }

        resultsContainer.innerHTML = filtered.map(product => {
            // Adjust paths for images and links based on current page location
            const imgPath = pathPrefix + product.image;
            let linkPath = product.link;

            // Fix link paths if we are in a subdirectory
            if (!linkPath.startsWith('http') && !linkPath.startsWith('#')) {
                if (isProductPage) {
                    if (linkPath.startsWith('Product_details/')) {
                        linkPath = '../' + linkPath;
                    } else if (linkPath.startsWith('index.html')) {
                        linkPath = '../' + linkPath;
                    }
                }
            }

            // Highlight search term in name
            let displayName = product.name;
            if (term) {
                const escapedTerm = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                const regex = new RegExp(`(${escapedTerm})`, 'gi');
                displayName = product.name.replace(regex, '<span class="text-secondary bg-yellow-100">$1</span>');
            }

            return `
                <a href="${linkPath}" class="bg-white p-3 rounded-xl shadow-sm border border-gray-100 hover:border-secondary transition-all duration-300 search-card group flex flex-col items-center text-center h-full">
                    <div class="h-24 w-full flex items-center justify-center mb-2 overflow-hidden rounded-lg bg-gray-50 p-2">
                        <img src="${imgPath}" alt="${product.name}" class="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-110">
                    </div>
                    <h4 class="font-bold text-gray-800 text-sm group-hover:text-primary transition leading-tight mb-1">${displayName}</h4>
                    <p class="text-[10px] text-gray-500 line-clamp-2 mb-2 flex-grow">${product.desc}</p>
                    <span class="inline-block px-2 py-0.5 bg-gray-100 text-[10px] font-bold text-secondary rounded uppercase tracking-wider">${product.category}</span>
                </a>
            `;
        }).join('');
    }

    // Event Listeners
    if (triggerInput) {
        triggerInput.addEventListener('click', (e) => {
            e.preventDefault();
            triggerInput.blur();
            openSearch();
        });
        // Handle case where user tabs to input and types
        triggerInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key.length === 1) {
                e.preventDefault();
                openSearch();
            }
        });
    }

    closeBtn.addEventListener('click', closeSearch);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeSearch();
    });

    input.addEventListener('input', (e) => renderResults(e.target.value));

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeSearch();
    });
});
