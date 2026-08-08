// ===== main.js: اللغة + السلة + المفضلة + إتمام الطلب (يعمل في كل صفحات الموقع) =====

document.addEventListener("DOMContentLoaded", () => {
    let currentLang = "ar";

    // ===== رقم الواتساب اللي هتوصله الطلبات =====
    const WHATSAPP_NUMBER = "201080747995";

    // ===== أسعار الشحن للمحافظات =====
    // لو عايز تغيّر سعر أو تضيف/تعدل محافظة، عدّل هنا بس
    const GOV_SHIPPING = {
        "القاهرة": 60,
        "الجيزة": 60,
        "الإسكندرية": 75,
        "الدقهلية": 85,
        "الشرقية": 85,
        "المنوفية": 85,
        "الغربية": 85,
        "القليوبية": 85,
        "كفر الشيخ": 85,
        "دمياط": 85,
        "البحيرة": 85,
        "بورسعيد": 85,
        "الإسماعيلية": 85,
        "السويس": 85,
        "بني سويف": 95,
        "الفيوم": 95,
        "المنيا": 95,
        "أسيوط": 95,
        "سوهاج": 95,
        "قنا": 95,
        "أسوان": 120,
        "الأقصر": 120,
        "البحر الأحمر": 120,
        "مطروح": 120,
        "شمال سيناء": 120,
        "جنوب سيناء": 120,
        "الوادي الجديد": 120
    };

    function showToast(message) {
        let toast = document.getElementById("lbskToast");
        if (!toast) {
            toast = document.createElement("div");
            toast.id = "lbskToast";
            toast.className = "lbsk-toast";
            document.body.appendChild(toast);
        }
        toast.textContent = message;
        toast.classList.add("show");
        clearTimeout(toast._hideTimer);
        toast._hideTimer = setTimeout(() => {
            toast.classList.remove("show");
        }, 2200);
    }

    const htmlEl = document.documentElement;
    const bodyEl = document.body;
    const langToggle = document.getElementById("langToggle");

    const cartBtn = document.getElementById("cartBtn");
    const closeCart = document.getElementById("closeCart");
    const cartOverlay = document.getElementById("cartOverlay");
    const cartPanel = document.getElementById("cartPanel");
    const cartItemsEl = document.getElementById("cartItems");
    const cartCountEl = document.getElementById("cartCount");
    const cartTotalEl = document.getElementById("cartTotal");

    let cart = JSON.parse(localStorage.getItem("lbsk-cart") || "[]");
    let selectedGov = localStorage.getItem("lbsk-gov") || "";

    function saveCart() {
        localStorage.setItem("lbsk-cart", JSON.stringify(cart));
    }

    function cartSubtotal() {
        return cart.reduce((sum, i) => sum + i.price * i.qty, 0);
    }

    function shippingCost() {
        return GOV_SHIPPING[selectedGov] || 0;
    }

    function openCart() {
        if (!cartPanel) return;
        cartPanel.classList.add("active");
        cartOverlay.classList.add("active");
    }

    function hideCart() {
        if (!cartPanel) return;
        cartPanel.classList.remove("active");
        cartOverlay.classList.remove("active");
    }

    function renderCart() {
        if (!cartCountEl) return;
        const totalQty = cart.reduce((sum, i) => sum + i.qty, 0);
        cartCountEl.textContent = totalQty;

        if (cart.length === 0) {
            cartItemsEl.innerHTML = `<p class="cart-empty">${currentLang === "ar" ? "السلة فارغة" : "Your cart is empty"}</p>`;
            cartTotalEl.innerHTML = `0 <span>${currentLang === "ar" ? "ج.م" : "EGP"}</span>`;
            return;
        }

        cartItemsEl.innerHTML = cart
            .map((item) => {
                const name = currentLang === "ar" ? item.nameAr : item.nameEn;
                return `
                <div class="cart-item">
                    <div class="cart-item-thumb"></div>
                    <div class="cart-item-info">
                        <h4>${name}</h4>
                        <div class="cart-item-price">${item.price} ${currentLang === "ar" ? "ج.م" : "EGP"}</div>
                        <div class="cart-item-qty">
                            <button class="qty-btn" data-cart-action="dec" data-cart-id="${item.id}">-</button>
                            <span>${item.qty}</span>
                            <button class="qty-btn" data-cart-action="inc" data-cart-id="${item.id}">+</button>
                        </div>
                    </div>
                    <button class="cart-item-remove" data-cart-action="remove" data-cart-id="${item.id}">&times;</button>
                </div>`;
            })
            .join("");

        const subtotal = cartSubtotal();
        const ship = shippingCost();
        const grandTotal = subtotal + ship;

        if (ship > 0) {
            cartTotalEl.innerHTML = `
                <div class="cart-total-line"><span>${currentLang === "ar" ? "الإجمالي" : "Subtotal"}</span><span>${subtotal} ${currentLang === "ar" ? "ج.م" : "EGP"}</span></div>
                <div class="cart-total-line"><span>${currentLang === "ar" ? "الشحن" : "Shipping"}</span><span>${ship} ${currentLang === "ar" ? "ج.م" : "EGP"}</span></div>
                <div class="cart-total-line cart-total-grand"><span>${currentLang === "ar" ? "الإجمالي الكلي" : "Total"}</span><span>${grandTotal} ${currentLang === "ar" ? "ج.م" : "EGP"}</span></div>
            `;
        } else {
            cartTotalEl.innerHTML = `${subtotal} <span>${currentLang === "ar" ? "ج.م" : "EGP"}</span>`;
        }
    }

    function changeQty(id, delta) {
        const item = cart.find((i) => i.id === id);
        if (!item) return;
        item.qty += delta;
        if (item.qty <= 0) {
            cart = cart.filter((i) => i.id !== id);
        }
        saveCart();
        renderCart();
    }

    function removeCartItem(id) {
        cart = cart.filter((i) => i.id !== id);
        saveCart();
        renderCart();
    }

    function addToCart(data) {
        const existing = cart.find((item) => item.id === data.id);
        if (existing) {
            existing.qty += 1;
        } else {
            cart.push({ id: data.id, nameAr: data.nameAr, nameEn: data.nameEn, price: data.price, qty: 1 });
        }
        saveCart();
        renderCart();
        openCart();
    }

    if (cartBtn) cartBtn.addEventListener("click", openCart);
    if (closeCart) closeCart.addEventListener("click", hideCart);
    if (cartOverlay) cartOverlay.addEventListener("click", hideCart);

    const wishBtn = document.getElementById("wishBtn");
    const wishCountEl = document.getElementById("wishCount");

    let wishlist = JSON.parse(localStorage.getItem("lbsk-wishlist") || "[]");

    function saveWishlist() {
        localStorage.setItem("lbsk-wishlist", JSON.stringify(wishlist));
    }

    function isWished(id) {
        return wishlist.some((w) => w.id === id);
    }

    function toggleWishlist(data) {
        if (isWished(data.id)) {
            wishlist = wishlist.filter((w) => w.id !== data.id);
        } else {
            wishlist.push(data);
        }
        saveWishlist();
        renderWishIcons();
    }

    function renderWishIcons() {
        if (wishCountEl) wishCountEl.textContent = wishlist.length;
        document.querySelectorAll(".wish-btn").forEach((btn) => {
            const active = isWished(btn.dataset.id);
            btn.classList.toggle("active", active);
            btn.textContent = active ? "♥" : "♡";
        });
        if (typeof window.renderWishlistPage === "function") {
            window.renderWishlistPage();
        }
    }

    if (wishBtn) {
        wishBtn.addEventListener("click", () => {
            window.location.href = "wishlist.html";
        });
    }

    // ============================================================
    // ===== فورم إتمام الطلب (بيانات الشحن + رسالة واتساب) =====
    // ============================================================

    let checkoutOverlay, checkoutPanel;

    function buildCheckoutPanel() {
        if (checkoutPanel) return;

        checkoutOverlay = document.createElement("div");
        checkoutOverlay.className = "cart-overlay";
        checkoutOverlay.id = "checkoutOverlay";

        checkoutPanel = document.createElement("aside");
        checkoutPanel.className = "cart-panel";
        checkoutPanel.id = "checkoutPanel";

        const govOptions = Object.keys(GOV_SHIPPING)
            .map((gov) => `<option value="${gov}">${gov} — ${GOV_SHIPPING[gov]} ${currentLang === "ar" ? "ج.م" : "EGP"}</option>`)
            .join("");

        checkoutPanel.innerHTML = `
            <div class="cart-header">
                <h3>${currentLang === "ar" ? "بيانات الشحن" : "Shipping Details"}</h3>
                <button id="closeCheckout" class="close-cart">&times;</button>
            </div>
            <div class="cart-items checkout-form">
                <label>${currentLang === "ar" ? "الاسم بالكامل" : "Full Name"}
                    <input type="text" id="checkoutName" required>
                </label>
                <label>${currentLang === "ar" ? "رقم الموبايل" : "Phone Number"}
                    <input type="tel" id="checkoutPhone" required placeholder="01xxxxxxxxx">
                </label>
                <label>${currentLang === "ar" ? "المحافظة" : "Governorate"}
                    <select id="checkoutGov" required>
                        <option value="" disabled selected>${currentLang === "ar" ? "اختاري المحافظة" : "Select Governorate"}</option>
                        ${govOptions}
                    </select>
                </label>
                <label>${currentLang === "ar" ? "العنوان بالتفصيل" : "Detailed Address"}
                    <textarea id="checkoutAddress" required rows="3"></textarea>
                </label>
                <p id="checkoutShipLine" class="checkout-ship-line"></p>
            </div>
            <div class="cart-footer">
                <div class="cart-total">
                    <span>${currentLang === "ar" ? "الإجمالي الكلي" : "Grand Total"}</span>
                    <span id="checkoutGrandTotal">0 ${currentLang === "ar" ? "ج.م" : "EGP"}</span>
                </div>
                <button id="sendWhatsappOrder" class="btn cart-checkout">${currentLang === "ar" ? "إرسال الطلب عبر واتساب" : "Send Order via WhatsApp"}</button>
            </div>
        `;

        document.body.appendChild(checkoutOverlay);
        document.body.appendChild(checkoutPanel);

        checkoutOverlay.addEventListener("click", () => {
            if (orderSent) destroyCheckout(); else hideCheckout();
        });
        checkoutPanel.querySelector("#closeCheckout").addEventListener("click", hideCheckout);

        const govSelect = checkoutPanel.querySelector("#checkoutGov");
        govSelect.value = selectedGov || "";
        govSelect.addEventListener("change", () => {
            selectedGov = govSelect.value;
            localStorage.setItem("lbsk-gov", selectedGov);
            updateCheckoutTotals();
            renderCart();
        });

        checkoutPanel.querySelector("#sendWhatsappOrder").addEventListener("click", submitOrder);

        updateCheckoutTotals();
    }

    function updateCheckoutTotals() {
        if (!checkoutPanel) return;
        const subtotal = cartSubtotal();
        const ship = shippingCost();
        const grandTotal = subtotal + ship;

        const shipLine = checkoutPanel.querySelector("#checkoutShipLine");
        if (selectedGov) {
            shipLine.textContent = (currentLang === "ar" ? "سعر الشحن لـ " : "Shipping to ") + selectedGov + ": " + ship + " " + (currentLang === "ar" ? "ج.م" : "EGP");
        } else {
            shipLine.textContent = "";
        }

        checkoutPanel.querySelector("#checkoutGrandTotal").textContent = grandTotal + " " + (currentLang === "ar" ? "ج.م" : "EGP");
    }

    function openCheckout() {
        if (cart.length === 0) {
            showToast(currentLang === "ar" ? "السلة فارغة" : "Your cart is empty");
            return;
        }
        buildCheckoutPanel();
        updateCheckoutTotals();
        hideCart();
        checkoutPanel.classList.add("active");
        checkoutOverlay.classList.add("active");
    }

    function hideCheckout() {
        if (!checkoutPanel) return;
        checkoutPanel.classList.remove("active");
        checkoutOverlay.classList.remove("active");
    }

    let orderSent = false;

    function submitOrder() {
        const name = checkoutPanel.querySelector("#checkoutName").value.trim();
        const phone = checkoutPanel.querySelector("#checkoutPhone").value.trim();
        const gov = checkoutPanel.querySelector("#checkoutGov").value;
        const address = checkoutPanel.querySelector("#checkoutAddress").value.trim();

        if (!name || !phone || !gov || !address) {
            showToast(currentLang === "ar" ? "من فضلك املأي كل البيانات" : "Please fill in all fields");
            return;
        }

        const subtotal = cartSubtotal();
        const ship = shippingCost();
        const grandTotal = subtotal + ship;

        let msg = `طلب جديد من موقع LBSK\n\n`;
        msg += `الاسم: ${name}\n`;
        msg += `الموبايل: ${phone}\n`;
        msg += `المحافظة: ${gov}\n`;
        msg += `العنوان: ${address}\n\n`;
        msg += `المنتجات:\n`;
        cart.forEach((item) => {
            msg += `- ${item.nameAr} × ${item.qty} = ${item.price * item.qty} ج.م\n`;
        });
        msg += `\nالإجمالي: ${subtotal} ج.م`;
        msg += `\nالشحن: ${ship} ج.م`;
        msg += `\nالإجمالي الكلي: ${grandTotal} ج.م`;
        msg += `\n\nلبسك من LBSK`;

        const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
        window.open(waUrl, "_blank");

        // تفريغ السلة بعد إرسال الطلب بنجاح
        cart = [];
        saveCart();
        renderCart();
        selectedGov = "";
        localStorage.removeItem("lbsk-gov");

        showCheckoutSuccess();
    }

    function showCheckoutSuccess() {
        orderSent = true;
        checkoutPanel.innerHTML = `
            <div class="cart-header">
                <h3>${currentLang === "ar" ? "تم إرسال الطلب" : "Order Sent"}</h3>
                <button id="closeCheckout" class="close-cart">&times;</button>
            </div>
            <div class="checkout-success">
                <img src="logo/logo.png" alt="LBSK" class="checkout-success-logo">
                <p class="checkout-success-title">${currentLang === "ar" ? "🎉 تم إرسال طلبك بنجاح!" : "🎉 Your order has been sent!"}</p>
                <p class="checkout-success-text">${currentLang === "ar" ? "هنتواصل معاكِ قريبًا لتأكيد الطلب وتفاصيل الشحن. شكرًا لثقتك فينا." : "We'll contact you soon to confirm your order and shipping details. Thank you for trusting us."}</p>
                <p class="checkout-success-tagline">${currentLang === "ar" ? "لبسك من LBSK" : "Yours from LBSK"}</p>
            </div>
        `;
        checkoutPanel.querySelector("#closeCheckout").addEventListener("click", destroyCheckout);
    }

    function destroyCheckout() {
        hideCheckout();
        setTimeout(() => {
            if (checkoutPanel) { checkoutPanel.remove(); checkoutPanel = null; }
            if (checkoutOverlay) { checkoutOverlay.remove(); checkoutOverlay = null; }
            orderSent = false;
        }, 350);
    }

    // زرار "إتمام الطلب" الموجود جوا السلة
    document.addEventListener("click", (e) => {
        const checkoutBtn = e.target.closest(".cart-checkout");
        if (checkoutBtn && checkoutBtn.id !== "sendWhatsappOrder") {
            e.preventDefault();
            openCheckout();
            return;
        }
    });

    // ============================================================

    document.addEventListener("click", (e) => {
        const cartActionBtn = e.target.closest("[data-cart-action]");
        if (cartActionBtn) {
            const id = cartActionBtn.dataset.cartId;
            const action = cartActionBtn.dataset.cartAction;
            if (action === "inc") changeQty(id, 1);
            if (action === "dec") changeQty(id, -1);
            if (action === "remove") removeCartItem(id);
            return;
        }

        const addBtn = e.target.closest(".add-to-cart");
        if (addBtn) {
            e.preventDefault();
            addToCart({
                id: addBtn.dataset.id,
                nameAr: addBtn.dataset.nameAr,
                nameEn: addBtn.dataset.nameEn,
                price: parseFloat(addBtn.dataset.price)
            });
            return;
        }

        const wishToggleBtn = e.target.closest(".wish-btn");
        if (wishToggleBtn) {
            e.preventDefault();
            e.stopPropagation();
            toggleWishlist({
                id: wishToggleBtn.dataset.id,
                nameAr: wishToggleBtn.dataset.nameAr,
                nameEn: wishToggleBtn.dataset.nameEn,
                price: parseFloat(wishToggleBtn.dataset.price),
                image: wishToggleBtn.dataset.image,
                cat: wishToggleBtn.dataset.cat
            });
            return;
        }

        const shareBtn = e.target.closest(".share-btn");
        if (shareBtn) {
            e.preventDefault();
            const shareData = {
                title: shareBtn.dataset.name ? shareBtn.dataset.name + " | LBSK" : "LBSK",
                text: shareBtn.dataset.name ? `شوفي المنتج ده: ${shareBtn.dataset.name}` : "شوفي المنتج ده على LBSK",
                url: window.location.href
            };

            if (navigator.share) {
                navigator.share(shareData).catch(() => {});
            } else {
                navigator.clipboard.writeText(shareData.url).then(() => {
                    showToast(currentLang === "ar" ? "تم نسخ الرابط" : "Link copied");
                }).catch(() => {
                    showToast(currentLang === "ar" ? "تعذر نسخ الرابط" : "Could not copy link");
                });
            }
            return;
        }
    });

    function applyLanguage(lang) {
        currentLang = lang;
        htmlEl.setAttribute("lang", lang);
        htmlEl.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
        bodyEl.classList.toggle("lang-en", lang === "en");

        document.querySelectorAll("[data-ar][data-en]").forEach((el) => {
            el.textContent = lang === "ar" ? el.getAttribute("data-ar") : el.getAttribute("data-en");
        });

        document.querySelectorAll("[data-ar-label][data-en-label]").forEach((el) => {
            const label = lang === "ar" ? el.getAttribute("data-ar-label") : el.getAttribute("data-en-label");
            el.setAttribute("aria-label", label);
            el.setAttribute("title", label);
        });

        if (langToggle) {
            langToggle.textContent = lang === "ar" ? langToggle.getAttribute("data-ar") : langToggle.getAttribute("data-en");
        }

        renderCart();
        if (checkoutPanel) {
            checkoutPanel.remove();
            checkoutOverlay.remove();
            checkoutPanel = null;
            checkoutOverlay = null;
        }
        if (typeof window.renderWishlistPage === "function") {
            window.renderWishlistPage();
        }
    }

    if (langToggle) {
        langToggle.addEventListener("click", () => {
            const nextLang = htmlEl.getAttribute("lang") === "ar" ? "en" : "ar";
            applyLanguage(nextLang);
            localStorage.setItem("lbsk-lang", nextLang);
        });
    }

    window.LBSK = {
        getCart: () => cart,
        addToCart,
        removeCartItem,
        changeQty,
        getWishlist: () => wishlist,
        toggleWishlist,
        isWished,
        getCurrentLang: () => currentLang
    };

    const savedLang = localStorage.getItem("lbsk-lang") || "ar";
    applyLanguage(savedLang);
    renderWishIcons();
});
