document.addEventListener('DOMContentLoaded', () => {
    // 1. Inject CSS for animations
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes total-flash {
            50% { transform: scale(1.1); color: #d97706; }
        }
        .flash-animation {
            animation: total-flash 0.5s ease-in-out;
        }
        @keyframes pulse-green {
            0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
            70% { transform: scale(1.1); box-shadow: 0 0 0 10px rgba(34, 197, 94, 0); }
            100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
        }
        .whatsapp-pulse {
            animation: pulse-green 2s infinite;
        }
    `;
    document.head.appendChild(style);

    // 2. Inject HTML for Button and Modal
    const whatsappHTML = `
        <!-- Floating WhatsApp Button -->
        <a id="whatsapp-btn" href="https://wa.me/919032069819?text=Hi%20there%2C%20I%20have%20requirement%20of%20equipment%20listed%20in%20your%20website.%0APlease%20call%20me%20back%20for%20a%20detailed%20description%20of%20my%20requirements." target="_blank" class="fixed bottom-6 right-6 bg-green-500 text-white w-14 h-14 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 z-50 hover:scale-110 flex items-center justify-center whatsapp-pulse group" title="Chat on WhatsApp">
            <i class="fa-brands fa-whatsapp text-3xl"></i>
            <span class="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 text-sm font-bold px-3 py-1 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">Chat with us</span>
        </a>

        <!-- Callback Success Modal -->
        <div id="callback-modal" class="fixed inset-0 flex items-center justify-center z-[60] hidden">
            <div class="absolute inset-0 bg-black opacity-50"></div>
            <div class="bg-white p-6 rounded-lg shadow-2xl z-10 max-w-sm mx-4 text-center transform transition-all scale-100">
                <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i class="fa-solid fa-check text-2xl text-green-600"></i>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Request Submitted!</h3>
                <p class="text-gray-600 mb-6">Your callback request has been submitted.<br>Please wait for one of our representatives to call you.</p>
                <div class="w-full bg-gray-200 rounded-full h-1.5 mb-4 overflow-hidden">
                    <div id="modal-progress-bar" class="bg-green-500 h-1.5 rounded-full w-full"></div>
                </div>
                <button id="close-modal-btn" class="bg-primary text-white px-6 py-2 rounded hover:bg-blue-800 transition w-full">Okay</button>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', whatsappHTML);

    // 3. Event Listeners for Modal
    const closeModalBtn = document.getElementById('close-modal-btn');
    const callbackModal = document.getElementById('callback-modal');
    
    if (closeModalBtn && callbackModal) {
        closeModalBtn.addEventListener('click', () => {
            callbackModal.classList.add('hidden');
        });
        
        // Close on background click
        callbackModal.addEventListener('click', (e) => {
            if (e.target.classList.contains('bg-black') || e.target === callbackModal) {
                callbackModal.classList.add('hidden');
            }
        });
    }
});