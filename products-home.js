// بيانات منتجات قسم بيتي — مسارات مطابقة لهيكل الرفع الفعلي على GitHub
const homeProducts = [
  {
    id: "home-01",
    nameAr: "بيجامه قلوب بيج سايز",
    nameEn: "full hearts pajama Big size",
    price: 480,
    trader: "Arkedia big size",
    images: ["01/1.jpg", "01/2.jpg", "01/3.jpg", "01/4.jpg", "01/5.jpg", "01/6.jpg", "01/7.jpg", "01/8.jpg", "01/9.jpg"]
  },
  {
    id: "home-02",
    nameAr: "كاش قلوب حملات بيج سايز",
    nameEn: "CASH HEARTS",
    price: 450,
    trader: "Arkedia big size",
    images: ["02/1.jpg", "02/2.jpg", "02/3.jpg", "02/4.jpg", "02/5.jpg", "02/6.jpg", "02/7.jpg", "02/8.jpg", "02/9.jpg", "02/10.jpg"]
  },
  {
    id: "home-03",
    nameAr: "بيجامه حمالات بيج سايز",
    nameEn: "STRAP PAJAMA BIG SIZE",
    price: 450,
    trader: "Arkedia big size",
    images: ["03/1.jpg", "03/2.jpg", "03/3.jpg", "03/4.jpg", "03/5.jpg", "03/6.jpg", "03/7.jpg", "03/8.jpg", "03/9.jpg", "03/10.jpg", "03/11.jpg", "03/12.jpg"]
  },
  {
    id: "home-04",
    nameAr: "بيجامه حمالات فيونكه",
    nameEn: "BOW STRAP PAJAMA",
    price: 450,
    trader: "Arkedia big size",
    images: ["04/1.jpg", "04/2.jpg", "04/3.jpg", "04/4.jpg", "04/5.jpg", "04/6.jpg", "04/7.jpg", "04/8.jpg", "04/9.jpg", "04/10.jpg"]
  },
  {
    id: "home-05",
    nameAr: "بنطلون جيم",
    nameEn: "GYM PANTS",
    price: 275,
    trader: "علي الصيني",
    images: ["05/1.jpg", "05/2.jpg", "05/3.jpg"]
  },
  {
    id: "home-06",
    nameAr: "طقم جيم",
    nameEn: "GYM SET",
    price: 400,
    trader: "علي الصيني",
    images: ["06/1.jpg", "06/2.jpg", "06/3.jpg"]
  },
  {
    id: "home-07",
    nameAr: "بيجامه ستومك",
    nameEn: "STOMC PAJAMA",
    price: 350,
    trader: "مكتب الحراق",
    images: ["07/1.jpg", "07/2.jpg", "07/3.jpg", "07/4.jpg", "07/5.jpg", "07/6.jpg", "07/7.jpg", "07/8.jpg", "07/9.jpg", "07/10.jpg"]
  },
  {
    id: "home-08",
    nameAr: "بيجامه فيونكات",
    nameEn: "BOW PAJAMA",
    price: 350,
    trader: "مكتب الحراق",
    images: ["08/1.jpg", "08/2.jpg"]
  },
  {
    id: "home-09",
    nameAr: "بيجامه كاروهات حماله",
    nameEn: "PLAID STRAP PAJAMA",
    price: 350,
    trader: "مكتب الحراق",
    images: ["09/1.jpg", "09/2.jpg", "09/3.jpg"]
  },
  {
    id: "home-10",
    nameAr: "بيجامه كاروهات نص كم",
    nameEn: "PLAID HALF SLEEVE PAJAMA",
    price: 350,
    trader: "مكتب الحراق",
    images: ["10/1.jpg", "10/2.jpg", "10/3.jpg"]
  },
  {
    id: "home-11",
    nameAr: "كاش بزراير دبدوب",
    nameEn: "TEDDY CASH SET",
    price: 370,
    trader: "مكتب الحراق",
    images: ["11/1.jpg", "11/2.jpg"]
  },
  {
    id: "home-12",
    nameAr: "بيجامه سنو اند بيرد",
    nameEn: "SNOW & BIRD PAJAMA",
    price: 350,
    trader: "مكتب الحراق",
    images: ["12/1.jpg", "12/2.jpg", "12/3.jpg", "12/4.jpg"]
  },
  {
    id: "home-13",
    nameAr: "بيجامه فيونكات مضلع نص كم",
    nameEn: "HALF SLEEVE BOW PAJAMA",
    price: 350,
    trader: "مكتب الحراق",
    images: ["13/1.jpg", "13/2.jpg"]
  },
  {
    id: "home-14",
    nameAr: "بيجامه فراشه كت",
    nameEn: "BUTTERFLY CUT",
    price: 350,
    trader: "مكتب الحراق",
    images: ["14/1.jpg", "14/2.jpg", "14/3.jpg", "14/4.jpg", "14/5.jpg", "14/6.jpg", "14/7.jpg", "14/8.jpg", "14/9.jpg", "14/10.jpg"]
  },
  {
    id: "home-15",
    nameAr: "كاندي جيرل",
    nameEn: "CANDY GIRL",
    price: 375,
    trader: "مكتب الحراق",
    images: ["15/1.jpg", "15/2.jpg"]
  },
  {
    id: "home-16",
    nameAr: "نايت دريس",
    nameEn: "NIGHT DRSS",
    price: 250,
    trader: "مكتب الحراق",
    images: ["16/1.jpg", "16/2.jpg", "16/3.jpg", "16/4.jpg", "16/5.jpg", "16/6.jpg"]
  },
  {
    id: "home-17",
    nameAr: "بيجامه اوف شولدر",
    nameEn: "OFF SHOULDER PAJAMA",
    price: 350,
    trader: "مكتب الحراق",
    images: ["17/1.jpg", "17/2.jpg", "17/3.jpg", "17/4.jpg", "17/5.jpg", "17/6.jpg", "17/7.jpg", "17/8.jpg", "17/9.jpg", "17/10.jpg"]
  },
  {
    id: "home-18",
    nameAr: "كاش فراشه",
    nameEn: "BUTTERFLY CASH",
    price: 350,
    trader: "مكتب الحراق",
    images: ["18/1.jpg", "18/2.jpg", "18/3.jpg", "18/4.jpg", "18/5.jpg", "18/6.jpg", "18/7.jpg", "18/8.jpg", "18/9.jpg", "18/10.jpg"]
  },
  {
    id: "home-19",
    nameAr: "بجامه كت مشجرة",
    nameEn: "FLORAL PAJAMA",
    price: 300,
    trader: "مكتب الحراق",
    images: ["19/1.jpg"]
  },
  {
    id: "home-20",
    nameAr: "بيجامه ريب سادة",
    nameEn: "SOLD RIB PAJAMA",
    price: 350,
    trader: "مكتب الحراق",
    images: ["20/1.jpg", "20/2.jpg", "20/3.jpg", "20/4.jpg", "20/5.jpg", "20/6.jpg", "20/7.jpg"]
  },
  {
    id: "home-21",
    nameAr: "بجامه هالو ويك اند",
    nameEn: "HELLO WEEK END PAJAMA",
    price: 400,
    trader: "مكتب الحراق",
    images: ["21/1.jpg"]
  },
  {
    id: "home-22",
    nameAr: "بيجامه سكويز زا داي",
    nameEn: "SQOUZ THE DAY PAJAMA",
    price: 400,
    trader: "مكتب الحراق",
    images: ["22/1.jpg"]
  },
  {
    id: "home-23",
    nameAr: "بيجامه بي كيند",
    nameEn: "BE KIND PAJAMA",
    price: 340,
    trader: "مكتب الحراق",
    images: ["23/1.jpg"]
  },
  {
    id: "home-24",
    nameAr: "بيجامه سيموني قطعتين",
    nameEn: "SALMON PAJAMA 2PC",
    price: 400,
    trader: "مكتب الحراق",
    images: ["24/1.jpg", "24/2.jpg", "24/3.jpg"]
  },
  {
    id: "home-25",
    nameAr: "بيجامه صفرا قطعتين",
    nameEn: "YALLOW PAJAMA 2PC",
    price: 400,
    trader: "مكتب الحراق",
    images: ["25/1.jpg", "25/2.jpg", "25/3.jpg"]
  },
  {
    id: "home-26",
    nameAr: "بيجامه دبدوب كاروهات",
    nameEn: "TEDDY PAJAMA",
    price: 400,
    trader: "مكتب الحراق",
    images: ["26/1.jpg"]
  },
  {
    id: "home-27",
    nameAr: "فلور اند برد",
    nameEn: "FLOWER & BIRD",
    price: 400,
    trader: "مكتب الحراق",
    images: ["27/1.jpg"]
  },
  {
    id: "home-28",
    nameAr: "بيجامه فراشه",
    nameEn: "BUTTERFLY PAJAMA",
    price: 400,
    trader: "مكتب الحراق",
    images: ["28/1.jpg"]
  },
  {
    id: "home-29",
    nameAr: "بيجامه قطه",
    nameEn: "CAT PAJAMA",
    price: 400,
    trader: "مكتب الحراق",
    images: ["29/1.jpg"]
  },
  {
    id: "home-30",
    nameAr: "بيجامه فل كات",
    nameEn: "FULL CAT PAJAMA",
    price: 400,
    trader: "مكتب الحراق",
    images: ["30/1.jpg"]
  },
  {
    id: "home-31",
    nameAr: "بيجامه مامي باني",
    nameEn: "MAMMY BUNNY PAJAMA",
    price: 450,
    trader: "مكتب الحراق",
    images: ["31/1.jpg", "31/2.jpg"]
  },
  {
    id: "home-32",
    nameAr: "بيجامه كيوت جيرل",
    nameEn: "CUTE GIRL",
    price: 400,
    trader: "مكتب الحراق",
    images: ["32/1.jpg", "32/2.jpg", "32/3.jpg", "32/4.jpg", "32/5.jpg", "32/6.jpg", "32/7.jpg", "32/8.jpg"]
  },
  {
    id: "home-33",
    nameAr: "بيجامه بينك هارت",
    nameEn: "PINK HEART PAJAMA",
    price: 350,
    trader: "مكتب الحراق",
    images: ["33/1.jpg"]
  },
  {
    id: "home-34",
    nameAr: "بيجامه حمالات ريب مضلع",
    nameEn: "KNIT RIB PAJAMA",
    price: 350,
    trader: "مكتب الحراق",
    images: ["34/1.jpg", "34/2.jpg", "34/3.jpg", "34/4.jpg", "34/5.jpg", "34/6.jpg", "34/7.jpg", "34/8.jpg", "34/9.jpg", "34/10.jpg", "34/11.jpg", "34/12.jpg"]
  },
  {
    id: "home-35",
    nameAr: "بيجامه ريب مضلع زرار",
    nameEn: "KNIT RIB BUTTON PAJAMA",
    price: 350,
    trader: "مكتب الحراق",
    images: ["35/1.jpg", "35/2.jpg", "35/3.jpg", "35/4.jpg", "35/5.jpg"]
  },
  {
    id: "home-36",
    nameAr: "بيجامه تو تيدي",
    nameEn: "TOW TEDDY PAJAMA",
    price: 370,
    trader: "مكتب الحراق",
    images: ["36/1.jpg"]
  },
  {
    id: "home-37",
    nameAr: "بيجامه جيرل بور",
    nameEn: "GIRL POWER PAJAMA",
    price: 380,
    trader: "مكتب الحراق",
    images: ["37/1.jpg"]
  },
  {
    id: "home-38",
    nameAr: "كاش ريب مضلع",
    nameEn: "KINT RIB CASH",
    price: 300,
    trader: "مكتب الحراق",
    images: ["38/1.jpg", "38/2.jpg", "38/3.jpg", "38/4.jpg", "38/5.jpg", "38/6.jpg", "38/7.jpg", "38/8.jpg", "38/9.jpg", "38/10.jpg"]
  },
  {
    id: "home-39",
    nameAr: "ميني كاش",
    nameEn: "MINI CASH",
    price: 300,
    trader: "مكتب الحراق",
    images: ["39/1.jpg", "39/2.jpg", "39/3.jpg", "39/4.jpg", "39/5.jpg", "39/6.jpg", "39/7.jpg", "39/8.jpg", "39/9.jpg", "39/10.jpg", "39/11.jpg", "39/12.jpg", "39/13.jpg", "39/14.jpg", "39/15.jpg", "39/16.jpg"]
  },
  {
    id: "home-40",
    nameAr: "كاش و روب قطن",
    nameEn: "Cash & Robe",
    price: 350,
    trader: "مصنع كنزي",
    images: ["40/1.jpg", "40/2.jpg", "40/3.jpg"]
  },
  {
    id: "home-41",
    nameAr: "بيجامه قلب",
    nameEn: "HEART PAJAMA",
    price: 350,
    trader: "مصنع كنزي",
    images: ["41/1.jpg"]
  },
  {
    id: "home-42",
    nameAr: "كاش ستيتش",
    nameEn: "STITCH CASH",
    price: 300,
    trader: "مصنع كنزي",
    images: ["42/1.jpg", "42/2.jpg"]
  },
  {
    id: "home-43",
    nameAr: "بيجامه منقطه الوان",
    nameEn: "POLKA DOT PAJAMA",
    price: 300,
    trader: "مصنع كنزي",
    images: ["43/1.jpg", "43/2.jpg", "43/3.jpg"]
  },
  {
    id: "home-44",
    nameAr: "بيجامه كات فيونكات",
    nameEn: "CUT BOW PAJAMA",
    price: 350,
    trader: "مصنع كنزي",
    images: ["44/1.jpg", "44/2.jpg", "44/3.jpg", "44/4.jpg", "44/5.jpg"]
  }
];
