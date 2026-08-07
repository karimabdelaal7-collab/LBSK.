// ===== category-lingerie.js: بناء شبكة منتجات لانجري تلقائيًا =====
// المنتجات اللي لسه من غير اسم/سعر نهائي بتتعرض بصورتها مع علامة "التفاصيل جاية قريب"
// وزرار السلة والمفضلة بيبقوا معطّلين لحد ما البيانات تتحدث في products-lingerie.js

(function () {
    const grid = document.getElementById("lingerieGrid");
    if (!grid || typeof lingerieProducts === "undefined") return;

    if (lingerieProducts.length === 0) {
        grid.innerHTML = `<p class="not-found" data-ar="المنتجات جاية قريب" data-en="Products coming soon">المنتجات جاية قريب</p>`;
        return;
    }

    grid.innerHTML = lingerieProducts
        .map((p) => {
            const cover = p.images && p.images.length ? p.images[0] : "";
            const isReady = !!p.nameAr && p.price > 0;

            const nameAr = isReady ? p.nameAr : "التفاصيل جاية قريب";
            const nameEn = isReady ? p.nameEn : "Details coming soon";

            const priceHtml = isReady
                ? `${p.price} <span data-ar="ج.م" data-en="EGP">ج.م</span>`
                : `<span data-ar="قريبًا" data-en="Soon">قريبًا</span>`;

            const cartBtnHtml = isReady
                ? `<button class="btn-small add-to-cart"
                        data-id="${p.id}"
                        data-name-ar="${p.nameAr}"
                        data-name-en="${p.nameEn}"
                        data-price="${p.price}"
                        data-ar="أضيفي للسلة" data-en="Add to Cart">أضيفي للسلة</button>`
                : `<button class="btn-small" disabled data-ar="قريبًا" data-en="Coming Soon">قريبًا</button>`;

            const wishBtnHtml = isReady
                ? `<button class="wish-btn"
                        data-id="${p.id}"
                        data-name-ar="${p.nameAr}"
                        data-name-en="${p.nameEn}"
                        data-price="${p.price}"
                        data-image="${cover}"
                        data-cat="lingerie"
                        aria-label="أضيفي للمفضلة">♡</button>`
                : "";

            return `
            <div class="product-card">
                <a href="product.html?cat=lingerie&id=${encodeURIComponent(p.id)}" class="product-image-link">
                    <div class="product-image">
                        <img src="${cover}" alt="${nameAr}" loading="lazy">
                    </div>
                </a>
                ${wishBtnHtml}
                <h3 data-ar="${nameAr}" data-en="${nameEn}">${nameAr}</h3>
                <p class="price">${priceHtml}</p>
                ${cartBtnHtml}
            </div>`;
        })
        .join("");
})();
