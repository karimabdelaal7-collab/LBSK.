// ===== category.js: بناء شبكة المنتجات تلقائيًا من ملف البيانات =====

(function () {
    const grid = document.getElementById("homeGrid");
    if (!grid || typeof homeProducts === "undefined") return;

    grid.innerHTML = homeProducts
        .map((p) => {
            const cover = p.images && p.images.length ? p.images[0] : "";
            return `
            <div class="product-card">
                <a href="product.html?id=${encodeURIComponent(p.id)}" class="product-image-link">
                    <div class="product-image">
                        <img src="${cover}" alt="${p.nameAr}" loading="lazy">
                    </div>
                </a>
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
