// ===== category-casual.js: بناء شبكة منتجات كاجوال تلقائيًا =====

(function () {
    const grid = document.getElementById("casualGrid");
    if (!grid || typeof casualProducts === "undefined") return;

    if (casualProducts.length === 0) {
        grid.innerHTML = `<p class="not-found" data-ar="المنتجات جاية قريب" data-en="Products coming soon">المنتجات جاية قريب</p>`;
        return;
    }

    grid.innerHTML = casualProducts
        .map((p) => {
            const cover = p.images && p.images.length ? p.images[0] : "";
            return `
            <div class="product-card">
                <a href="product.html?cat=casual&id=${encodeURIComponent(p.id)}" class="product-image-link">
                    <div class="product-image">
                        <img src="${cover}" alt="${p.nameAr}" loading="lazy">
                    </div>
                </a>
                <button class="wish-btn"
                        data-id="${p.id}"
                        data-name-ar="${p.nameAr}"
                        data-name-en="${p.nameEn}"
                        data-price="${p.price}"
                        data-image="${cover}"
                        data-cat="casual"
                        aria-label="أضيفي للمفضلة">♡</button>
                <h3 data-ar="${p.nameAr}" data-en="${p.nameEn}">${p.nameAr}</h3>
                <p class="price">${p.price} <span data-ar="ج.م" data-en="EGP">ج.م</span></p>
                <button class="btn-small add-to-cart"
                        data-id="${p.id}"
                        data-name-ar="${p.nameAr}"
                        data-name-en="${p.nameEn}"
                        data-price="${p.price}"
                        data-ar="أضيفي للسلة" data-en="Add to Cart">أضيفي للسلة</button>
            </div>`;
        })
        .join("");
})();
