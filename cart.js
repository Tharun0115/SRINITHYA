// cart.js - Centralized Cart Logic

// Initialize cart from local storage
let cart = JSON.parse(localStorage.getItem('sepl_cart')) || [];

// --- Core Cart Functions ---

function saveCart() {
    localStorage.setItem('sepl_cart', JSON.stringify(cart));
}

function updateCartBadge() {
    const badge = document.getElementById('cart-badge');
    if (badge) {
        const count = cart.reduce((acc, item) => acc + item.qty, 0);
        if (count > 0) {
            badge.textContent = count;
            badge.classList.remove('hidden');
        } else {
            badge.classList.add('hidden');
        }
    }
}

function addToCart(name, price, hsn, gst) {
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.qty += 1;
    } else {
        cart.push({ name, price, hsn, gst, qty: 1 });
    }
    saveCart();
    updateCartBadge();
    renderCart();
    updateCardQuantities();
    
    // Optional: Toast notification logic if showToast is defined
    if (typeof showToast === 'function') {
        showToast(`${name} added to estimate`);
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    renderCart();
    updateCartBadge();
    updateCardQuantities();
}

function clearCart() {
    cart = [];
    saveCart();
    renderCart();
    updateCartBadge();
    updateCardQuantities();
}

function updateQty(index, change) {
    if (cart[index].qty + change > 0) {
        cart[index].qty += change;
    } else {
        cart.splice(index, 1);
    }
    saveCart();
    renderCart();
    updateCartBadge();
    updateCardQuantities();
}

// --- UI Update Functions ---

function updateItemQty(name, change) {
    const itemIndex = cart.findIndex(i => i.name === name);
    if (itemIndex !== -1) {
        if (cart[itemIndex].qty + change > 0) {
            cart[itemIndex].qty += change;
        } else {
            cart.splice(itemIndex, 1);
        }
        saveCart();
        renderCart();
        updateCartBadge();
        updateCardQuantities();
    }
}

function updateCardQuantities() {
    const buttons = document.querySelectorAll('button[onclick^="addToCart"]');
    buttons.forEach(btn => {
        const match = btn.getAttribute('onclick').match(/addToCart\(['"]([^'"]+)['"]/);
        if (match) {
            const name = match[1];
            const item = cart.find(i => i.name === name);
            const qty = item ? item.qty : 0;
            
            // Find or create wrapper
            let wrapper = btn.closest('.action-wrapper');
            if (!wrapper) {
                wrapper = document.createElement('div');
                wrapper.className = 'action-wrapper w-full mt-auto';
                btn.parentNode.insertBefore(wrapper, btn);
                wrapper.appendChild(btn);
            }
            
            let control = wrapper.querySelector('.qty-control');
            
            if (qty > 0) {
                btn.classList.add('hidden');
                if (!control) {
                    control = document.createElement('div');
                    control.className = 'qty-control flex items-center justify-between w-full border border-secondary rounded overflow-hidden bg-white shadow-sm';
                    // Extract params from the original button's onclick
                    const params = btn.getAttribute('onclick').substring(10, btn.getAttribute('onclick').length - 1);
                    control.innerHTML = `<button onclick="updateItemQty('${name}', -1)" class="px-4 py-2 bg-gray-50 hover:bg-gray-200 text-gray-700 transition font-bold border-r border-gray-200">-</button><span class="font-bold text-primary flex-grow text-center qty-display bg-white py-2">${qty}</span><button onclick="addToCart(${params})" class="px-4 py-2 bg-secondary text-white hover:bg-yellow-600 transition font-bold border-l border-secondary">+</button>`;
                    wrapper.appendChild(control);
                } else { 
                    control.querySelector('.qty-display').textContent = qty; 
                    control.classList.remove('hidden'); 
                }
            } else { 
                btn.classList.remove('hidden'); 
                if (control) control.classList.add('hidden'); 
            }
            // Remove old badge if exists
            const oldBadge = btn.parentNode.querySelector('.cart-qty-display'); 
            if(oldBadge) oldBadge.remove();
        }
    });
}

function toggleCart() {
    const modal = document.getElementById('cart-modal');
    const panel = document.getElementById('cart-panel');
    if (modal && panel) {
        if (modal.classList.contains('hidden')) {
            modal.classList.remove('hidden');
            renderCart();
            setTimeout(() => panel.classList.remove('translate-x-full'), 10);
        } else {
            panel.classList.add('translate-x-full');
            setTimeout(() => modal.classList.add('hidden'), 300);
        }
    }
}

function renderCart() {
    const container = document.getElementById('cart-items');
    const totalEl = document.getElementById('cart-total');
    if (!container) return;
    
    if (cart.length === 0) {
        container.innerHTML = '<div class="flex flex-col items-center justify-center h-full text-gray-400"><i class="fa-solid fa-cart-arrow-down text-6xl mb-4"></i><p>Your estimate list is empty.</p></div>';
        if(totalEl) totalEl.textContent = '₹0';
        return;
    }
    
    let html = '';
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price * item.qty;
        html += `<div class="bg-white p-4 rounded-lg shadow-sm mb-3 border border-gray-100"><div class="flex justify-between items-start mb-2"><h3 class="font-bold text-gray-800">${item.name}</h3><button onclick="removeFromCart(${index})" class="text-red-500 hover:text-red-700"><i class="fa-solid fa-trash"></i></button></div><div class="flex justify-between items-center"><div class="text-sm text-gray-500">Unit: ₹${item.price.toLocaleString('en-IN')}</div><div class="flex items-center border rounded"><button onclick="updateQty(${index}, -1)" class="px-2 py-1 hover:bg-gray-100 text-gray-600">-</button><span class="px-2 py-1 font-medium text-sm w-8 text-center">${item.qty}</span><button onclick="updateQty(${index}, 1)" class="px-2 py-1 hover:bg-gray-100 text-gray-600">+</button></div></div></div>`;
    });
    container.innerHTML = html;
    
    if(totalEl) {
        const newTotalText = '₹' + total.toLocaleString('en-IN');
        if (totalEl.textContent !== newTotalText) {
            totalEl.textContent = newTotalText;
            totalEl.classList.add('flash-animation');
            totalEl.addEventListener('animationend', () => {
                totalEl.classList.remove('flash-animation');
            }, { once: true });
        } else {
            totalEl.textContent = newTotalText;
        }
    }
}

