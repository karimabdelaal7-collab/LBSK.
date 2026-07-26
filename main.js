// ===== main.js: اللغة + السلة + المفضلة (يعمل في كل صفحات الموقع) =====

document.addEventListener("DOMContentLoaded", () => {
    let currentLang = "ar";

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

    function saveCart() {
        localStorage.setItem("lbsk-cart", JSON.stringify(cart));
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

        const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
        cartTotalEl.innerHTML = `${total} <span>${currentLang === "ar" ? "ج.م" : "EGP"}</span>`;
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
