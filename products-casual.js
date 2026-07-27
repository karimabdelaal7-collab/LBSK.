// بيانات منتجات قسم كاجوال — أسماء فولدرات مميزة (c01-c35) لتفادي التصادم مع بيتي
const casualProducts = [
  {
    id: "casual-01",
    nameAr: "سوت چيب قطعتين",
    nameEn: "SUIT SKIIRT 2pcs",
    price: 550,
    size: "من 70 كيلو ل 85 كيلو",
    description: "كتان فرنساوي معالج مستورد عالى الجودة",
    images: ["c01/1.jpg", "c01/2.jpg"]
  },
  {
    id: "casual-02",
    nameAr: "بلاوز مفتوحه من الجناب",
    nameEn: "Side Slit Blouse",
    price: 400,
    size: "من 75 كيلو ل 85 كيلو",
    description: "كتان فرنساوي معالج مستورد عالى الجودة",
    images: ["c02/1.jpg", "c02/2.jpg", "c02/3.jpg", "c02/4.jpg", "c02/5.jpg", "c02/6.jpg", "c02/7.jpg"]
  },
  {
    id: "casual-03",
    nameAr: "بلوزة الشال",
    nameEn: "Shawl Blouse",
    price: 600,
    size: "من 65 كيلو ل 85 كيلو",
    description: "تريكو شبك مستورد تركي عالى الجودة",
    images: ["c03/1.jpg", "c03/2.jpg", "c03/3.jpg", "c03/4.jpg"]
  },
  {
    id: "casual-04",
    nameAr: "سوت قطعتين مطعم تايجر كابيتشو",
    nameEn: "Tiger Cappuccino Two-Piece Set",
    price: 450,
    size: "من 85 كيلو ل 90 كيلو",
    description: "سي واي مستورد عالى الجودة",
    images: ["c04/1.jpg", "c04/2.jpg", "c04/3.jpg", "c04/4.jpg"]
  },
  {
    id: "casual-05",
    nameAr: "بلاوز فراشه",
    nameEn: "Butterfly Blouse",
    price: 300,
    size: "من 65الي90كيلو",
    description: "فريسكا ايطالي مستورد عالى الجودة",
    images: ["c05/1.jpg", "c05/2.jpg", "c05/3.jpg", "c05/4.jpg", "c05/5.jpg", "c05/6.jpg"]
  },
  {
    id: "casual-06",
    nameAr: "سوت3قطع كلاسيك",
    nameEn: "Classic Three-Piece Set",
    price: 620,
    size: "ون سايز تلبيس ل85.90ك",
    description: "روزالين ايطالى عالى الجودة وماتريال الشيميز * رويال عالى الجودة",
    images: ["c06/1.jpg", "c06/2.jpg", "c06/3.jpg"]
  },
  {
    id: "casual-07",
    nameAr: "سوت3 قطع اسكيرت مكون من بليرو قصير واسكيرت كلوش وبدي قطن",
    nameEn: "Classic Three-Piece Skirt Set",
    price: 500,
    size: "من 65 كيلو ل 85 كيلو",
    description: "ماتريال البليزر سي واي مستورد عالى الجودة ماتريال الچيبه سي واي مستورد عالى الجودة",
    images: ["c07/1.jpg", "c07/2.jpg", "c07/3.jpg", "c07/4.jpg", "c07/5.jpg"]
  },
  {
    id: "casual-08",
    nameAr: "دريس مشجر كولار+ توب ساده",
    nameEn: "Floral Collared Dress + Plain Top",
    price: 500,
    size: "من 50ك لـ 85ك",
    description: "فريسكا ايطالي مستورد مستورد عالي الجودة ماتريال التوب توب موج البحر",
    images: ["c08/1.jpg", "c08/2.jpg", "c08/3.jpg"]
  },
  {
    id: "casual-09",
    nameAr: "دريس زراير4جيب",
    nameEn: "Button-Up Four-Pocket Dress",
    price: 700,
    size: "من65الي 85ك",
    description: "جينز مغسول مستورد",
    images: ["c09/1.jpg", "c09/2.jpg", "c09/3.jpg"]
  },
  {
    id: "casual-10",
    nameAr: "دريس 2جيب",
    nameEn: "Two-Pocket Dress",
    price: 700,
    size: "من65الي 85ك",
    description: "جينز مغسول مستورد",
    images: ["c10/1.jpg", "c10/2.jpg"]
  },
  {
    id: "casual-11",
    nameAr: "سوت كاب",
    nameEn: "Cape Two-Piece Set",
    price: 500,
    size: "65ك لـ 95ك",
    description: "---",
    images: ["c11/1.jpg", "c11/2.jpg", "c11/3.jpg", "c11/4.jpg", "c11/5.jpg", "c11/6.jpg", "c11/7.jpg", "c11/8.jpg", "c11/9.jpg"]
  },
  {
    id: "casual-12",
    nameAr: "سوت بحر",
    nameEn: "Beach Set",
    price: 500,
    size: "65ك لـ 85ك",
    description: "ستان بيور مطبوع ناعم مستورد",
    images: ["c12/1.jpg", "c12/2.jpg", "c12/3.jpg", "c12/4.jpg"]
  },
  {
    id: "casual-13",
    nameAr: "دريس ورد",
    nameEn: "Floral Dress",
    price: 400,
    size: "من 75 ك ل 110 ك",
    description: "باور سبلماشين + بطانه زبده",
    images: ["c13/1.jpg", "c13/2.jpg", "c13/3.jpg", "c13/4.jpg", "c13/5.jpg"]
  },
  {
    id: "casual-14",
    nameAr: "سوت الستريبد 4 قطع",
    nameEn: "Striped Four-Piece Set",
    price: 670,
    size: "من 65ك لـ95ك",
    description: "رويال كريب سعودي مستورد عالى الجودة ماتريال التوب قطن بيور محمل تركي",
    images: ["c14/1.jpg", "c14/2.jpg", "c14/3.jpg"]
  },
  {
    id: "casual-15",
    nameAr: "توينز دريس",
    nameEn: "Twinning Dress Set",
    price: 350,
    size: "65ك لـ 85ك",
    description: "بيزك دريس سي واي واوبن دريس سي واي مستورد",
    images: ["c15/1.jpg", "c15/2.jpg", "c15/3.jpg", "c15/4.jpg", "c15/5.jpg", "c15/6.jpg", "c15/7.jpg", "c15/8.jpg", "c15/9.jpg", "c15/10.jpg"]
  },
  {
    id: "casual-16",
    nameAr: "دريس مشجر ڤرونس",
    nameEn: "Floral Princess Dress",
    price: 300,
    size: "65ك لـ 85ك",
    description: "سوفت مبرد تركى عالى الجودة",
    images: ["c16/1.jpg", "c16/2.jpg"]
  },
  {
    id: "casual-17",
    nameAr: "دريس ستان",
    nameEn: "Satin Dress",
    price: 470,
    size: "من 70الي 90ك",
    description: "ستان ارماني محمل مستورد",
    images: ["c17/1.jpg", "c17/2.jpg", "c17/3.jpg", "c17/4.jpg"]
  },
  {
    id: "casual-18",
    nameAr: "سوت3قطع مطبوع",
    nameEn: "Printed Three-Piece Set",
    price: 450,
    size: "65ك لـ 85ك",
    description: "سي واي مستورد",
    images: ["c18/1.jpg", "c18/2.jpg", "c18/3.jpg"]
  },
  {
    id: "casual-19",
    nameAr: "دريس زراير كبس",
    nameEn: "Snap Button Dress",
    price: 400,
    size: "65ك لـ 85ك",
    description: "كتان فرنساوي معالج عالى الجودة",
    images: ["c19/1.jpg", "c19/2.jpg", "c19/3.jpg", "c19/4.jpg", "c19/5.jpg", "c19/6.jpg", "c19/7.jpg"]
  },
  {
    id: "casual-20",
    nameAr: "لونج دريس زراير",
    nameEn: "Long Button Dress",
    price: 450,
    size: "من70الي 85ك",
    description: "موچ البحر مستورد",
    images: ["c20/1.jpg", "c20/2.jpg", "c20/3.jpg", "c20/4.jpg", "c20/5.jpg", "c20/6.jpg"]
  },
  {
    id: "casual-21",
    nameAr: "دريس سوسته",
    nameEn: "Zip-Front Dress",
    price: 400,
    size: "65ك لـ 85ك",
    description: "كتان فرنساوي معالج مستورد عالى الجودة",
    images: ["c21/1.jpg", "c21/2.jpg"]
  },
  {
    id: "casual-22",
    nameAr: "دريس ادوار حزام عريض",
    nameEn: "Tiered Dress with Wide Belt",
    price: 300,
    size: "من80 ل 85 كيلو",
    description: "فريسكا مستورد عالى الجودة",
    images: ["c22/1.jpg", "c22/2.jpg", "c22/3.jpg", "c22/4.jpg", "c22/5.jpg", "c22/6.jpg", "c22/7.jpg"]
  },
  {
    id: "casual-23",
    nameAr: "فستان تايجر",
    nameEn: "Tiger Print Dress",
    price: 650,
    size: "من65ك الي90ك",
    description: "ستان بيور محمل مستورد",
    images: ["c23/1.jpg", "c23/2.jpg", "c23/3.jpg"]
  },
  {
    id: "casual-24",
    nameAr: "بلوزة تول دي جووي",
    nameEn: "Tulle De Jouy Blouse",
    price: 400,
    size: "من65ك الي90ك",
    description: "شيفون تركي مطبوع مستورد",
    images: ["c24/1.jpg", "c24/2.jpg", "c24/3.jpg", "c24/4.jpg"]
  },
  {
    id: "casual-25",
    nameAr: "بنطلون اسكيرت2 جيب",
    nameEn: "Two-Pocket Skort",
    price: 500,
    size: "من 55الي90كيلو",
    description: "چينز رباعيه مغسول مستورد",
    images: ["c25/1.jpg", "c25/2.jpg"]
  },
  {
    id: "casual-26",
    nameAr: "دريس سي واي ڤرونس حزام في الكم",
    nameEn: "CY Princess Dress with Sleeve Belts",
    price: 350,
    size: "65ك لـ 85ك",
    description: "سي واي مستورد",
    images: ["c26/1.jpg", "c26/2.jpg", "c26/3.jpg", "c26/4.jpg", "c26/5.jpg", "c26/6.jpg", "c26/7.jpg", "c26/8.jpg", "c26/9.jpg", "c26/10.jpg", "c26/11.jpg"]
  },
  {
    id: "casual-27",
    nameAr: "فستان فلورال سكوير",
    nameEn: "pink flowe Dress",
    price: 700,
    size: "من65ك الي90ك",
    description: "--",
    images: ["c27/1.jpg", "c27/2.jpg", "c27/3.jpg"]
  },
  {
    id: "casual-28",
    nameAr: "سوت 3 قطع",
    nameEn: "Three-Piece Co-ord Set",
    price: 500,
    size: "من 65ك لـ 85ك",
    description: "فريسكا مطبوع مستورد",
    images: ["c28/1.jpg", "c28/2.jpg", "c28/3.jpg"]
  },
  {
    id: "casual-29",
    nameAr: "سالوبيت دريس قطعتين",
    nameEn: "Overall Dress Set",
    price: 250,
    size: "من 80ك لـ 85ك",
    description: "رويال مطبوع عالى الجودة",
    images: ["c29/1.jpg", "c29/2.jpg"]
  },
  {
    id: "casual-30",
    nameAr: "دريس مطعم ابيض بحزام",
    nameEn: "White-Trimmed Dress with Belt",
    price: 400,
    size: "من 65ك لـ 85ك",
    description: "كتان فرنساوي معالج ضدد الانكماش مستورد عالي الجودة",
    images: ["c30/1.jpg"]
  },
  {
    id: "casual-31",
    nameAr: "دريس ساده مطعم جينز",
    nameEn: "Denim-Trimmed Plain Dress",
    price: 300,
    size: "من 65ك لـ 85ك",
    description: "رويال في جينز",
    images: ["c31/1.jpg"]
  },
  {
    id: "casual-32",
    nameAr: "تيشيرت أوفر سايز",
    nameEn: "Oversized T-Shirt",
    price: 300,
    size: "من 65ك لـ90ك",
    description: "ميلتون قطن بيور مستورد.",
    images: ["c32/1.jpg", "c32/2.jpg", "c32/3.jpg", "c32/4.jpg", "c32/5.jpg", "c32/6.jpg"]
  },
  {
    id: "casual-33",
    nameAr: "دريس2 لون مطعم تايجر",
    nameEn: "Two-Tone Tiger-Trimmed Dress",
    price: 300,
    size: "من70الى85كيلو",
    description: "شيفون تركى عالى الجودة مبطن روزته",
    images: ["c33/1.jpg"]
  },
  {
    id: "casual-34",
    nameAr: "شيميز كلاسيك",
    nameEn: "Classic Shirt",
    price: 330,
    size: "من 75الي 85ك",
    description: "رويال ناعم مستورد عالى الجودة",
    images: ["c34/1.jpg", "c34/2.jpg", "c34/3.jpg", "c34/4.jpg", "c34/5.jpg", "c34/6.jpg", "c34/7.jpg", "c34/8.jpg", "c34/9.jpg"]
  },
  {
    id: "casual-35",
    nameAr: "دريس ورود",
    nameEn: "Rose Print Dress",
    price: 350,
    size: "من 65ك الي90ك",
    description: "سوفت مطبوع مستورد تركي عالي الجود",
    images: ["c35/1.jpg", "c35/2.jpg", "c35/3.jpg"]
  }
];