// --- PDF Generation ---

function getFinancialYear() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    if (month >= 3) {
        return `${String(year).slice(-2)}${String(year + 1).slice(-2)}`;
    } else {
        return `${String(year - 1).slice(-2)}${String(year).slice(-2)}`;
    }
}

function getNextQuoteNumber() {
    const currentFY = getFinancialYear();
    let quoteData = JSON.parse(localStorage.getItem('sepl_quote_counter')) || { number: 0, fy: '' };
    if (quoteData.fy === currentFY) {
        quoteData.number += 1;
    } else {
        quoteData.number = 1;
        quoteData.fy = currentFY;
    }
    localStorage.setItem('sepl_quote_counter', JSON.stringify(quoteData));
    return String(quoteData.number).padStart(3, '0');
}

function sendPdfByEmail(pdfDoc, filename) {
    const serviceID = 'YOUR_SERVICE_ID'; 
    const templateID = 'YOUR_TEMPLATE_ID'; 
    const pdfBase64 = pdfDoc.output('datauristring').split(',')[1];
    const templateParams = {
        to_email: 'tharun05312@gmail.com',
        quote_filename: filename,
        pdf_attachment: pdfBase64,
    };
    if (serviceID === 'YOUR_SERVICE_ID' || templateID === 'YOUR_TEMPLATE_ID' || typeof emailjs === 'undefined') {
        console.warn("EmailJS is not configured.");
        return;
    }
    emailjs.send(serviceID, templateID, templateParams)
        .then(function(response) {
           console.log('Email successfully sent!', response.status, response.text);
           alert('A copy of the estimate has been sent to our office.');
        }, function(error) {
           console.error('Failed to send email:', error);
        });
}

async function generatePDF() {
    if (cart.length === 0) { alert("Please add items to the estimate first."); return; }
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const logoImg = document.getElementById('nav-logo');
    if (logoImg) { try { doc.addImage(logoImg, 'PNG', 14, 10, 25, 25); } catch (e) {} }
    doc.setFontSize(16); doc.setTextColor(30, 58, 138); doc.setFont("helvetica", "bold");
    doc.text("SRINITHYA ENGINEERING PRIVATE LIMITED", 45, 20);
    doc.setFontSize(10); doc.setTextColor(80); doc.setFont("helvetica", "normal");
    doc.text("9-95/8, Jyothi Nagar Colony, Balaji Nagar,", 45, 26); doc.text("Hyderabad, Telangana - 500087", 45, 31);
    doc.setFont("helvetica", "bold"); doc.text("GST NO: 36ABDCS5864M1ZP", 45, 38);
    doc.setDrawColor(200); doc.line(14, 45, 196, 45);
    doc.setFontSize(14); doc.setTextColor(0); doc.text("ESTIMATE / QUOTATION", 14, 55);
    doc.setFontSize(10); doc.text(`Date: ${new Date().toLocaleDateString('en-IN')}`, 160, 55);
    const tableColumn = ["S.No", "Item", "Quantity", "Taxable Value", "GST (18%)", "Amount"];
    const tableRows = []; let grandTotal = 0;
    cart.forEach((item, index) => { const taxable = item.price * item.qty; const gstAmt = taxable * (item.gst / 100); const total = taxable + gstAmt; grandTotal += total; tableRows.push([index + 1, item.name, item.qty, "Rs. " + taxable.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 }), "Rs. " + gstAmt.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 }), "Rs. " + total.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })]); });
    tableRows.push([{ content: 'Grand Total', colSpan: 5, styles: { halign: 'right', fontStyle: 'bold' } }, { content: "Rs. " + grandTotal.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 }), styles: { fontStyle: 'bold' } }]);
    doc.autoTable({ head: [tableColumn], body: tableRows, startY: 60, theme: 'grid', headStyles: { fillColor: [30, 58, 138], textColor: 255 }, footStyles: { fillColor: [217, 119, 6] }, styles: { fontSize: 9, cellPadding: 3 }, columnStyles: { 0: { cellWidth: 15 }, 1: { cellWidth: 'auto' }, 2: { cellWidth: 20, halign: 'center' }, 3: { halign: 'right' }, 4: { halign: 'right' }, 5: { halign: 'right' } } });
    const finalY = doc.lastAutoTable.finalY + 10; doc.setFontSize(8); doc.setTextColor(100); doc.text("This is a computer generated estimate.", 14, finalY);
    
    const quoteNumber = getNextQuoteNumber();
    const financialYear = getFinancialYear();
    const newFilename = `Q-${financialYear}${quoteNumber}.pdf`;

    doc.save(newFilename);
    try { sendPdfByEmail(doc, newFilename); } catch (e) {}
}

// --- Initialization ---
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        updateCartBadge();
        updateCardQuantities();
    }, 500);
});
