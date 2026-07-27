// بيانات منتجات قسم كاجوال — مسارات مطابقة لهيكل الرفع على GitHub (مباشرة في جذر الموقع)
const casualProducts = [
  {
    id: "casual-01",
    nameAr: "سوت چيب قطعتين",
    nameEn: "SUIT SKIIRT 2pcs",
    price: 550,
    size: "من 70 كيلو ل 85 كيلو",
    description: "كتان فرنساوي معالج مستورد عالى الجودة",
    images: ["01/1.jpg", "01/2.jpg"]
  },
  {
    id: "casual-02",
    nameAr: "بلاوز مفتوحه من الجناب",
    nameEn: "Side Slit Blouse",
    price: 400,
    size: "من 75 كيلو ل 85 كيلو",
    description: "كتان فرنساوي معالج مستورد عالى الجودة",
    images: ["02/1.jpg", "02/2.jpg", "02/3.jpg", "02/4.jpg", "02/5.jpg", "02/6.jpg", "02/7.jpg"]
  },
  {
    id: "casual-03",
    nameAr: "بلوزة الشال",
    nameEn: "Shawl Blouse",
    price: 600,
    size: "من 65 كيلو ل 85 كيلو",
    description: "تريكو شبك مستورد تركي عالى الجودة",
    images: ["03/1.jpg", "03/2.jpg", "03/3.jpg", "03/4.jpg"]
  },
  {
    id: "casual-04",
    nameAr: "سوت قطعتين مطعم تايجر كابيتشو",
    nameEn: "Tiger Cappuccino Two-Piece Set",
    price: 450,
    size: "من 85 كيلو ل 90 كيلو",
    description: "سي واي مستورد عالى الجودة",
    images: ["04/1.jpg", "04/2.jpg", "04/3.jpg", "04/4.jpg"]
  },
  {
    id: "casual-05",
    nameAr: "بلاوز فراشه",
    nameEn: "Butterfly Blouse",
    price: 300,
    size: "من 65الي90كيلو",
    description: "فريسكا ايطالي مستورد عالى الجودة",
    images: ["05/1.jpg", "05/2.jpg", "05/3.jpg", "05/4.jpg", "05/5.jpg", "05/6.jpg"]
  },
  {
    id: "casual-06",
    nameAr: "سوت3قطع كلاسيك",
    nameEn: "Classic Three-Piece Set",
    price: 620,
    size: "ون سايز تلبيس ل85.90ك",
    description: "روزالين ايطالى عالى الجودة وماتريال الشيميز * رويال عالى الجودة",
    images: ["06/1.jpg", "06/2.jpg", "06/3.jpg"]
  },
  {
    id: "casual-07",
    nameAr: "سوت3 قطع اسكيرت مكون من بليرو قصير واسكيرت كلوش وبدي قطن",
    nameEn: "Classic Three-Piece Skirt Set",
    price: 500,
    size: "من 65 كيلو ل 85 كيلو",
    description: "ماتريال البليزر سي واي مستورد عالى الجودة ماتريال الچيبه سي واي مستورد عالى الجودة",
    images: ["07/1.jpg", "07/2.jpg", "07/3.jpg", "07/4.jpg", "07/5.jpg"]
  },
  {
    id: "casual-08",
    nameAr: "دريس مشجر كولار+ توب ساده",
    nameEn: "Floral Collared Dress + Plain Top",
    price: 500,
    size: "من 50ك لـ 85ك",
    description: "فريسكا ايطالي مستورد مستورد عالي الجودة ماتريال التوب توب موج البحر",
    images: ["08/1.jpg", "08/2.jpg", "08/3.jpg"]
  },
  {
    id: "casual-09",
    nameAr: "دريس زراير4جيب",
    nameEn: "Button-Up Four-Pocket Dress",
    price: 700,
    size: "من65الي 85ك",
    description: "جينز مغسول مستورد",
    images: ["09/1.jpg", "09/2.jpg", "09/3.jpg"]
  },
  {
    id: "casual-10",
    nameAr: "دريس 2جيب",
    nameEn: "Two-Pocket Dress",
    price: 700,
    size: "من65الي 85ك",
    description: "جينز مغسول مستورد",
    images: ["10/1.jpg", "10/2.jpg"]
  },
  {
    id: "casual-11",
    nameAr: "سوت كاب",
    nameEn: "Cape Two-Piece Set",
    price: 500,
    size: "65ك لـ 95ك",
    description: "---",
    images: ["11/1.jpg", "11/2.jpg", "11/3.jpg", "11/4.jpg", "11/5.jpg", "11/6.jpg", "11/7.jpg", "11/8.jpg", "11/9.jpg"]
  },
  {
    id: "casual-12",
    nameAr: "سوت بحر",
    nameEn: "Beach Set",
    price: 500,
    size: "65ك لـ 85ك",
    description: "ستان بيور مطبوع ناعم مستورد",
    images: ["12/1.jpg", "12/2.jpg", "12/3.jpg", "12/4.jpg"]
  },
  {
    id: "casual-13",
    nameAr: "دريس ورد",
    nameEn: "Floral Dress",
    price: 400,
    size: "من 75 ك ل 110 ك",
    description: "باور سبلماشين + بطانه زبده",
    images: ["13/1.jpg", "13/2.jpg", "13/3.jpg", "13/4.jpg", "13/5.jpg"]
  },
  {
    id: "casual-14",
    nameAr: "سوت الستريبد 4 قطع",
    nameEn: "Striped Four-Piece Set",
    price: 670,
    size: "من 65ك لـ95ك",
    description: "رويال كريب سعودي مستورد عالى الجودة ماتريال التوب قطن بيور محمل تركي",
    images: ["14/1.jpg", "14/2.jpg", "14/3.jpg"]
  },
  {
    id: "casual-15",
    nameAr: "توينز دريس",
    nameEn: "Twinning Dress Set",
    price: 350,
    size: "65ك لـ 85ك",
    description: "بيزك دريس سي واي واوبن دريس سي واي مستورد",
    images: ["15/1.jpg", "15/2.jpg", "15/3.jpg", "15/4.jpg", "15/5.jpg", "15/6.jpg", "15/7.jpg", "15/8.jpg", "15/9.jpg", "15/10.jpg"]
  },
  {
    id: "casual-16",
    nameAr: "دريس مشجر ڤرونس",
    nameEn: "Floral Princess Dress",
    price: 300,
    size: "65ك لـ 85ك",
    description: "سوفت مبرد تركى عالى الجودة",
    images: ["16/1.jpg", "16/2.jpg"]
  },
  {
    id: "casual-17",
    nameAr: "دريس ستان",
    nameEn: "Satin Dress",
    price: 470,
    size: "من 70الي 90ك",
    description: "ستان ارماني محمل مستورد",
    images: ["17/1.jpg", "17/2.jpg", "17/3.jpg", "17/4.jpg"]
  },
  {
    id: "casual-18",
    nameAr: "سوت3قطع مطبوع",
    nameEn: "Printed Three-Piece Set",
    price: 450,
    size: "65ك لـ 85ك",
    description: "سي واي مستورد",
    images: ["18/1.jpg", "18/2.jpg", "18/3.jpg"]
  },
  {
    id: "casual-19",
    nameAr: "دريس زراير كبس",
    nameEn: "Snap Button Dress",
    price: 400,
    size: "65ك لـ 85ك",
    description: "كتان فرنساوي معالج عالى الجودة",
    images: ["19/1.jpg", "19/2.jpg", "19/3.jpg", "19/4.jpg", "19/5.jpg", "19/6.jpg", "19/7.jpg"]
  },
  {
    id: "casual-20",
    nameAr: "لونج دريس زراير",
    nameEn: "Long Button Dress",
    price: 450,
    size: "من70الي 85ك",
    description: "موچ البحر مستورد",
    images: ["20/1.jpg", "20/2.jpg", "20/3.jpg", "20/4.jpg", "20/5.jpg", "20/6.jpg"]
  },
  {
    id: "casual-21",
    nameAr: "دريس سوسته",
    nameEn: "Zip-Front Dress",
    price: 400,
    size: "65ك لـ 85ك",
    description: "كتان فرنساوي معالج مستورد عالى الجودة",
    images: ["21/1.jpg", "21/2.jpg"]
  },
  {
    id: "casual-22",
    nameAr: "دريس ادوار حزام عريض",
    nameEn: "Tiered Dress with Wide Belt",
    price: 300,
    size: "من80 ل 85 كيلو",
    description: "فريسكا مستورد عالى الجودة",
    images: ["22/1.jpg", "22/2.jpg", "22/3.jpg", "22/4.jpg", "22/5.jpg", "22/6.jpg", "22/7.jpg"]
  },
  {
    id: "casual-23",
    nameAr: "فستان تايجر",
    nameEn: "Tiger Print Dress",
    price: 650,
    size: "من65ك الي90ك",
    description: "ستان بيور محمل مستورد",
    images: ["23/1.jpg", "23/2.jpg", "23/3.jpg"]
  },
  {
    id: "casual-24",
    nameAr: "بلوزة تول دي جووي",
    nameEn: "Tulle De Jouy Blouse",
    price: 400,
    size: "من65ك الي90ك",
    description: "شيفون تركي مطبوع مستورد",
    images: ["24/1.jpg", "24/2.jpg", "24/3.jpg", "24/4.jpg"]
  },
  {
    id: "casual-25",
    nameAr: "بنطلون اسكيرت2 جيب",
    nameEn: "Two-Pocket Skort",
    price: 500,
    size: "من 55الي90كيلو",
    description: "چينز رباعيه مغسول مستورد",
    images: ["25/1.jpg", "25/2.jpg"]
  },
  {
    id: "casual-26",
    nameAr: "دريس سي واي ڤرونس حزام في الكم",
    nameEn: "CY Princess Dress with Sleeve Belts",
    price: 350,
    size: "65ك لـ 85ك",
    description: "سي واي مستورد",
    images: ["26/1.jpg", "26/2.jpg", "26/3.jpg", "26/4.jpg", "26/5.jpg", "26/6.jpg", "26/7.jpg", "26/8.jpg", "26/9.jpg", "26/10.jpg", "26/11.jpg"]
  },
  {
    id: "casual-27",
    nameAr: "فستان فلورال سكوير",
    nameEn: "pink flowe Dress",
    price: 700,
    size: "من65ك الي90ك",
    description: "--",
    images: ["27/1.jpg", "27/2.jpg", "27/3.jpg"]
  },
  {
    id: "casual-28",
    nameAr: "سوت 3 قطع",
    nameEn: "Three-Piece Co-ord Set",
    price: 500,
    size: "من 65ك لـ 85ك",
    description: "فريسكا مطبوع مستورد",
    images: ["28/1.jpg", "28/2.jpg", "28/3.jpg"]
  },
  {
    id: "casual-29",
    nameAr: "سالوبيت دريس قطعتين",
    nameEn: "Overall Dress Set",
    price: 250,
    size: "من 80ك لـ 85ك",
    description: "رويال مطبوع عالى الجودة",
    images: ["29/1.jpg", "29/2.jpg"]
  },
  {
    id: "casual-30",
    nameAr: "دريس مطعم ابيض بحزام",
    nameEn: "White-Trimmed Dress with Belt",
    price: 400,
    size: "من 65ك لـ 85ك",
    description: "كتان فرنساوي معالج ضدد الانكماش مستورد عالي الجودة",
    images: ["30/1.jpg"]
  },
  {
    id: "casual-31",
    nameAr: "دريس ساده مطعم جينز",
    nameEn: "Denim-Trimmed Plain Dress",
    price: 300,
    size: "من 65ك لـ 85ك",
    description: "رويال في جينز",
    images: ["31/1.jpg"]
  },
  {
    id: "casual-32",
    nameAr: "تيشيرت أوفر سايز",
    nameEn: "Oversized T-Shirt",
    price: 300,
    size: "من 65ك لـ90ك",
    description: "ميلتون قطن بيور مستورد.",
    images: ["32/1.jpg", "32/2.jpg", "32/3.jpg", "32/4.jpg", "32/5.jpg", "32/6.jpg"]
  },
  {
    id: "casual-33",
    nameAr: "دريس2 لون مطعم تايجر",
    nameEn: "Two-Tone Tiger-Trimmed Dress",
    price: 300,
    size: "من70الى85كيلو",
    description: "شيفون تركى عالى الجودة مبطن روزته",
    images: ["33/1.jpg"]
  },
  {
    id: "casual-34",
    nameAr: "شيميز كلاسيك",
    nameEn: "Classic Shirt",
    price: 330,
    size: "من 75الي 85ك",
    description: "رويال ناعم مستورد عالى الجودة",
    images: ["34/1.jpg", "34/2.jpg", "34/3.jpg", "34/4.jpg", "34/5.jpg", "34/6.jpg", "34/7.jpg", "34/8.jpg", "34/9.jpg"]
  },
  {
    id: "casual-35",
    nameAr: "دريس ورود",
    nameEn: "Rose Print Dress",
    price: 350,
    size: "من 65ك الي90ك",
    description: "سوفت مطبوع مستورد تركي عالي الجود",
    images: ["35/1.jpg", "35/2.jpg", "35/3.jpg"]
  }
];
