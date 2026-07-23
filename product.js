// ===== product.js: صفحة تفاصيل المنتج مع سلايدر الصور =====

(function () {
    const container = document.getElementById("productDetail");
    if (!container || typeof homeProducts === "undefined") return;

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const product = homeProducts.find((p) => p.id === id);

    if (!product) {
        container.innerHTML = `<p class="not-found" data-ar="المنتج غير موجود" data-en="Product not found">المنتج غير موجود</p>`;
        return;
    }

    document.title = product.nameAr + " | LBSK";

    const images = product.images && product.images.length ? product.images : [];

    container.innerHTML = `
        <div class="product-gallery">
            <div class="main-image">
                <img id="mainImg" src="${images[0] || ""}" alt="${product.nameAr}">
                <button class="gallery-arrow prev" id="prevImg" aria-label="السابق">&#10094;</button>
                <button class="gallery-arrow next" id="nextImg" aria-label="التالي">&#10095;</button>
            </div>
            <div class="thumbnails" id="thumbs">
                ${images.map((img, i) => `<img src="${img}" data-index="${i}" class="thumb ${i === 0 ? 'active' : ''}">`).join("")}
            </div>
        </div>

        <div class="product-info">
            <h1 data-ar="${product.nameAr}" data-en="${product.nameEn}">${product.nameAr}</h1>
            <p class="price">${product.price} <span data-ar="ج.م" data-en="EGP">ج.م</span></p>
            <button class="btn add-to-cart"
                    data-id="${product.id}"
                    data-name-ar="${product.nameAr}"
                    data-name-en="${product.nameEn}"
                    data-price="${product.price}"
                    data-ar="أضيفي للسلة" data-en="Add to Cart">أضيفي للسلة</button>
            <a href="home.html" class="back-link" data-ar="← الرجوع لقسم بيتي" data-en="← Back to Homewear">← الرجوع لقسم بيتي</a>
        </div>
    `;

    let currentIndex = 0;
    const mainImg = document.getElementById("mainImg");
    const thumbs = document.querySelectorAll(".thumb");

    function showImage(index) {
        if (!images.length) return;
        currentIndex = (index + images.length) % images.length;
        mainImg.src = images[currentIndex];
        thumbs.forEach((t, i) => t.classList.toggle("active", i === currentIndex));
    }

    document.getElementById("prevImg").addEventListener("click", () => showImage(currentIndex - 1));
    document.getElementById("nextImg").addEventListener("click", () => showImage(currentIndex + 1));
    thumbs.forEach((t) => {
        t.addEventListener("click", () => showImage(parseInt(t.dataset.index, 10)));
    });
})();
