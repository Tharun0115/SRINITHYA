document.addEventListener('DOMContentLoaded', function() {
    // Check if button already exists to prevent duplicates
    if (document.getElementById('whatsapp-btn')) return;

    // 1. Inject HTML for Button and Modal
    // Added style="z-index: 9999;" to ensure it is visible above all other elements
    const whatsappHTML = `
    <style>
        @keyframes pulse-green {
            0% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
            70% { box-shadow: 0 0 0 15px rgba(34, 197, 94, 0); }
            100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
        }
        .whatsapp-pulse {
            animation: pulse-green 2s infinite;
        }
    </style>
    <!-- Floating WhatsApp Button -->
    <a id="whatsapp-btn" href="https://wa.me/919059239819?text=Hi%20there%2C%20I%20have%20requirement%20of%20equipment%20listed%20in%20your%20website.%0APlease%20call%20me%20back%20for%20a%20detailed%20description%20of%20my%20requirements." target="_blank" class="fixed bottom-6 right-6 bg-green-500 text-white w-14 h-14 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 flex items-center justify-center group whatsapp-pulse" title="Chat on WhatsApp" style="z-index: 9999;">
        <i class="fa-brands fa-whatsapp text-3xl"></i>
    </a>

    <!-- Callback Success Modal -->
    <div id="callback-modal" class="fixed inset-0 flex items-center justify-center hidden" style="z-index: 10000;">
        <div class="absolute inset-0 bg-black opacity-50 backdrop-blur-sm"></div>
        <div class="bg-white p-6 rounded-lg shadow-2xl z-10 max-w-sm mx-4 text-center transform transition-all scale-100 border border-gray-100">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fa-solid fa-check text-2xl text-green-600"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Request Submitted!</h3>
            <p class="text-gray-600 mb-6">Your callback request has been submitted.<br>Please wait for one of our representatives to call you.</p>
            <div class="w-full bg-gray-200 rounded-full h-1.5 mb-4 overflow-hidden">
                <div id="modal-progress-bar" class="bg-green-500 h-1.5 rounded-full w-full"></div>
            </div>
            <button id="close-modal-btn" class="bg-primary text-white px-6 py-2 rounded hover:bg-blue-800 transition w-full font-bold">Okay</button>
        </div>
    </div>
    `;

    document.body.insertAdjacentHTML('beforeend', whatsappHTML);

    // 2. Logic for Modal and Sound
    const whatsappBtn = document.getElementById('whatsapp-btn');
    const modal = document.getElementById('callback-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');

    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', () => {
            sessionStorage.setItem('whatsapp_clicked', 'true');
        });
    }

    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible' && sessionStorage.getItem('whatsapp_clicked') === 'true') {
            setTimeout(() => {
                if(modal) {
                    modal.classList.remove('hidden');
                    playNotificationSound();
                    sessionStorage.removeItem('whatsapp_clicked');

                    const progressBar = document.getElementById('modal-progress-bar');
                    if (progressBar) {
                        progressBar.style.transition = 'none';
                        progressBar.style.width = '100%';
                        void progressBar.offsetWidth; // Force reflow
                        progressBar.style.transition = 'width 3s linear';
                        progressBar.style.width = '0%';
                    }

                    setTimeout(() => {
                        modal.classList.add('hidden');
                    }, 3000);
                }
            }, 1000);
        }
    });

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            if(modal) modal.classList.add('hidden');
        });
    }

    function playNotificationSound() {
        try {
            const ctx = new (window.AudioContext || window.webkitAudioContext)();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            
            osc.connect(gain);
            gain.connect(ctx.destination);
            
            osc.type = 'sine';
            osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
            gain.gain.setValueAtTime(0.1, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.00001, ctx.currentTime + 0.5);
            
            osc.start();
            osc.stop(ctx.currentTime + 0.5);
        } catch (e) {
            console.error("Audio context error", e);
        }
    }
});