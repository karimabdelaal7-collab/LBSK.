// ===== main.js: اللغة + السلة =====

document.addEventListener("DOMContentLoaded", () => {
    let currentLang = "ar";

    const htmlEl = document.documentElement;
    const bodyEl = document.body;
    const langToggle = document.getElementById("langToggle");

    // ===== عناصر السلة =====
    const cartBtn = document.getElementById("cartBtn");
    const closeCart = document.getElementById("closeCart");
    const cartOverlay = document.getElementById("cartOverlay");
    const cartPanel = document.getElementById("cartPanel");
    const cartItemsEl = document.getElementById("cartItems");
    const cartCountEl = document.getElementById("cartCount");
    const cartTotalEl = document.getElementById("cartTotal");

    let cart = JSON.parse(localStorage.getItem("lbsk-cart") || "[]");

    function saveCart() {
        localStorage.setItem("lbsk-cart", JSON.stringify(cart));
    }

    function openCart() {
        cartPanel.classList.add("active");
        cartOverlay.classList.add("active");
    }

    function hideCart() {
        cartPanel.classList.remove("active");
        cartOverlay.classList.remove("active");
    }

    function renderCart() {
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
                            <button class="qty-btn" data-action="dec" data-id="${item.id}">-</button>
                            <span>${item.qty}</span>
                            <button class="qty-btn" data-action="inc" data-id="${item.id}">+</button>
                        </div>
                    </div>
                    <button class="cart-item-remove" data-action="remove" data-id="${item.id}">&times;</button>
                </div>`;
            })
            .join("");

        const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
        cartTotalEl.innerHTML = `${total} <span>${currentLang === "ar" ? "ج.م" : "EGP"}</span>`;

        cartItemsEl.querySelectorAll("[data-action]").forEach((el) => {
            el.addEventListener("click", () => {
                const id = el.dataset.id;
                const action = el.dataset.action;
                if (action === "inc") changeQty(id, 1);
                if (action === "dec") changeQty(id, -1);
                if (action === "remove") removeItem(id);
            });
        });
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

    function removeItem(id) {
        cart = cart.filter((i) => i.id !== id);
        saveCart();
        renderCart();
    }

    cartBtn.addEventListener("click", openCart);
    closeCart.addEventListener("click", hideCart);
    cartOverlay.addEventListener("click", hideCart);

    document.querySelectorAll(".add-to-cart").forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const id = btn.dataset.id;
            const nameAr = btn.dataset.nameAr;
            const nameEn = btn.dataset.nameEn;
            const price = parseFloat(btn.dataset.price);

            const existing = cart.find((item) => item.id === id);
            if (existing) {
                existing.qty += 1;
            } else {
                cart.push({ id, nameAr, nameEn, price, qty: 1 });
            }
            saveCart();
            renderCart();
            openCart();
        });
    });

    // ===== تبديل اللغة =====
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

        langToggle.textContent = lang === "ar" ? langToggle.getAttribute("data-ar") : langToggle.getAttribute("data-en");

        renderCart();
    }

    langToggle.addEventListener("click", () => {
        const nextLang = htmlEl.getAttribute("lang") === "ar" ? "en" : "ar";
        applyLanguage(nextLang);
        localStorage.setItem("lbsk-lang", nextLang);
    });

    // ===== التشغيل الأولي =====
    const savedLang = localStorage.getItem("lbsk-lang") || "ar";
    applyLanguage(savedLang);
});
