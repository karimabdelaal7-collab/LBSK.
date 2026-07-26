// ===== wishlist.js: عرض منتجات المفضلة =====

(function () {
    const grid = document.getElementById("wishGrid");
    if (!grid) return;

    function render() {
        const lang = (window.LBSK && window.LBSK.getCurrentLang) ? window.LBSK.getCurrentLang() : "ar";
        const list = (window.LBSK && window.LBSK.getWishlist) ? window.LBSK.getWishlist() : [];

        if (list.length === 0) {
            grid.innerHTML = `<p class="not-found">${lang === "ar" ? "لسه مفيش حاجة في المفضلة" : "Your wishlist is empty"}</p>`;
            return;
        }

        grid.innerHTML = list
            .map((p) => {
                const name = lang === "ar" ? p.nameAr : p.nameEn;
                return `
                <div class="product-card">
                    <a href="product.html?cat=${p.cat}&id=${encodeURIComponent(p.id)}" class="product-image-link">
                        <div class="product-image">
                            <img src="${p.image}" alt="${p.nameAr}" loading="lazy">
                        </div>
                    </a>
                    <button class="wish-btn active"
                            data-id="${p.id}"
                            data-name-ar="${p.nameAr}"
                            data-name-en="${p.nameEn}"
                            data-price="${p.price}"
                            data-image="${p.image}"
                            data-cat="${p.cat}"
                            aria-label="إزالة من المفضلة">♥</button>
                    <h3>${name}</h3>
                    <p class="price">${p.price} ${lang === "ar" ? "ج.م" : "EGP"}</p>
                    <button class="btn-small add-to-cart"
                            data-id="${p.id}"
                            data-name-ar="${p.nameAr}"
                            data-name-en="${p.nameEn}"
                            data-price="${p.price}">
                            ${lang === "ar" ? "أضيفي للسلة" : "Add to Cart"}
                    </button>
                </div>`;
            })
            .join("");
    }

    window.renderWishlistPage = render;
    render();
})();
