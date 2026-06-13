// Base de datos central de productos - Esmeralda's Cosmetic
// Edita este archivo para agregar, quitar o cambiar productos.
// Compatible con GitHub Pages: no usa base de datos ni servidor.
(function () {

  const productosRostro = [
            {
                id: 1,
                nombre: "Luis Torres X Beauty Creations - Paleta De Rostro Rubores Y Contorno - It's A Vibe",
                categoria: "Paleta de rostro",
                imagenes: [
                    "img/rostro/luistorresrubores/1.webp",
                    "img/rostro/luistorresrubores/2.webp", 
                    "img/rostro/luistorresrubores/3.webp",
                    "img/rostro/luistorresrubores/4.webp",
                    "img/rostro/luistorresrubores/5.webp",
                    "img/rostro/luistorresrubores/6.webp"  
                ],
                descripcion: "¡Qué onda plebes, ya estoy aquí! La colaboración de maquillaje más esperada ¡está aquí!  el Vol. 2 de la colección Luis Torres X Beauty Creations, el maquillista tapatío Luis Torres te sorprenderá con la paleta de rostro ideal para completar cualquier colección de maquillaje, encuentra 6 tonos en una sola paleta, incluye rubores, iluminadores y contornos, todo lo que necesitas para esculpir tu rostro y dejar tu base luciendo perfecta, completa tu makeup dando el toque final, su fórmula es fácil de difuminar y cuenta con duración increíble en tu rostro, retomando un tono imperdible de su primera colección con el tono Don't Stop no te pierdas adquiérela junto con la collab completa Luis Torres Vol.2 ¡No te arrepentirás!.",
                tag: "Luis Torres",
                tonos: null
            },
            {
                id: 2,
                nombre: "Flawless Stay - Corrector Liquido - Concealer",
                categoria: "Corrector",
                imagenes: [
                    "img/rostro/flawlessstay/principal.webp",
                    "img/rostro/flawlessstay/1.webp",
                    "img/rostro/flawlessstay/1a.jpg",
                    "img/rostro/flawlessstay/2.webp",
                    "img/rostro/flawlessstay/2a.webp",
                    "img/rostro/flawlessstay/3.webp",
                    "img/rostro/flawlessstay/3a.webp",
                    "img/rostro/flawlessstay/4.webp",
                    "img/rostro/flawlessstay/4a.webp",
                    "img/rostro/flawlessstay/5.webp",
                    "img/rostro/flawlessstay/5a.webp",
                    "img/rostro/flawlessstay/6.webp",
                    "img/rostro/flawlessstay/6a.jpg",
                    "img/rostro/flawlessstay/7.webp",
                    "img/rostro/flawlessstay/7a.webp",
                    "img/rostro/flawlessstay/8.webp",
                    "img/rostro/flawlessstay/8a.webp",
                    "img/rostro/flawlessstay/9.webp",
                    "img/rostro/flawlessstay/9a.webp",
                    "img/rostro/flawlessstay/10.webp",
                    "img/rostro/flawlessstay/10a.jpg",
                    "img/rostro/flawlessstay/11.webp",
                    "img/rostro/flawlessstay/11a.webp",
                    "img/rostro/flawlessstay/12.webp",
                    "img/rostro/flawlessstay/12a.webp",
                    "img/rostro/flawlessstay/13.webp",
                    "img/rostro/flawlessstay/13a.webp",
                    "img/rostro/flawlessstay/14.webp",
                    "img/rostro/flawlessstay/14a.webp",
                    "img/rostro/flawlessstay/15.webp",
                    "img/rostro/flawlessstay/15a.jpg",
                    "img/rostro/flawlessstay/16.webp",
                    "img/rostro/flawlessstay/16a.jpg",
                    "img/rostro/flawlessstay/17.webp",
                    "img/rostro/flawlessstay/17a.jpg",
                    "img/rostro/flawlessstay/18.webp",
                    "img/rostro/flawlessstay/18a.jpg",
                    "img/rostro/flawlessstay/19.webp",
                    "img/rostro/flawlessstay/19a.webp",
                    "img/rostro/flawlessstay/20.webp",
                    "img/rostro/flawlessstay/20a.jpg",
                    "img/rostro/flawlessstay/21.webp",
                    "img/rostro/flawlessstay/21a.jpg",
                    "img/rostro/flawlessstay/22.webp",
                    "img/rostro/flawlessstay/22a.webp",
                    "img/rostro/flawlessstay/23.webp",
                    "img/rostro/flawlessstay/23a.webp",
                    "img/rostro/flawlessstay/24.webp",
                    "img/rostro/flawlessstay/24a.jpg",
                    "img/rostro/flawlessstay/25.webp",
                    "img/rostro/flawlessstay/25a.webp",
                    "img/rostro/flawlessstay/final.webp",
                    "img/rostro/flawlessstay/final2.webp",
                    "img/rostro/flawlessstay/final3.webp"
                ],
                descripcion: "Fórmula ligera de esta base de maquillaje asegura que las imperfecciones desaparezcan. Su duración proporciona una cobertura de hasta 8 horas. 🥰 Cobertura media a alta. No se cuartea, Permite a la piel respirar, Cobertura construible, Para todo tipo de piel, Larga duración, Disimula imperfecciones",
                tag: null,
                tonos: [
                    { nombre: "FSC1", hex: "#F9E4D4" }, // Fair Porcelain
                    { nombre: "FSC2", hex: "#F3D2C1" },
                    { nombre: "FSC3", hex: "#EFD0CA" },
                    { nombre: "FSC4", hex: "#E8C5B0" },
                    { nombre: "FSC5", hex: "#E0B59E" }, // Light Ivory
                    { nombre: "FSC6", hex: "#D9A894" },
                    { nombre: "FSC7", hex: "#D4A88C" },
                    { nombre: "FSC8", hex: "#CC997A" },
                    { nombre: "FSC9", hex: "#C69679" }, // Medium Beige
                    { nombre: "FSC10", hex: "#BF8F6F" },
                    { nombre: "FSC11", hex: "#B58266" },
                    { nombre: "FSC12", hex: "#AD7A5E" },
                    { nombre: "FSC13", hex: "#A67055" }, // Tan
                    { nombre: "FSC14", hex: "#9E684D" },
                    { nombre: "FSC15", hex: "#965F44" },
                    { nombre: "FSC16", hex: "#8D5C43" },
                    { nombre: "FSC17", hex: "#85543D" }, // Dark Tan
                    { nombre: "FSC18", hex: "#7D4E37" },
                    { nombre: "FSC19", hex: "#754833" },
                    { nombre: "FSC20", hex: "#6D422E" },
                    { nombre: "FSC21", hex: "#653C2A" }, // Deep
                    { nombre: "FSC22", hex: "#5C3728" },
                    { nombre: "FSC23", hex: "#543124" },
                    { nombre: "FSC24", hex: "#4B2C20" },
                    { nombre: "FSC25", hex: "#3E2419" }  // Ebony
                
                ] 
            },
            {
                id: 3,
                nombre: "YeriMua X Beauty Creations - Fijador De Maquillaje - Unique Setting Spray",
                categoria: "Fijador",
                imagenes: [
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-x-yerimua-fijador-unique-setting-spray-fijador-de-maquillaje-cosmetics-ymss-781308.jpg?v=1723545682&width=900",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-x-yerimua-fijador-unique-setting-spray-fijador-de-maquillaje-cosmetics-ymss-495586.jpg?v=1723545698&width=900",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-x-yerimua-fijador-unique-setting-spray-fijador-de-maquillaje-cosmetics-ymss-756721.webp?v=1723545724&width=900",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-x-yerimua-fijador-unique-setting-spray-fijador-de-maquillaje-cosmetics-ymss-350327.jpg?v=1723545740&width=900"
                ],
                descripcion: "Beauty Creations X Yerimua - Fijador Unique Setting Spray - Fijador De Maquillaje ¿Listos para un acercamiento de cámara? El Fijador de maquillaje en spray de YeriMua te tendrá listo para lucir increíble. 🌺",
                tag: "Yeri Mua",
                tonos: null
            },
            {
                id: 4,
                nombre: "Fijador De Maquillaje - Setting Spray Con Aroma",
                categoria: "Fijador",
                imagenes: [
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-mx-fijador-de-maquillaje-con-aroma-cosmetics-spn04-837155.jpg?v=1757012706&width=900",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-mx-fijador-de-maquillaje-con-aroma-cosmetics-spn04-896455.jpg?v=1757012706&width=900",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-mx-fijador-de-maquillaje-con-aroma-cosmetics-spn05-463060.jpg?v=1757012706&width=900",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-mx-fijador-de-maquillaje-con-aroma-cosmetics-spn05-264733.jpg?v=1757012706&width=900",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-mx-fijador-de-maquillaje-con-aroma-cosmetics-spn08-468541.jpg?v=1757012706&width=900",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-mx-fijador-de-maquillaje-con-aroma-cosmetics-spn08-671186.jpg?v=1757012706&width=900",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-mx-fijador-de-maquillaje-con-aroma-cosmetics-spn07-215314.jpg?v=1757012706&width=900",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-mx-fijador-de-maquillaje-con-aroma-cosmetics-spn07-247313.jpg?v=1757012706&width=900"
                ],
                descripcion: "Descubre la magia de un maquillaje impecable con nuestro fijador de maquillaje, diseñado para mantener tu look fresco y radiante durante todo el día. Con una variedad de fragancias irresistibles, este spray ligero y no graso se adapta a todos los tipos de piel, ofreciendo una cobertura de larga duración que previene la oxidación y la migración del maquillaje.",
                tag: null,
                tonos: null
            },
            {
                id: 5,
                nombre: "Flawless Stay - Corrector De Color - Color Corrector",
                categoria: "Corrector",
                imagenes: [
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/GRAYBGFORECOMM_1_0addcdff-d9d1-4c3d-a1da-fbd2243989ba.png?v=1739231930&width=900",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-mx-corrector-flawless-stay-color-cosmetics-fs-cg-695828.jpg?v=1739231930&width=900",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-mx-corrector-flawless-stay-color-cosmetics-fs-cl-109755.jpg?v=1739231930&width=900",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-mx-corrector-flawless-stay-color-cosmetics-fs-cl-246710.jpg?v=1739231930&width=900",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-mx-corrector-flawless-stay-color-cosmetics-fs-co-610413.jpg?v=1739231930&width=900",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-mx-corrector-flawless-stay-color-cosmetics-fs-co-908528.jpg?v=1739231930&width=900",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-mx-corrector-flawless-stay-color-cosmetics-fs-cw-894470.jpg?v=1739231930&width=900",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-mx-corrector-flawless-stay-color-cosmetics-fs-cw-757019.jpg?v=1739231930&width=900",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/cy.jpg?v=1739231930&width=900",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-mx-corrector-flawless-stay-color-cosmetics-fs-cg-305699.jpg?v=1739231930&width=900"
                ],
                descripcion: "Descubre la magia de un maquillaje impecable con nuestro fijador de maquillaje, diseñado para mantener tu look fresco y radiante durante todo el día. Con una variedad de fragancias irresistibles, este spray ligero y no graso se adapta a todos los tipos de piel, ofreciendo una cobertura de larga duración que previene la oxidación y la migración del maquillaje.",
                tag: null,
                tonos: [
                    { nombre: "CG", hex: "#bfcc97" },
                    { nombre: "CL", hex: "#cec4cc" },
                    { nombre: "CO", hex: "#ac402b" },
                    { nombre: "CW", hex: "#ecebe7" },
                    { nombre: "CY", hex: "#f8deab" }
                ]
            },
            {
                id: 6,
                nombre: "Primer facial sin poros",
                categoria: "Primer",
                imagenes: [
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/PORELESS.jpg?v=1761696930&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/poreless-face-primer-face-beauty-creations-506247.jpg?v=1761696930&width=600"
                ],
                descripcion: `Minimiza tus poros al instante. Consigue un acabado mate e impecable.`,
                tag: "Tendencia",
                tonos: null,
            },
            {
                id: 7,
                nombre: "Polvos fijadores de Banana",
                categoria: "Polvos",
                imagenes: [
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/BANANA_POWDER_-_IPSY.png?v=1751059275&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/banana-setting-powder-face-beauty-creations-bsp01-917816.jpg?v=1751059275&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/PhotoOct24_63536PM.jpg?v=1751059275&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/PhotoOct24_63539PM_1.jpg?v=1751059275&width=600"
                ],
                descripcion: `Consigue un maquillaje impecable y duradero con nuestros Polvos Fijadores Banana. Estos polvos fijadores están diseñados por expertos para fijar el maquillaje, brindándote un acabado suave y uniforme. Su fórmula ligera ayuda a controlar el brillo, a la vez que añade un sutil tono amarillo para iluminar tu cutis. Disfruta de los beneficios de un maquillaje profesional y bien fijado durante todo el día.`,
                tag: null,
                tonos: null,
            },
            {
                id: 8,
                nombre: "Flawless Stay - Rubor En Barra - Blush Sticks",
                categoria: "Rubor",
                imagenes: [
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/Screenshot2025-02-24at9.43.49AM.png?v=1740419081&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/Screenshot2025-02-24at9.30.22AM.png?v=1740419081&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/Screenshot2025-03-05at10.54.18AM.png?v=1741200906&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/Screenshot2025-03-05at10.04.29AM.png?v=1741375148&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/COQUETTE-PINK-OPEN_a8d6d5b6-c233-49dd-9aba-9dc6cc859ab4.jpg?v=1741375148&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/BLUSH1-CoquettePink.png?v=1741375148&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/COQUETTE-PINK-BOX_9f09fe44-c8f5-4b02-948a-0230169884a8.jpg?v=1741375148&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/Screenshot2025-03-05at10.05.01AM.png?v=1741375148&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/PINK-ENERGY-OPEN_6b092502-9753-48b8-b2d8-8865ffdf313d.jpg?v=1741375148&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/BLUSH2-PinkEnergy.png?v=1749260573&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/PINK-ENERGY-BOX_372314ec-99da-4537-b92d-cc693dc5e3c0.jpg?v=1741375148&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/Screenshot2025-03-05at9.25.17AM_4d5b9e29-a5d5-4aec-8ad0-37b7f4049d4d.png?v=1741375148&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/FUCHSIA-THOUGHTS-OPEN_9d5d91a6-c565-4a44-b17c-116b943df31c.jpg?v=1741375148&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/BLUSH3-FuchsiaThoughts.png?v=1741375148&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/FUCHSIA-THOUGHTS-BOX_69eb8a2d-6f0a-43f0-986c-30fea7b5407f.jpg?v=1741375148&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/Screenshot2025-03-05at9.29.25AM.png?v=1741375148&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/MAUVE-PLEASE-OPEN_c2f22cfc-b38c-4ec9-af53-82e8a368f0f4.jpg?v=1741375148&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/BLUSH4-MauvePlease.png?v=1741375148&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/MAUVE-PLEASE-BOX_f074f1c6-57dd-4eef-884b-d7d062261f8e.jpg?v=1754437438&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/Screenshot2025-03-05at9.25.37AM_03b29b5b-a175-40fb-b2e2-0f7b1ed9b69c.png?v=1754437438&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/CORALLY-PERFECT-OPEN_f92a6200-1298-47dd-a8c9-edbb211f7263.jpg?v=1754437438&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/BLUSH5-CorallyPerfect.png?v=1754437438&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/CORALLY-PERFECT-BOX_152ea1b6-2473-443f-a9e3-8374c74b8973.jpg?v=1754437438&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/Screenshot2025-03-05at9.27.54AM.png?v=1754437438&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/BURGUNDY-FLUSH-OPEN_2d7e6346-787e-421a-9a79-4ff735a7b3ea.jpg?v=1754437438&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/BLUSH6-BurgundyFlush.png?v=1754437438&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/BURGUNDY-FLUSH-BOX_93ae1588-c93b-4f9d-9eea-f6e0f6f0b3ca.jpg?v=1741375148&width=600"
                 ],
                descripcion: `Consigue un maquillaje impecable y duradero con nuestros Polvos Fijadores Banana. Estos polvos fijadores están diseñados por expertos para fijar el maquillaje, brindándote un acabado suave y uniforme. Su fórmula ligera ayuda a controlar el brillo, a la vez que añade un sutil tono amarillo para iluminar tu cutis. Disfruta de los beneficios de un maquillaje profesional y bien fijado durante todo el día.`,
                tag: null,
                tonos: [
                    { nombre: "Coquete Pink", hex: "#ef8bad" },
                    { nombre: "Pink Energy", hex: "#ed4664" },
                    { nombre: "Fuchsia Thoughts", hex: "#bf4961" },
                    { nombre: "Mauve Please", hex: "#b05e60" },
                    { nombre: "Corally Perfect", hex: "#cb523d" },
                    { nombre: "Burgundy Flush", hex: "#882b3e" }
                ]
            },
             {
                id: 9,
                nombre: "Bye Filter - Polvo Fijador",
                categoria: "Polvos",
                imagenes: [
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bye-filter-polvo-rosa-ecom.webp?v=1753389323&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-mx-bye-filter-polvo-fijador-cosmetics-bfp04-970154.jpg?v=1753389323&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-mx-bye-filter-polvo-fijador-cosmetics-bfp04-251375.jpg?v=1753389323&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-mx-bye-filter-polvo-fijador-cosmetics-bfp04-487296.jpg?v=1753389323&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-mx-bye-filter-polvo-fijador-cosmetics-bfp04-477363.jpg?v=1753389323&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-mx-bye-filter-polvo-fijador-cosmetics-bfp02-273271.webp?v=1753389323&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-mx-bye-filter-polvo-fijador-cosmetics-bfp02-508902.webp?v=1753389323&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-mx-bye-filter-polvo-fijador-cosmetics-bfp02-583181.webp?v=1753389323&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-mx-bye-filter-polvo-fijador-cosmetics-bfp02-918940.webp?v=1753389323&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-mx-bye-filter-polvo-fijador-cosmetics-bfp03-652028.webp?v=1753389323&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-mx-bye-filter-polvo-fijador-cosmetics-bfp03-598759.webp?v=1753389323&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-mx-bye-filter-polvo-fijador-cosmetics-bfp03-673811.webp?v=1753389323&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-mx-bye-filter-polvo-fijador-cosmetics-bfp01-340036.webp?v=1753389323&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-mx-bye-filter-polvo-fijador-cosmetics-bfp01-224901.webp?v=1753389323&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-mx-bye-filter-polvo-fijador-cosmetics-bfp01-712022.webp?v=1753389323&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-mx-bye-filter-polvo-fijador-cosmetics-bfp01-537818.webp?v=1753389323&width=600"
                ],
                descripcion: `Descubre la magia de la perfección en tu rutina de maquillaje con nuestra exclusiva colección de polvos fijadores. Estos polvos sueltos, ligeros como el aire, son ideales para mantener tu maquillaje intacto durante 14 horas, mientras difuminan las imperfecciones y ofrecen un acabado mate aterciopelado que resalta tu belleza natural. 💞☁️

CRUELTY FREE
SIN PARABENOS
SIN SULFATOS
ACABADO MATE
SIN TALCO
FÓRMULA POLVO SUELTO
LARGA DURACIÓN
DIFUMINA VISIBLEMENTE LAS LÍNEAS DE EXPRESIÓN
MEJORA EL ASPECTO DE LA PIEL CON TEXTURA
CONTROL DEL BRILLO
TONO UNIVERSAL
FIJA E ILUMINA
APORTA UN TOQUE DE COLOR NATURAL
USALO DEBAJO DE LOS OJOS Y EN TUS MEJILLAS
14 HORAS DE USO
LIGEREZA
Nuestros polvos son perfectos para todo tipo de piel y diseñados para iluminar áreas específicas como la zona de ojeras, logrando un acabado radiante y fresco. Con subtonos que se adaptan a diferentes tonos de piel, estos polvos se convierten en un aliado imprescindible para un maquillaje impecable. Desde un acabado mate hasta una iluminación cálida, cada aplicación te hará sentir lista para cualquier ocasión.

Refresca tu piel y mantén tu maquillaje fijo con un aspecto aterciopelado durante todo el día. ¡No esperes más para disfrutar de una piel radiante y brillante! Adquiere tu polvo fijador favorito y transforma tu rutina de belleza en un verdadero ritual de glamour. 💅🥰💋❤️‍🔥`,
                tag: "Tendencia",
                tonos: [
                    { nombre: "Pink Cloud", hex: "#f5b3bf" },
                    { nombre: "Butternut Babe", hex: "#e7c3b5" },
                    { nombre: "Honey Me", hex: "#eccea6" },
                    { nombre: "Translucent Dream", hex: "#e6bfa5" }
                ]
            },
             {
                id: 10,
                nombre: "Oh Deer Christmas - Paleta de Sombras Y Rostro",
                categoria: "Paleta de sombras",
                imagenes: [
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/Post-08.jpg?v=1731607638&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/e4545a10-3ec7-42b0-8fce-a9fec054716c_2.jpg?v=1731607660&width=600"
                ],
                descripcion: `¡Esparce el espíritu navideño con la Paleta de Sombras y Rostro Oh Deer Christmas!

Esta festiva paleta incluye 12 sombras de alto impacto, tanto mates como brillantes, que puedes usar para crear el look navideño perfecto, además de un iluminador multidimensional y un rubor mate suave que se complementan a la perfección.`,
                tag: null,
                tonos: null,
            },
             {
                id: 11,
                nombre: "Rosy McMichael X Beauty Creations - Paleta De Iluminadores - Rosy's Highlighters",
                categoria: "Iluminador",
                imagenes: [
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-paleta-de-iluminadores-rosys-highlighters-rosy-mcmichael-x-beauty-creations-vol-2-candyrack-generated-rmv2fp3-403306.jpg?v=1742248783&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-paleta-de-iluminadores-rosys-highlighters-rosy-mcmichael-x-beauty-creations-vol-2-candyrack-generated-rmv2fp3-664905.jpg?v=1742248783&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-paleta-de-iluminadores-rosys-highlighters-rosy-mcmichael-x-beauty-creations-vol-2-candyrack-generated-rmv2fp3-179358.jpg?v=1723557322&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-paleta-de-iluminadores-rosys-highlighters-rosy-mcmichael-x-beauty-creations-vol-2-candyrack-generated-rmv2fp3-262821.webp?v=1742248783&width=600"
                
                ],
                descripcion: `Conoce la Paleta De Iluminadores, perfecta para cualquier ocasión, el trio de combos perfectos para obtener iluminaciones desde la más sutil hasta lo más reflectivo. ¡Simplemente Dedícate a Brillar!  

Incluye:

Luna - Crema Nacarada
Foco - Blanco Champán
Sol - Oro Verdadero`,
                tag: "Edición Especial",
                tonos: null,
            },
            {
                id: 12,
                nombre: "Flawless Stay - Primer Para Base Alta Fijación - Grip Primer",
                categoria: "Primer",
                imagenes: [
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/primer-grip-ecom.webp?v=1753387453&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/GRIP1.jpg?v=1761935764&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-cosmetics-mx-beauty-creations-flawless-stay-grip-primer-fsgp-294596.jpg?v=1761935764&width=600"
                ],
                descripcion: `Un primer hidratante en gel pegajoso sin aceite que calma, prepara y rellena la piel para un maquillaje que se mantiene todo el día.

VEGANO
LIBRE DE CRUELDAD
SIN SILICONA
SIN ACEITE`,
                tag: "Nuevo",
                tonos: null,
            },
            {
                id: 13,
                nombre: "Flawless Stay - Primer Para Base Alta Fijación - Grip Primer",
                categoria: "Paleta de sombras", 
                imagenes: [
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/PALETTE_BW.jpg?v=1738860098&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/PALETTE_SWATCH.jpg?v=1738860165&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/22.png?v=1738860165&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/Screenshot2025-01-29at12.55.00PM.png?v=1738860165&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/1-Eyeshadow.png?v=1738860165&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/2-Eyeshadow.png?v=1738860165&width=600"
                 ],
                descripcion: `Desata tu lado audaz y juguetón con la Paleta de Sombras y Rubores "Unafraid to Be Me" de Betty Boop x Beauty Creations.
Esta paleta versátil reúne impresionantes tonos de sombras y rubores para ayudarte a crear looks confiados y glamurosos, inspirados en el encanto atemporal de Betty Boop.

Sombras:

Boop Love: Beige apagado (mate)
Pudgy: Marrón frío de tono medio (mate)
Bold: Espresso profundo (mate)
Strong: Bronce apagado con reflejos plateados (brillo)
Savvy: Beige neutro (mate)
Sweet: Rojo marrón (mate)
Feisty: Rojo cereza (mate)
Quirky: Perla metálica (brillo)
Rubores:

Classy: Rosa de tono medio (mate)
Confident: Rojo baya (mate)
Características principales:
Sombras de alta pigmentación con un color intenso
Fórmulas fáciles de difuminar y construir para ojos y rostro
Mezcla versátil de acabados mates y con brillo
Diseño compacto y fácil de llevar, con nostalgia de Betty Boop

¿Por qué te encantará?

Paleta todo-en-uno para ojos y mejillas
Perfecta para looks audaces, de todos los días o glamurosos
Cruelty-free`,
                tag: null,
                tonos: null,
            },
             {
                id: 14,
                nombre: "Flawless Stay - Iluminador Líquido - Glow Up Wands",
                categoria: "Iluminador",
                imagenes: [
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/GLOW-UP-COLL-LOW.jpg?v=1724885538&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/GLOW-UP-SWS-LOW.jpg?v=1724885538&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/2_ddfef2d3-d246-4bea-b83d-0a211003ddbf.png?v=1739234902&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/GLOW-UP-WHITE-GEM.jpg?v=1739234902&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/HIGHLIGHT-WHITE-GEM.jpg?v=1739234902&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/GLOW-UP-CHAMPAGNE-DAZZLE-OPEN.jpg?v=1739234902&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/GLOW-UP-CHAMPAGNE-DAZZLE_ca7affe5-2e31-4b3c-a087-7f50da771fd7.jpg?v=1739234902&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/HIGHLIGHT-CHAMPAGNE-DAZZLE.jpg?v=1739234902&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/GLOW-UP-BUBBLING-ROSE-OPEN.jpg?v=1739234902&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/GLOW-UP-BUBBLING-ROSE.jpg?v=1739234902&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/HIGHLIGHT-BUBBLY-ROSE.jpg?v=1739234902&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/GLOW-UP-HONEY-GOLD-OPEN.jpg?v=1739234902&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/GLOW-UP-HONEY-GOLD.jpg?v=1739234902&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/HIGHLIGHT-HONEY-GOLD.jpg?v=1739234902&width=600"
                ],
                descripcion: `¡Despierta tu brillo interior con el iluminador líquido Glow Up Wand de Flawless Stay!
Este iluminador es tu boleto a un brillo radiante, que se logra desde adentro sin esfuerzo y de manera sorprendente. Su fórmula liviana y modulable te permite personalizar tu luminosidad, ya sea que busques un brillo sutil o un destello deslumbrante que robe la atención.

El aplicador inteligente se desliza con precisión, lo que hace que sea muy fácil resaltar tus rasgos favoritos. Este iluminador, enriquecido con ingredientes que aman la piel, no solo brilla, sino que también hidrata y nutre tu piel, lo que garantiza que te mantengas luminosa y fresca todo el día.

Adecuado para todos los tonos de piel, el Glow Up Wand se difumina a la perfección, lo que te brinda ese acabado perfecto y húmedo que hace que todas las miradas se vuelvan y los corazones se agiten. ¿Estás lista para brillar como nunca antes? ¡Tu resplandor comienza aquí!

¿Qué hace que este producto sea imprescindible?

4 tonos
Acabado luminoso
Vitamina E
Ácido hialurónico
Aplicador con punta de esponja`,
                tag: null,
                tonos: [
                    { nombre: "White Gem", hex: "#f6f6f6" },
                    { nombre: "Champagne Dazzle", hex: "#f5dbc4" },
                    { nombre: "Bubbling Rose", hex: "#c79e85" },
                    { nombre: "Honey Gold", hex: "#af7957" }
                ]
            },
             {
                id: 15,
                nombre: "Floral Bloom - Paleta De Rubores - Blush",
                categoria: "Rubor",
                imagenes: [
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-floral-bloom-blush-paleta-de-rubores-cosmetics-bf01-152807.jpg?v=1739234246&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-floral-bloom-blush-paleta-de-rubores-cosmetics-bf01-803803.jpg?v=1739234246&width=600"
                ],
                descripcion: `Esta paleta de 6 tonos ofrece colores desde tonos naturales hasta tonos más atrevidos para un look moderno y único. ¡Dile adiós al aburrimiento y déjate seducir por Floral Bloom! ¡Pruébalo hoy! 💅🥰💋❤️🔥`,
                tag: null,
                tonos: null,
            },
            {
                id: 16,
                nombre: "Floral Bloom - Paleta De Contorno E Iluminador - Highlight And Contour",
                categoria: "Iluminador",
                imagenes: [
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-floral-bloom-highlight-and-contour-paleta-de-contorno-e-iluminador-cosmetics-cf01-125447.jpg?v=1739233628&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-floral-bloom-highlight-and-contour-paleta-de-contorno-e-iluminador-cosmetics-cf01-245018.jpg?v=1739233628&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-floral-bloom-highlight-and-contour-paleta-de-contorno-e-iluminador-cosmetics-cf01-864068.jpg?v=1739233628&width=600"
                ],
                descripcion: `Estas sombras son suaves, acentúan preciosamente la piel y se pueden mezclar para un acabado totalmente personalizado. ¡Aplica los tonos e ilumina tu piel! 💅🥰💋❤️🔥`,
                tag: null,
                tonos: null,
            },
            {
                id: 17,
                nombre: "Stay Blushin' Cute - Bálsamo Para Labios y Mejillas",
                categoria: "Balsamo",
                imagenes: [
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/stay-blushing-cute-lip-and-cheek-balm-various-shades-beauty-creations-sbcb02-871252.jpg?v=1723560056&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/stay-blushing-cute-lip-and-cheek-balm-various-shades-beauty-creations-sbcb02-618530.gif?v=1739234119&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-stay-blushing-cute-balsamo-para-labios-y-mejillas-cosmetics-sbcb02-228109.webp?v=1739234119&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-stay-blushing-cute-balsamo-para-labios-y-mejillas-cosmetics-sbcb02-564474.webp?v=1739234119&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/GRAYBGFORECOMM_1_dec3e833-8252-42e3-ae06-729ff31b75fb.png?v=1739234119&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-stay-blushing-cute-balsamo-para-labios-y-mejillas-cosmetics-sbcb02-276058.webp?v=1739234119&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-stay-blushing-cute-balsamo-para-labios-y-mejillas-cosmetics-sbcb02-955064.webp?v=1739234119&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-stay-blushing-cute-balsamo-para-labios-y-mejillas-cosmetics-sbcb08-121609.webp?v=1739234119&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-stay-blushing-cute-balsamo-para-labios-y-mejillas-cosmetics-sbcb08-991281.webp?v=1739234119&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-stay-blushing-cute-balsamo-para-labios-y-mejillas-cosmetics-sbcb08-987366.webp?v=1739234119&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-stay-blushing-cute-balsamo-para-labios-y-mejillas-cosmetics-sbcb06-895366.webp?v=1739234119&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-stay-blushing-cute-balsamo-para-labios-y-mejillas-cosmetics-sbcb06-872584.webp?v=1739234119&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-stay-blushing-cute-balsamo-para-labios-y-mejillas-cosmetics-sbcb06-690308.webp?v=1739234119&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-stay-blushing-cute-balsamo-para-labios-y-mejillas-cosmetics-sbcb03-178681.webp?v=1739234119&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-stay-blushing-cute-balsamo-para-labios-y-mejillas-cosmetics-sbcb03-245482.webp?v=1739234119&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-stay-blushing-cute-balsamo-para-labios-y-mejillas-cosmetics-sbcb03-969588.webp?v=1739234119&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-stay-blushing-cute-balsamo-para-labios-y-mejillas-cosmetics-sbcb01-141132.webp?v=1739234119&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-stay-blushing-cute-balsamo-para-labios-y-mejillas-cosmetics-sbcb01-899285.webp?v=1739234119&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-stay-blushing-cute-balsamo-para-labios-y-mejillas-cosmetics-sbcb01-637957.webp?v=1739234119&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-stay-blushing-cute-balsamo-para-labios-y-mejillas-cosmetics-sbcb04-339927.webp?v=1739234119&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-stay-blushing-cute-balsamo-para-labios-y-mejillas-cosmetics-sbcb04-454313.webp?v=1739234119&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-stay-blushing-cute-balsamo-para-labios-y-mejillas-cosmetics-sbcb04-542403.webp?v=1739234119&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-stay-blushing-cute-balsamo-para-labios-y-mejillas-cosmetics-sbcb07-634239.webp?v=1739234119&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-stay-blushing-cute-balsamo-para-labios-y-mejillas-cosmetics-sbcb07-594217.webp?v=1739234119&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-stay-blushing-cute-balsamo-para-labios-y-mejillas-cosmetics-sbcb07-197688.webp?v=1739234119&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-stay-blushing-cute-balsamo-para-labios-y-mejillas-cosmetics-sbcb05-748077.webp?v=1739234119&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-stay-blushing-cute-balsamo-para-labios-y-mejillas-cosmetics-sbcb05-618703.webp?v=1739234119&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-stay-blushing-cute-balsamo-para-labios-y-mejillas-cosmetics-sbcb05-133652.webp?v=1739234119&width=600"
                    ],
                descripcion: `Te ofrece la exclusiva combinación de un labial y un bálsamo con una textura suave y cremosa. Su fórmula de nutritivos aceites y un suave aroma a vainilla te permitirán tener los labios y mejillas hidratados y con un brillo natural que te hará lucir bella y radiante. ¡Empieza a usar el Bálsamo Para Labios y Mejillas de Beauty Creations para lucir un atractivo rubor en tu piel! ¡Pruébalo ahora! 🥰`,
                tag: null,
                tonos:  [
                    { nombre: "As Usual", hex: "#e19392" },
                    { nombre: "I can & I Will", hex: "#af6268" },
                    { nombre: "Born To Make It", hex: "#ca8c8b" },
                    { nombre: "he´s Got It", hex: "#d36d78" },
                    { nombre: "Sayless", hex: "#ec8481" },
                    { nombre: "Neverending", hex: "#de3a3b" },
                    { nombre: "Dare Me", hex: "#deaac1" },
                    { nombre: "Don´t Say It Twice", hex: "#bb625a" }
                ]
            },
             {
                id: 18,
                nombre: "Flawless Stay - Base Líquida Liquid Foundation",
                categoria: "Base",
                imagenes: [
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/base-de-maquillaje-liquida-ecom.webp?v=1753388280&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/ff-low_1.jpg?v=1753388280&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/guia-de-color-base-liquida-ecom.webp?v=1753388725&width=850",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-mx-base-liquida-flawless-stay-cosmetics-fs10-900673.jpg?v=1753388725&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-mx-base-liquida-flawless-stay-cosmetics-fs10-207737.jpg?v=1753388725&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-mx-base-liquida-flawless-stay-cosmetics-fs15-690887.jpg?v=1753388725&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-mx-base-liquida-flawless-stay-cosmetics-fs100-858878.jpg?v=1753388725&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-mx-base-liquida-flawless-stay-cosmetics-fs110-911798.jpg?v=1753388725&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-mx-base-liquida-flawless-stay-cosmetics-fs120-451368.jpg?v=1753388725&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-mx-base-liquida-flawless-stay-cosmetics-fs125-925688.jpg?v=1753388725&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-mx-base-liquida-flawless-stay-cosmetics-fs105-842923.jpg?v=1753388725&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-mx-base-liquida-flawless-stay-cosmetics-fs25-619019.jpg?v=1753388725&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-mx-base-liquida-flawless-stay-cosmetics-fs41-286740.webp?v=1753388725&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-mx-base-liquida-flawless-stay-cosmetics-fs30-523826.jpg?v=1753388725&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-mx-base-liquida-flawless-stay-cosmetics-fs45-836003.jpg?v=1753388725&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-mx-base-liquida-flawless-stay-cosmetics-fs35-226108.jpg?v=1753388725&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-mx-base-liquida-flawless-stay-cosmetics-fs46-389779.jpg?v=1753388725&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-mx-base-liquida-flawless-stay-cosmetics-fs36-807883.webp?v=1753388725&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-mx-base-liquida-flawless-stay-cosmetics-fs40-738800.jpg?v=1753388725&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-mx-base-liquida-flawless-stay-cosmetics-fs50-360277.jpg?v=1753388725&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-mx-base-liquida-flawless-stay-cosmetics-fs10-518042.jpg?v=1753388725&width=600"
                ],
                descripcion: `Con un acabado natural, formulada con pigmentos que disminuyen las imperfecciones y con cobertura media a alta.
Para pieles de grasas a secas, disponible en 24 tonos.

-Acabado satinado
-Libre de aceites
-Hidratante
-Larga duración
-Formula ligera
-Con vitamina E

El color de la base puede variar una vez aplicada en la piel. 🥰💋❤️‍🔥`,
                tag: "Nuevo",
                tonos: [
    { nombre: "1.0 - Warm", hex: "#F7E6D0" },
    { nombre: "1.5 - Neutral", hex: "#F3DFC6" },
    { nombre: "2.0 - Warm", hex: "#EFD8B9" },
    { nombre: "2.5 - Warm", hex: "#EBD1B0" },
    { nombre: "3.0 - Cool", hex: "#E4C9A9" },
    { nombre: "3.5 - Neutral", hex: "#DEC2A3" },
    { nombre: "4.0 - Warm", hex: "#D9BA96" },
    { nombre: "4.5 - Warm", hex: "#D4B38F" },
    { nombre: "5.0 - Neutral", hex: "#CFAB88" },
    { nombre: "5.5 - Warm", hex: "#CAA481" },
    { nombre: "6.0 - Warm", hex: "#C59C79" },
    { nombre: "6.5 - Cool", hex: "#BF9472" },
    { nombre: "7.0 - Neutral", hex: "#B98D6B" },
    { nombre: "7.5 - Warm", hex: "#B38564" },
    { nombre: "8.0 - Warm", hex: "#AD7D5D" },
    { nombre: "8.5 - Warm", hex: "#A77656" },
    { nombre: "9.0 - Neutral", hex: "#A06E4F" },
    { nombre: "9.5 - Cool", hex: "#996749" },
    { nombre: "10 - Warm", hex: "#925F42" },
    { nombre: "10.5 - Neutral", hex: "#8B583C" },
    { nombre: "11 - Cool", hex: "#835036" },
    { nombre: "11.5 - Cool", hex: "#6E3F2A" },
    { nombre: "12 - Cool", hex: "#593021" },
    { nombre: "12.5 - Neutral", hex: "#422116" }
]
            },
             {
                id: 19,
                nombre: "Bratz X Beauty Creations - Labial Y Rubor En Crema - Party Line Cell Phone",
                categoria: "Rubor",
                imagenes: [
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/Phone.jpg?v=1757109127&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/CEL-2.jpg?v=1757109127&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/fotos-app-bratz.jpg?v=1730429623&width=600"
                ],
                descripcion: `Únete a la fiesta con Bratz X Beauty Creations Party Line Lip y Cheek Cream Cell Phone. Con este labial y rubor en uno, podrás estar lista para cualquier ocasión en un instante.¡Luce como una verdadera diva de los 2000 con este celular único y multifuncional!

DESCRIPCIÓN DE COLOR 

STYLE IT! (MELOCOTÓN CALIDO)
LOVE IT! (SALMON SUAVE)
ROCK IT!(ROSA MALVA APOTADO) 
XPRESS IT (BAYA) 
MOTIVOS POR LOS CUALES LO AMARAS:

EDIFICABLE
MULTIUSO
ACABADO MATE
ALTAMENTE PIGMENTADO
TONOS SUTILES
HIDRATACIÓN
CON VITAMINA E 
LIBRE DE CRUELDAD 
LIBRE DE SULFATOS 
LIBRE DE PARABENOS 
PARA TODOS LOS TONOS DE PIEL`,
                tag: null,
                tonos: null,
            },
             {
                id: 20,
                nombre: "Blush Hush - Rubores",
                categoria: "Rubor",
                imagenes: [
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-mx-rubor-blush-hush-matte-cosmetics-sb05-892053.webp?v=1723574285&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-mx-rubor-blush-hush-matte-cosmetics-sb10-226260.jpg?v=1723574345&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-mx-rubor-blush-hush-matte-cosmetics-sb07-465122.webp?v=1723574379&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-mx-rubor-blush-hush-matte-cosmetics-sb03-974856.jpg?v=1745969306&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-mx-rubor-blush-hush-matte-cosmetics-sb04-355450.webp?v=1723574585&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-mx-rubor-blush-hush-matte-cosmetics-sb02-332503.webp?v=1723574617&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-mx-rubor-blush-hush-matte-cosmetics-sb09-566340.webp?v=1723574661&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-mx-rubor-blush-hush-matte-cosmetics-sb12-430315.jpg?v=1723574679&width=600"
                ],
                descripcion: `Descubre nuestra colección de rubores, diseñada para realzar tu belleza con un acabado mate y una fórmula ligera y cremosa. Cada rubor proporciona un toque de color que se funde suavemente en la piel, ofreciendo un acabado aterciopelado que te hará lucir radiante durante todo el día. ¿Te atreves a brillar? ¡Es hora de darle vida a tus mejillas!

La intensa pigmentación de estos rubores asegura que cada aplicación sea perfecta, permitiéndote lograr un look natural y luminoso. Con una duración prolongada, estos rubores son ideales para cualquier ocasión, desde un día casual hasta una noche especial. Su textura mate no solo aporta frescura, sino que también permite un acabado espectacular que realza tus rasgos.

Ya sea que busques un toque de calidez o un resplandor saludable, esta línea de rubores tiene la opción perfecta para ti. Su aplicación es sencilla, y se deslizan suavemente sobre la piel, brindando un acabado sutilmente brillante que ilumina tu rostro. ¡Intenta añadir un poco de magia a tu rutina de belleza con estos rubores irresistibles!

Con cada rubor, puedes experimentar una variedad de looks, desde el más discreto hasta el más audaz. Todos están formulados para ofrecer un color vibrante y una textura que no se desvanece, lo que garantiza que siempre luzcas increíble. ¡No esperes más para deslumbrar y resaltar tu belleza única!

¡Añade estos rubores a tu colección de maquillaje y disfruta de un acabado perfecto que te acompañará durante todo el día! Atrévete a explorar tu lado más hermoso y descubre el rubor que se convertirá en tu favorito. ¡Haz tu compra ahora y transforma tu look con Beauty Creations! 💅🥰💋❤️‍🔥`,
                tag: null,
                tonos: null,
            },
             {
                id: 21,
                nombre: "Pretty Pressed - Polvo Compacto Fijador",
                categoria: "Polvos",
                imagenes: [
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/FOUNDATION12.jpg?v=1749770449&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/FOUNDATION20.jpg?v=1749770449&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/SHEER-PERF-OPEN.jpg?v=1749770449&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/BARELY-BEIGE-OPEN.jpg?v=1749770449&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/VERY-VANILLA-OPEN.jpg?v=1749770449&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/OH-HONEY-OPEN.jpg?v=1749770449&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/1_24_2.jpg?v=1749770449&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/PINK-ABOUT-IT-OPEN.jpg?v=1749770449&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/NATUALLY-GOLDEN-OPEN.jpg?v=1749770449&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/CINNAMINUTE-OPEN.jpg?v=1749770449&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/PEACH_687f0ac1-fa18-45d6-9dd7-170f5a747e59.jpg?v=1749770449&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/1_30_1.jpg?v=1749770449&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/armswatchespp.jpg?v=1749770449&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/facegridpp.png?v=1749770325&width=600",
                    
                ],
                descripcion: `Fija, suaviza y perfecciona tu look con el Pretty Pressed Setting Powder. Esta fórmula ultraligera, vegana y libre de crueldad animal ofrece un acabado mate y suave con efecto difuminado para un look impecable y con efecto aerógrafo. Enriquecido con almidón de arroz absorbente de grasa y Vitamina E acondicionadora, mantiene tu piel libre de brillo sin resecar.

Perfecto para sellar el maquillaje debajo de los ojos, en la zona T o en todo el rostro para una duración prolongada.

Beneficios clave

Acabado mate y de larga duración

Ligero con efecto soft-focus

Ayuda a controlar la grasa y reducir el brillo

Suave con la piel y con beneficios para el cuidado facial

Vegano y libre de crueldad

Disponible en 8 tonos translúcidos:

Sheer Perfection – Translúcido. Un tono universal para sellar todo el rostro.

Barely Beige – Subtono frío para pieles claras. Ilumina mientras sella.

Very Vanilla – Subtono neutro para pieles claras. Sella e ilumina de forma natural.

Oh Honey! – Subtono cálido para pieles de claras a medias. Aporta calidez y brillo.

Pink About It – Rosa intenso con subtono frío. Ilumina pieles de claras a medias.

Peach Please – Subtono durazno cálido para pieles de medias a claras-medias.

Naturally Golden – Subtono dorado cálido para pieles de tono medio a profundo.

Cinna’Minute – Subtono bronce cálido para pieles oscuras a muy oscuras.`,
                tag: null,
                tonos: [
    { nombre: "1 - SHEER PERFECTION", hex: "#F6E8DA" },
    { nombre: "2 - BARELY BEIGE", hex: "#F1E0CA" },
    { nombre: "3 - VERY VANILLA", hex: "#EEDBC0" },
    { nombre: "4 - OH HONEY!", hex: "#E6CFAA" },
    { nombre: "5 - PINK ABOUT IT", hex: "#F3D5D9" },
    { nombre: "6 - PEACH PLEASE!", hex: "#E8CBB0" },
    { nombre: "7 - NATURALLY GOLDEN", hex: "#E5C591" },
    { nombre: "8 - CINNA'MINUTE", hex: "#D6A579" }
]
            },
             {
                id: 22,
                nombre: "Final Finish - Iluminador - Baked Highlighter",
                categoria: "Iluminador",
                imagenes: [
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/POST2.jpg?v=1747694868&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/1_3db37048-ee88-4c16-86b1-c323a3e68bec.png?v=1747694868&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/FINAL-FINISH-BOX-DIAMOND-BLIND.png?v=1747694868&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/FINAL-FINISH-OPEN-COMPACT-FLASHY.png?v=1747694868&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/FINAL-FINISH-BOX-FLASHY.png?v=1747694868&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/FINAL-FINISH-OPEN-COMPACT-PARTY-EFFECT.png?v=1747694868&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/FINAL-FINISH-BOX-PARTY-EFFECT.png?v=1747694868&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/FINAL-FINISH-OPEN-COMPACT-FLIRTINI.png?v=1747694868&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/FINAL-FINISH-BOX-FLIRTINI.png?v=1747694868&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/FINAL-FINISH-OPEN-COMPACT-MY-ERA.png?v=1747694868&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/FINAL-FINISH-BOX-MY-ERA.png?v=1747694868&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/FINAL-FINISH-OPEN-COMPACT-TIME-OF-YOUR-LIFE.png?v=1747694868&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/FINAL-FINISH-BOX-TIME-OF-YOUR-LIFE.png?v=1747694868&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/FINAL-FINISH-OPEN-COMPACT-GOLDEN-MIND.png?v=1747694868&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/FINAL-FINISH-BOX-GOLDEN-MIND.png?v=1747694868&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/FINAL-FINISH-OPEN-COMPACT-GOLD-FASHIONED.png?v=1747694868&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/FINAL-FINISH-BOX-GOLD-FASHIONED.png?v=1747694868&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/1_57a5abdc-f83a-4744-ab76-641da97d8a51.jpg?v=1747694868&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/FINAL-FINISH-OPEN-COMPACT-DIAMOND-BLIND.png?v=1744307286&width=600"
                ],
                descripcion: `Presentamos lo último en captación de brillo: Final Finish Baked Highlighter.

¡Un polvo compacto que es tan ligero como una pluma y tan mágico como la varita de un hada madrina! Con solo una pasada, este polvo baila sobre tu piel, fusionándose perfectamente para obtener un brillo radiante al instante que te hará sentir como si hubieras salido de un sueño.

No hay necesidad de interminables retoques: esta fórmula cubre y te brinda un acabado impecable que es puro encanto sin esfuerzo.

Libre de crueldad
Sin parabenos
Libre de sulfato
Fórmula en polvo prensado
Altamente pigmentado
Mezcla fácil`,
                tag: null,
                tonos: null,
            },
             {
                id: 23,
                nombre: "Flawless Stay Matte Foundation - Base De Maquillaje Líquida Mate",
                categoria: "Base",
                imagenes: [
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/FOUNDATION4.jpg?v=1749683327&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/FOUNDATION8-1_1.jpg?v=1749755478&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/armswatchesspanish.jpg?v=1749755478&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/antes_y_despues_matte_f.jpg?v=1749770312&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/face_grid_matte_f.jpg?v=1749770312&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/1N.jpg?v=1749770312&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/2N.jpg?v=1749770312&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/3C.jpg?v=1749770312&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/4W.jpg?v=1749770312&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/MUY_CLARA_ECOMM.jpg?v=1749770312&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/5N.jpg?v=1749770312&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/6N.jpg?v=1749770312&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/7N.jpg?v=1749770312&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/8W.jpg?v=1749770312&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/9C.jpg?v=1749770312&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/CLARA_ECOMM.jpg?v=1749770312&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/10WG.jpg?v=1749770312&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/11NG.jpg?v=1749770312&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/12C.jpg?v=1749770312&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/13W.jpg?v=1749770312&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/14GO.jpg?v=1749770312&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/CLARA_A_MEDIA_ECOMM.jpg?v=1749770312&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/15N.jpg?v=1749770312&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/16N.jpg?v=1749770312&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/17W.jpg?v=1749770312&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/18WG.jpg?v=1749770312&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/19O.jpg?v=1749770312&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/MEDIA_ECOMM.jpg?v=1749770312&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/20C.jpg?v=1749770312&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/21W.jpg?v=1749770312&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/22W.jpg?v=1749770312&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/23NG.jpg?v=1749770312&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/24C.jpg?v=1749770312&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/25N.jpg?v=1749770312&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/MEDIA_A_MORENA_ECOMM.jpg?v=1749770312&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/26W.jpg?v=1749770312&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/27O.jpg?v=1749770312&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/28N.jpg?v=1749770312&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/29C.jpg?v=1749770312&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/30N.jpg?v=1749770312&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/MORENA_A_PROFUNDA_ECOMM.jpg?v=1749770312&width=600"
                ],
                descripcion: `Experimenta una duración de todo el día con la base líquida mate Flawless Stay de Beauty Creations. Esta fórmula ligera, resistente al agua y libre de aceites ofrece una cobertura de 24 horas con un acabado mate y uniforme. Enriquecida con niacinamida, ayuda a iluminar la piel, suavizar la textura, minimizar los poros y reducir la apariencia de arrugas para una tez perfeccionada.

Disponible en 30 tonos inclusivos divididos en seis categorías de tono de piel:

FAIR (Muy clara) – 1N, 2N, 3C, 4W, 5N
LIGHT (Clara) – 6N, 7N, 8W, 9C, 10WG
LIGHT-MEDIUM (Clara a media) – 11NG, 12C, 13W, 14GO, 15N
MEDIUM (Media) – 16N, 17W, 18WG, 19O, 20C
MEDIUM-TAN (Media a bronceada) – 21W, 22WO, 23NG, 24C, 25N
DEEP-DARK (Oscura a muy oscura) – 26W, 27O, 28N, 29C, 30N
Subtonos:

W = Cálido (Warm)
C = Frío (Cool)
N = Neutro (Neutral)
O = Oliva (Olive)
G = Dorado (Golden)
Características clave

Duración de 24 horas
Libre de aceite y resistente al agua
Enriquecida con niacinamida
Sin parabenos, ftalatos, sulfatos ni gluten
No comedogénica (no obstruye los poros)`,
                tag: "Nuevo",
                tonos: [
    // Brazo Izquierdo (Tonos Claros)
    { nombre: "1N", hex: "#F2DFC7" },
    { nombre: "2N", hex: "#ECCDB4" },
    { nombre: "3C", hex: "#E7C6AF" },
    { nombre: "4W", hex: "#E4C1A8" },
    { nombre: "5N", hex: "#E0BCA2" },
    { nombre: "6N", hex: "#DCB79D" },
    { nombre: "7N", hex: "#D8B297" },
    { nombre: "8W", hex: "#D3AD91" },
    { nombre: "9C", hex: "#CFA98C" },
    { nombre: "10WG", hex: "#CBA487" },

    // Brazo Central (Tonos Medios)
    { nombre: "11NG", hex: "#C39D7F" },
    { nombre: "12C", hex: "#BE987A" },
    { nombre: "13W", hex: "#BA9375" },
    { nombre: "14GO", hex: "#B68E70" },
    { nombre: "15N", hex: "#B1886B" },
    { nombre: "16N", hex: "#AD8366" },
    { nombre: "17W", hex: "#A87E61" },
    { nombre: "18WG", hex: "#A4795C" },
    { nombre: "19O", hex: "#9F7457" },
    { nombre: "20C", hex: "#9B6F52" },

    // Brazo Derecho (Tonos Oscuros)
    { nombre: "21W", hex: "#92664B" },
    { nombre: "22WO", hex: "#895D44" },
    { nombre: "23NG", hex: "#81553E" },
    { nombre: "24C", hex: "#784C38" },
    { nombre: "25N", hex: "#704432" },
    { nombre: "26W", hex: "#683D2C" },
    { nombre: "27O", hex: "#603627" },
    { nombre: "28N", hex: "#582F22" },
    { nombre: "29C", hex: "#50281D" },
    { nombre: "30N", hex: "#482118" }
]
            },
             {
                id: 24,
                nombre: "Flawless Stay - Contorno En Barra - Contour Sticks",
                categoria: "Contorno",
                imagenes: [
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/Screenshot2025-02-24at9.41.50AM.png?v=1741200572&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/CONTOUR-STICKS4.jpg?v=1741200572&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/Screenshot2025-02-24at9.37.04AM.png?v=1741200572&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/CONTOUR-HEADS.jpg?v=1741200572&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/Screenshot2025-03-05at10.47.34AM.png?v=1741200572&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/TAUPE-OPEN.jpg?v=1741370095&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/Screenshot2025-03-05at9.43.27AM.png?v=1741370095&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/CONTOUR1-Taupe.png?v=1741370095&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/TAUPE-BOX.jpg?v=1741370095&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/TAN-OPEN.jpg?v=1741370095&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/Screenshot2025-03-05at9.45.55AM.png?v=1741370095&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/CONTOUR2-Tan.png?v=1741370095&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/TAN-BOX.jpg?v=1741370095&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/TAWNY-OPEN.jpg?v=1741370095&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/Screenshot2025-03-05at9.44.43AM.png?v=1741370095&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/CONTOUR3-Tawny.png?v=1741370095&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/TAWNY-BOX.jpg?v=1741370095&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/COCOA-OPEN.jpg?v=1741370095&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/Screenshot2025-03-05at9.26.47AM.png?v=1741370095&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/CONTOUR4-Cocoa.png?v=1741370095&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/COCOA-BOX.jpg?v=1741370095&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/Screenshot2025-03-07at9.53.14AM.png?v=1741370095&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/MOCHA-TRUFFLE-OPEN.jpg?v=1741370095&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/CONTOUR5-MochaTruffle.png?v=1741370095&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/MOCHA-TRUFFLE-BOX.jpg?v=1741370095&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/Screenshot2025-03-07at9.54.20AM.png?v=1741370095&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/MOCHA-ESPRESSO-OPEN.jpg?v=1741370095&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/CONTOUR6-Espresso.png?v=1741370082&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/ESPRESSO-BOX.jpg?v=1741370082&width=600"
                ],
                descripcion: `Contornea y define sin esfuerzo con los Cream Contour Sticks, una fórmula cremosa y fácil de difuminar que proporciona un acabado mate suave. Diseñado para precisión y facilidad, el tubo tipo twist-up con tapa hace que el contorneado sea sencillo y sin desorden.

Características principales
✔ Suave y fácil de difuminar: La fórmula cremosa se desliza sin esfuerzo para un look esculpido natural.
✔ Acabado mate suave: Consigue un contorno impecable y libre de brillo que dura todo el día.
✔ Aplicación precisa: El diseño twist-up permite un uso controlado y sin desorden.
✔ Tonos versátiles: Una gama de subtonos que complementan todos los tonos de piel.

Tonos & Subtonos
🤎 Taupe – Subtono frío
🌞 Tan – Subtono dorado cálido
🍂 Tawny – Subtono cálido
🍫 Mocha Truffle – Subtono neutro
☕ Cocoa – Neutro con un toque cálido
🌰 Espresso – Subtono cálido neutro

Por qué te encantará
🚫 Libre de sulfatos
🚫 Libre de parabenos

Eleva tu juego de contorno con una fórmula que se difumina como un sueño para una definición sin esfuerzo.`,
                tag: null,
                tonos: [
    { nombre: "TAUPE - cool", hex: "#D4A683" },
    { nombre: "TAN - warm gold", hex: "#BD8561" },
    { nombre: "TAWNY - warm", hex: "#A56E50" },
    { nombre: "COCOA - neutral warm", hex: "#8B5E46" },
    { nombre: "MOCHA TRUFFLE - neutral", hex: "#70483C" },
    { nombre: "ESPRESSO - neutral", hex: "#55382E" }
]
            },
             {
                id: 25,
                nombre: "Base de maquillaje líquida mate HD Pro Slay - Italia Deluxe",
                categoria: "Base",
                imagenes: [
                    "https://italiadeluxemakeup.com/cdn/shop/files/hd_pro_foundation-style-no_words.png?v=1724186502&width=600",
                    "https://italiadeluxemakeup.com/cdn/shop/products/01-PORCELAIN_-_HD_PRO_MATTE_FOUNDATION.jpg?v=1724186512&width=600",
                    "https://italiadeluxemakeup.com/cdn/shop/products/02_LIGHT_BEIGE_-_HD_PRO_MATTE_FOUNDATION.jpg?v=1724186512&width=600",
                    "https://italiadeluxemakeup.com/cdn/shop/products/03_IVORY_-_HD_PRO_MATTE_FOUNDATION.jpg?v=1724186512&width=600",
                    "https://italiadeluxemakeup.com/cdn/shop/products/04_NATURAL_BEIGE_-_HD_PRO_MATTE_FOUNDATION.jpg?v=1724186512&width=600",
                    "https://italiadeluxemakeup.com/cdn/shop/products/05_WARM_BEIGE_-_HD_PRO_MATTE_FOUNDATION.jpg?v=1724186512&width=600",
                    "https://italiadeluxemakeup.com/cdn/shop/products/06_CLASSIC_TAN_-_HD_PRO_MATTE_FOUNDATION.jpg?v=1724186512&width=600",
                    "https://italiadeluxemakeup.com/cdn/shop/products/07_GOLDEN_CARMEL_-_PRO_MATTE_FOUNDATION.jpg?v=1724186512&width=600",
                    "https://italiadeluxemakeup.com/cdn/shop/products/08_CANELA_-_HD_PRO_MATTE_FOUNDATION.jpg?v=1724186512&width=600"
                ],
                descripcion: `¡Esta base líquida mate HD Pro Slay es nuestro producto más vendido de la línea HD Pro! Ofrece una cobertura de media a completa para un acabado transparente y difuminado, y cuenta con una fórmula mate no grasa con un aplicador de varilla XXL para una aplicación fácil.

✨ Cobertura de media a completa, modulable
✨ Mate, ligera, sin aceite
✨ Aplicador de varilla XXL`,
                tag: null,
                tonos: [
    { nombre: "1B Porcelain", hex: "#F3E0D1" },
    { nombre: "2B Light Beige", hex: "#ECCFB5" },
    { nombre: "3B Ivory", hex: "#E5C8A8" },
    { nombre: "4B Natural", hex: "#DBB897" },
    { nombre: "5B Warm Beige", hex: "#D2AB87" },
    { nombre: "6B Classic Tan", hex: "#C69A76" },
    { nombre: "7B Golden Caramel", hex: "#B98A66" },
    { nombre: "8B Canela", hex: "#A67859" }
]
            },
             {
                id: 26,
                nombre: "Base de maquillaje en polvo mineral de cobertura total - Italia Deluxe",
                imagenes: [
                    "https://italiadeluxemakeup.com/cdn/shop/products/129-01-soft_ivory.jpg?v=1724182624&width=600",
                    "https://italiadeluxemakeup.com/cdn/shop/products/129-02-vanilla.jpg?v=1724182624&width=600",
                    "https://italiadeluxemakeup.com/cdn/shop/products/129-03-natural_beige.jpg?v=1724182624&width=600",
                    "https://italiadeluxemakeup.com/cdn/shop/products/129-04-sand.jpg?v=1724182624&width=600",
                    "https://italiadeluxemakeup.com/cdn/shop/products/129-05-warm_beige.jpg?v=1724182624&width=600",
                    "https://italiadeluxemakeup.com/cdn/shop/products/129-06-medium_beige.jpg?v=1724182624&width=600",
                    "https://italiadeluxemakeup.com/cdn/shop/products/129-07-almond.jpg?v=1724182624&width=600",
                    "https://italiadeluxemakeup.com/cdn/shop/products/129-08-amber.jpg?v=1724182624&width=600",
                    "https://italiadeluxemakeup.com/cdn/shop/products/129-09-sun_tan.jpg?v=1724182624&width=600",
                    "https://italiadeluxemakeup.com/cdn/shop/products/129-10-bronze.jpg?v=1724182624&width=600",
                    "https://italiadeluxemakeup.com/cdn/shop/products/129-11-caramel.jpg?v=1724182624&width=600",
                    "https://italiadeluxemakeup.com/cdn/shop/products/129-12-toast.jpg?v=1724182624&width=600"
                ],
                descripcion: `Luce y siéntete radiante con esta base de maquillaje en polvo mineral de cobertura total. Formulada con minerales que mejoran la piel, este ligero polvo te ayuda a lograr una tez saludable con una cobertura total. Puedes aplicarla húmeda o seca, y su FPS 10 protegerá tu piel del sol. ¡No te la puedes perder!

✨Hecha con pigmentos minerales que mejoran la piel y favorecen una tez saludable.
✨Aplícala húmeda o seca para un brillo natural e impecable.
✨FPS 10.
✨Incluye espejo y esponja.`,
                tag: null,
                tonos: [
    { nombre: "Tono 01", hex: "#F2D6C0" },
    { nombre: "Tono 02", hex: "#F5D2A6" },
    { nombre: "Tono 03", hex: "#EBC8AA" },
    { nombre: "Tono 04", hex: "#E5BC93" },
    { nombre: "Tono 05", hex: "#E9B484" },
    { nombre: "Tono 06", hex: "#F6B576" },
    { nombre: "Tono 07", hex: "#D5A785" },
    { nombre: "Tono 08", hex: "#E1AD7C" },
    { nombre: "Tono 09", hex: "#ECA769" },
    { nombre: "Tono 10", hex: "#DA986F" },
    { nombre: "Tono 11", hex: "#D08552" },
    { nombre: "Tono 12", hex: "#B55C2D" }
]
            },


        ];

  const productosOjos = [
            {
                id: 1,
                nombre: "Rosy McMichael X Beauty Creations - Mini Paleta De Sombras - Rosy's Essentials Vol.1",
                categoria: "Paleta de sombras",
                imagenes: [
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/palette_220d84ef-1aa5-481a-8002-8c1f2727ad2f.jpg?v=1763589012&width=900",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/PALETTE.jpg?v=1763420004&width=900",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/ARMSWTCHGRAPHICSROSYMCSHADOWENGLISH_848466df-38b8-4dfb-a516-6bc2d5877cd9.jpg?v=1763588672&width=900",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/PALETTE-CLOSED.jpg?v=1763588672&width=900",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/ROSY_EYE_GRID_ENGLISH_dc101ab7-301c-43d7-bb7c-2ac178db7c83.png?v=1763589012&width=900",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/COLLECTION1-RESIZE.jpg?v=1763588672&width=900",
                ],
                descripcion: `Beauty Creations y Rosy McMichael se unen una vez más para traer de vuelta uno de los productos favoritos de sus fans, con un toque especial. Presentamos Rosy’s Essentials Volumen 1 (Mini Edición): Rosy ha elegido sus 12 tonos favoritos de la paleta original para traerlos de vuelta en un formato compacto, práctico y lleno de amor. Cada sombra representa un momento, una emoción, una parte del camino que hemos recorrido juntos. Desde los neutros que nos acompañan cada día, hasta esos destellos clásicos e innovadores de The Everyday Palette.

En 12 hermosos tonos:

Pigmento prensado

5M → Mate, marrón cálido con destellos dorados
SMH → Mate, malva rosado
Rosita → Brillante, magenta/frambuesa
Transición → Mate, marrón dorado cálido
Red Wine → Mate, burdeos intenso
Aaron → Azul brillante prensado con destellos plateados
Tamaulipas → Mate, marrón chocolate intenso
Sombra de ojos

Hello → Mate, crema vainilla
Focco → Brillante, oro rosa con destellos plateados
Nick → Brillante, verde tierra con reflejos dorados y plateados
Diego → Brillante, arándano con destellos reflectantes
Glitter

Star → Glitter, oro rosa
Porqué la amaras:

Tamaño ideal para viajar
Formula pigmentada y fácil de difuminar
Sombras mate con textura aterciopelada y shimmers extra brillantes
Cobertura total
Mínima caída de producto
Edición Limitada, libre de crueldad animal. `,
                tag: "Nuevo",
                tonos: null 
            },
            {
                id: 2,
                nombre: "Tease Me - Paleta De Sombras",
                categoria: "Paleta de sombras",
                imagenes: [
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-tease-me-paleta-de-sombras-cosmetics-e18t-911682.webp?v=1723581920&width=900",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-tease-me-paleta-de-sombras-cosmetics-e18t-207189.webp?v=1723581938&width=900",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-tease-me-paleta-de-sombras-cosmetics-e18t-791788.webp?v=1723581966&width=900",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-tease-me-paleta-de-sombras-cosmetics-e18t-991526.webp?v=1723581980&width=900",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-tease-me-paleta-de-sombras-cosmetics-e18t-519574.webp?v=1723581998&width=900"
                ],
                descripcion: `Dile a tus amigos, que le digan a sus amigos...¡Ella esta de vuelta! ✨

Nuestra paleta más vendida se renueva, esta nueva formula y empaque te encantaran, 16 sombras que ya amas y seguirás amando, incluye colores malva, neutrales y bronces para que crees los maquillajes mas seductores. La paleta de sombras que todos estábamos esperando ¡Al fin esta de vuelta! 

*Precaución: contiene pigmentos prensados. 

¡Compra la tuya ahora! 💅🥰💋❤️🔥`,
                tag: "Tendencia",
                tonos: [
                    { nombre: "Negro Intenso", hex: "#000000" }
                ]
            },
         {
                id: 3,
                nombre: "Fairy Tale - Paleta De Sombras - Tiana",
                categoria: "Paleta de sombras",
                imagenes: [
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-tiana-paleta-de-sombras-cosmetics-bce18-687376.jpg?v=1739227298&width=900",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-tiana-paleta-de-sombras-cosmetics-bce18-971865.jpg?v=1739227298&width=900",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-tiana-paleta-de-sombras-cosmetics-bce18-624016.jpg?v=1739227298&width=900"
                ],
                descripcion: `Esta paleta contiene una variedad de tonos para diferentes look; desde tonos brillantes y vibrantes hasta tonos más sutiles y elegantes. Prueba ahora y descubre tus tendencias de maquillaje favoritas. ¡Atrévete a explorar nuevos looks! 💅🥰💋❤️🔥`,
                tag: null,
                tonos: [
                    { nombre: "Negro Intenso", hex: "#000000" }
                ]
            },
             {
                id: 4,
                nombre: "Nude X - Paleta De Sombras - 15 Tonos",
                categoria: "Paleta de sombras",
                imagenes: [
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-cosmetics-mx-beauty-creations-paleta-de-sombras-nude-x-15-paleta-de-sombras-cosmetics-nxe15-410407.webp?v=1723557682&width=900",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-cosmetics-mx-beauty-creations-paleta-de-sombras-nude-x-15-paleta-de-sombras-cosmetics-nxe15-294343.webp?v=1723557698&width=900",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-cosmetics-mx-beauty-creations-paleta-de-sombras-nude-x-15-paleta-de-sombras-cosmetics-nxe15-438229.webp?v=1723557724&width=900",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-cosmetics-mx-beauty-creations-paleta-de-sombras-nude-x-15-paleta-de-sombras-cosmetics-nxe15-446314.webp?v=1723557742&width=800",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-cosmetics-mx-beauty-creations-paleta-de-sombras-nude-x-15-paleta-de-sombras-cosmetics-nxe15-671461.webp?v=1723557758&width=800"
                ],
                descripcion: `De nuestra colección Nude X, esta paleta de sombras cuenta con 15 hermosos tonos entre mattes, satinados y brillantes, te ayudara a lograr un maquillaje ideal para el día a día o un look smokey de noche ideal. Pruébala y deslúmbrate con su calidad y hermosos tonos que complementan a cualquier tono de piel.

¡Compra la tuya ahora! ❤️`,
                tag: "Tendencia",
                tonos: [
                    { nombre: "Negro Intenso", hex: "#000000" }
                ]
            },
             {
                id: 5,
                nombre: "Floral Bloom - Paleta De Sombras - Eye Bloom",
                categoria: "Paleta de sombras",
                imagenes: [
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-floral-bloom-eye-bloom-paleta-de-sombras-cosmetics-ep12-490604.jpg?v=1757010505&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/EP12-7.png?v=1757010505&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-floral-bloom-eye-bloom-paleta-de-sombras-cosmetics-ep12-246599.jpg?v=1757010505&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-floral-bloom-eye-bloom-paleta-de-sombras-cosmetics-ep12-302575.jpg?v=1757010505&width=600"
                ],
                descripcion: `¡Una paleta de sombras con tonos hermosos y vibrantes para destacar tu look! Esta paleta proporciona una amplia gama de tonos para adaptarse a todas tus necesidades de maquillaje. ¡Prueba esta paleta y destaca tu look! ¡Haz tu pedido ya! 💅🥰💋`,
                tag: null,
                tonos: null,
            },
            {
                id: 6,
                nombre: "DUET - Mini Snap Palette - Paleta De Sombras 8 Tonos",
                categoria: "Paleta de sombras",
                imagenes: [
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/DUET_1.png?v=1755121510&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/NUDE_2.png?v=1755121510&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/MX_NUDE.png?v=1755208647&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/NUDE_3.png?v=1755208647&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/DUET_2.png?v=1755208647&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/MX_GREEN.png?v=1755208647&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/GREENS_2.png?v=1755208647&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/GREENS_3.png?v=1755208647&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/DUET_3.png?v=1755208647&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/MX_MAUVE.png?v=1755208647&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/MAUVE_1.png?v=1755208647&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/MAUVE_2.png?v=1755208647&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/DUET_4.png?v=1763592080&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/PEACH_2.png?v=1755208647&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/MX_PEACH.png?v=1763592080&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/PEACH_3.png?v=1755208647&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/DUET_5.png?v=1755208647&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/ROUGE_2.png?v=1755208647&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/MX_ROUGE.png?v=1755208647&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/ROUGE_3.png?v=1755208647&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/DUET_6.png?v=1755208647&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/GRUNGY_2.png?v=1755208647&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/MX_GRUNGY.png?v=1755208647&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/GRUNGY_3.png?v=1755208646&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/DUET_1_8f302904-2ba2-425b-9c0d-7b89158aead5.png?v=1755208646&width=600",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/DUET_7.png?v=1755208646&width=600"
                     ],
                descripcion: `¡Descubre una nueva forma de llevar tus sombras! Nuestras paletas de sombras mini DUET hacen snap y se unen para que crees tu dúo favorito de sombras, crea tus combinaciones favoritas de colores con nuestras 6 paletas disponibles.  Desde colores neutros con acabados mate hasta los shimmer mas brillantes.

Una mini paleta de sombras de ojos portátil con ocho tonos en una variedad de acabados desde mate hasta brillantes; úsela sola o combine dos paletas para crear su propia combinación personalizada.

Tonos disponibles:

NUDE NEUTRALS: Una colección atemporal de tonos ultra neutros, inspirados en la piel, que derrochan elegancia, suavidad y versatilidad. Desde delicados cremas hasta cálidos beiges y marrones suaves, esta paleta celebra la sutil sofisticación y la belleza natural de los tonos neutros.
MODERN GREENS: Una paleta que ofrece una versión fresca, limpia y elevada de los tonos verdes tradicionales, combinando la esencia fundamental de la naturaleza con un refinamiento contemporáneo y lúdico.
FEELING MAUVEY: Paleta alegre y de tonos apagados que captura la delicada elegancia del malva en todas sus facetas, desde florales hasta frescos matices ciruela. Esta paleta de colores combina un encanto sensual con un minimalismo moderno, ideal para crear una estética soñadora y serena.
PEACHY DREAMS: Una paleta de colores suaves y soleados que captura la calidez del amanecer y la dulzura de los momentos despreocupados. Inspirada en los jugosos tonos melocotón, esta paleta combina suaves pasteles con brillantes destellos de sol para una atmósfera de ensueño y acogedora.
ROUGE ROMANCE: Paleta atrevida y elegante que evoca pasión, feminidad intensa y glamour extremo. Su nombre sugiere una colección de tonos intensos y vibrantes, ideales para ambientes románticos, dramáticos o sutilmente seductores.
GUNGY GREYS: Es una paleta de colores melancólicos compuesta por tonos ahumados apagados que irradian un toque chic y sobrio. Con un toque de rebeldía y mucha actitud, esta paleta es perfecta para crear el look ahumado definitivo y liberar la chica cool que llevas dentro.
Características principales:

VEGANO, SIN INGREDIENTES DE ORIGEN ANIMAL Y LIBRE DE GLUTEN

La fabricación y/o desarrollo del producto y, en su caso, de sus ingredientes, no debe implicar ni haber implicado el uso de ningún producto, subproducto o derivado animal.

SIN PRUEBAS EN ANIMALES

Un producto registrado con la Marca Vegana no ha sido probado en animales por la empresa ni en su nombre, y no contiene ningún ingrediente de origen animal.`,
                tag: null,
                tonos:[
                    { nombre: "Nude Neutrals" },
                    { nombre: "Modern Greens" },
                    { nombre: "Feeling Mauvey" },
                    { nombre: "Peachy Dreams" },
                    { nombre: "Rouge Romance" },
                    { nombre: "Gungy Greys" }
                ]
            },
            {
                id: 7,
                nombre: "Glitterally Perfect - Delineador en Glitter",
                categoria: "Delinador Glitter",
                imagenes: [
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-glitterally-perfect-glitter-liner-gliters-cosmetics-bcgp-01-540254.webp?v=1723498822&width=650",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-glitterally-perfect-glitter-liner-gliters-cosmetics-bcgp-01-239490.webp?v=1723507206&width=650",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-glitterally-perfect-glitter-liner-gliters-cosmetics-bcgp-01-426137.webp?v=1723507222&width=650",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/GRAYBGFORECOMM_1_b233fc50-71fc-4286-981e-2309030620ad.png?v=1739226819&width=650",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-glitterally-perfect-glitter-liner-gliters-cosmetics-bcgp-01-329245.webp?v=1739226819&width=650",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-glitterally-perfect-glitter-liner-gliters-cosmetics-bcgp-02-873949.webp?v=1739226819&width=650",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-glitterally-perfect-glitter-liner-gliters-cosmetics-bcgp-02-948288.webp?v=1739226819&width=650",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-glitterally-perfect-glitter-liner-gliters-cosmetics-bcgp-03-441334.webp?v=1739226819&width=650",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-glitterally-perfect-glitter-liner-gliters-cosmetics-bcgp-03-955749.webp?v=1739226819&width=650",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-glitterally-perfect-glitter-liner-gliters-cosmetics-bcgp-04-522505.webp?v=1763592080&width=650",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-glitterally-perfect-glitter-liner-gliters-cosmetics-bcgp-04-748176.webp?v=1739226819&width=650",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-glitterally-perfect-glitter-liner-gliters-cosmetics-bcgp-05-495210.webp?v=1763592080&width=650",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-glitterally-perfect-glitter-liner-gliters-cosmetics-bcgp-05-104393.webp?v=1739226819&width=650",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-glitterally-perfect-glitter-liner-gliters-cosmetics-bcgp-06-651542.webp?v=1739226819&width=650",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-glitterally-perfect-glitter-liner-gliters-cosmetics-bcgp-06-508332.webp?v=1739226819&width=650",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-glitterally-perfect-glitter-liner-gliters-cosmetics-bcgp-07-750285.webp?v=1739226819&width=650",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-glitterally-perfect-glitter-liner-gliters-cosmetics-bcgp-07-784510.webp?v=1739226819&width=650",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-glitterally-perfect-glitter-liner-gliters-cosmetics-bcgp-08-508407.webp?v=1739226819&width=650",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-glitterally-perfect-glitter-liner-gliters-cosmetics-bcgp-08-912491.webp?v=1739226819&width=650",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-glitterally-perfect-glitter-liner-gliters-cosmetics-bcgp-09-319788.webp?v=1739226819&width=650",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-glitterally-perfect-glitter-liner-gliters-cosmetics-bcgp-09-247484.webp?v=1739226819&width=650",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-glitterally-perfect-glitter-liner-gliters-cosmetics-bcgp-10-137271.webp?v=1763592080&width=650",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-glitterally-perfect-glitter-liner-gliters-cosmetics-bcgp-10-433869.webp?v=1739226819&width=650"
                     ],
                descripcion: `Presentamos la nueva estrella de Beauty Creations, luce brillantemente perfecto con un solo toque. Nuestra Fórmula con brillo fino a base de agua se desliza como un sueño en tu piel a prueba de manchas, la punta del pincel súper fina permite una aplicación precisa ¡Compra el tuyo ahora! 

Tonos Disponibles

HOURGLASS
SENSUAL
24k
DIVINE
BREATHTAKING
BADABING
LUSCIOUS
MATERIAL GIRL
MIND BLOWING
5 STAR`,
                tag: null,
                tonos: [
    { nombre: "1 - HOURGLASS", hex: "#CC9383" },
    { nombre: "2 - SENSUAL", hex: "#A6A4A1" },
    { nombre: "3 - 24K", hex: "#DBC075" },
    { nombre: "4 - DIVINE", hex: "#D9B3C0" },
    { nombre: "5 - BREATH TAKING", hex: "#9D86B3" },
    { nombre: "6 - BADABING", hex: "#7B84B5" },
    { nombre: "7 - LUSCIOUS", hex: "#D9DBDE" },
    { nombre: "8 - MATERIAL GIRL", hex: "#CC937A" },
    { nombre: "9 - MIND BLOWING", hex: "#A9B6A5" },
    { nombre: "10 - 5 STAR", hex: "#3D3D3E" }
]
            },
            {
                id: 8,
                nombre: "Paleta De Sombras Para Cejas - Eyebrow Definer Powder Book",
                categoria: "Paleta cejas",
                imagenes: [
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-eyebrow-definer-powder-book-paleta-de-sombras-para-cejas-cosmetics-bb01-535429.jpg?v=1753301114&width=650",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-eyebrow-definer-powder-book-paleta-de-sombras-para-cejas-cosmetics-bb01-341299.jpg?v=1753301114&width=650",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-eyebrow-definer-powder-book-paleta-de-sombras-para-cejas-cosmetics-bb01-199618.jpg?v=1753301114&width=650"
                     ],
                descripcion: `Esta paleta de sombras contiene ocho tonos, para ayudarte a darle la forma y estilo único que has estado buscando. ¡Toma el control de tus cejas hoy con la Eyebrow Definer Powder Book! ¡Adelante! 💅🥰💋❤️‍🔥`,
                tag: null,
                tonos: null,
            },
            {
                id: 9,
                nombre: "Victor Guadarrama X Beauty Creations - Paleta De Rostro Y Sombras - Yo Soy",
                categoria: "Paleta de sombras",
                imagenes: [
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/PALETTE1-RESIZED.png?v=1746552256&width=700",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/PALETTE2-RESIZED.png?v=1746552256&width=700",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/FACE-PALETTE.jpg?v=1746552868&width=700",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/FACE-PALETTE-BOX.jpg?v=1746552868&width=700",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/BC-VICO-PALETA-DE-SOMBRAS-1_02969439-3961-4b3c-a37e-9129890983f1.png?v=1747347227&width=700",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/BC-VICO-PALETA-DE-SOMBRAS-3.png?v=1747347227&width=700"
                     ],
                descripcion: `Libera tu glamour interior con la Paleta de Sombras y Rostro YO SOY, un elegante compacto dorado diseñado para una elegancia natural. Incluye 12 sombras de ojos mate aterciopeladas en una gama de neutros cálidos, marrones intensos y tonos profundos y sensuales.

Esta paleta es perfecta para crear desde looks suaves para el día hasta ojos atrevidos y dramáticos. Completa tu acabado impecable con un contorno esculpidor, un rubor degradado y un iluminador luminoso, todos formulados para una aplicación uniforme y una larga duración. Con un elegante diseño dorado de lujo, esta paleta todo en uno es tu opción ideal para un look radiante y esculpido, en cualquier momento y lugar.

Incluye:

12 Sombras Compactas
1 Contorno
1 Rubor Gradiante
1 Iluminador`,
                tag: "Colección",
                tonos: null,
            },
             {
                id: 10,
                nombre: "Spongebob X Beauty Creations - Paleta De Sombras - Bikini Bottom",
                categoria: "Paleta de sombras",
                imagenes: [
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/EYESHADOWPALETTESPONGEBOB.png?v=1733775085&width=700",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/SWATCHESPALLETE3.jpg?v=1733775097&width=700",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/SWATCHESPALLETE2.jpg?v=1733775097&width=700",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/SWATCHESSPONGEBOB.jpg?v=1733775090&width=700",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/BIKINI-BOTTOM-SHADOW-PALETTE-1.jpg?v=1742253210&width=700",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/BIKINI-BOTTOM-SHADOW-PALETTE-7.jpg?v=1733245728&width=700"
                     ],
                descripcion: `¡Sumérgete en un mar de color con la paleta de sombras Bob Esponja Pantalones Cuadrados X Beauty Creations Bikini Bottom Paleta de Sombras!

Inspirada en el vibrante mundo de Fondo de Bikini, esta paleta de 12 tonos presenta una mezcla juguetona de mates suaves y deslumbrantes brillos que se difuminan como un sueño. Ya sea que estés canalizando la actitud soleada de Bob Esponja o los misteriosos encantos de Calamardo, estos tonos harán que tus ojos brillen con un toque de magia submarina.

¡Esta paleta es perfecta para crear looks tan divertidos y fabulosos como un día en los campos de medusas! Así que adelante, ¡agrega glamour y presume de tu belleza de Fondo de Bikini!

Características:

8 tonos mate prensados
4 tonos de brillo prensados
Alta pigmentación
Mezclable y construible
Mínimo residuo

Tip:
Para un look audaz, comienza con un color base mate y luego coloca un brillo encima para un toque de destello. No olvides aplicar un toque de brillo ligero en las esquinas internas para iluminar tus ojos, ¡como el sol en Fondo de Bikini!`,
                tag: null,
                tonos: null,
            },
             {
                id: 11,
                nombre: "My Little Pony X Beauty Creations - Paleta De Sombras Y Rostro - Lost in the Clouds",
                categoria: "Paleta de sombras",
                imagenes: [
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-mx-beauty-creations-x-my-little-pony-head-in-the-clouds-shadow-and-face-palette-mlp-sfp-175087.jpg?v=1723532885&width=700",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-mx-beauty-creations-x-my-little-pony-head-in-the-clouds-shadow-and-face-palette-mlp-sfp-906022.jpg?v=1723532918&width=700",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-mx-beauty-creations-x-my-little-pony-head-in-the-clouds-shadow-and-face-palette-mlp-sfp-226953.jpg?v=1723532946&width=700",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-mx-beauty-creations-x-my-little-pony-head-in-the-clouds-shadow-and-face-palette-mlp-sfp-977135.jpg?v=1723532960&width=700",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-mx-beauty-creations-x-my-little-pony-head-in-the-clouds-shadow-and-face-palette-mlp-sfp-412475.jpg?v=1723533005&width=700"
                     ],
                descripcion: `Déjate envolver por la magia del cielo con "Lost in the Clouds" Shadow and Face Palette de Beauty Creations x My Little Pony. Esta deslumbrante paleta combina 5 sombras en una gama de acabados y colores inspirados en nubes y arcoíris: 3 mates de alta pigmentación, 2 shimmer prensados con un brillo estelar y mínima caída.
También incluye un blush de acabado aterciopelado y tonos vibrantes, un bronzer para un toque de sol radiante, y un highlighter de alto brillo con un acabado similar al vidrio, ideal para todos los tonos de piel.

Características:

5 Sombras: 3 mates y 2 shimmer prensados
1 Blush: Mate aterciopelado y vibrante
1 Bronzer: Cálido y luminoso para un acabado radiante
1 Highlighter: Brillo intenso y acabado cristalino

Cada producto ofrece alta pigmentación, es mezclable y construible, con mínima caída para una aplicación impecable. ¡Añade un toque de encanto celestial a tu rutina de belleza con la "Lost in the Clouds" Palette y brilla como las estrellas!`,
                tag: null,
                tonos: null,
            },
            {
                id: 12,
                nombre: "Lotería - Paleta de Sombras y Rostro",
                categoria: "Paleta de sombras",
                imagenes: [
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/FACE-PAL_RESIZED.png?v=1747069690&width=700",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/ESMEPALETTE.png?v=1747248242&width=700",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/EYESHADOWS.png?v=1747248242&width=700",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/BLUSHANDHIGHLIGHT.png?v=1747248242&width=700",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/Screenshot2025-03-25at3.20.49PM.png?v=1747248242&width=700",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/Screenshot2025-03-25at3.20.24PM.png?v=1747248242&width=700"
                     ],
                descripcion: `La paleta de la colección de la Lotería es una vibrante paleta todo en uno inspirada en la colorida tradición de la Lotería. Con una mezcla de sombras de ojos mate y brillantes, ofrece una gama versátil de tonos perfectos para crear looks atrevidos y llamativos.

La paleta también incluye un magnífico rubor para dar un rubor natural a tus mejillas y un iluminador radiante para darle a tu piel un brillo luminoso. Ya sea que busques un toque de color divertido o un acabado más sutil, esta paleta tiene todo lo que necesitas para realzar tu belleza con un toque divertido y cultural.

La paleta incluye los tonos:

LA DAMA- COLOR VINO OSCURO
EL CAZO- MIEL CALIDO
LA GARZA- SHIMMER BLANCO CON REFLEJOS PLATA
EL ARPA- SALMON 
EL BANDOLÓN-LIGHT ALBARICOQUE
LA CHALUPA- NARANJA
LA ESCALERA-AMARILLO
LA RANA- VERDE LIMA CON BRILLO
EL ALACRÁN-CAFÉ MOCHA
EL MUNDO-AZUL CIELE CON BRILLOS PLATA
EL CORAZÓN- ROSA FLAMENCO 
LA CAMPANA- CAFÉ
Rubor:

LA ROSA: ROSA FRÍO
Iluminador:

LA ESTRELLA: DORADO CLARO CHAMPAGNE`,
                tag: null,
                tonos: null,
            },
            {
                id: 13,
                nombre: "Bratz X Beauty Creations - Delineador De Glitter",
                categoria: "Delineador Glitter",
                imagenes: [
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/Glitz-glitter-liner.jpg?v=1757109161&width=700",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/DUAL-GLITTER-LINER-SASHA.1.jpg?v=1757109161&width=700",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/DUAL-GLITTER-LINER-SASHA.jpg?v=1730428790&width=700",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/3_31a6a5c2-e60b-42fd-acea-23eb1acac931.png?v=1731455099&width=700",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/glamour-glitter-liner.jpg?v=1731454992&width=700",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/DUAL-GLITTER-LINER-JADE.1_0cdcae21-0067-4fbe-aa33-30633a0f7e05.jpg?v=1743004758&width=700",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/DUAL-GLITTER-LINER-JADE.jpg?v=1730428963&width=700",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/2_1cdf3900-5a9a-43bd-bbca-0a7bb73bf28e.png?v=1731454992&width=700"
                     ],
                descripcion: `¡Dale a tus ojos un toque de diversión con el Bratz X Beauty Creations Glitz Glitter Liner!

Con este delineador brillante, podrás crear look únicos y llamativos. ¡Atrévete a brillar con Bratz y Beauty Creations!

DESCRIPCIÓN DE COLOR:

CITY GIRL: BLANCO IRRIDESCENTE
TROUBLE COMING: MORADO CON BRILLO PLATA
LO AMARAS PORQUE ES:

LIBRE DE CRUELDAD 
LIBRE DE SULFATOS 
LIBRE DE PARABENOS`,
                tag: null,
                tonos: null,
            },
            {
                id: 14,
                nombre: "My Little Pony X Beauty Creations - Delineador Líquido De Glitter - Full of Fun",
                categoria: "Delineador Glitter",
                imagenes: [
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-mx-beauty-creations-x-my-little-pony-full-of-fun-unicorn-magic-silver-glitter-liner-mlp-gl2-385253.jpg?v=1723532225&width=700",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-mx-beauty-creations-x-my-little-pony-full-of-fun-unicorn-magic-silver-glitter-liner-mlp-gl2-271310.jpg?v=1723532258&width=700",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-mx-beauty-creations-x-my-little-pony-full-of-fun-unicorn-magic-silver-glitter-liner-mlp-gl1-926343.jpg?v=1723532317&width=700",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-mx-beauty-creations-x-my-little-pony-full-of-fun-unicorn-magic-silver-glitter-liner-mlp-gl2-537392.jpg?v=1723532285&width=700",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-mx-beauty-creations-x-my-little-pony-full-of-fun-unicorn-magic-silver-glitter-liner-mlp-gl1-408948.jpg?v=1723532345&width=700"
                     ],
                descripcion: `Descubre la magia y el brillo con "Full of Fun" Glitter Liner de Beauty Creations x My Little Pony. Esta colección preciosa te invita a un mundo de fantasía y resplandor, con un delineador que aporta un brillo celestial a tu mirada. Inspirado en las estrellas y el cielo lleno de arcoíris, este delineador de glitter hará que tus ojos brillen con un destello mágico.

Tonos:
Unicorn Magic
Moonstone

¡Eleva tu look al nivel de una estrella con el brillo y la magia de My Little Pony y deslumbra con una mirada llena de resplandor y encanto!"

NET WEIGHT: 3ml/0.11 fl oz.`,
                tag: null,
                tonos: null,
            },
            {
                id: 15,
                nombre: "Máscara Clásica (Negro) - Prosa",
                categoria: "Mascara",
                imagenes: [
                    "https://www.prosanatural.com/img/productos/primer-vista/15154.webp",
                    "https://www.prosanatural.com/img/productos/segunda-vista/15154.webp",
                    "https://www.prosanatural.com/img/productos/tercer-vista/15154.webp"
                     ],
                descripcion: `Aplique uniformemente sobre las pestañas hasta obtener el efecto deseado.

Su cepillo aplicador engrosa y distribuye la máscara a lo largo de las pestañas.

Efecto de pestañas espesas, elevadas.

Complementada con los ingredientes que caracterizan a nuestras fórmulas 4 en uno (Hueso de Mamey, Sábila, Jojoba y Germen de Trigo).

Fórmula resistente al agua (Waterproof).`,
                tag: null,
                tonos: null,
            },
             {
                id: 16,
                nombre: "Crystal Protein Gel - Prosa",
                categoria: "Mascara Gel",
                imagenes: [
                    "https://www.prosanatural.com/img/productos/primer-vista/15157.webp",
                    "https://www.prosanatural.com/img/productos/segunda-vista/15157.webp",
                    "https://www.prosanatural.com/img/productos/tercer-vista/15157.webp"
                     ],
                descripcion: `En las pestañas: aplicar 1 o 2 capas para un acabado sutil y discreto.

Utilízalo como base antes de tu máscara de pestañas para lograr un efecto de mayor volumen.

En las cejas: aplica una ligera capa para mantenerlas peinadas todo el día.

Es ideal para peinar baby hairs.

Úsalo como pegamento de glitter para tu maquillaje.`,
                tag: null,
                tonos: null,
            },
            {
                id: 17,
                nombre: "Máscara Aguacate - Prosa",
                categoria: "Mascara",
                imagenes: [
                    "https://www.prosanatural.com/img/productos/primer-vista/15162.webp",
                    "https://www.prosanatural.com/img/productos/segunda-vista/15162.webp",
                    "https://www.prosanatural.com/img/productos/tercer-vista/15162.webp"
                     ],
                descripcion: `Pestañas elevadas y naturales con Aceite de Aguacate

Su cepillo distribuye la máscara para que tus pestañas lúzcan más espesas, levantadas y a la vez naturales.

Complementada con Aceite de Aguacate

Fórmula resistente al agua (Waterproof).`,
                tag: null,
                tonos: null,
            },
            {
                id: 18,
                nombre: "Máscara Profesional - Prosa",
                categoria: "Mascara",
                imagenes: [
                    "https://www.prosanatural.com/img/productos/primer-vista/15150.webp",
                    "https://www.prosanatural.com/img/productos/segunda-vista/15150.webp",
                    "https://www.prosanatural.com/img/productos/tercer-vista/15150.webp"
                     ],
                descripcion: `Tus pestañas lucirán espectaculares, con color negro intenso.

Cepillo Profesional que eleva y define con precisión cada una de las pestañas, para una aplicación perfecta.

Complementada con los ingredientes que caracterizan a nuestras fórmulas 4 en uno (Hueso de Mamey, Sábila, Jojoba y Germen de Trigo).

Fórmula resistente al agua (Waterproof).`,
                tag: null,
                tonos: null,
            },
            {
                id: 19,
                nombre: "Máscara Profesional Silicón - Prosa",
                categoria: "Mascara Gel",
                imagenes: [
                    "https://www.prosanatural.com/img/productos/primer-vista/15190.webp",
                    "https://www.prosanatural.com/img/productos/segunda-vista/15190.webp",
                    "https://www.prosanatural.com/img/productos/tercer-vista/15190.webp"
                     ],
                descripcion: `La Máscara Profesional que es ideal para pestañas cortas.

Cepillo Profesional de Silicón especialmente diseñado para elevar y definir con precisión, cada una de tus pestañas.

Complementada con los ingredientes que caracterizan a nuestras fórmulas 4 en uno (Hueso de Mamey, Sábila, Jojoba y Germen de Trigo).

Fórmula resistente al agua (Waterproof).`,
                tag: null,
                tonos: null,
            },
            {
                id: 20,
                nombre: "Máscara Silicón Profesional Café 13g - Prosa",
                categoria: "Mascara Gel",
                imagenes: [
                    "https://www.prosanatural.com/img/productos/primer-vista/15175.webp",
                    "https://www.prosanatural.com/img/productos/segunda-vista/15175.webp",
                    "https://www.prosanatural.com/img/productos/tercer-vista/15175.webp"
                     ],
                descripcion: `La Máscara Profesional en tono café que es ideal para pestañas cortas.

Cepillo Profesional de Silicón especialmente diseñado para elevar y definir con precisión, cada una de tus pestañas.

Complementada con los ingredientes que caracterizan a nuestras fórmulas 4 en uno (Hueso de Mamey, Sábila, Jojoba y Germen de Trigo).

Fórmula resistente al agua (Waterproof).`,
                tag: null,
                tonos: null,
            },
            {
                id: 21,
                nombre: "Máscara Maxi Volumen - Prosa",
                categoria: "Mascara",
                imagenes: [
                    "https://www.prosanatural.com/img/productos/primer-vista/15153.webp",
                    "https://www.prosanatural.com/img/productos/segunda-vista/15153.webp",
                    "https://www.prosanatural.com/img/productos/tercer-vista/15153.webp"
                     ],
                descripcion: `Una de las máscaras favoritas que lleva tus pestañas al máximo.

Cepillo especial Max-Pro que aporta espesor, volumén y dosifica homogénea y abundantemente la máscara.

Complementada con los ingredientes que caracterizan a nuestras fórmulas 4 en uno (Hueso de Mamey, Sábila, Jojoba y Germen de Trigo).

Tus pestañas lucirán elevadas y con mucho más volumen.

Fórmula resistente al agua (Waterproof).`,
                tag: "Tendencia",
                tonos: null,
            },
            {
                id: 22,
                nombre: "Máscara Microfibras - Prosa",
                categoria: "Mascara",
                imagenes: [
                    "https://www.prosanatural.com/img/productos/primer-vista/15167.webp",
                    "https://www.prosanatural.com/img/productos/segunda-vista/15167.jpg",
                    "https://www.prosanatural.com/img/productos/tercer-vista/15167.webp"
                     ],
                descripcion: `Combina fibras alargadoras y color negro profundo.

Cepillo Multi-Función con profundidad, cúspides y punta que engrosa y separa adhiriendo y estirando a su vez las fibras para lograr un largo extremo.

Complementada con los ingredientes que caracterizan a nuestras fórmulas 4 en uno (Hueso de Mamey, Sábila, Jojoba y Germen de Trigo).

Fórmula resistente al agua (Waterproof).`,
                tag: null,
                tonos: null,
            },
            {
                id: 23,
                nombre: "Máscara Clásica (Café) - Prosa",
                categoria: "Mascara",
                imagenes: [
                    "https://www.prosanatural.com/img/productos/primer-vista/15151.webp",
                    "https://www.prosanatural.com/img/productos/segunda-vista/15151.webp",
                    "https://www.prosanatural.com/img/productos/tercer-vista/15151.webp"
                     ],
                descripcion: `Aplique uniformemente sobre las pestañas hasta obtener el efecto deseado.

Su cepillo aplicador engrosa y distribuye la máscara a lo largo de las pestañas.

Efecto de pestañas espesas, elevadas, con un toque de color café.

Complementada con los ingredientes que caracterizan a nuestras fórmulas 4 en uno (Hueso de Mamey, Sábila, Jojoba y Germen de Trigo).

Fórmula resistente al agua (Waterproof).`,
                tag: null,
                tonos: null,
            },
             {
                id: 24,
                nombre: "Máscara Clásica (Azul) - Prosa",
                categoria: "Mascara",
                imagenes: [
                    "https://www.prosanatural.com/img/productos/primer-vista/15152.webp",
                    "https://www.prosanatural.com/img/productos/segunda-vista/15152.webp",
                    "https://www.prosanatural.com/img/productos/tercer-vista/15152.webp"
                     ],
                descripcion: `Aplique uniformemente sobre las pestañas hasta obtener el efecto deseado.

Su cepillo aplicador engrosa y distribuye la máscara a lo largo de las pestañas

Efecto de pestañas espesas, elevadas, con un toque de color azul.

Complementada con los ingredientes que caracterizan a nuestras fórmulas 4 en uno (Hueso de Mamey, Sábila, Jojoba y Germen de Trigo).

Fórmula resistente al agua (Waterproof).`,
                tag: null,
                tonos: null,
            },
        ];

  const productosLabios = [
             {
                id: 1,
                nombre: "YeriMua X Beauty Creations - Set Dúo De Labios - Bad B*tch",
                categoria: "Set",
                imagenes: [
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-x-yerimua-duo-de-labios-bad-btch-labial-y-delineador-cosmetics-yml2-627452.jpg?v=1723545578&width=900",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-x-yerimua-duo-de-labios-bad-btch-labial-y-delineador-cosmetics-yml2-700007.jpg?v=1723545605&width=900",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-x-yerimua-duo-de-labios-bad-btch-labial-y-delineador-cosmetics-yml2-165715.jpg?v=1723545621&width=900",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-x-yerimua-duo-de-labios-bad-btch-labial-y-delineador-cosmetics-yml2-872631.webp?v=1723545639&width=900",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-x-yerimua-duo-de-labios-bad-btch-labial-y-delineador-cosmetics-yml2-864814.jpg?v=1723545665&width=900"
                ],
                descripcion: `Beauty Creations X Yerimua - Dúo De Labios Bad B*tch - Labial Y Delineador Un dúo solo para lxs valientes 🫦 Este kit de delineador de labios en gel y gloss ultra brillante es digno de una diva, si quieres lucir una sonrisa envidiable, labios hidratados y un color de infarto, no busques mas que te presentamos el Bad B*tch dúo. 

Este kit incluye: 

💕MORENA: un gloss café nude con un sub tono caramelo, da una apariencia hidratada y efecto vidrio a los labios, dejando una apariencia impecable por varias horas. 
💕YUMMY: un delineador de labios en gel tono café medio con un sub tono caramelo, es cremoso, fácil de aplicar y preciso, dejara en conjunto con el gloss, los labios perfectos. 

* El dúo no incluye el llavero de colección.

Los productos de edición limitada de esta colección se convertirán sin duda en tus favoritos, consigue esta exclusiva colección YeriMua X Beauty Creations. `,
                tag: "Yeri Mua",
                tonos: null,
            },
             {
                id: 2,
                nombre: "Balm N' Cute - Balsamo Labial Humectante",
                categoria: "Balsamo",
                imagenes: [
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-cosmetics-mx-beauty-creations-balm-n-cute-bcbnc-lb01-488573.jpg?v=1723481181&width=450",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-cosmetics-mx-beauty-creations-balm-n-cute-bcbnc-lb01-167414.jpg?v=1723481199&width=450",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-cosmetics-mx-beauty-creations-balm-n-cute-bcbnc-lb01-489706.jpg?v=1723481225&width=450",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-cosmetics-mx-beauty-creations-balm-n-cute-bcbnc-lb01-546705.jpg?v=1723481241&width=450",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-cosmetics-mx-beauty-creations-balm-n-cute-bcbnc-lb02-223089.jpg?v=1723481258&width=450",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-cosmetics-mx-beauty-creations-balm-n-cute-bcbnc-lb02-124647.jpg?v=1723481286&width=450",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-cosmetics-mx-beauty-creations-balm-n-cute-bcbnc-lb02-242458.jpg?v=1723481302&width=450",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-cosmetics-mx-beauty-creations-balm-n-cute-bcbnc-lb03-678673.jpg?v=1723481318&width=450",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-cosmetics-mx-beauty-creations-balm-n-cute-bcbnc-lb03-444849.jpg?v=1723481346&width=450",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-cosmetics-mx-beauty-creations-balm-n-cute-bcbnc-lb03-219733.jpg?v=1723481361&width=450",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-cosmetics-mx-beauty-creations-balm-n-cute-bcbnc-lb04-874215.jpg?v=1723481380&width=450",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-cosmetics-mx-beauty-creations-balm-n-cute-bcbnc-lb04-118671.jpg?v=1723481407&width=450",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-cosmetics-mx-beauty-creations-balm-n-cute-bcbnc-lb04-241768.jpg?v=1723481422&width=450",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-cosmetics-mx-beauty-creations-balm-n-cute-bcbnc-lb05-841466.jpg?v=1723481440&width=450",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-cosmetics-mx-beauty-creations-balm-n-cute-bcbnc-lb05-393262.jpg?v=1723481466&width=450",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-cosmetics-mx-beauty-creations-balm-n-cute-bcbnc-lb05-518793.jpg?v=1723481480&width=450",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-cosmetics-mx-beauty-creations-balm-n-cute-bcbnc-lb06-405147.jpg?v=1723481498&width=450",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-cosmetics-mx-beauty-creations-balm-n-cute-bcbnc-lb06-688618.jpg?v=1723481525&width=450",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-cosmetics-mx-beauty-creations-balm-n-cute-bcbnc-lb06-196136.jpg?v=1723481541&width=450"
                ],
                descripcion: `¡Luce linda mientras cuidas tus labios con Balm N' Cute! Nuestros bálsamos hidratantes agregan un toque natural de color mientras protegen tus labios con su fórmula de larga duración, ¡para que puedas sonreír sin preocupaciones! Es fácil de aplicar y con un olor delicioso, Balm N' Cute es el complemento perfecto para tu rutina de belleza. Donde la ternura se encuentra con el cuidado perfecto de tus labios.

6 tonos.
6 aromas: cereza, vainilla, rosa, coco, frambuesa y ponche de frutas.
Hidratación de larga duración.
Enriquecido con aceite de semilla de girasol.
Sutil rubor de color. 
Textura suave.

Estos bálsamos labiales perfumados te darán un look fresco y natural mientras cuidan tus labios. ¡Encuentra tu favorito y presume unos labios irresistibles!`,
                tag: null,
                tonos: [
                    { nombre: "Coconut", hex: "#e46b63" },
                    { nombre: "Raspberry", hex: "#cb2845" },
                    { nombre: "Rose", hex: "#ee6b8b" },
                    { nombre: "Fruit Punch", hex: "#f22c2d" },
                    { nombre: "Cherry", hex: "#4f2526" },
                    { nombre: "Vanilla", hex: "#f9d8b9" }
                ]
            },
             {
                id: 3,
                nombre: "Rosy McMichael X Beauty Creations - Set De Labios - The Not So Classic Kit",
                categoria: "Set",
                imagenes: [
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-kit-de-labios-the-not-so-classic-kit-rosy-mcmichael-x-beauty-creations-vol-2-cosmetics-rmv2ls1-731090.jpg?v=1723551758&width=450",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-kit-de-labios-the-not-so-classic-kit-rosy-mcmichael-x-beauty-creations-vol-2-cosmetics-rmv2ls1-923393.jpg?v=1723551784&width=450",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-kit-de-labios-the-not-so-classic-kit-rosy-mcmichael-x-beauty-creations-vol-2-cosmetics-rmv2ls1-608064.jpg?v=1723551801&width=450",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-kit-de-labios-the-not-so-classic-kit-rosy-mcmichael-x-beauty-creations-vol-2-cosmetics-rmv2ls1-685338.webp?v=1723551818&width=450",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-kit-de-labios-the-not-so-classic-kit-rosy-mcmichael-x-beauty-creations-vol-2-cosmetics-rmv2ls1-380890.jpg?v=1723551843&width=450",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-kit-de-labios-the-not-so-classic-kit-rosy-mcmichael-x-beauty-creations-vol-2-cosmetics-rmv2ls1-959162.jpg?v=1723551861&width=450"
                ],
                descripcion: `Prepárate para tener los mas brillantes y perfectos labios pensado en ti que te encanta brillar

El Kit The Not So Classic incluye:

1. The Classic Lip Liner - Delineador de Labios Especia de Canela en un tono mate, acabado cremoso que se deslizará sin mínimo esfuerzo
2. Lip Lift Plumper - Gloss Melocotón Claro, levanta tus labios con un acabado brillante 
3. Rosy´s Neutral Matte Lipstick - Labial Azúcar Marrón en un tono mate, luce espectacular tus labios con este hermoso tono y deja que tus labios digan todo
Tip: Aplica el delineador en modo degradado y después el labial en barra con terminado mate. Y si quieres que tus labios luzcan aún más voluminosos, usa el plumper como primer, dejándolo actuar y removiendo antes de delinear.`,
                tag: "Rosy McMichael",
                tonos: null,
            },
             {
                id: 4,
                nombre: "Bratz X Beauty Creations - Aceite De Labios",
                categoria: "Lip Oil",
                imagenes: [
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/Lip-oil-JADE_3196b717-56b0-4b7a-9053-c00c8b21ea0a.jpg?v=1757109264&width=450",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/LIP-OIL-JADE-2.jpg?v=1757109264&width=450",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/Alexis_Lip_Gloss-3.png?v=1731455242&width=450",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/LIP-OIL-JADE.jpg?v=1730427508&width=450",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/Jade-Bratz-SWATCH.png?v=1747698613&width=450",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/Lip-oil-CLOE_a89ff993-3141-4fc8-81fd-209786c20b02.jpg?v=1731454394&width=450",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/LIP-OIL-CLOE-2_42c027ad-0ecf-472f-9c21-c59979ee6ea5.jpg?v=1743004758&width=450",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/LIP-OIL-CLOE_6314724f-f5e8-43fa-a3ce-186e17ab0685.jpg?v=1731454394&width=450",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/Cloe-SWATCH.png?v=1747698640&width=450",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/Sasha_Lipstick_1.jpg?v=1731456969&width=450",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/LIP-OIL-SHASA-1_b121ddf0-7a85-4e37-85d8-2ae630e1e34f.jpg?v=1747174393&width=450",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/LIP-OIL-SHASA.jpg?v=1747174393&width=450",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/Sasha-SWATCH.png?v=1747698663&width=450",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/Yasmin-Lip-Oil.jpg?v=1731457391&width=450",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/LIP-OIL-YASMIN-1.jpg?v=1730428083&width=450",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/LIP-OIL-YASMIN.jpg?v=1730428083&width=450",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/Yasmin-SWATCH.png?v=1747698691&width=450"
                ],
                descripcion: `¡Brilla como una estrella con Lip Oil de Bratz X Beauty Creations!

Hidrata y nutre tus labios, este aceite labial también te dará un brillo sutil. ¡Añade un toque de color y un suave aroma a tu sonrisa con Jade Lip Oil!

LIBRE DE CRUELDAD 
LIBRE DE SULFATOS 
LIBRE DE PARABENOS`,
                tag: "Tendencia",
                tonos: [
                    { nombre: "Jade", hex: "#f3aec0" },
                    { nombre: "Cloe", hex: "#e5e5e5" },
                    { nombre: "Sasha", hex: "#cd8f92" },
                    { nombre: "Yasmin", hex: "#e3999a" }
                ]
            },
            {
                id: 5,
                nombre: `Victor Guadarrama Trío de labios "Séduceme"`,
                categoria: "Set",
                imagenes: [
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/VIC07_RESIZED.png?v=1748627617&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/LIP-TRIO-RESIZED.png?v=1747259149&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/GLOSS-OPEN.jpg?v=1747259183&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/LINER-OPEN.jpg?v=1747259183&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/LIPSTICK-OPEN.jpg?v=1747259570&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/LIPSTICK-OPEN.jpg?v=1747259570&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/LIP-TRIP-CLOSED.jpg?v=1747259570&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/VIC13_RESIZED.png?v=1747259367&width=600"
                     ],
                descripcion: `Mejora tus labios con el Trío de Labios Sedúceme , un set imprescindible diseñado para un glamour sin esfuerzo y unos labios atrevidos y hermosos. Presentado en un elegante envase dorado, este trío incluye:

Lápiz labial con acabado satinado CÓMEME : un tono nude melocotón cremoso y rico en pigmentos que se desliza suavemente y ofrece un color lujoso con un acabado satinado cómodo.

ENAMÓRATE Brillo Labial Volumen – Un brillo labial voluminizador de alto brillo en dorado con toques rosas y lilas. Proporciona un efecto volumen instantáneo con un acabado suave y no pegajoso.

Delineador de labios retráctil BÉSAME MUCHO : Un delineador marrón melocotón que define y realza los labios con una textura cremosa que se difumina fácilmente. Su diseño retráctil lo hace perfecto para retoques en cualquier lugar.

Libre de crueldad animal y cuidadosamente seleccionado por Vico Guadarrama, este trío ofrece la armonía perfecta de definición, color y brillo, todo en un lujoso conjunto.`,
                tag: null,
                tonos: null,
            },
            {
                id: 6,
                nombre: `Lápiz labial Nude X Soft Matte`,
		categoria: "Lipstick",
                imagenes: [
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/GRAYBGFORECOMM_1_8bfaeb4a-2341-40b8-8d85-a1dc1e39ee70.png?v=1738265053&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/nude-x-soft-matte-lipstick-various-shades-beauty-creations-nxls01-691279.jpg?v=1737594083&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/nude-x-soft-matte-lipstick-various-shades-beauty-creations-nxls01-359549.jpg?v=1737594083&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/GRAYBGFORECOMM_1_8bfaeb4a-2341-40b8-8d85-a1dc1e39ee70.png?v=1738265053&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/nude-x-soft-matte-lipstick-various-shades-beauty-creations-nxls01-157827.jpg?v=1738265053&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/nude-x-soft-matte-lipstick-various-shades-beauty-creations-nxls02-516113.jpg?v=1738265053&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/nude-x-soft-matte-lipstick-various-shades-beauty-creations-nxls02-875050.jpg?v=1744145805&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/nude-x-soft-matte-lipstick-various-shades-beauty-creations-nxls03-233605.jpg?v=1738265053&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/nude-x-soft-matte-lipstick-various-shades-beauty-creations-nxls03-797770.jpg?v=1738265053&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/nude-x-soft-matte-lipstick-various-shades-beauty-creations-nxls04-389045.jpg?v=1738265053&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/nude-x-soft-matte-lipstick-various-shades-beauty-creations-nxls04-327237.jpg?v=1738265053&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/nude-x-soft-matte-lipstick-various-shades-beauty-creations-nxls05-116469.jpg?v=1738265053&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/nude-x-soft-matte-lipstick-various-shades-beauty-creations-nxls05-737874.jpg?v=1738265053&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/nude-x-soft-matte-lipstick-various-shades-beauty-creations-nxls06-762504.jpg?v=1738265053&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/nude-x-soft-matte-lipstick-various-shades-beauty-creations-nxls06-683040.jpg?v=1744145805&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/nude-x-soft-matte-lipstick-various-shades-beauty-creations-nxls07-880491.jpg?v=1738265053&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/nude-x-soft-matte-lipstick-various-shades-beauty-creations-nxls07-760646.jpg?v=1738265053&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/nude-x-soft-matte-lipstick-various-shades-beauty-creations-nxls08-512558.jpg?v=1738265053&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/nude-x-soft-matte-lipstick-various-shades-beauty-creations-nxls08-540458.jpg?v=1738265053&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/nude-x-soft-matte-lipstick-various-shades-beauty-creations-nxls09-159122.jpg?v=1738265053&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/nude-x-soft-matte-lipstick-various-shades-beauty-creations-nxls09-567160.jpg?v=1738265053&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/nude-x-soft-matte-lipstick-various-shades-beauty-creations-nxls10-485743.jpg?v=1738265053&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/nude-x-soft-matte-lipstick-various-shades-beauty-creations-nxls10-838193.jpg?v=1738265053&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/nude-x-soft-matte-lipstick-various-shades-beauty-creations-nxls11-190283.jpg?v=1738265053&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/nude-x-soft-matte-lipstick-various-shades-beauty-creations-nxls11-791035.jpg?v=1738265053&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/nude-x-soft-matte-lipstick-various-shades-beauty-creations-nxls12-488473.jpg?v=1738265053&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/nude-x-soft-matte-lipstick-various-shades-beauty-creations-nxls12-418189.jpg?v=1738265053&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/nude-x-soft-matte-lipstick-various-shades-beauty-creations-nxls13-823334.jpg?v=1738265053&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/nude-x-soft-matte-lipstick-various-shades-beauty-creations-nxls13-193160.jpg?v=1738265053&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/nude-x-soft-matte-lipstick-various-shades-beauty-creations-nxls14-573131.jpg?v=1738265053&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/nude-x-soft-matte-lipstick-various-shades-beauty-creations-nxls14-862699.jpg?v=1744145805&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/nude-x-soft-matte-lipstick-various-shades-beauty-creations-nxls15-790367.jpg?v=1738265053&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/nude-x-soft-matte-lipstick-various-shades-beauty-creations-nxls15-331351.jpg?v=1738265053&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/nude-x-soft-matte-lipstick-various-shades-beauty-creations-nxls16-199759.jpg?v=1738265053&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/nude-x-soft-matte-lipstick-various-shades-beauty-creations-nxls16-733544.jpg?v=1738265053&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/nude-x-soft-matte-lipstick-various-shades-beauty-creations-nxls17-141628.jpg?v=1738265053&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/nude-x-soft-matte-lipstick-various-shades-beauty-creations-nxls17-251694.jpg?v=1738265053&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/nude-x-soft-matte-lipstick-various-shades-beauty-creations-nxls18-974615.jpg?v=1738265053&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/nude-x-soft-matte-lipstick-various-shades-beauty-creations-nxls18-682659.jpg?v=1738265053&width=600"
                
                     ],
                descripcion: `Presentamos Nude X: una sofisticada colección de labiales mate suaves con 18 tonos cautivadores, con un enfoque en tonos nude diseñados para complementar cualquier tono de piel. Disfruta de una suavidad aterciopelada que se desliza con facilidad, ofreciendo un acabado mate duradero y lujoso. Desde delicados beiges hasta caramelos intensos, Nude X encarna la elegancia moderna, convirtiéndose en el complemento perfecto para realzar tu rutina de belleza.`,
                tag: null,
                tonos: [
    // Fila de arriba (Izquierda a Derecha)
    { nombre: "Better Off Alone", hex: "#E2A58D" },
    { nombre: "Casual Lover", hex: "#CCA183" },
    { nombre: "Best of Me", hex: "#D49076" },
    { nombre: "Most Popular", hex: "#C48667" },
    { nombre: "On The Daily", hex: "#BC785B" },
    { nombre: "My Honey", hex: "#B38066" },
    { nombre: "Sweet Tweet", hex: "#AF8869" },
    { nombre: "Never Tied Down", hex: "#BD724F" },
    { nombre: "Im Committed", hex: "#AC6B4E" },
    { nombre: "Worth The Wait", hex: "#8E5140" },

    // Fila de abajo (Izquierda a Derecha)
    { nombre: "Miss Perfect", hex: "#B2765C" },
    { nombre: "My Go to", hex: "#854936" },
    { nombre: "Keep Me Satisfied", hex: "#7D4B35" },
    { nombre: "Get Into It", hex: "#824C3B" },
    { nombre: "Never Too Much", hex: "#613527" },
    { nombre: "Mixed Feelings", hex: "#483024" },
    { nombre: "Cant Blame You", hex: "#37221C" },
    { nombre: "True Icon", hex: "#332424" }
]
            },
            {
                id: 7,
                nombre: `Velvet Stay Liquid Lipstick`,
		categoria: "Lipstick",
                imagenes: [
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/velvet-stay-liquid-lipstick-various-shades-beauty-creations-lvs01-954611.jpg?v=1723047688&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/velvet-stay-liquid-lipstick-various-shades-beauty-creations-lvs01-597450.jpg?v=1723047691&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/velvet-stay-liquid-lipstick-various-shades-beauty-creations-lvs01-870924.jpg?v=1739919827&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/velvet-stay-liquid-lipstick-various-shades-beauty-creations-lvs01-910976.jpg?v=1739919827&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/GRAYBGFORECOMM_24.png?v=1739919827&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/velvet-stay-liquid-lipstick-various-shades-beauty-creations-lvs02-898248.jpg?v=1739919770&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/velvet-stay-liquid-lipstick-various-shades-beauty-creations-lvs02-706256.jpg?v=1739919770&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/velvet-stay-liquid-lipstick-various-shades-beauty-creations-lvs02-185686.jpg?v=1739919770&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/velvet-stay-liquid-lipstick-various-shades-beauty-creations-lvs03-709738.jpg?v=1739919770&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/velvet-stay-liquid-lipstick-various-shades-beauty-creations-lvs03-967274.jpg?v=1739919770&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/velvet-stay-liquid-lipstick-various-shades-beauty-creations-lvs03-875413.jpg?v=1739919770&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/velvet-stay-liquid-lipstick-various-shades-beauty-creations-lvs04-274744.jpg?v=1739919770&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/velvet-stay-liquid-lipstick-various-shades-beauty-creations-lvs04-603838.jpg?v=1739919770&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/velvet-stay-liquid-lipstick-various-shades-beauty-creations-lvs04-438678.jpg?v=1739919770&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/velvet-stay-liquid-lipstick-various-shades-beauty-creations-lvs05-441499.jpg?v=1739919770&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/velvet-stay-liquid-lipstick-various-shades-beauty-creations-lvs05-916410.jpg?v=1739919770&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/velvet-stay-liquid-lipstick-various-shades-beauty-creations-lvs05-652383.jpg?v=1739919770&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/velvet-stay-liquid-lipstick-various-shades-beauty-creations-lvs06-956322.jpg?v=1739919770&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/velvet-stay-liquid-lipstick-various-shades-beauty-creations-lvs06-570029.jpg?v=1739919770&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/velvet-stay-liquid-lipstick-various-shades-beauty-creations-lvs06-299837.jpg?v=1739919770&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/velvet-stay-liquid-lipstick-various-shades-beauty-creations-lvs07-502083.jpg?v=1739919770&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/velvet-stay-liquid-lipstick-various-shades-beauty-creations-lvs07-485394.jpg?v=1739919770&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/velvet-stay-liquid-lipstick-various-shades-beauty-creations-lvs07-380170.jpg?v=1739919770&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/velvet-stay-liquid-lipstick-various-shades-beauty-creations-lvs08-114879.jpg?v=1739919770&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/velvet-stay-liquid-lipstick-various-shades-beauty-creations-lvs08-418638.jpg?v=1739919770&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/velvet-stay-liquid-lipstick-various-shades-beauty-creations-lvs08-330100.jpg?v=1739919770&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/velvet-stay-liquid-lipstick-various-shades-beauty-creations-lvs09-669823.jpg?v=1739919770&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/velvet-stay-liquid-lipstick-various-shades-beauty-creations-lvs09-573172.jpg?v=1739919770&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/velvet-stay-liquid-lipstick-various-shades-beauty-creations-lvs09-297034.jpg?v=1739919770&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/velvet-stay-liquid-lipstick-various-shades-beauty-creations-lvs10-453117.jpg?v=1739919770&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/velvet-stay-liquid-lipstick-various-shades-beauty-creations-lvs10-651615.jpg?v=1739919770&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/velvet-stay-liquid-lipstick-various-shades-beauty-creations-lvs10-370104.jpg?v=1739919770&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/velvet-stay-liquid-lipstick-various-shades-beauty-creations-lvs11-559060.jpg?v=1739919770&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/velvet-stay-liquid-lipstick-various-shades-beauty-creations-lvs11-432701.jpg?v=1739919770&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/velvet-stay-liquid-lipstick-various-shades-beauty-creations-lvs11-240572.jpg?v=1739919770&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/velvet-stay-liquid-lipstick-various-shades-beauty-creations-lvs12-856358.jpg?v=1739919770&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/velvet-stay-liquid-lipstick-various-shades-beauty-creations-lvs12-378320.jpg?v=1739919770&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/velvet-stay-liquid-lipstick-various-shades-beauty-creations-lvs12-584673.jpg?v=1739919770&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/velvet-stay-liquid-lipstick-various-shades-beauty-creations-lvs13-652181.jpg?v=1739919770&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/velvet-stay-liquid-lipstick-various-shades-beauty-creations-lvs13-497042.jpg?v=1739919770&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/CHOCO_433e219e-295e-4abb-9192-a95658540c8a.png?v=1739919770&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/14-FriendZone_9e736932-c3da-47d4-b7e6-7732d36547b5.jpg?v=1739919770&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/FZZ_c71e30da-aee3-4ca9-ac7f-ec48052e4f05.png?v=1739919770&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/FZ_62eb4174-a843-4744-86fa-3f9479139954.png?v=1739919770&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/15-SweetAffair_573a5f23-73eb-4306-a1d9-de0a6c53fea1.jpg?v=1739919770&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/SWEET_b7a6f089-3c80-449d-974e-29eda6c55e01.png?v=1739919770&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/SA_9707158c-674b-4573-8101-63d96f15bc99.png?v=1739919770&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/16-MadAboutYou_72528ecc-34ca-4715-8a34-79bbe3fa38dd.jpg?v=1739919770&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/MADAB_154c6377-0920-4dbd-a3ce-1d72981ea01a.png?v=1739919770&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/MAD_b739037c-b276-4d7f-b2e3-7ac2eccf8efe.png?v=1739919770&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/17-Muah_4e482adb-e5ed-43f9-867b-b32843848203.jpg?v=1739919770&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/MUAHH_870b7355-ef84-40e6-978f-8dbed829f514.png?v=1739919770&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/MM_8e69b383-b50f-4f37-89df-1631b387c18f.png?v=1739919770&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/18-PinkyPromise_a6a1b597-d611-47df-9370-5993f3d04889.jpg?v=1739919770&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/PINKY_50a66c5a-0fb0-41a9-95ab-acf36f2e0176.png?v=1739919770&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/PP_3ea5cf4f-a633-4e8d-b59e-b1373f021ab6.png?v=1739919770&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/19-Nova_dfb59f37-d6ca-461d-b13e-f0cb29dbd875.jpg?v=1739919770&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/NOV_580c7d88-a6da-4d4a-9953-0ea84234344d.png?v=1739919770&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/NOVAA_cefca66a-8bca-41fa-bf45-b78e1f2bf873.png?v=1739919770&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/20-BerryMe_f4ba9cb5-6a1c-4f68-a0f7-9bac2a936742.jpg?v=1739919770&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/BERRYY_4b869864-9175-4b74-9b04-457437358790.png?v=1739919770&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/BERRY_1fa9a833-5aae-4146-91ca-2d50742aa9cc.png?v=1739919770&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/21-RedAffair_fe2dfbd1-41d6-4989-9b1e-55743b59c6dd.jpg?v=1739919770&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/RED_933bed0f-870f-4931-8ec2-245c17277cd3.png?v=1739919770&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/REDA_0fbfc6bc-f6bc-4cd8-8d32-c83829412c79.png?v=1739919770&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/22-GuiltyPleasure_ae5f4e0b-8726-43de-b7a0-926e996e7b81.jpg?v=1739919770&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/GUILTY_7d129333-61b8-4b47-b06b-233344e725cc.png?v=1739919770&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/GUILT_340266c6-aa53-403c-960a-b64a0a206f06.png?v=1739919770",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/23-Juiced_70bb7a76-01a6-4d07-b5a2-a530bb08e9fd.jpg?v=1739919770&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/JUICE_c82ec511-e030-4405-be4c-c2b939d375c6.png?v=1739919770&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/JUICC_8167ef9e-d576-4d07-a9fa-39aa5eeeeedc.png?v=1739919770&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/24-DarkSide_5fd3814a-159f-4387-ad2d-4e70d8e5eb5b.jpg?v=1739919770",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/DARK_4dead86e-152b-441a-95df-57ff569f7ea7.png?v=1739919770",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/DARKSID_45553c90-512c-4821-ae07-5699cf23973a.png?v=1739919770"
                     ],
                descripcion: `Elige nuestras pinturas labiales multiusos para un acabado nutritivo, que no se reseca y de larga duración que se siente tan bien como se ve.
Estas pinturas labiales ligeras y ricas en pigmentos brindan un toque de color sin la sensación pesada de las barras de labios tradicionales, lo que las convierte en tu opción diaria para una belleza sin esfuerzo

Los labiales Velvet Stay son mucho más que un simple color de labios: son un verdadero multiusos. Aplícalos en las mejillas como un rubor en crema o difumínalos en los párpados para lograr un look de sombra de ojos suave y monocromático. Su fórmula suave y aterciopelada se difumina a la perfección sobre la piel, dejando un acabado natural y difuminado que realza tus rasgos sin acumularse en las líneas de expresión.

Ya sea que estés creando un rostro completo o un retoque rápido, estos versátiles labiales agregan un toque de color donde lo necesites, mientras mantienen tu apariencia fresca, hidratada y cómodamente liviana durante todo el día.`,
                tag: null,
                tonos: [
    // Primera fila
    { nombre: "STAY CALM", hex: "#E6A88E" },
    { nombre: "CAPPUCCINO", hex: "#CA8269" },
    { nombre: "TRUFFLE", hex: "#B5887C" },
    { nombre: "LIMITED", hex: "#D99890" },
    { nombre: "SOFT SIDE", hex: "#E97B66" },
    { nombre: "HIGH END", hex: "#F37C88" },

    // Segunda fila
    { nombre: "STARDUM", hex: "#D67078" },
    { nombre: "HIGH CLASS", hex: "#CF5C6E" },
    { nombre: "ROMANCE ME", hex: "#D07C6A" },
    { nombre: "SUGGA BABY", hex: "#A84F45" },
    { nombre: "FOXY", hex: "#BC4F3E" },
    { nombre: "ON THE EDGE", hex: "#834A42" },

    // Tercera fila
    { nombre: "CHOCO LATTE", hex: "#B6755D" },
    { nombre: "FRIENDZONE", hex: "#A3695C" },
    { nombre: "SWEET AFFAIR", hex: "#D07469" },
    { nombre: "MAD ABOUT YOU", hex: "#6B4236" },
    { nombre: "MUAH", hex: "#F64639" },
    { nombre: "PINK POISE", hex: "#E90C83" },

    // Cuarta fila
    { nombre: "NOVA", hex: "#AD4859" },
    { nombre: "BERRY ME", hex: "#D62548" },
    { nombre: "RED AFFAIR", hex: "#C21524" },
    { nombre: "GUILTY PLEASURE", hex: "#A81822" },
    { nombre: "JUICED", hex: "#78181F" },
    { nombre: "DARK SIDE", hex: "#4A181C" }
]
            },
            {
                id: 8,
                nombre: `Seal The Deal Liquid Matte Liquid Lipstick`,
		        categoria: "Liquid Lipstick",
                imagenes: [
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/2_3e53e6e2-2bd6-4a12-ad09-c7f66d310696.png?v=1723047474",,
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/1_dc9cb4e2-8bb6-41b7-a9c9-164f774b59b4.png?v=1723047467",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/GRAYBGFORECOMM_25.png?v=1739920660",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/8_a22210cd-8e97-447d-8b40-bde9dbced263.png?v=1739920660",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/12_95d63c72-3ca5-4235-9991-9746271b2744.png?v=1739920660",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/16_5f6de390-06fd-4c6e-b48f-e46064c0b48e.png?v=1739920660",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/20_bef57f44-8ee2-44d1-8926-60a675ff8816.png?v=1739920660",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/4_15978371-4b2d-4d33-9aab-fe70a3e9c538.png?v=1739920660",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/8_d6adc2ca-0be7-4361-ac0c-f8b0c46b6e2d.png?v=1739920660",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/12_9217da37-a5c3-439d-9c63-16b85b63990f.png?v=1739920660",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/16_e31b71df-151a-4d4a-b491-944b81b016e8.png?v=1739920660",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/20_7dc07143-61fd-46a8-81c8-1da3646d0d76.png?v=1739920660",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/4_c7833487-3411-443b-ab74-2485a5421d4b.png?v=1739920660",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/8_7cdaf772-18a6-4e46-b5bc-809c1abbdb7c.png?v=1739920660",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/12_5487e1c3-156d-40d6-9566-1035b7ff50b8.png?v=1739920660",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/16_51a889bc-78a7-4ed2-b1a1-2486366b8f9b.png?v=1739920660",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/20_a4fb2352-ade9-40e6-9414-0f6009dd285c.png?v=1739920660",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/4_edc45d65-ca8e-4f1c-b1d5-ac6e0b69eed8.png?v=1739920660",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/8_145ab16d-eca4-4ff2-81c9-0e05371d7642.png?v=1739920660",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/12_846b4524-9b23-4ada-aafd-2b91ebc31e7c.png?v=1739920660",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/16_ced42eba-5598-4a85-995f-2c82aaa20e52.png?v=1739920660",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/20_c2968ffc-7f96-4a3a-9fe2-5f55b5097d3a.png?v=1739920660",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/4_949e851b-5385-4e17-9ddb-864b9a6be1cc.png?v=1739920660",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/8_23606d46-3615-4328-8e1b-315369cd36f5.png?v=1739920660",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/12_9db0c295-0c6c-4ee1-ae34-5c3c14c11990.png?v=1739920660",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/15_2973ecf9-243b-4dd1-b07c-1d516772f682.png?v=1739920660",
                    "https://zoharacosmeticos.com.mx/wp-content/uploads/2024/08/3431d0_6ffcf5ea8f344a1eb00025ea557c2dd9mv2.jpg"
                     ],
                descripcion: `¿Buscas un labial con pigmentación INTENSA y larga duración? ¡Elige nuestros labiales líquidos Seal The Deal! Son súper saturados y dejan tus labios con un acabado mate suave.`,
                tag: null,
                tonos: [
    // Primera fila
    { nombre: "ATTRACTIVE", hex: "#D62F26" },
    { nombre: "BARE", hex: "#D38590" },
    { nombre: "BOSS UP", hex: "#DFA896" },
    { nombre: "CLASS ACT", hex: "#D982A8" },

    // Segunda fila
    { nombre: "DON'T JUDGE ME", hex: "#A8688A" },
    { nombre: "DOUBLE TAKE", hex: "#9E352F" },
    { nombre: "DRAMA MAMA", hex: "#6E363E" },
    { nombre: "DROPPING HINTS", hex: "#AC6C73" },

    // Tercera fila
    { nombre: "FEMINIST", hex: "#E06C7A" },
    { nombre: "HYPNOTIZE", hex: "#D43477" },
    { nombre: "IT'S SERIOUS", hex: "#B5749D" },
    { nombre: "LADY LIKE", hex: "#945B6D" },

    // Cuarta fila
    { nombre: "LAST CHANCE", hex: "#D96E88" },
    { nombre: "LAST TOUCH", hex: "#C99182" },
    { nombre: "LIONESS", hex: "#C47547" },
    { nombre: "LOTS TO LOVE", hex: "#CC2B26" },

    // Quinta fila
    { nombre: "NOW OR NEVER", hex: "#CF707A" },
    { nombre: "OPPOSITES ATTRACT", hex: "#CF4068" },
    { nombre: "RICH RICH", hex: "#E33928" },
    { nombre: "SHHH", hex: "#E0B3BC" },

    // Sexta fila
    { nombre: "SKEPTICAL", hex: "#7A2837" },
    { nombre: "SNATCHED", hex: "#C69892" },
    { nombre: "SO IDEAL", hex: "#3B2626" },
    { nombre: "TANGO", hex: "#E85338" }
]
            },
            {
                id: 9,
                nombre: `Nude X - Lipliner`,
				categoria: "Lipliner",
                imagenes: [
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/Screenshot2025-01-22at10.06.27AM.png?v=1737594154&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/Screenshot2025-01-22at10.07.25AM.png?v=1737594154&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/nude-x-pr-box-beauty-creations-nxl-pr-489443.jpg?v=1737592974&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/nude-x-pr-box-beauty-creations-nxl-pr-888681.jpg?v=1737592974&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/nude-x-pr-box-beauty-creations-nxl-pr-571232.jpg?v=1737592974&width=600"
                    
                     ],
                descripcion: `Formulado para una larga duración y máxima comodidad, cada producto se desliza fácilmente con un acabado cremoso e hidratante. Perfecto para profesionales, amantes de la belleza o para quienes buscan un delineador de labios nude perfecto.`,
                tag: null,
                tonos: [
    { nombre: "NUDE ALERT", hex: "#EBCDA9" },
    { nombre: "TWISTED LOVE", hex: "#CE9F9B" },
    { nombre: "MY NECESSITY", hex: "#D4A895" },
    { nombre: "COMFORT ZONE", hex: "#C99589" },
    { nombre: "MORNING PEACH", hex: "#DCA289" },
    { nombre: "BASIC ESSENTIAL", hex: "#C08C78" },
    { nombre: "WEEKEND FLING", hex: "#B58069" },
    { nombre: "TOXIC", hex: "#AB7980" },
    { nombre: "SO BARE", hex: "#A8705C" },
    { nombre: "NEXT LEVEL", hex: "#996B74" },
    { nombre: "ON YOUR MIND", hex: "#C68F74" },
    { nombre: "NO SHAME", hex: "#915D56" },
    { nombre: "YOUR EVERYDAY", hex: "#AD897D" },
    { nombre: "LOVE LETTER", hex: "#A37A71" },
    { nombre: "STILL THE ONE", hex: "#BD8E83" },
    { nombre: "ALWAYS XTRA", hex: "#A17468" },
    { nombre: "STAY THE NIGHT", hex: "#8F695F" },
    { nombre: "TASTE OF ME", hex: "#A87D75" },
    { nombre: "WHATEVER YOU WANT", hex: "#997165" },
    { nombre: "IMPULSIVE", hex: "#8F6256" },
    { nombre: "CAN'T HANDLE", hex: "#855E53" },
    { nombre: "MISBEHAVED", hex: "#734F44" },
    { nombre: "XXX", hex: "#5F413B" },
    { nombre: "CALL ME YOURS", hex: "#573A34" }
]
            },
            {
                id: 10,
                nombre: `Aceite labial con pH All About You`,
		        categoria: "Lip Oil",
                imagenes: [
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/all-about-you-ph-lip-oil-beauty-creations-loph-1-552706.jpg?v=1755274967&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/my-fave-topper-ALL_ABOUT_YOU_PH_LIP_OILS1552-3.jpg?v=1740011083&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/GRAYBGFORECOMM_32_c3337a77-e489-470a-bb9b-3557fa90b9d6.png?v=1755274967&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/all-about-you-ph-lip-oil-beauty-creations-loph-1-691106.jpg?v=1740011083&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/all-about-you-ph-lip-oil-beauty-creations-loph-2-101059.jpg?v=1740011083&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/all-about-you-ph-lip-oil-beauty-creations-loph-2-858074.jpg?v=1740011083&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/all-about-you-ph-lip-oil-beauty-creations-loph-3-303576.jpg?v=1740011083&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/all-about-you-ph-lip-oil-beauty-creations-loph-3-741339.jpg?v=1740011083&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/all-about-you-ph-lip-oil-beauty-creations-loph-4-237896.jpg?v=1740011083&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/all-about-you-ph-lip-oil-beauty-creations-loph-4-535942.jpg?v=1740011083&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/all-about-you-ph-lip-oil-beauty-creations-loph-5-657072.jpg?v=1740011083&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/all-about-you-ph-lip-oil-beauty-creations-loph-5-413067.jpg?v=1740011083&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/all-about-you-ph-lip-oil-beauty-creations-loph-6-397981.jpg?v=1740011083&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/all-about-you-ph-lip-oil-beauty-creations-loph-6-605618.jpg?v=1740011080&width=600"
                     ],
                descripcion: ``,
                tag: null,
                tonos: [
    // Primera fila
    { nombre: "MY FAV TOPPER", hex: "#F3F0F1" },   // Tono claro/transparente (Lychee)
    { nombre: "DROP IT LOW", hex: "#EE9286" },     // Tono coral rojizo (Watermelon)

    // Segunda fila
    { nombre: "SUNDAY FUNDAY", hex: "#F7AE83" },   // Tono durazno (Peach)
    { nombre: "PRETTY FLING", hex: "#D19ED6" },    // Tono lila/morado (Dragonfruit)

    // Tercera fila
    { nombre: "LOVER TING", hex: "#EE5699" },      // Tono rosa intenso (Strawberry)
    { nombre: "POP BOTTLES", hex: "#F58790" }      // Tono rosa coral (Guava)
]
            },
            {
                id: 11,
                nombre: `Ultra Dazzle Lipgloss`,
		categoria: "Lipgloss",
                imagenes: [
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/ultra-dazzle-lipgloss-various-shades-beauty-creations-bclg01-457860.jpg?v=1723047937&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/ultra-dazzle-lipgloss-various-shades-beauty-creations-bclg01-832830.jpg?v=1744664540&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/ULTRADAZZLELIPGLOSS-PRETTYGIRL.png?v=1744664540&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/ultra-dazzle-lipgloss-various-shades-beauty-creations-bclg03-251782.jpg?v=1744664540&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/ultra-dazzle-lipgloss-various-shades-beauty-creations-bclg05-573476.jpg?v=1744664540&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/ultra-dazzle-lipgloss-various-shades-beauty-creations-bclg06-246208.jpg?v=1744664540&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/ultra-dazzle-lipgloss-various-shades-beauty-creations-bclg07-929354.jpg?v=1744664540&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/ultra-dazzle-lipgloss-various-shades-beauty-creations-bclg08-546096.jpg?v=1744664540&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/ultra-dazzle-lipgloss-various-shades-beauty-creations-bclg09-401321.jpg?v=1744664540&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/ultra-dazzle-lipgloss-various-shades-beauty-creations-bclg10-529684.jpg?v=1744664540&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/ultra-dazzle-lipgloss-various-shades-beauty-creations-bclg11-407611.jpg?v=1744664540&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/ultra-dazzle-lipgloss-various-shades-beauty-creations-bclg12-772016.jpg?v=1744664540&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/ultra-dazzle-lipgloss-various-shades-beauty-creations-bclg13-209674.jpg?v=1744664540&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/ultra-dazzle-lipgloss-various-shades-beauty-creations-bclg14-731850.jpg?v=1744664540&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/ultra-dazzle-lipgloss-various-shades-beauty-creations-bclg15-827713.jpg?v=1744664540&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/ultra-dazzle-lipgloss-various-shades-beauty-creations-bclg16-336144.jpg?v=1744664540&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/ultra-dazzle-lipgloss-various-shades-beauty-creations-bclg17-844618.jpg?v=1744664540&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/ultra-dazzle-lipgloss-various-shades-beauty-creations-bclg18-702262.jpg?v=1744664540&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/ultra-dazzle-lipgloss-various-shades-beauty-creations-bclg19-586883.jpg?v=1744664540&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/foxy_81452941-105b-425b-92f9-f844d75970e1.png?v=1744664540&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/ultra-dazzle-lipgloss-various-shades-beauty-creations-bclg21-228547.jpg?v=1744664540&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/ultra-dazzle-lipgloss-various-shades-beauty-creations-bclg22-971188.jpg?v=1744664540&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/ultra-dazzle-lipgloss-various-shades-beauty-creations-bclg23-876175.jpg?v=1744664540&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/ultra-dazzle-lipgloss-various-shades-beauty-creations-bclg24-374543.jpg?v=1744664540&width=600"
                     ],
                descripcion: `Si quieres que tus labios luzcan como el cristal y se mantengan hidratados todo el día, compra nuestro brillo labial Ultra Dazzle. Su fórmula ultrabrillante se desliza fácilmente, ofreciendo una textura cómoda y no pegajosa que deja tus labios con un aspecto voluminoso y sedoso. Enriquecido con ingredientes nutritivos, ayuda a retener la humedad y a dar a tus labios un brillo radiante.

Perfecto para usar sobre los labios y lograr un brillo natural o sobre tu labial favorito para un acabado deslumbrante y dimensional. Ya sea que busques un look suave para el día o un glamour intenso para la noche, Ultra Dazzle es tu brillo ideal para un brillo e hidratación instantáneos.`,
                tag: null,
                tonos: [
    // Fila 1
    { nombre: "#1 Pretty Girl", hex: "#DFC6C8" },
    { nombre: "#2 Gold Digger", hex: "#DBC0B0" },
    { nombre: "#3 Golden Girl", hex: "#CFA692" },
    { nombre: "#4 Merry Go Round", hex: "#D99BA3" },
    { nombre: "#5 Sugar Daddy", hex: "#D4ABA2" },
    { nombre: "#6 Hot Shot", hex: "#C9968E" },
    { nombre: "#7 Hello Darling", hex: "#CC9A94" },
    { nombre: "#8 Vanity", hex: "#CE969C" },

    // Fila 2
    { nombre: "#9 Stunner", hex: "#D4B2B8" },
    { nombre: "#10 Go Getter", hex: "#DE7A79" },
    { nombre: "#11 Whipped", hex: "#D2A292" },
    { nombre: "#12 Exposed", hex: "#C9979E" },
    { nombre: "#13 Royalty", hex: "#BD8B7E" },
    { nombre: "#14 Born To Shine", hex: "#C29294" },
    { nombre: "#15 Get It Girl", hex: "#BE807D" },
    { nombre: "#16 Fairytale", hex: "#B6808D" },

    // Fila 3
    { nombre: "#17 Main Squeeze", hex: "#A97A85" },
    { nombre: "#18 Doll Face", hex: "#E08AA0" },
    { nombre: "#19 Brown Sugar", hex: "#C97D63" },
    { nombre: "#20 Foxy", hex: "#B58C86" },
    { nombre: "#21 Exclusive", hex: "#AB7569" },
    { nombre: "#22 BFF", hex: "#9E7472" },
    { nombre: "#23 Makeover", hex: "#D63036" },
    { nombre: "#24 Bossy", hex: "#783A45" }
]
            },
            {
                id: 12,
                nombre: `Plump & Pout Plumping Gloss Stick`,
		        categoria: "Plumping Gloss",
                imagenes: [
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/BEAUTY_CREATIONS_PLUMP_Gloss_model.jpg?v=1738257566&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/BEAUTY_CREATIONS_PORTADA_PLUMP_gloss_swatch.jpg?v=1738257566&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/BEAUTY_CREATIONS_PORTADA_PLUMP_gloss.jpg?v=1738257566&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/3_08c270bb-ecb2-4b35-bdf4-37becb4c98d2.png?v=1738257489&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/LINER_900x900_BEAUTYCREATIONS0168_T.png?v=1738257566&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/LINER_900x900_BEAUTYCREATIONS0173_T.png?v=1738257566&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/LINER_900x900_BEAUTYCREATIONS0178_T.png?v=1738257566&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/LINER_900x900_BEAUTYCREATIONS0183_T.png?v=1738257566&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/LINER_900x900_BEAUTYCREATIONS0191_T.png?v=1738257566&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/LINER_900x900_BEAUTYCREATIONS0198_T.png?v=1738257566&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/LINER_900x900_BEAUTYCREATIONS0205_T.png?v=1738257566&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/LINER_900x900_BEAUTYCREATIONS0213_T.png?v=1738257566&width=600",
                    "https://ikatehouse.com/cdn/shop/files/beauty-creation-plump-pout-lip-plumper-gloss-stick-006oz18g-342493_720x.jpg?v=1726184125"
                     ],
                descripcion: `Experimenta lo último en realce de labios con nuestro Plumping Gloss Stick , una fórmula multiusos todo en uno diseñada para hidratar, dar volumen y un acabado brillante. Este brillo semiadherente da volumen a tus labios al instante, creando un look más voluminoso y definido con un hermoso tono. Su fórmula está enriquecida con vitamina E , raíz de jengibre y aceite de jojoba , que nutre y deja tus labios suaves y sedosos.

Con cada pasada, sentirás un delicioso cosquilleo que realza el volumen natural de tus labios, mientras que su acabado ultrabrillante les da un aspecto magnífico y voluminoso. Para liberar el producto, simplemente presiona la base del componente: ¡fácil, divertido y sin complicaciones!

Por qué te encantará:

Brillo voluminizador en barra : añade volumen a los labios al instante para una apariencia más completa y definida.

Alto brillo : acabado brillante que capta la luz para unos labios impresionantes.

Semi-pegajoso : proporciona un brillo duradero sin sentirse demasiado pesado.

Tiñe e hidrata : agrega un hermoso tinte mientras mantiene los labios suaves y nutridos.

Sensación de hormigueo : un efecto de hormigueo temporal que aumenta la tersura.

Infundido con:

Vitamina E : hidrata y nutre los labios

Raíz de jengibre : conocida por sus propiedades calmantes y sus beneficios para dar volumen a los labios.

Aceite de jojoba : ayuda a hidratar y suavizar los labios.`,
                tag: null,
                tonos: [
    // Fila superior (Izquierda a Derecha)
    { nombre: "LET'S BE CLEAR", hex: "#F2F2F2" },   // Tono transparente/blanquecino
    { nombre: "XOXO", hex: "#EA96B2" },              // Rosa claro
    { nombre: "DREAM GIRL", hex: "#F08E9D" },        // Rosa coral
    { nombre: "PLATONIC", hex: "#E866AC" },          // Fucsia brillante

    // Fila inferior (Izquierda a Derecha)
    { nombre: "GLAZING FOR U", hex: "#CC8E7B" },     // Nude cálido
    { nombre: "DELUSION CRUSH", hex: "#C26B5C" },    // Terracota rojizo
    { nombre: "ONLY U", hex: "#7A473E" },            // Marrón chocolate intenso
    { nombre: "LOVE TRAP", hex: "#C43251" },         // Rojo baya
    { nombre: "DEVOTION", hex: "#C54E91" }           // Morado rosado
]
            },
            {
                id: 13,
                nombre: `Aceite labial Sweet Dose`,
		        categoria: "Lip Oil",
                imagenes: [
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/cherry-lip-oil-beauty-creations-lo-3-899904.jpg?v=1723586502&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/grape-lip-oil-beauty-creations-950630.jpg?v=1723586502&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/peach-lip-oil-beauty-creations-lo-4-912802.jpg?v=1723586503&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/sweet-lip-oil-beauty-creations-lo-1-188176.jpg?v=1723586504&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/watermelon-lip-oil-beauty-creations-lo-2-976449.jpg?v=1723586505&width=600"
                     ],
                descripcion: `Nuestro aceite labial nutritivo con aceite de jojoba y vitamina E ayuda a lucir unos labios radiantes y saludables.
↳ El aceite de jojoba repone, restaura e hidrata visiblemente los labios.
↳ La vitamina E hidrata y suaviza la piel seca y escamosa, reduce las arrugas y favorece la pigmentación. Luce unos labios radiantes, brillantes y saludables.`,
                tag: null,
                tonos: null,
            },
            {
                id: 14,
                nombre: `Trío de aceites labiales con pH neutro Pinch of Sweetness`,
		categoria: "Set",
                imagenes: [
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/GRAYBGFORECOMM_1_d5519c0d-c1c0-4d38-8e9f-52c8249ed1ad.png?v=1739204481&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/pinch.png?v=1739204481&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/3_50f9f741-d904-4888-9a32-d23f3e15c45b.png?v=1739204481&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/Screenshot_2025-01-10_at_1.44.33_PM.png?v=1739204481&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/Untitled_design_16.png?v=1739204481&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/PRETTY_FLING.png?v=1739204481&width=600"
                     ],
                descripcion: ``,
                tag: null,
                tonos: [
                    { nombre: "Los Rosas" },
                    { nombre: "Los Rojos" }
                ]
            },
            {
                id: 15,
                nombre: `Dúo labial Deer Kisses`,
		        categoria: "Set",
                imagenes: [
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/a9dc31c2-f501-45a2-a244-33ce04797123.jpg?v=1762466111&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/Post-10.jpg?v=1741822625&width=600"
                     ],
                descripcion: `Prepárate para deslumbrar esta temporada navideña con nuestro dúo labial Deer Kisses

Este set de edición limitada incluye todo lo necesario para unos labios perfectamente definidos y voluminosos. Contiene un delineador de labios de alta pigmentación que se desliza suavemente para una definición precisa y un brillo labial voluminizador ultrabrillante que proporciona volumen al instante para un toque navideño. `,
                tag: "Navidad",
                tonos: null,
            },
            {
                id: 16,
                nombre: `Delineador de labios voluminizador Plump & Pout`,
		        categoria: "Lipliner",
                imagenes: [
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/BEAUTY_CREATIONS_PORTADA_PLUMP.jpg?v=1751060782&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/BEAUTY_CREATIONS_PLUMP_Lip_liner_model_2.jpg?v=1751060782&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/BEAUTY_CREATIONS_PLUMP_Lip_liner_model.jpg?v=1751060782&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/17.png?v=1751060782&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/19.png?v=1751060782&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/14.png?v=1751060782&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/15.png?v=1751060782&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/12.png?v=1751060782&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/13.png?v=1751060782&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/18.png?v=1751060782&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/16.png?v=1751060782&width=600"
                     ],
                descripcion: `Nuestro juego de voluminizadores ha mejorado con el delineador de labios Plump & Pout , el delineador de labios definitivo para definir, dar volumen y realzar tus labios. Especialmente formulado para dar un efecto voluminizador natural, este delineador de labios crea un aspecto más voluminoso y definido que dura todo el día. Ya sea que delinees tus labios o lo uses para rellenarlos, su textura cremosa se desliza suavemente, proporcionando la base perfecta para tu color de labios

Enriquecido con manteca de karité nutritiva y aceite de semilla de jojoba , este delineador de labios garantiza una aplicación suave y cómoda con cada uso. Disfruta de una sensación de hormigueo que dura solo unos minutos, potenciando el efecto voluminizador para una apariencia más voluminosa y atractiva.

Características principales:

Efecto voluminizador : realza instantáneamente los labios para lograr unos labios más llenos y definidos.

A prueba de manchas : permanece en su lugar durante todo el día sin decolorarse ni sangrar.

Larga duración : disfruta de un look de labios definido y audaz durante todo el día.

Sensación de hormigueo : un efecto de hormigueo temporal que mejora el volumen.

Infundido con:

Manteca de karité : hidrata y nutre los labios

Aceite de semilla de jojoba : proporciona una aplicación suave y cómoda.`,
                tag: null,
                tonos: [
    // Fila superior (Izquierda a Derecha)
    { nombre: "Pinch Me", hex: "#CC948B" },        // Nude rosado suave
    { nombre: "So Flirty", hex: "#E090A6" },       // Rosa claro frío
    { nombre: "Love Status", hex: "#CF8092" },     // Rosa medio
    { nombre: "Mind Trapped", hex: "#C07D72" },    // Terracota suave

    // Fila inferior (Izquierda a Derecha)
    { nombre: "Attracted To You", hex: "#A36E62" },// Marrón neutro oscuro
    { nombre: "Infatuation", hex: "#CD8C75" },     // Nude cálido/melocotón
    { nombre: "Risque", hex: "#E06972" },          // Rojo coral rosado
    { nombre: "Obsession", hex: "#D16A7D" }        // Rosa baya intenso
]
            },
            {
                id: 17,
                nombre: `Mousse Matte Lipstick - Italia Deluxe`,
		        categoria: "Lipstick",
                imagenes: [
                    "https://italiadeluxemakeup.com/cdn/shop/products/mousse_matte_lipstick_mother.png?v=1610654484&width=600",,
                    "https://italiadeluxemakeup.com/cdn/shop/files/slide1.png?v=1716482819&width=600",
                    "https://italiadeluxemakeup.com/cdn/shop/files/slide2.png?v=1716482819&width=600",
                    "https://italiadeluxemakeup.com/cdn/shop/files/slide3.png?v=1716482819&width=600",
                    "https://italiadeluxemakeup.com/cdn/shop/files/slide4.png?v=1716482819&width=600"
                     ],
                descripcion: `Nuestros labiales Mousse Matte son tan hermosos como se ven y ¡uno de nuestros productos más populares! Su fórmula única en mousse suave luce pigmentada y se siente ligera en los labios. Es aterciopelada y de larga duración. La colección tiene todos los tonos que necesitas para cualquier look de maquillaje y viene en una variedad de subtonos cálidos y fríos para embellecer todo tipo de piel.`,
                tag: null,
                tonos: [
    // Imagen 1
    { nombre: "01-GODDESS", hex: "#48253A" },
    { nombre: "02-REBEL", hex: "#491E2C" },
    { nombre: "03-MARILYN", hex: "#6F242C" },
    { nombre: "04-STILLETO RED", hex: "#C12928" },
    { nombre: "05-POISON APPLE", hex: "#9B2D3C" },
    { nombre: "06-TERRA COTTA", hex: "#CA7D71" },
    { nombre: "07-BARELY NUDE", hex: "#CF9581" },
    { nombre: "08-BALLET SLIPPER", hex: "#CC7E8A" },

    // Imagen 2
    { nombre: "09-VINTAGE ROSE", hex: "#BD787E" },
    { nombre: "10-TEMPTRESS", hex: "#A7656D" },
    { nombre: "11-PINK CHARM", hex: "#B53F5E" },
    { nombre: "13-CALIENTE", hex: "#CA2E2A" },
    { nombre: "14-LOVELACE", hex: "#871524" },
    { nombre: "15-NATURAL", hex: "#C28675" },
    { nombre: "16-SAINT", hex: "#BE746B" },
    { nombre: "17-REINA", hex: "#DD8D9A" },

    // Imagen 3
    { nombre: "21-BLACK CHERRY", hex: "#4F222F" },
    { nombre: "23-SWEET CHOCOLATE", hex: "#995B4E" },
    { nombre: "24-HAZELNUT", hex: "#986968" },
    { nombre: "25-MAROON", hex: "#6E2221" },
    { nombre: "26- BROWNIE", hex: "#5F392E" },
    { nombre: "27- SANGRIA", hex: "#401821" },
    { nombre: "29- FUDGE POP", hex: "#8F5248" },
    { nombre: "31-MAUVELOUS", hex: "#A66079" },

    // Imagen 4
    { nombre: "32-WINE NOT", hex: "#5E2D4B" },
    { nombre: "34-GINGERBREAD", hex: "#964230" },
    { nombre: "36 OSITO", hex: "#61403A" },
    { nombre: "37 SPICE", hex: "#A65D40" },
    { nombre: "38 RED BOTTOM", hex: "#AB1F27" },
    { nombre: "39 BRICK", hex: "#A13B39" }
]
            },
             {
                id: 18,
                nombre: `Mousse Matte Liquid Lipstick - Italia Deluxe`,
		        categoria: "Liquid Lipstick",
                imagenes: [
                    "https://italiadeluxemakeup.com/cdn/shop/files/190-01-PO.jpg?v=1718993936&width=600",
                    "https://italiadeluxemakeup.com/cdn/shop/files/190-PO_bigger.jpg?v=1718993924&width=600",
                    "https://italiadeluxemakeup.com/cdn/shop/files/190-STY-4.jpg?v=1718993936&width=600",
                    "https://dubellay.mx/cdn/shop/files/ITA-SER-190_600x.jpg?v=1712706191"
                     ],
                descripcion: `¡Presentamos nuestro nuevo labial líquido Mousse Matte! Con una suave textura mousse y un aplicador de precisión, consigue looks atrevidos y sensuales sin esfuerzo. Acabado mate cómodo, 12 tonos. ¡Mejora tus labios hoy mismo!

💋Acabado aterciopelado cómodo
💋Aplicador triangular de precisión
💋De larga duración
💋Sutil aroma a chocolate 🍫`,
                tag: null,
                tonos: [
    { nombre: "01 ALMOND", hex: "#BA777B" },       // Rosa almendra suave
    { nombre: "02 COCOA", hex: "#573836" },        // Marrón café oscuro
    { nombre: "03 FLIRTY", hex: "#96606E" },       // Malva agrisado
    { nombre: "04 LETHAL", hex: "#A35443" },       // Terracota rojizo
    { nombre: "05 NAKED", hex: "#C58C89" },        // Nude rosado pálido
    { nombre: "06 HEARTBREAKER", hex: "#C42634" }, // Rojo intenso clásico
    { nombre: "07 SIRENA", hex: "#AD4652" },       // Rojo frambuesa suave
    { nombre: "08 POISON APPLE", hex: "#903840" }, // Rojo ladrillo oscuro
    { nombre: "09 SPANISH ROSE", hex: "#A15C64" }, // Rosa oscuro quemado
    { nombre: "10 SWEETIE", hex: "#B26B7E" },      // Rosa medio
    { nombre: "11 COGNAC", hex: "#562F39" },       // Vino oscuro / Ciruela
    { nombre: "12 TEDDY", hex: "#7E4B49" }         // Marrón chocolate con leche
]
            },
            {
                id: 19,
                nombre: `Locked in Place Matte Lippies`,
		        categoria: "Lipstick",
                imagenes: [
                    "https://italiadeluxemakeup.com/cdn/shop/files/193LPL-01-PO.jpg?v=1754670012&width=600",
                    "https://italiadeluxemakeup.com/cdn/shop/files/193LPL-STY-2.jpg?v=1754670112&width=600",
                    "https://italiadeluxemakeup.com/cdn/shop/files/193LPL-STY-LIP1.jpg?v=1754670012&width=600",
                    "https://italiadeluxemakeup.com/cdn/shop/files/193LPL-STY-LIP2.jpg?v=1754670012&width=600",
                    "https://italiadeluxemakeup.com/cdn/shop/files/193LPL-STY-LIP3.jpg?v=1754670012&width=600",
                    "https://italiadeluxemakeup.com/cdn/shop/files/193LPL-STY-LIP4.jpg?v=1754670012&width=600"
                     ],
                descripcion: `LOCKED IN PLACE – Labial Mate de Larga Duración
. Labios mate. Fijos todo el día.

Descubre Locked In Place, tu nuevo labial mate de larga duración favorito, que ofrece un color intenso y se mantiene en su lugar. Su fórmula ligera y resistente a las transferencias se desliza suavemente y se fija con un acabado mate suave que se siente cómodo durante todo el día.

Ya sea para ir al trabajo, a un brunch o a salir por la noche, este labial mate se mantiene en su lugar sin sacrificar la comodidad.

✔️ Larga duración
✔️ Resistente a las transferencias
✔️ Acabado mate suave
✔️ Ligero y cómodo
✔️ Disponible en 8 tonos impresionantes`,
                tag: null,
                tonos: [
    { nombre: "01 PODEROSA", hex: "#6B4A3E", descripcion: "Marrón medio-oscuro cálido" },
    { nombre: "02 BESITOS", hex: "#D45079", descripcion: "Rosa brillante tono frío" },
    { nombre: "03 LOVER", hex: "#8C4A57", descripcion: "Malva suave con toques de rosa y mora" },
    { nombre: "04 BOMBSHELL", hex: "#B51F28", descripcion: "Rojo vívido tono frío" },
    { nombre: "05 DESIRE", hex: "#B06456", descripcion: "Terracota con subtonos naranjas" },
    { nombre: "06 AMORCITO", hex: "#E42530", descripcion: "Rojo fuego con subtonos naranjas/rosas" },
    { nombre: "07 ATREVIDA", hex: "#782029", descripcion: "Vino tinto profundo" },
    { nombre: "08 TEASE", hex: "#9E7063", descripcion: "Marrón medio suave" }
]
            },
             {
                id: 20,
                nombre: `24K Magic Lip Oil`,
		    categoria: "Lip Oil",
                imagenes: [
                    "https://italiadeluxemakeup.com/cdn/shop/products/02.png?v=1764965221&width=600",
                    "https://italiadeluxemakeup.com/cdn/shop/files/175-STY-1.jpg?v=1713310476&width=600",
                    "https://italiadeluxemakeup.com/cdn/shop/files/175-STY-2.jpg?v=1764965221&width=600"
                     ],
                descripcion: `¡Dale un toque mágico a tus labios! El aceite labial mágico 24K se activa con el pH y realzará tus labios naturales con un sutil cambio de color.

✨ Hidrata y humecta para que tus labios se vean y se sientan voluminosos.
✨ Fórmula no grasa ni pegajosa.
Enriquecido con copos dorados
. ✨ Aplica 1 capa para un look natural o 2 capas para una transformación más profunda del color de tus labios.

* Todas las opciones tienen el mismo efecto de color en los labios. La única diferencia es el color de la flor en el interior. *`,
                tag: null,
                tonos: null,
            },
              {
                id: 21,
                nombre: `UltraFine Lip Liner`,
		        categoria: "Lipliner",
                imagenes: [
                    "https://italiadeluxemakeup.com/cdn/shop/files/1031-PO.jpg?v=1691515561&width=600",
                    "https://beautysupplyhn.com/cdn/shop/files/RegeneristMicro-SculptingCreamwithSunscreenBroadSpectrumSPF30esunhumectantelivianoqueinmediatamentedejalapielhidratadaysuavizalaaparienciadelineasfinasyarrugas_-2024-01-27T142004.695.jpg?v=1706387266&width=600",
                    "https://beautysupplyhn.com/cdn/shop/files/RegeneristMicro-SculptingCreamwithSunscreenBroadSpectrumSPF30esunhumectantelivianoqueinmediatamentedejalapielhidratadaysuavizalaaparienciadelineasfinasyarrugas_-2024-01-27T142308.637.jpg?v=1706387267&width=600"
                     ],
                descripcion: `Nuestros delineadores de labios UltraFine están creados de forma única con un color superior en una fórmula cremosa y aterciopelada. Se aplican con suavidad y precisión y nunca se secan durante el día. Estos delineadores de labios son imprescindibles en tu neceser. ¡Te prometemos que no te decepcionarán!`,
                tag: null,
                tonos: [
    // Fila 1
    { nombre: "#LVS01 STAY CALM", hex: "#E4AB9B" },      // Nude melocotón claro
    { nombre: "#LVS02 CAPPUCCINO", hex: "#CE8674" },     // Marrón cálido medio
    { nombre: "#LVS03 TRUFFLE", hex: "#C29188" },        // Nude malva grisáceo
    { nombre: "#LVS04 LIMITED", hex: "#D19694" },        // Rosa palo suave
    { nombre: "#LVS05 SOFT SIDE", hex: "#EB7D68" },      // Coral terracota vibrante
    { nombre: "#LVS06 HIGH END", hex: "#F37B90" },       // Rosa chicle

    // Fila 2
    { nombre: "#LVS07 STARDUM", hex: "#DB7A88" },        // Rosa medio
    { nombre: "#LVS08 HIGH CLASS", hex: "#CD6173" },     // Frambuesa apagado
    { nombre: "#LVS09 ROMANCE ME", hex: "#D98071" },     // Terracota suave
    { nombre: "#LVS10 SUGGA BABY", hex: "#B05A53" },     // Rojo ladrillo quemado
    { nombre: "#LVS11 FOXY", hex: "#C15143" },           // Rojo anaranjado quemado
    { nombre: "#LVS12 ON THE EDGE", hex: "#914A45" },    // Marrón rojizo oscuro

    // Fila 3
    { nombre: "#LVS13 CHOCO LATTE", hex: "#BE7A62" },    // Marrón café con leche
    { nombre: "#LVS14 FRIENDZONE", hex: "#AB6F68" },     // Marrón topo (taupe)
    { nombre: "#LVS15 SWEET AFFAIR", hex: "#DA7871" },   // Rosa coral
    { nombre: "#LVS16 MAD ABOUT YOU", hex: "#7F4E40" },  // Marrón chocolate oscuro
    { nombre: "#LVS17 MUAH", hex: "#F2544A" },           // Rojo coral neón
    { nombre: "#LVS18 PINK POISE", hex: "#EB2676" },     // Fucsia vibrante

    // Fila 4
    { nombre: "#LVS19 NOVA", hex: "#BF4B64" },           // Cereza oscuro
    { nombre: "#LVS20 BERRY ME", hex: "#DC2F50" },       // Rojo frambuesa
    { nombre: "#LVS21 RED AFFAIR", hex: "#D22030" },     // Rojo clásico intenso
    { nombre: "#LVS22 GUILTY PLEASURE", hex: "#BB2131" },// Rojo sangre profundo
    { nombre: "#LVS23 JUICED", hex: "#7A1F26" },         // Vino tinto / Burgundy
    { nombre: "#LVS24 DARK SIDE", hex: "#50222A" }       // Mora profundo casi negro
]
            },
              {
                id: 22,
                nombre: `labiales Chic Satin - Moira`,
		        categoria: "Lipstick",
                imagenes: [
                    "https://www.moirabeauty.com/cdn/shop/files/001_06001f7f-703a-4016-bc14-0b9c9541a4be.jpg?v=1760549538&width=700",
                    "https://www.moirabeauty.com/cdn/shop/files/2_3x-100_139fd3be-6433-459f-bdb9-6dc2a9374b56.jpg?v=1761178743&width=700",
                    "https://www.moirabeauty.com/cdn/shop/files/L.jpg?v=1761178628&width=1000",
                    "https://www.moirabeauty.com/cdn/shop/files/1STICKSWATCH-100_ac34c681-2da4-44a7-b649-afe16426bdec.jpg?v=1761351505&width=700",
                    "https://www.moirabeauty.com/cdn/shop/files/Artboard1copy_3x-80_22e5c8fd-48e7-4afa-b7fb-dcf1b857aee9.jpg?v=1761351505&width=700"
                     ],
                descripcion: `Barra de labios Chic Satin: un guiño moderno al estilo Y2K, que combina una actitud audaz con la sofisticación urbana chic. Su fórmula cremosa e hidratante se desliza sin esfuerzo, brindando un color de cobertura total con un suave acabado satinado que define y realza tus labios. Enriquecida con escualano vegano nutritivo, aceite de rosa mosqueta, aceite de semilla de camelia, aceite de argán e hialuronato de sodio, esta barra de labios mantiene los labios hidratados, suaves e irresistiblemente cómodos


Sin crueldad animal
Vegano
Sin parabenos
Sin sulfatos
Sin ftalatos
Sin gluten`,
                tag: null,
                tonos: [
  { nombre: "001 Chic Nude", hex: "#E2A3A4" },
  { nombre: "002 Y2K", hex: "#BD5C5C" },
  { nombre: "003 Rewind", hex: "#9E6044" },
  { nombre: "004 Time Capsule", hex: "#7A5E58" },
  { nombre: "005 Modern", hex: "#54382C" },
  { nombre: "006 Millennium", hex: "#7A5053" },
  { nombre: "007 Inspire", hex: "#472829" },
  { nombre: "008 Bold", hex: "#8A1A21" },
]
            },
            {
                id: 23,
                nombre: `Lip Chic Shimmer Gloss - Moira`,
		        categoria: "Liquid Lipstick",
                imagenes: [
                    "https://www.moirabeauty.com/cdn/shop/files/007_6ee6ff7e-5854-4fa9-be92-0e28460b8e50.jpg?v=1760549490&width=700",
                    "https://www.moirabeauty.com/cdn/shop/files/CSG_LCL_dark_G7L7_a40d98c3-5195-402c-9e10-0e75b0e6d96e.jpg?v=1761064460&width=700",
                    "https://www.moirabeauty.com/cdn/shop/files/9_3x-100_aa77c2a2-6a8f-4daf-83e8-170452836c94.jpg?v=1761064476&width=700",
                    "https://www.moirabeauty.com/cdn/shop/files/ChicCollection_Group_All_a3b2cf00-c932-4c75-aab9-058d78812ee9.jpg?v=1761064478&width=700"
                     ],
                descripcion: `Brilla con confianza con el brillo labial MOIRA Lip Chic Shimmer Gloss. Este brillo ligero y no pegajoso ofrece un brillo radiante y multidimensional con un acabado brillante más suave, perfecto para crear labios de aspecto naturalmente más voluminoso con comodidad durante todo el día. Úsalo solo para un brillo nude brillante o aplícalo sobre tu lápiz labial favorito para un toque de elegancia moderna

 

Enriquecida con aceite de rosa mosqueta y aceite de semilla de frambuesa, su fórmula nutritiva hidrata y suaviza, dejando los labios suaves, tersos y nunca pegajosos. El aplicador plano se desliza fácilmente, envolviéndolos para un color uniforme y un brillo modulable que realza el color sin sobrecargarlo.

 

Disponible en 8 tonos nude, incluido un brillo en tono frío, Lip Chic Shimmer Gloss es tu opción ideal para lograr un brillo sin esfuerzo con un brillo sutil y favorecedor.

 

Sin crueldad animal
Vegano
Sin parabenos
Sin sulfatos
Sin ftalatos
Sin gluten

MODO DE EMPLEO:

1. Aplicar en el centro del labio superior y seguir el contorno de la boca.
2. Deslizar por todo el labio inferior y rellenar`,
                tag: null,
                tonos: [
  { nombre: "001 XOXO", hex: "#E6A592" },
  { nombre: "002 Signature", hex: "#E08590" },
  { nombre: "003 Lit", hex: "#CC8572" },
  { nombre: "004 Chillax", hex: "#C6805A" },
  { nombre: "005 Sassy", hex: "#A36A59" },
  { nombre: "006 TTYL", hex: "#945253" },
  { nombre: "007 Sleek", hex: "#662E2E" },
  { nombre: "008 2000", hex: "#452020" },
]
            },
            {
                id: 24,
                nombre: `Lip Chic Liner - Moira`,
		        categoria: "Lipliner",
                imagenes: [
                    "https://www.moirabeauty.com/cdn/shop/files/005_5dc20a04-eeef-4458-a7b2-252c375b2797.jpg?v=1759786887&width=700",
                    "https://www.moirabeauty.com/cdn/shop/files/LCL_Model_Group_60444e12-7c2c-4b24-88c8-5c0bd90a6173.jpg?v=1761265978&width=700",
                    "https://www.moirabeauty.com/cdn/shop/files/1LINERSWATCH-100_9aef1905-f3ac-458e-ba87-c6b47450bb4f.jpg?v=1761323824&width=700",
                    "https://www.moirabeauty.com/cdn/shop/files/ChicCollection_Group_All_a339a147-b9f9-4dd2-be17-c3dd310e8c92.jpg?v=1761323824&width=700"
                     ],
                descripcion: `El delineador de labios MOIRA Lip Chic es un delineador de labios suave y duradero, elaborado con madera de cedro de California de primera calidad para una aplicación suave y precisa en todo momento. Esta fórmula ligera y que no reseca se desliza sin esfuerzo, ofreciendo un color intenso que se puede aplicar en capas para una definición audaz o difuminar suavemente con brillo y bálsamo para un acabado natural y elegante


Inspirado en los íconos de los 2000, el delineador Lip Chic aporta un toque moderno a la estética Y2K con un empaque elegante y sostenible y ocho tonos versátiles: desde nude y melocotón hasta marrón, marrón ceniza y borgoña. Perfecto para lograr looks de chica limpia, belleza francesa o de inspiración retro, el delineador Lip Chic es tu opción ideal para un color personalizable que luce naturalmente impecable. 


Sin crueldad animal
Sin parabenos
Sin sulfatos
Sin ftalatos
Sin gluten
Hecho en Italia

MODO DE EMPLEO:

Define delineando los labios superior e inferior antes del lápiz labial. 

Consejo:
Prueba un tono un poco más oscuro que tu lápiz labial y difumina con una brocha para lograr un aspecto de labios más voluminoso

`,
                tag: null,
                tonos: [
  { nombre: "001 Timeless", hex: "#A8624D" },
  { nombre: "002 Luxe", hex: "#8C5346" },
  { nombre: "003 Muse", hex: "#995F57" },
  { nombre: "004 Nostalgia", hex: "#614C45" },
  { nombre: "005 Retro", hex: "#52433E" },
  { nombre: "006 Edgy", hex: "#4A382F" },
  { nombre: "007 Icon", hex: "#3E302F" },
  { nombre: "008 Cool Girl", hex: "#4D322F" },
]
            },
			{
                id: 25,
                nombre: "Tinte líquido en gel Kiss Me",
                categoria: "Lip Tint",
                imagenes: [
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/56661.jpg?v=1773687599&width=1000",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/BETTER-IN-PINK-S.jpg?v=1773687434&width=1100",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/MAGENTA-MOVES.jpg?v=1773687434&width=1100",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/ARMSWATCHES-KISSME_93446286-b453-404e-ac91-30059206d049.jpg?v=1773687434&width=1000",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/MAGENTA-MOVES.jpg?v=1773687434&width=1100",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/TENDER-ROSE.jpg?v=1773687434&width=1100",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/WINE-O-CLOCK.jpg?v=1773687434&width=1100",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/CORALLY-HOT.jpg?v=1773687434&width=1100",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/BARELY-BROWN.jpg?v=1773687434&width=1100",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/RED-CRUSH.jpg?v=1773687434&width=1100",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/TERRACOTTA-TEASE.jpg?v=1773687434&width=1100"
                ],
                descripcion: `Beauty Creations y Rosy McMichael se han unido una vez más para traer de vuelta uno de los productos favoritos de sus fans, con un toque especial. Presentamos Rosy's Essentials Volume 1 (Mini Edición): Rosy ha elegido sus 12 tonos favoritos de la paleta original para traerlos de vuelta en un formato compacto, práctico y lleno de amor.`,
                tag: "Nuevo",
                tonos: [
                    { nombre: "Mejor en Rosa", hex: "#e3447a" },
                    { nombre: "Magenta se mueve", hex: "#ee025b" },
                     { nombre: "Rosa tierno", hex: "#c94b58" },
                    { nombre: "Hora del vino", hex: "#c1345d" },
                     { nombre: "Corally Hot", hex: "#fa1b40" },
                    { nombre: "Marron claro", hex: "#b14340" },
                    { nombre: "Aplastamiento Rojo", hex: "#9e042a" },
                    { nombre: "Terracota Burlón", hex: "#e15f3c" }
                ]
            },
        ];

  const productosSkincare = [
            {
                id: 1,
                nombre: "Skin Care - Agua Micelar - The Take Down",
                categoria: "Agua Micelar",
                imagenes: [
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-skin-agua-micelar-the-take-down-skin-care-cosmetics-sk-tdm-591960.jpg?v=1723483522&width=500",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-skin-agua-micelar-the-take-down-skin-care-cosmetics-sk-tdm-137920.jpg?v=1723483539&width=500",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-skin-agua-micelar-the-take-down-skin-care-cosmetics-sk-tdm-871976.jpg?v=1723483564&width=500",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-skin-agua-micelar-the-take-down-skin-care-cosmetics-sk-tdm-418260.jpg?v=1723483581&width=500"
                ],
                descripcion: `Después de un largo día o antes de iniciar tu rutina de maquillaje, siempre es importante que tu piel este limpia y libre de suciedad, el agua micelar será tu mejor amiga para dejar tu piel luciendo increíble.

Con Beauty Creations Skin puedes complementar tu rutina del cuidado de la piel o maquillaje, usa nuestra agua micelar en un algodón o pad y descubre que nuestra formula va a refrescar tu piel, atrapar la hidratación y dejar una textura suave en un solo paso. No dudes en incluirla en tu rutina de skincare y consentirte en todo momento.`,
                tag: "Nuevo",
                tonos: null,
            },
             {
                id: 2,
                nombre: "Beauty Creations Skin - Limpiador En Espuma - Start Fresh Clarifying Foam Cleanser",
                categoria: "Espuma Limpiadora",
                imagenes: [
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-skin-limpiador-en-espuma-start-fresh-clarifying-foam-cleanser-skin-care-cosmetics-sk-sff-910344.jpg?v=1723531581&width=500",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-skin-limpiador-en-espuma-start-fresh-clarifying-foam-cleanser-skin-care-cosmetics-sk-sff-111746.jpg?v=1723531597&width=500"
                ],
                descripcion: `¡Dale la bienvenida a una piel radiante y suave! con nuestro limpiador en espuma de la linea de Beauty Creations Skin podrás obtenerla, limpia tu rostro y termina el día con el pie derecho como inicio, nuestro limpiador facial esta enriquecido con vitaminas y extractos de aceites ideales para limpiar las impurezas, remover tu maquillaje e iluminar tu complexión, con lavanda y romero que calman la piel y restauran la humectación, incorpóralo a tu rutina de cuidado de la piel y no te arrepentirás de ver el cambio en tu rostro, apto para todo tipo de piel, ¡lo amaras tanto como nosotros! 💅`,
                tag: null,
                tonos: null,
            },
             {
                id: 3,
                nombre: "Beauty Creations Skin - Bálsamo Desmaquillante - So Balm Cleansing Balm",
                categoria: "Desmaquillante",
                imagenes: [
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-skin-balsamo-desmaquillante-so-balm-cleansing-balm-skin-care-cosmetics-sk-sbb-324720.jpg?v=1723481722&width=500",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-skin-balsamo-desmaquillante-so-balm-cleansing-balm-skin-care-cosmetics-sk-sbb-109079.jpg?v=1723481737&width=500",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-skin-balsamo-desmaquillante-so-balm-cleansing-balm-skin-care-cosmetics-sk-sbb-530450.jpg?v=1723481765&width=500"
                ],
                descripcion: `Derrite tu día y descansa con tu rostro libre de suciedad y maquillaje 💕 Beauty Creations Skin tiene para ti su bálsamo desmaquillante listo para dejar tu piel sintiéndose limpia y suave completando tu skin care. 

Este desmaquillante ayudara a quitar hasta el maquillaje a prueba de agua, gracias a que contiene morgan seed oil no permite que tu piel se reseque o maltrate evitando jalar o tallar tu piel mas de lo debido al momento de limpiar tu carita, deja una sensación suave y lista para descansar el resto de la noche, no te pierdas la oportunidad de añadir a tu rutina de cuidado de la piel los mejores productos. ¡Compra el tuyo ahora! 💅🥰💋❤️‍🔥`,
                tag: null,
                tonos: null,
            },
             {
                id: 4,
                nombre: "Beauty Creations Skin - Gel Exfoliante - Adios Toxins",
                categoria: "Exfoliante",
                imagenes: [
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-skin-gel-exfoliante-adios-toxins-skin-care-cosmetics-sk-atg-185641.webp?v=1723551260&width=500",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-skin-gel-exfoliante-adios-toxins-skin-care-cosmetics-sk-atg-596635.jpg?v=1723551279&width=500",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-skin-gel-exfoliante-adios-toxins-skin-care-cosmetics-sk-atg-575472.jpg?v=1723551303&width=500",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-skin-gel-exfoliante-adios-toxins-skin-care-cosmetics-sk-atg-352194.jpg?v=1723551320&width=500"
                ],
                descripcion: `¡No busques más! tus mejores aleados al momento de complementar tu rutina de skin care están aquí 💕

Enamórate de nuestro gel exfoliante facial, que esta compuesto con los mejores ingredientes para consentir tu piel, hecho con formulas de skincare coreano, remueve células muertas y promueve una piel suave y sana ¿Qué más se puede pedir? tu rutina del cuidado de la piel estará completa solo de los mejores productos, encuentra tu combinación perfecta dentro de nuestra linea de cuidado de la piel.  ¡Pruébalo ahora! 💅🥰`,
                tag: null,
                tonos: null,
            },
             {
                id: 5,
                nombre: "Beauty Creations Skin - Toner Facial - Tone Setter Brightening Toner",
                categoria: "Toners",
                imagenes: [
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-skin-toner-facial-tone-setter-brightening-facial-skin-care-cosmetics-sk-tst-563696.jpg?v=1723582447&width=500",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-skin-toner-facial-tone-setter-brightening-facial-skin-care-cosmetics-sk-tst-112590.jpg?v=1723582462&width=500",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-skin-toner-facial-tone-setter-brightening-facial-skin-care-cosmetics-sk-tst-230004.jpg?v=1723582480&width=500",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-skin-toner-facial-tone-setter-brightening-facial-skin-care-cosmetics-sk-tst-211219.jpg?v=1723582507&width=500"
                ],
                descripcion: `Refresca tu rostro incorporando en tu rutina del cuidado de la piel nuestro toner facial de la linea Beauty Creations Skin, este toner ayudará a tu piel a verse más radiante, dejando sin sensación grasosa la piel, por lo cual es apto para todo tipo de piel, ayuda a disminuir los poros, controla la generación de grasa en el rostro y calma la rojez.

Gracias a su formulación alta en vitamina A, C y E será tu mejor aleado si tu problema es de hiperpigmentación, ayudando a su vez a incrementar la producción de colágeno. No te pierdas la oportunidad de unirlo a tu rutina de skincare y lucir un rostro suave y sano. 

¡Compra el tuyo ahora! 🥰`,
                tag: null,
                tonos: null,
            },
            {
                id: 6,
                nombre: "Tiras para poros nasales Get Outta Here",
                categoria: "Tira poro",
                imagenes: [
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/SKIN-STRIPS_1.jpg?v=1729867860&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/SKIN-STRIPS_2.jpg?v=1729867860&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/SKIN-STRIPS_3.jpg?v=1729867860&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/SKIN-STRIPS_4.jpg?v=1729867860&width=600"
                ],
                descripcion: `Dile adiós a los puntos negros persistentes y a los poros obstruidos con este potente y suave set de 6 bandas limpiadoras de poros. Diseñadas para la zona de la nariz, donde los poros son más visibles y propensos a acumularse, estas bandas ayudan a eliminar los puntos negros, el exceso de grasa y la suciedad incrustada en minutos, dejando tu piel limpia, suave y fresca.

Cada banda está enriquecida con ingredientes que cuidan la piel, como extracto de hoja de aloe y extracto de hoja de hamamelis , conocidos por sus propiedades calmantes y clarificantes. Juntos, ayudan a reducir la apariencia de los poros dilatados y a controlar la irritación.

Perfecto para uso semanal o para un reinicio rápido de la piel, este conjunto es imprescindible para cualquiera que busque mantener una tez clara y de aspecto saludable.

Beneficios:

Ayuda a eliminar los puntos negros y destapar los poros.

Absorbe el exceso de grasa e impurezas.

Refina y suaviza visiblemente la textura de la piel.

Infundido con aloe y hamamelis para un efecto suave y calmante.

Aplicación fácil de usar y sin complicaciones

Promesa de belleza limpia:

Libre de crueldad

Vegano

Formulado con extractos calmantes de plantas.`,
                tag: null,
                tonos: null,
            },
            {
                id: 7,
                nombre: "Colección Sweet Dose Duo",
                categoria: "Labios",
                imagenes: [
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/cherry-sweet-dose-duo-beauty-creations-loset-3-155634.jpg?v=1744663689&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/cherry-sweet-dose-duo-beauty-creations-loset-3-953173.jpg?v=1744663689&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/SWEETDOSEOIL_SCRUB.png?v=1744663689&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/grape-sweet-dose-duo-beauty-creations-loset-5-550597.jpg?v=1744663671&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/grape-sweet-dose-duo-beauty-creations-loset-5-472938.jpg?v=1744663671&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/grape-sweet-dose-duo-beauty-creations-loset-5-254945.jpg?v=1744663671&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/peach-sweet-dose-duo-beauty-creations-loset-4-911823.jpg?v=1744663671&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/peach-sweet-dose-duo-beauty-creations-loset-4-557310.jpg?v=1744663671&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/peach-sweet-dose-duo-beauty-creations-loset-4-530162.jpg?v=1744663671&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/sweet-scented-sweet-dose-duo-beauty-creations-loset-1-223555.jpg?v=1744663671&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/sweet-scented-sweet-dose-duo-beauty-creations-loset-1-348906.jpg?v=1744663671&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/sweet-scented-sweet-dose-duo-beauty-creations-loset-1-578753.jpg?v=1744663671&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/watermelon-sweet-dose-duos-beauty-creations-loset-2-535233.jpg?v=1744663671&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/watermelon-sweet-dose-duos-beauty-creations-loset-2-898011.jpg?v=1744663671&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/watermelon-sweet-dose-duos-beauty-creations-loset-2-392263.jpg?v=1744663671&width=600"
                ],
                descripcion: `¡El cuidado de los labios viene en dosis dulces!

Nuestros dúos de cuidado labial Sweet Dose están diseñados para todas las edades y todos los labios, con deliciosos aromas que elevan tu rutina de cuidado labial. Cada dúo incluye un exfoliante labial nutritivo y un aceite labial hidratante ✨
👄🧽 Nuestro exfoliante labial es un tratamiento exfoliante enriquecido con manteca de karité y vitamina E, que promueve labios radiantes y más saludables.
↳ La manteca de karité actúa como un rico emoliente, proporcionando beneficios antiinflamatorios para ayudar a lograr labios más suaves y tersos.
↳ La vitamina E sirve como un escudo protector contra los rayos UV, ayudando a restaurar y reponer los labios secos y escamosos.

👄💦 Nuestro aceite labial es una mezcla nutritiva infundida con aceite de jojoba y vitamina E, diseñada para mejorar la luminosidad y la salud de los labios.
↳ El aceite de jojoba repone, restaura e hidrata visiblemente los labios para una sensación suave y flexible.
↳ La vitamina E no solo hidrata sino que también alivia la piel seca y escamosa, reduciendo las arrugas y ayudando con la pigmentación de la piel, promoviendo labios radiantes y brillantes.`,
                tag: null,
                tonos: [
                    { nombre: "Cereza", hex: "#f8a6ac" },
                    { nombre: "Uva", hex: "#d99ab2" },
                    { nombre: "Durazno", hex: "#f9ab7d" },
                    { nombre: "Sweet Dose", hex: "#f99bad" },
                    { nombre: "Sandia", hex: "#ee8da1" }
                ]
            },
            {
                id: 8,
                nombre: "Esponjas limpiadoras Freshness Please",
                categoria: "Esponjas",
                imagenes: [
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/freshness-please-cleansing-sponges-bcskin-beauty-creations-sk-cs2-607683.jpg?v=1723046730&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/freshness-please-cleansing-sponges-bcskin-beauty-creations-sk-cs2-748848.jpg?v=1723046732&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/freshness-please-cleansing-sponges-bcskin-beauty-creations-sk-cs2-367282.jpg?v=1723046735&width=850",
                    "https://www.beautycreationscosmetics.com/cdn/shop/products/freshness-please-cleansing-sponges-bcskin-beauty-creations-sk-cs2-643362.jpg?v=1723046737&width=600"
                ],
                descripcion: `Esponjas limpiadoras Freshness Please

2 piezas sin látex
Sin parabenos
Sin sulfatos
Libre de ftalatos
Modo de empleo:

Sumerge la esponja en agua tibia hasta que esté completamente expandida. Con el limpiador START FRESH, exfolia suavemente.
Nuestra esponja limpiadora perfecta en forma de corazón es ideal para acceder a cualquier zona como alrededor de la nariz y debajo de los ojos.
Uso diario
Secar al aire
Reemplazar cada 30 días
Detalles:

Limpia y elimina impurezas.
Para todo tipo de piel`,
                tag: null,
                tonos: null,
            },
            {
                id: 9,
                nombre: "Crema de vitamina B3",
                categoria: "Cremas",
                imagenes: [
                    "https://ximeskin.com/cdn/shop/products/IMG_2172_700x.png?v=1629434619",
                    "https://ximeskin.com/cdn/shop/products/IMG_2170_1500x.png?v=1629434619"
                ],
                descripcion: `Contiene nicotinamida, ácido hialurónico, escualano, aceite de nuez de macadamia y otros ingredientes activos que nutren intensamente la piel, 
                la hidratan, mejoran su firmeza, combaten el envejecimiento y le dan un aspecto más joven. Además, atenúan las manchas, iluminan la piel, 
                mejoran la opacidad y la dejan suave y radiante.`,
                tag: null,
                tonos: null,
            },
            {
                id: 10,
                nombre: "Crema de vitamina E",
                categoria: "Cremas",
                imagenes: [
                    "https://ximeskin.com/cdn/shop/products/IMG_2174_700x.png?v=1629408691",
                    "https://ximeskin.com/cdn/shop/products/IMG_2173_1500x.png?v=1629408691"
                ],
                descripcion: `Contiene vitamina E, extracto de Butyrospermum parkii y escualano, que favorecen el metabolismo de la piel y se absorben fácilmente. 
                Previene la pigmentación, mejora la elasticidad e hidrata la piel, desempeñando un papel fundamental en el cuidado de la piel, el antienvejecimiento y la hidratación. 
                Además, previene el envejecimiento cutáneo y posee excelentes propiedades antioxidantes.`,
                tag: null,
                tonos: null,
            },
            {
                id: 11,
                nombre: "Crema ocular con retinoides",
                categoria: "Cremas",
                imagenes: [
                    "https://ximeskin.com/cdn/shop/products/IMG_2201_700x.png?v=1629440801",
                    "https://ximeskin.com/cdn/shop/products/IMG_2204_2048x.png?v=1629440801"
                ],
                descripcion: `Dale a tus ojos el cuidado de lujo que merecen. Nuestra Retinoid Eye Cream ha sido formulada específicamente para tratar la delicada zona del contorno de ojos, trabajando profundamente para suavizar las líneas de expresión y las patas de gallo.

¿Por qué te encantará?

Reparación Rápida: Tecnología de retinoides que acelera la renovación celular.

Acción Focalizada: Combate eficazmente los signos del cansancio y la edad.

Textura Sedosa: Se absorbe rápidamente sin dejar sensación grasa.

Presentación: 20ml / 0.68 FL.OZ`,
                tag: null,
                tonos: null,
            },

        ];

  const productosCuerpo = [
           {
                id: 1,
                nombre: "Bratz Forever Shimmerin Hair & Body Shimmer",
                categoria: "Brillos Corporales",
                imagenes: [
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/Hair_and_Body_Glitter_Spray_1.jpg?v=1731038043&width=500",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/HAIR-_-BODY-GLITTER-SPRAY.1.jpg?v=1730415385&width=500",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/HAIR-_-BODY-GLITTER-SPRAY.jpg?v=1730415385&width=500"
                ],
                descripcion: `Brilla como una estrella con el brillo Forever Shimmerin' para cabello y cuerpo de Bratz X Beauty Creations. Su fórmula ligera y no pegajosa está repleta de purpurina ultrafina que le da a tu piel y cabello un brillo radiante, propio de Bratz.

Perfecto para festivales, conciertos, fiestas o cualquier momento en el que quieras ser el centro de atención, este spray brillante aporta el brillo perfecto, sin ensuciar ni dejar una sensación pegajosa. Ya sea que quieras resaltar tus clavículas o añadir brillo a tus ondas, es tu opción ideal para un acabado brillante y glamuroso.

Por qué te encantará:

Sensación ligera y no pegajosa.

Brillo ultrafino para un brillo suave y uniforme.

Seguro tanto para el cabello como para el cuerpo.

Perfecto para todos los tonos y estilos de piel.

SIN CRUELDAD, SIN
SULFATOS,
SIN PARABENOS`,
                tag: "Tendencia",
                tonos: null,
            },
            {
                id: 2,
                nombre: "The Powerpuff Girls El Dorado Hair & Body Glitter Spray",
                categoria: "Brillos Corporales",
                imagenes: [
                    "https://lucesbeautiful.com/wp-content/uploads/2025/08/Diseno-sin-titulo-24.jpg.webp",
                    "https://lucesbeautiful.com/wp-content/uploads/2025/08/Diseno-sin-titulo-25.jpg.webp",
                    "https://lucesbeautiful.com/wp-content/uploads/2025/08/Diseno-sin-titulo-26.jpg.webp"
                ],
                descripcion: `¡Ilumina tu cabello y cuerpo con el spray con brillo para cabello y cuerpo El Dorado de The Powerpuff Girls X Beauty Creations!

Esta purpurina dorada te dará un brillo duradero que te hará brillar como una auténtica Supernena. Dale un toque de brillo a tu estilo y haz que tu belleza sea inolvidable.

Te encantará porque:

Es ligero
No es pegajoso
Tiene destellos ultrafinos.
Es para cabello y cuerpo.
Entre sus principales cualidades, este spray también es: libre de crueldad animal, libre de sulfatos y libre de parabenos.`,
                tag: null,
                tonos: null,
            },
            {
                id: 3,
                nombre: "Sweet Dose Double Layer Lotion",
                categoria: "Lociones",
                imagenes: [
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/Body_Lotion.jpg?v=1740703163&width=500",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/MELON-TIMES-LOTION.jpg?v=1740703163&width=500",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/BERRY-INTO-YOU-LOTION.jpg?v=1740703163&width=500",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/MANGO-WITH-IT-LOTION.jpg?v=1740703163&width=500",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/APPLE-SOLUTELY-FOR-YOU-LOTION.jpg?v=1740703163&width=500",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/LIFES-A-PEACH-LOTION.jpg?v=1740703163&width=500",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/SWEET-AS-CHERRY-LOTION.jpg?v=1740703163&width=500"

                ],
                descripcion: `Indulge your skin with our Sweet Dose Double Layer Lotion, a nourishing formula designed to hydrate while leaving a refreshing, fruity scent. 

Key Features
Dual-layer formula for deep hydration without the greasy feel
Fast-absorbing and lightweight for all-day softness
Infused with skin-loving ingredients for a healthy glow
Scents
Melon Times Better – Watermelon scented
Berry Into You – Sweet Strawberry scented
Mango With It – Tropical mango scented
Apple-solutely For You – Crisp apple scented
Life's A Peach – Ripe peach scented
Sweet As Cherry – Lush cherry scented

Why You'll Love It
Vegan
Cruelty-free
Paraben-free`,
                tag: null,
                tonos: null,
            },
            {
                id: 4,
                nombre: "Loción corporal Better Together de My Little Pony",
                categoria: "Lociones",
                imagenes: [
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/beauty-creations-x-my-little-pony-better-together-body-lotion-beauty-creations-mlp-bl-406436.jpg?v=1768579190&width=500",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/beauty-creations-x-my-little-pony-better-together-body-lotion-beauty-creations-mlp-bl-879351.jpg?v=1768579190&width=500",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/BETTER-TOGETHER-BODY-LOTION.jpg?v=1768579190&width=500",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/beauty-creations-x-my-little-pony-better-together-body-lotion-beauty-creations-mlp-bl-382568.jpg?v=1768579190&width=500"
                ],
                descripcion: `Descubre la magia y el brillo con la nueva Loción Corporal "Better Together" de Beauty Creations x My Little Pony. Esta encantadora colección incorpora a tus personajes favoritos de My Little Pony directamente a tu rutina de belleza. Esta loción hidrata profundamente, dejando tu piel suave y radiante como un arcoíris. Tu piel no solo lucirá increíble, sino que también irradiará un brillo mágico.


¡Prepárate para brillar con la magia de My Little Pony y deja que tu piel brille cada día!`,
                tag: null,
                tonos: null,
            },
            
        ];

  const productosAccesorios = [
            {
                id: 1,
                nombre: "Brochas - Set De Brochas 24 pzs - Dream Girl",
                categoria: "Set Brochas",
                imagenes: [
                    "img/accesorios/24brochas/dreamgirl/a.webp",
                    "img/accesorios/24brochas/dreamgirl/b.webp",
                    "img/accesorios/24brochas/dreamgirl/c.webp",
                    "img/accesorios/24brochas/dreamgirl/d.webp",
                    "img/accesorios/24brochas/dreamgirl/1.webp",
                    "img/accesorios/24brochas/dreamgirl/2.webp",
                    "img/accesorios/24brochas/dreamgirl/3.webp",
                    "img/accesorios/24brochas/dreamgirl/4.webp",
                    "img/accesorios/24brochas/dreamgirl/5.webp",
                    "img/accesorios/24brochas/dreamgirl/6.webp",
                    "img/accesorios/24brochas/dreamgirl/7.webp",
                    "img/accesorios/24brochas/dreamgirl/8.webp",
                    "img/accesorios/24brochas/dreamgirl/9.webp",
                    "img/accesorios/24brochas/dreamgirl/10.webp",
                    "img/accesorios/24brochas/dreamgirl/11.webp",
                    "img/accesorios/24brochas/dreamgirl/12.webp",
                    "img/accesorios/24brochas/dreamgirl/13.webp",
                    "img/accesorios/24brochas/dreamgirl/14.webp",
                    "img/accesorios/24brochas/dreamgirl/15.webp",
                    "img/accesorios/24brochas/dreamgirl/16.webp",
                    "img/accesorios/24brochas/dreamgirl/17.webp",
                    "img/accesorios/24brochas/dreamgirl/18.webp",
                    "img/accesorios/24brochas/dreamgirl/19.webp",
                    "img/accesorios/24brochas/dreamgirl/20.webp",
                    "img/accesorios/24brochas/dreamgirl/21.webp",
                    "img/accesorios/24brochas/dreamgirl/22.webp",
                    "img/accesorios/24brochas/dreamgirl/23.webp",
                    "img/accesorios/24brochas/dreamgirl/24.webp"
                ],
                descripcion: `Ideal para cualquiera, desde principiantes a expertos en el mundo de maquillaje, encuentra en este estuche todas las herramientas que necesitas para crear cualquier maquillaje, con su gran variedad de brochas para ojos y rostro podrás dejar volar tu imaginación. 

Este estuche de brochas incluye 24 piezas y un contenedor para mantenerlas limpias y ordenadas, son ultra suaves, sintéticas y con su mango de madera que garantiza una gran durabilidad, con su estuche puedes llevarlas a donde quieras.

Este set incluye:
#1 - BROCHA FACIAL DE LUJO
#2 - POLVERA CÓNICA GRANDE
#3 - BASE DE MAQUILLAJE DE LUJO
#4 - BROCHA PARA COLORETE
#5 - CONTORNO DE LUJO
#6 - BROCHA DE ILUMINADOR DE LUJO
#7 - BROCHA CÓNICA PARA POLVOS
#8 - CONTORNO EN CREMA DE LUJO
#9 - CORRECTOR GRANDE
#10 - BROCHA MINI PARA CORRECTOR
#11 - BROCHA DELUXE CON PUNTA
#12 - DIFUMINADOR EN FORMA DE CÚPULA
#13 - BLENDER PUNTUAL DETALLADO
#14 - BROCHA PUNTUAL PEQUEÑA
#15 - PINCEL GRANDE PARA SOMBRAS
#16 - PINCEL PARA SOMBRAS PEQUEÑAS
#17 - PINCEL DIFUMINADOR GRANDE
#18 - BROCHA PARA DIFUMINAR
#19 - DIFUMINADOR DE PLIEGUES
#20 - MINI DIFUMINADOR
#21 - MINI DIFUMINADOR PLANO
#22 - LÁPIZ DIFUMINADOR
#23 - BROCHA PLANA
#24 - BROCHA DUO ANGULAR`,
                tag: null,
                tonos: null
            },
            {
                id: 2,
                nombre: "Brochas - Set De Brochas 24 Piezas - Pretty And Perfect",
                categoria: "Set Brochas",
                imagenes: [
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-set-de-brochas-24-piezas-pink-and-perfect-set-de-brochas-cosmetics-brochas-bs-pp-840878.webp?v=1723939064&width=950",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-set-de-brochas-24-piezas-pink-and-perfect-set-de-brochas-cosmetics-brochas-bs-pp-464916.webp?v=1723939064&width=1100",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-set-de-brochas-24-piezas-pink-and-perfect-set-de-brochas-cosmetics-brochas-bs-pp-370601.webp?v=1723523060&width=1100",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-set-de-brochas-24-piezas-pink-and-perfect-set-de-brochas-cosmetics-brochas-bs-pp-259175.webp?v=1723523078&width=1100",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-set-de-brochas-24-piezas-pink-and-perfect-set-de-brochas-cosmetics-brochas-bs-pp-929992.webp?v=1723523103&width=1100",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-set-de-brochas-24-piezas-pink-and-perfect-set-de-brochas-cosmetics-brochas-bs-pp-254580.webp?v=1723523119&width=1100",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-set-de-brochas-24-piezas-pink-and-perfect-set-de-brochas-cosmetics-brochas-bs-pp-280966.webp?v=1723523137&width=1100",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-set-de-brochas-24-piezas-pink-and-perfect-set-de-brochas-cosmetics-brochas-bs-pp-865873.webp?v=1723523165&width=1100",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-set-de-brochas-24-piezas-pink-and-perfect-set-de-brochas-cosmetics-brochas-bs-pp-882936.webp?v=1723523180&width=900",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-set-de-brochas-24-piezas-pink-and-perfect-set-de-brochas-cosmetics-brochas-bs-pp-645174.webp?v=1723523198&width=900",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-set-de-brochas-24-piezas-pink-and-perfect-set-de-brochas-cosmetics-brochas-bs-pp-151387.webp?v=1723523226&width=900",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-set-de-brochas-24-piezas-pink-and-perfect-set-de-brochas-cosmetics-brochas-bs-pp-466821.webp?v=1723523240&width=900",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-set-de-brochas-24-piezas-pink-and-perfect-set-de-brochas-cosmetics-brochas-bs-pp-227841.webp?v=1723523257&width=900",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-set-de-brochas-24-piezas-pink-and-perfect-set-de-brochas-cosmetics-brochas-bs-pp-619415.webp?v=1723523284&width=900",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-set-de-brochas-24-piezas-pink-and-perfect-set-de-brochas-cosmetics-brochas-bs-pp-685361.webp?v=1723523301&width=900",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-set-de-brochas-24-piezas-pink-and-perfect-set-de-brochas-cosmetics-brochas-bs-pp-663593.webp?v=1723523320&width=900",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-set-de-brochas-24-piezas-pink-and-perfect-set-de-brochas-cosmetics-brochas-bs-pp-667576.webp?v=1723523343&width=900",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-set-de-brochas-24-piezas-pink-and-perfect-set-de-brochas-cosmetics-brochas-bs-pp-937559.webp?v=1723523361&width=900",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-set-de-brochas-24-piezas-pink-and-perfect-set-de-brochas-cosmetics-brochas-bs-pp-768412.webp?v=1723523378&width=900",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-set-de-brochas-24-piezas-pink-and-perfect-set-de-brochas-cosmetics-brochas-bs-pp-362322.webp?v=1723523403&width=900",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-set-de-brochas-24-piezas-pink-and-perfect-set-de-brochas-cosmetics-brochas-bs-pp-708681.webp?v=1723523420&width=900",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-set-de-brochas-24-piezas-pink-and-perfect-set-de-brochas-cosmetics-brochas-bs-pp-417928.webp?v=1723523437&width=900",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-set-de-brochas-24-piezas-pink-and-perfect-set-de-brochas-cosmetics-brochas-bs-pp-863833.webp?v=1723523463&width=900",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-set-de-brochas-24-piezas-pink-and-perfect-set-de-brochas-cosmetics-brochas-bs-pp-856697.webp?v=1723523479&width=900",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-set-de-brochas-24-piezas-pink-and-perfect-set-de-brochas-cosmetics-brochas-bs-pp-560085.webp?v=1723523497&width=900",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-set-de-brochas-24-piezas-pink-and-perfect-set-de-brochas-cosmetics-brochas-bs-pp-307707.webp?v=1723523523&width=900"

                ],
                marca:"Beauty Creations",
                descripcion: `Ideal para cualquiera, desde principiantes a expertos en el mundo de maquillaje, encuentra en este estuche todas las herramientas que necesitas para crear cualquier maquillaje, con su gran variedad de brochas para ojos y rostro podrás dejar volar tu imaginación. 

Este estuche de brochas incluye 24 piezas y un contenedor para mantenerlas limpias y ordenadas, son ultra suaves, sintéticas y con su mango de madera que garantiza una gran durabilidad, con su estuche puedes llevarlas a donde quieras.

Este set incluye:
#1 - BROCHA FACIAL DE LUJO
#2 - POLVERA CÓNICA GRANDE
#3 - BASE DE MAQUILLAJE DE LUJO
#4 - BROCHA PARA COLORETE
#5 - CONTORNO DE LUJO
#6 - BROCHA DE ILUMINADOR DE LUJO
#7 - BROCHA CÓNICA PARA POLVOS
#8 - CONTORNO EN CREMA DE LUJO
#9 - CORRECTOR GRANDE
#10 - BROCHA MINI PARA CORRECTOR
#11 - BROCHA DELUXE CON PUNTA
#12 - DIFUMINADOR EN FORMA DE CÚPULA
#13 - BLENDER PUNTUAL DETALLADO
#14 - BROCHA PUNTUAL PEQUEÑA
#15 - PINCEL GRANDE PARA SOMBRAS
#16 - PINCEL PARA SOMBRAS PEQUEÑAS
#17 - PINCEL DIFUMINADOR GRANDE
#18 - BROCHA PARA DIFUMINAR
#19 - DIFUMINADOR DE PLIEGUES
#20 - MINI DIFUMINADOR
#21 - MINI DIFUMINADOR PLANO
#22 - LÁPIZ DIFUMINADOR
#23 - BROCHA PLANA
#24 - BROCHA DUO ANGULAR`,
                tag: null,
                tonos: null
            },
            {
                id: 3,
                nombre: "Brochas - Set De Brochas 24 Piezas - Unbothered",
                categoria: "Set Brochas",
                imagenes: [
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-set-de-brochas-24-piezas-unbothered-set-de-brochas-cosmetics-bs-ub-574876.webp?v=1723939070&width=900",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-set-de-brochas-24-piezas-unbothered-set-de-brochas-cosmetics-bs-ub-193271.webp?v=1723939070&width=900"
                ],
                descripcion: `Ideal para cualquiera, desde principiantes a expertos en el mundo de maquillaje, encuentra en este estuche todas las herramientas que necesitas para crear cualquier maquillaje, con su gran variedad de brochas para ojos y rostro podrás dejar volar tu imaginación. 

Este estuche de brochas incluye 24 piezas y un contenedor para mantenerlas limpias y ordenadas, son ultra suaves, sintéticas y con su mango de madera que garantiza una gran durabilidad, con su estuche puedes llevarlas a donde quieras.

Este set incluye:
#1 - BROCHA FACIAL DE LUJO
#2 - POLVERA CÓNICA GRANDE
#3 - BASE DE MAQUILLAJE DE LUJO
#4 - BROCHA PARA COLORETE
#5 - CONTORNO DE LUJO
#6 - BROCHA DE ILUMINADOR DE LUJO
#7 - BROCHA CÓNICA PARA POLVOS
#8 - CONTORNO EN CREMA DE LUJO
#9 - CORRECTOR GRANDE
#10 - BROCHA MINI PARA CORRECTOR
#11 - BROCHA DELUXE CON PUNTA
#12 - DIFUMINADOR EN FORMA DE CÚPULA
#13 - BLENDER PUNTUAL DETALLADO
#14 - BROCHA PUNTUAL PEQUEÑA
#15 - PINCEL GRANDE PARA SOMBRAS
#16 - PINCEL PARA SOMBRAS PEQUEÑAS
#17 - PINCEL DIFUMINADOR GRANDE
#18 - BROCHA PARA DIFUMINAR
#19 - DIFUMINADOR DE PLIEGUES
#20 - MINI DIFUMINADOR
#21 - MINI DIFUMINADOR PLANO
#22 - LÁPIZ DIFUMINADOR
#23 - BROCHA PLANA
#24 - BROCHA DUO ANGULAR`,
                tag: null,
                tonos: null
            },
                        {
                id: 4,
                nombre: "Brochas - Set De Brochas 24 Piezas - Oh Darling",
                categoria: "Set Brochas",
                imagenes: [
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-set-de-brochas-24-piezas-oh-darling-set-de-brochas-cosmetics-bs-od-321534.webp?v=1723939057&width=900",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-set-de-brochas-24-piezas-oh-darling-set-de-brochas-cosmetics-bs-od-509295.webp?v=1723939057&width=900"
                ],
                descripcion: `Ideal para cualquiera, desde principiantes a expertos en el mundo de maquillaje, encuentra en este estuche todas las herramientas que necesitas para crear cualquier maquillaje, con su gran variedad de brochas para ojos y rostro podrás dejar volar tu imaginación. 

Este estuche de brochas incluye 24 piezas y un contenedor para mantenerlas limpias y ordenadas, son ultra suaves, sintéticas y con su mango de madera que garantiza una gran durabilidad, con su estuche puedes llevarlas a donde quieras.

Este set incluye:
#1 - BROCHA FACIAL DE LUJO
#2 - POLVERA CÓNICA GRANDE
#3 - BASE DE MAQUILLAJE DE LUJO
#4 - BROCHA PARA COLORETE
#5 - CONTORNO DE LUJO
#6 - BROCHA DE ILUMINADOR DE LUJO
#7 - BROCHA CÓNICA PARA POLVOS
#8 - CONTORNO EN CREMA DE LUJO
#9 - CORRECTOR GRANDE
#10 - BROCHA MINI PARA CORRECTOR
#11 - BROCHA DELUXE CON PUNTA
#12 - DIFUMINADOR EN FORMA DE CÚPULA
#13 - BLENDER PUNTUAL DETALLADO
#14 - BROCHA PUNTUAL PEQUEÑA
#15 - PINCEL GRANDE PARA SOMBRAS
#16 - PINCEL PARA SOMBRAS PEQUEÑAS
#17 - PINCEL DIFUMINADOR GRANDE
#18 - BROCHA PARA DIFUMINAR
#19 - DIFUMINADOR DE PLIEGUES
#20 - MINI DIFUMINADOR
#21 - MINI DIFUMINADOR PLANO
#22 - LÁPIZ DIFUMINADOR
#23 - BROCHA PLANA
#24 - BROCHA DUO ANGULAR`,
                tag: null,
                tonos: null
            },
            {
                id: 5,
                nombre: "Limpiador De Brochas One Step - Brush Cleaner",
                categoria: "Limpiador Brochas",
                imagenes: [
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-limpiador-de-brochas-one-step-brush-cleaner-cosmetics-bcs-334104.webp?v=1723570024&width=900",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-limpiador-de-brochas-one-step-brush-cleaner-cosmetics-bcs-152855.webp?v=1723570042&width=900"
                ],
                descripcion: 'Esta solución de limpieza suave, a base de agua, elimina la suciedad y los residuos sin dañar tus brochas. Limpia tus brochas en minutos y mantiene el pelo suave y sedoso ¡Prueba este limpiador para obtener brochas de maquillaje profesionales! ¡Compra el tuyo ahora mismo! 🥰',
                tag: null,
                tonos: null
            },
            {
                id: 6,
                nombre: "Blending Sponge - Set De Esponjas De 2 Piezas- Puff Puff",
                categoria: "Set Esponjas",
                imagenes: [
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-puff-puff-set-de-2-pzas-set-de-esponjas-para-maquillaje-cosmetics-vpp-324021.jpg?v=1739293702&width=900",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-puff-puff-set-de-2-pzas-set-de-esponjas-para-maquillaje-cosmetics-vpp-661081.jpg?v=1739293702&width=900",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-puff-puff-set-de-2-pzas-set-de-esponjas-para-maquillaje-cosmetics-vpp-476797.jpg?v=1723527217&width=900",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-puff-puff-set-de-2-pzas-set-de-esponjas-para-maquillaje-cosmetics-vppb-590453.jpg?v=1723527245&width=900",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-puff-puff-set-de-2-pzas-set-de-esponjas-para-maquillaje-cosmetics-vppb-116524.jpg?v=1723527260&width=900"
                ],
                descripcion: `Un set de 2borlas suaves y reutilizables para aplicar de forma experta polvos sueltos o compactos en un acabado impecable.

Las amaras porqué:

Set de 2 almohadillas triangulares
Sin látex
Paleta de terciopelo
Reutilizable
Ultra suave
Perfecta para aplicar polvos sueltos y compactos
Aplicación impecable
Lavar a mano y secar al aire`,
                tag: null,
                tonos: [
                    { nombre: "PINK", hex: "#ffc0cb" },
                    { nombre: "Black", hex: "#000000" }
                ]
            },
            {
                id: 7,
                nombre: "Blending Sponges - Esponjas Para Maquillaje - Puff Puff Perfect Trio",
                categoria: "Set Esponjas",
                imagenes: [
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-esponjas-para-maquillaje-puff-puff-the-perfect-trio-el-trio-perfecto-cosmetics-vpp-tpt-999802.webp?v=1745969306&width=900",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-esponjas-para-maquillaje-puff-puff-the-perfect-trio-el-trio-perfecto-cosmetics-vpp-tpt-674460.webp?v=1723503140&width=900",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-esponjas-para-maquillaje-puff-puff-the-perfect-trio-el-trio-perfecto-cosmetics-vpp-tpt-908919.webp?v=1723503183&width=900",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-esponjas-para-maquillaje-puff-puff-the-perfect-trio-el-trio-perfecto-cosmetics-vpp-tpt-855981.webp?v=1723503200&width=900"
                ],
                descripcion: `El trío perfecto de esponjas para maquillaje, hecho especialmente para que apliques tu maquillaje sin esfuerzo ¡Compra las tuyas ahora! 💅🥰💋❤️🔥

Sin látex
Reutilizable 
Terciopelo
ultrasuave
Perfectas para aplicar polvo suelto o prensado
Aplicación impecable
*Lavar a mano y secar al aire`,
                tag: null,
                tonos: null
            },
            {
                id: 8,
                nombre: "Sacapuntas Beauty Creations",
                categoria: "Sacapuntas",
                imagenes: [
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/GRAYBGFORECOMM_13.png?v=1739293905&width=900",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-cosmetics-mx-beauty-creations-sacapuntas-pps-196384.jpg?v=1739293905&width=900"
                ],
                descripcion: "Sacapuntas universal de Beauty Creations para cualquier lápiz delineador de madera con dos dos tamaños de navaja.",
                tag: "Nuevo",
                tonos: null
            },
               {
                id: 9,
                nombre: "Louie Castro X Beauty Creations - Dúo De Esponjas - The CHI CHI Blenders",
                categoria: "Set Esponjas",
                imagenes: [
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-cosmetics-mx-beauty-creations-louie-castro-the-chi-chi-blenders-duo-accessories-lcbb-274760.jpg?v=1751927122&width=900",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-cosmetics-mx-beauty-creations-louie-castro-the-chi-chi-blenders-duo-accessories-lcbb-334973.jpg?v=1723564341&width=900"
                ],
                descripcion: "CHI CHI BLENDERS: ¡Enfrenta el calor y mantente impecable en tu cita de maquillaje con el set Chi Chi Blender! Un dúo de esponjas de maquillaje para resaltar tu lado atrevido mientras logras un look impecable.",
                tag: null,
                tonos: null
            },
               {
                id: 10,
                nombre: "Betty Boop X Beauty Creations - Cosmetiquera",
                categoria: "Cosmetiquera",
                imagenes: [
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/BAG_BW.jpg?v=1738860396&width=900",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/COLLECTION_PR_BW.jpg?v=1738860396&width=900",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/1-Cosmetiquera.png?v=1738860396&width=900"
                ],
                descripcion: "Mantén tus esenciales organizados con estilo con el Neceser Betty Boop x Beauty Creations, un imprescindible para cualquier amante de la belleza. Con un diseño rojo audaz y un adorable gráfico de Betty Boop, esta bolsa combina un encanto juguetón con la practicidad diaria.",
                tag: null,
                tonos: null
            },
            {
                id: 11,
                nombre: "Cloud 9 24 PC Brush Set - Beauty Creations",
                categoria: "Set Brochas",
                imagenes: [
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/cloud9_grey.png?v=1773077608&width=1100",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/24BrushSet_Cloud9_Box.jpg?v=1773077608&width=1100",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/24BrushSet_Cloud9_Brushes.jpg?v=1773077608&width=1100"
                ],
                descripcion: `¡Con este set, estarás en las nubes! Como les encantan nuestros sets de brochas, ¡teníamos que seguir ofreciéndolos! Ahora, en un elegante y moderno color blanco marfil, este set de 24 brochas incluye todo lo que necesitas para aplicar, difuminar y perfeccionar tu maquillaje con facilidad. Nuestras brochas son ultrasuaves, delicadas con tu piel y duraderas, ¡para que te duren toda la vida! Y con su estuche a juego, podrás llevar tu set de brochas contigo a donde quieras.

Detalles del juego de 24 pinceles:

Cabello sintético
Mango de madera
Casquillo de aluminio
 El conjunto incluye:

#1 - BROCHA FACIAL DE LUJO

#2 - POLVO DE GRAN CÓNICO

#3 - BASE DE MAQUILLAJE DE LUJO

#4 - BROCHA PARA COLORETE

#5 - CONTORNO DE LUJO

#6 - BROCHA ILUMINADORA DE LUJO

#7 - BROCHA PARA POLVO CÓNICA

#8 - CONTORNO DE CREMA DE LUJO

#9 - CORRECTOR GRANDE

#10 - MINI BROCHA PARA CORRECTOR

#11 - LICUADORA DE LUJO PUNTA

#12 - MEZCLA CON FORMA DE CÚPULA

#13 - DIFUMINADOR DE DETALLE PUNTA

#14 - BATIDORA PEQUEÑA PUNTA

#15 - PINCEL GRANDE PARA SOMBRAS

#16 - PINCEL PEQUEÑO PARA SOMBRAS

#17 - BROCHA GRANDE PARA MEZCLAR

#18 - BROCHA PARA MEZCLAR ESPONJOSA

#19 - DIFUMINADO DE PLIEGUES

#20 - MINI MEZCLA

#21- MEZCLA PLANA MNI

#22 - DIFUMINADO CON LÁPIZ

#23 - PINCELES PLANOS

#24 - PINCELES DOBLES ANGULARES `,
                tag: null,
                tonos: null
            },
            {
                id: 12,
                nombre: "Feeling Envy 24 PC Brush Set - Beauty Creations",
                categoria: "Set Brochas",
                imagenes: [
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/feeling_envy_grey.png?v=1773076284&width=1100",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/SAGE.jpg?v=1773075282&width=1100",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/BCFEB1134.jpg?v=1773075282&width=1100"
                ],
                descripcion: `¡Te encantará! ¡Nuestros sets de brochas son una maravilla! Ahora en un elegante tono verde frío, este set de 24 brochas incluye todo lo que necesitas para aplicar, difuminar y perfeccionar tu maquillaje con facilidad. Nuestras brochas son ultrasuaves, delicadas con tu piel y duraderas, ¡para que te duren toda la vida! Y con su estuche a juego, podrás llevar tu set de brochas contigo a donde quieras.

Detalles del juego de 24 pinceles:

Cabello sintético
Mango de madera
Casquillo de aluminio
 El conjunto incluye:

#1 - BROCHA FACIAL DE LUJO

#2 - POLVO DE GRAN CÓNICO 

#3 - BASE DE MAQUILLAJE DE LUJO

#4 - BROCHA PARA COLORETE

#5 - CONTORNO DE LUJO

#6 - BROCHA ILUMINADORA DE LUJO

#7 - BROCHA PARA POLVO CÓNICA

#8 - CONTORNO DE CREMA DE LUJO

#9 - CORRECTOR GRANDE

#10 - MINI BROCHA PARA CORRECTOR

#11 - LICUADORA DE LUJO PUNTA

#12 - MEZCLA CON FORMA DE CÚPULA

#13 - DIFUMINADOR DE DETALLE PUNTA

#14 - BATIDORA PEQUEÑA PUNTA

#15 - PINCEL GRANDE PARA SOMBRAS

#16 - PINCEL PEQUEÑO PARA SOMBRAS

#17 - BROCHA GRANDE PARA MEZCLAR

#18 - BROCHA PARA MEZCLAR ESPONJOSA

#19 - DIFUMINADO DE PLIEGUES

#20 - MINI MEZCLA

#21- MEZCLA PLANA MNI

#22 - DIFUMINADO CON LÁPIZ

#23 - PINCELES PLANOS

#24 - PINCELES DOBLES ANGULARES `,
                tag: null,
                tonos: null
            },
            {
                id: 13,
                nombre: "Hot Girl 24 PC Brush Set - Beauty Creations",
                categoria: "Set Brochas",
                imagenes: [
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/01bb25d2-9467-44e0-8aee-c3d6aa487e19.png?v=1771832213&width=1000",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/BCFEB3748.jpg?v=1773078717&width=1100",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/BCFEB1144.jpg?v=1773078717&width=1100"
                ],
                descripcion: `¡Oh, qué guapa es! ¡Les han encantado nuestros sets de brochas, así que teníamos que seguir ofreciéndoles más! Ahora, con un vibrante color veraniego, este set de 24 brochas incluye todo lo que necesitas para aplicar, difuminar y perfeccionar tu maquillaje con facilidad. Nuestras brochas son ultrasuaves, delicadas con tu piel y duraderas, ¡para que te duren toda la vida! Y con su estuche a juego, puedes llevar tu set de brochas contigo a donde quieras.

Detalles del juego de 24 pinceles:

Cabello sintético
Mango de madera
Casquillo de aluminio
 El conjunto incluye:

#1 - BROCHA FACIAL DE LUJO

#2 - POLVO DE GRAN CÓNICO 

#3 - BASE DE MAQUILLAJE DE LUJO

#4 - BROCHA PARA COLORETE

#5 - CONTORNO DE LUJO

#6 - BROCHA ILUMINADORA DE LUJO

#7 - BROCHA PARA POLVO CÓNICA

#8 - CONTORNO DE CREMA DE LUJO

#9 - CORRECTOR GRANDE

#10 - MINI BROCHA PARA CORRECTOR

#11 - LICUADORA DE LUJO PUNTA

#12 - MEZCLA CON FORMA DE CÚPULA

#13 - DIFUMINADOR DE DETALLE PUNTA

#14 - BATIDORA PEQUEÑA PUNTA

#15 - PINCEL GRANDE PARA SOMBRAS

#16 - PINCEL PEQUEÑO PARA SOMBRAS

#17 - BROCHA GRANDE PARA MEZCLAR

#18 - BROCHA PARA MEZCLAR ESPONJOSA

#19 - DIFUMINADO DE PLIEGUES

#20 - MINI MEZCLA

#21- MEZCLA PLANA MNI

#22 - DIFUMINADO CON LÁPIZ

#23 - PINCELES PLANOS

#24 - PINCELES DOBLES ANGULARES `,
                tag: "NOVEDAD",
                tonos: null
            },
            {
                id: 14,
                nombre: "Angel Baby 24 PC Brush Set - Beauty Creations",
                categoria: "Set Brochas",
                imagenes: [
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/angelbaby_grey.png?v=1773076991&width=1100",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/BEAUTYCREATIONSPROD-JAN20264682.jpg?v=1773077622&width=1100",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/24BrushSet_Angel_Baby_Brushes.jpg?v=1773077622&width=1100"
                ],
                descripcion: `¡Ya llegó Angel Baby! ¡Les encantaron nuestros sets de brochas, así que teníamos que seguir ofreciéndolos! Ahora en un elegante azul hielo, este set de 24 brochas incluye todas las que necesitas para aplicar, difuminar y perfeccionar tu maquillaje con facilidad. Nuestras brochas son ultrasuaves, delicadas con tu piel y duraderas, ¡para que te duren mucho tiempo! Y con su estuche a juego, puedes llevar tu set de brochas contigo a donde quieras.

Detalles del juego de 24 pinceles:

Cabello sintético
Mango de madera
Casquillo de aluminio
 El conjunto incluye:

#1 - BROCHA FACIAL DE LUJO

#2 - POLVO DE GRAN CÓNICO

#3 - BASE DE MAQUILLAJE DE LUJO

#4 - BROCHA PARA COLORETE

#5 - CONTORNO DE LUJO

#6 - BROCHA ILUMINADORA DE LUJO

#7 - BROCHA PARA POLVO CÓNICA

#8 - CONTORNO DE CREMA DE LUJO

#9 - CORRECTOR GRANDE

#10 - MINI BROCHA PARA CORRECTOR

#11 - LICUADORA DE LUJO PUNTA

#12 - MEZCLA CON FORMA DE CÚPULA

#13 - DIFUMINADOR DE DETALLE PUNTA

#14 - BATIDORA PEQUEÑA PUNTA

#15 - PINCEL GRANDE PARA SOMBRAS

#16 - PINCEL PEQUEÑO PARA SOMBRAS

#17 - BROCHA GRANDE PARA MEZCLAR

#18 - BROCHA PARA MEZCLAR ESPONJOSA

#19 - DIFUMINADO DE PLIEGUES

#20 - MINI MEZCLA

#21- MEZCLA PLANA MNI

#22 - DIFUMINADO CON LÁPIZ

#23 - PINCELES PLANOS

#24 - PINCELES DOBLES ANGULARES `,
                tag: null,
                tonos: null
            },
            {
                id: 15,
                nombre: "Teddy Cosmetic Vanity Bag - Beauty Creations",
                categoria: "Cosmetiquera",
                imagenes: [
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/NIGHTMARE_BEFORE_XMAS0625.jpg?v=1767483589&width=1100",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/NIGHTMARE_BEFORE_XMAS0622.jpg?v=1758149280&width=1100"
                ],
                descripcion: `Fluffy, cute, and handy! Upgrade your cosmetic vanity bag with The Teddy 🐻

Makeup bag with multiple compartments and a durable, easy-to-clean material, it keeps your cosmetics neatly arranged and protected.

Dimensions: 21 X 12 X 13 CM `,
                tag: null,
                tonos: [
                    { nombre: "PINK", hex: "#ffbfcb" },
                    { nombre: "BLACK", hex: "#000000" }
                ]
            },
            {
                id: 16,
                nombre: "Neceser pequeño transparente - Beauty Creations",
                categoria: "Cosmetiquera",
                imagenes: [
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/GRAYBGFORECOMM_1_e66f37bb-9748-4f2b-8b04-8ddf51a5fd80.png?v=1771958253&width=1100"
                ],
                descripcion: `¡Mantente organizada con estilo con nuestro neceser transparente ! Este neceser compacto y elegante cuenta con un diseño transparente, perfecto para encontrar fácilmente tus imprescindibles de belleza estés donde estés. Los delicados detalles en rosa y el asa resistente lo hacen funcional y a la moda. Ideal para viajar, el trabajo o el día a día, este neceser mantiene tus productos seguros con un toque de estilo desenfadado.

Características principales:

Tamaño compacto para facilitar su transporte.
Diseño claro para un acceso rápido.
Asa y cremallera rosas resistentes
Perfecto para maquillaje, cuidado de la piel y artículos esenciales de viaje.`,
                tag: null,
                tonos: null
            }
        ];

  const productosCollabs = [
            {
                id: 1,
                nombre: "YeriMua X Beauty Creations - PR Colección Completa - PR BOX",
                categoria: "YeriMua",
                imagenes: [
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-x-yerimua-pr-coleccion-completa-yerimua-pr-cosmetics-ympr-799586.webp?v=1723545758&width=500",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-x-yerimua-pr-coleccion-completa-yerimua-pr-cosmetics-ympr-425585.jpg?v=1723545785&width=500",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-x-yerimua-pr-coleccion-completa-yerimua-pr-cosmetics-ympr-869565.jpg?v=1723545802&width=500",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-x-yerimua-pr-coleccion-completa-yerimua-pr-cosmetics-ympr-939133.jpg?v=1723545819&width=500",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/bcc-backup-beauty-creations-x-yerimua-pr-coleccion-completa-yerimua-pr-cosmetics-ympr-192746.jpg?v=1723545845&width=500"
                ],
                descripcion: `Beauty Creations X Yerimua - PR Colección Completa Yerimua - PR ¿Podrás? ¡Jamás! 💋 Esta aquí la colección que te hará sentir como una verdadera muñeca, logra un maquillaje super glam y encuentra tu energía más bad b*tch, esta colección tiene todo lo que necesario para sentirte como una super estrella; Dos kits con labiales, glitter para cuerpo y rostro, paleta de sombras con rubores e iluminadores y por supuesto un fijador de maquillaje para que tu look quede intacto toda la noche.

Los productos de edición limitada de esta colección se convertirán sin duda en tus favoritos, consigue esta exclusiva colección YeriMua X Beauty Creations. 

NOTA: ❌Al ser un articulo de edición especial y piezas limitadas, no aceptamos cambios, cancelaciones o devoluciones. Las fotos son ilustrativas y el empaque puede variar, stickers y llaveros hasta agotar existencias. 

Esta colección incluye: 

-Paleta de sombras Yeri's Palette
-Trío de tinta y gloss de labios My Faves Lip Trio
-Set de Glitters y pegamento para glitter Secret Fantasy Glitter Set 
-Dúo de labial y delineador de labios Bad B*tch Lip Duo
-Fijador de maquillaje Unique Setting Spray
-¡Lentes de sol de regalo para completar tu look!


* Este PR no incluye llavero de colección. `,
                tag: "PR BOX",
                tonos: null,
            },
            {
                id: 2,
                nombre: "Rosy McMichael x Beauty Creations Rosy's Essentials Vol. 1",
                categoria: "Rosy McMichael",
                imagenes: [
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/COLLECTION1-RESIZE_16c1ad29-8012-4152-ac46-60aebf3bf4c2.jpg?v=1763443598&width=500",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/PhotoNov162025_13432PM_b676f574-5418-48e9-88f1-53d2cbe8ccbf.jpg?v=1763663770&width=500",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/PALETTE_ef115e70-b745-48d8-a335-596f9eed0ae0.jpg?v=1763442167&width=500",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/ARMSWTCHGRAPHICSROSYMCSHADOWENGLISH.jpg?v=1763442167&width=500"
                ],
                descripcion: `Beauty Creations y Rosy McMichael se han unido una vez más para traer de vuelta uno de los productos favoritos de sus fans, con un toque especial. Presentamos Rosy's Essentials Volume 1 (Mini Edición): Rosy ha elegido sus 12 tonos favoritos de la paleta original para traerlos de vuelta en un formato compacto, práctico y lleno de amor.`,
                tag: "PR BOX",
                tonos: null,
            },
            {
                id: 3,
                nombre: "Víctor Guadarrama Por Siempre Agua Hidratante de Rosas",
                categoria: "Victor Guadarrama",
                imagenes: [
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/SPRAY-RESIZED.png?v=1747259750&width=500",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/VIC10_RESIZED.png?v=1747259759&width=500",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/VIC12_RESIZED.png?v=1747259764&width=850",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/MIST.jpg?v=1747259775&width=500",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/MIST-BOX.jpg?v=1747259777&width=500"
                ],
                descripcion: `Refresca e hidrata tu piel con el Agua de Rosas Hidratante Vico Por Siempre , una lujosa bruma facial infundida con agua de rosas y aloe vera.

Esta bruma ligera y fina proporciona una dosis instantánea de hidratación, ayudando a tonificar, equilibrar y calmar la piel. El agua de rosas proporciona una hidratación suave y un aroma floral calmante, mientras que el aloe vera nutre y calma, lo que la hace perfecta para todo tipo de piel.

Ingredientes clave : Agua de rosas, aloe vera

Libre de crueldad

Beneficios : Hidratante, calmante, refrescante.`,
                tag: "Colección",
                tonos: null,
            },
            {
                id: 4,
                nombre: "Trío de Labios Seduceme de Víctor Guadarrama",
                categoria: "Victor Guadarrama",
                imagenes: [
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/LIP-TRIO-RESIZED.png?v=1747259149&width=500",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/VIC07_RESIZED.png?v=1748627617&width=500",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/VIC13_RESIZED.png?v=1747259367&width=500",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/GLOSS-OPEN.jpg?v=1747259183&width=500",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/LINER-OPEN.jpg?v=1747259183&width=500",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/LIPSTICK-OPEN.jpg?v=1747259570&width=500",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/LIP-TRIP-CLOSED.jpg?v=1747259570&width=500"
                ],
                descripcion: `Realza tus labios con el Trío Labial Sedúceme , un set imprescindible diseñado para un glamour natural y unos labios atrevidos y hermosos. Presentado en un elegante envase dorado, este trío incluye:

Lápiz labial con acabado satinado CÓMEME : un tono nude melocotón cremoso y rico en pigmentos que se desliza suavemente y ofrece un color lujoso con un acabado satinado cómodo.

Brillo de labios voluminizador ENAMÓRATE : Un brillo de labios voluminizador de alto brillo en dorado con toques rosas y lilas. Proporciona un efecto voluminizador instantáneo con un acabado suave y no pegajoso.

Delineador de labios retráctil BÉSAME MUCHO : Un delineador marrón melocotón que define y realza los labios con una textura cremosa que se difumina fácilmente. Su diseño retráctil lo hace perfecto para retoques en cualquier lugar.

Libre de crueldad animal y cuidadosamente seleccionado por Vico Guadarrama, este trío ofrece la armonía perfecta de definición, color y brillo, todo en un lujoso conjunto.`,
                tag: null,
                tonos: null,
            },
             {
                id: 5,
                nombre: "Polvos faciales Perfection de Victor Guadarrama",
                categoria: "Victor Guadarrama",
                imagenes: [
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/POWDER1-RESIZED_19327d36-c397-42f7-8b6b-918a3bd81c1f.png?v=1747265729&width=500",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/POWDER2-RESIZED_377b48c5-3ffd-4083-858d-8890aa02e002.png?v=1747265732&width=500",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/VIC09_RESIZED_17179b6d-ce40-4b9f-9ff4-224a35aa4d57.png?v=1747265736&width=500",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/POWDER_ef8cf39f-6968-498c-9e46-4c1e37703567.jpg?v=1747265750&width=500",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/POWDER-CLOSED_b9115cde-9d02-4b6c-ae6f-0993e644e2f2.jpg?v=1747265752&width=500"
                ],
                descripcion: `Mejora tu rutina de belleza con Perfection Face Powder, una fórmula finamente molida alojada en un elegante y lujoso compacto dorado.

Este polvo ligero y translúcido está diseñado para absorber el exceso de grasa, eliminar el brillo y ofrecer un acabado suave y mate. Difumina las imperfecciones sin acumularse en las líneas de expresión, dejando tu cutis impecable y fresco durante todo el día.

Perfecto para retoques en cualquier lugar, este elegante compacto cabe perfectamente en tu bolso, combinando belleza, funcionalidad y sofisticación en un artículo esencial imprescindible.`,
                tag: null,
                tonos: null,
            },
            {
                id: 6,
                nombre: "Set de rubor en barra Pretty Desperados de Las Chicas Superpoderosas",
                categoria: "Chicas Superpoderosas",
                imagenes: [
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/RUBORES_EN_BARRA.jpg?v=1753984625&width=500",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/BLUSH_SWATCHES_PALETTE.jpg?v=1753984625&width=500",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/Screenshot2025-05-08at2.23.48PM.png?v=1753733125&width=500",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/BLUSH-STICKS-BOX.jpg?v=1753733125&width=500",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/PPG-COLECCION.jpg?v=1753732343&width=500"
                ],
                descripcion: `Dale un toque de color intenso y energía femenina a tus mejillas con los rubores en barra Pretty Desperados . Inspirados en las icónicas Chicas Superpoderosas, estos rubores en crema y polvo ofrecen un acabado mate suave, una textura ligera y una pigmentación vibrante.

Tonos disponibles:

Desert Bloom – Rosa rosado de tonos fríos

Romance Rouge – Fucsia de tonos fríos

Por qué te encantará:

Con aroma a maracuyá

Acabado mate suave, de crema a polvo.

Ligero y armable.

Infundido con manteca de mango, aceite de semilla de espuma de pradera, aceite de almendras dulces, aceite de camelia y vitamina E.

Fórmula limpia:

Vegano

Libre de crueldad

Sin parabenos

Sin sulfatos`,
                tag: null,
                tonos: null,
            },
             {
                id: 7,
                nombre: "The Powerpuff Girls El Dorado Hair & Body Glitter Spray",
                categoria: "Chicas Superpoderosas",
                imagenes: [
                    "https://lucesbeautiful.com/wp-content/uploads/2025/08/Diseno-sin-titulo-24.jpg.webp",
                    "https://lucesbeautiful.com/wp-content/uploads/2025/08/Diseno-sin-titulo-25.jpg.webp",
                    "https://lucesbeautiful.com/wp-content/uploads/2025/08/Diseno-sin-titulo-26.jpg.webp"
                ],
                descripcion: `¡Ilumina tu cabello y cuerpo con el spray con brillo para cabello y cuerpo El Dorado de The Powerpuff Girls X Beauty Creations!

Esta purpurina dorada te dará un brillo duradero que te hará brillar como una auténtica Supernena. Dale un toque de brillo a tu estilo y haz que tu belleza sea inolvidable.

Te encantará porque:

Es ligero
No es pegajoso
Tiene destellos ultrafinos.
Es para cabello y cuerpo.
Entre sus principales cualidades, este spray también es: libre de crueldad animal, libre de sulfatos y libre de parabenos.`,
                tag: null,
                tonos: null,
            },
            {
                id: 8,
                nombre: "The Powerpuff Girls X Beauty Creations - Set De Colección Completa",
                categoria: "Chicas Superpoderosas",
                imagenes: [
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/PPG-COLECCION_COMPLETA_3.jpg?v=1753489039&width=700",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/PPG-COLECCION.jpg?v=1753492783&width=700",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/Powerpuff-girls-coleccion-completa-pr-2.png?v=1753492783&width=700",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/PPG-COLECCION_COMPLETA.jpg?v=1753492783&width=700"
                     ],
                descripcion: `Consigue la colección completa de Las Chicas Superpoderosas por Beauty Creations. Este set todo en uno te trae el encanto del Viejo Oeste con un toque Superpoderoso, incluye todos los artículos de la colección para ayudarte a crear looks atrevidos, divertidos y radiantes.

El set incluye:

"Cowgirl Cuties" Paleta de sombras
"Pretty Desperados" Rubores en barra (2 pz)
"Western Wake-Up" Parches de hidrogel para ojeras y labios
"Sugar" Aceite labial con aroma a azúcar
"Everything Nice" Aceite labial con aroma a mango
"Spice" Aceite labial con aroma a guayaba
"El Dorado" Spray de glitter para cabello y cuerpo
"Bronco Babe" Bálsamo labial con color
"Horseshoe Hunny" Bálsamo labial con color`,
                tag: "PR BOX",
                tonos: null,
            },
            {
                id: 9,
                nombre: "Velvet Stay - Set De Labiales Líquidos Lip Paint - Bundle",
                categoria: "Velvet Stay",
                imagenes: [
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-cosmetics-mx-beauty-creations-velvet-stay-lip-paint-bundle-bundle-de-labiales-cosmetics-lvset-bundle-440497.jpg?v=1723578184&width=700",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-cosmetics-mx-beauty-creations-velvet-stay-lip-paint-bundle-bundle-de-labiales-cosmetics-lvset-bundle-255747.jpg?v=1723578201&width=700",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-cosmetics-mx-beauty-creations-velvet-stay-lip-paint-bundle-bundle-de-labiales-cosmetics-lvset-bundle-121041.jpg?v=1723578219&width=700",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-cosmetics-mx-beauty-creations-velvet-stay-lip-paint-bundle-bundle-de-labiales-cosmetics-lvset-bundle-404837.jpg?v=1723578245&width=700",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-cosmetics-mx-beauty-creations-velvet-stay-lip-paint-bundle-bundle-de-labiales-cosmetics-lvset-bundle-316549.jpg?v=1723578261&width=700",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-cosmetics-mx-beauty-creations-velvet-stay-lip-paint-bundle-bundle-de-labiales-cosmetics-lvset-bundle-383827.jpg?v=1723578278&width=700",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-cosmetics-mx-beauty-creations-velvet-stay-lip-paint-bundle-bundle-de-labiales-cosmetics-lvset-bundle-851722.jpg?v=1723578304&width=700",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-cosmetics-mx-beauty-creations-velvet-stay-lip-paint-bundle-bundle-de-labiales-cosmetics-lvset-bundle-110359.jpg?v=1723578320&width=700",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-cosmetics-mx-beauty-creations-velvet-stay-lip-paint-bundle-bundle-de-labiales-cosmetics-lvset-bundle-355806.jpg?v=1723578339&width=700",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-cosmetics-mx-beauty-creations-velvet-stay-lip-paint-bundle-bundle-de-labiales-cosmetics-lvset-bundle-541246.jpg?v=1723578365&width=700",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-cosmetics-mx-beauty-creations-velvet-stay-lip-paint-bundle-bundle-de-labiales-cosmetics-lvset-bundle-379311.jpg?v=1723578380&width=700",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-cosmetics-mx-beauty-creations-velvet-stay-lip-paint-bundle-bundle-de-labiales-cosmetics-lvset-bundle-275824.jpg?v=1723578398&width=700",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-cosmetics-mx-beauty-creations-velvet-stay-lip-paint-bundle-bundle-de-labiales-cosmetics-lvset-bundle-594054.jpg?v=1723578424&width=700",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-cosmetics-mx-beauty-creations-velvet-stay-lip-paint-bundle-bundle-de-labiales-cosmetics-lvset-bundle-452444.jpg?v=1723578441&width=700",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-cosmetics-mx-beauty-creations-velvet-stay-lip-paint-bundle-bundle-de-labiales-cosmetics-lvset-bundle-654261.jpg?v=1723578457&width=700",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-cosmetics-mx-beauty-creations-velvet-stay-lip-paint-bundle-bundle-de-labiales-cosmetics-lvset-bundle-565484.jpg?v=1723578484&width=700",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-cosmetics-mx-beauty-creations-velvet-stay-lip-paint-bundle-bundle-de-labiales-cosmetics-lvset-bundle-114354.jpg?v=1723578501&width=700",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-cosmetics-mx-beauty-creations-velvet-stay-lip-paint-bundle-bundle-de-labiales-cosmetics-lvset-bundle-705869.jpg?v=1723578518&width=700",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-cosmetics-mx-beauty-creations-velvet-stay-lip-paint-bundle-bundle-de-labiales-cosmetics-lvset-bundle-649280.jpg?v=1723578545&width=700",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-cosmetics-mx-beauty-creations-velvet-stay-lip-paint-bundle-bundle-de-labiales-cosmetics-lvset-bundle-746101.jpg?v=1723578561&width=700",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-cosmetics-mx-beauty-creations-velvet-stay-lip-paint-bundle-bundle-de-labiales-cosmetics-lvset-bundle-284659.jpg?v=1723578578&width=700",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-cosmetics-mx-beauty-creations-velvet-stay-lip-paint-bundle-bundle-de-labiales-cosmetics-lvset-bundle-800638.jpg?v=1723578605&width=700",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-cosmetics-mx-beauty-creations-velvet-stay-lip-paint-bundle-bundle-de-labiales-cosmetics-lvset-bundle-991620.jpg?v=1723578622&width=700",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-cosmetics-mx-beauty-creations-velvet-stay-lip-paint-bundle-bundle-de-labiales-cosmetics-lvset-bundle-130450.jpg?v=1723578637&width=700",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-cosmetics-mx-beauty-creations-velvet-stay-lip-paint-bundle-bundle-de-labiales-cosmetics-lvset-bundle-479428.jpg?v=1723578664&width=700"
                     ],
                descripcion: `LOS TINTES LABIALES SON PERFECTOS CUANDO SE DESEA DAR UN TOQUE DE COLOR A LOS LABIOS SIN TENER LA SENSACIÓN DE LLEVAR UNA BARRA DE LABIOS. LAS PINTURAS LABIALES VELVET STAY TAMBIÉN PUEDEN UTILIZARSE COMO COLORETE Y SOMBRA DE OJOS.

¡Ordena el tuyo ahora! 💋`,
                tag: null,
                tonos: null,
            },
            {
                id: 10,
                nombre: "Barbie X Beauty Creations - Bálsamo Llavero Lipgloss pH - Sunny & Stylish",
                categoria: "Barbie",
                imagenes: [
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/BARBIE3957.jpg?v=1743029066&width=700",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/KEYCHAIN.png?v=1740697645&width=700",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/SUNNY_STYLISH-2.jpg?v=1743029066&width=700",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/SUNNY_STYLISH-3.jpg?v=1743029066&width=700",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/SUNNY_STYLISH-1.jpg?v=1743029066&width=700"
                     ],
                descripcion: `¡Brillante, elegante y más colorido que nunca! Hidrata y da color a tus labios con el bálsamo labial de pH Sunny & Stylish. Su innovadora fórmula transparente reacciona con el pH de tu piel para transformarse en un hermoso tono rosa vibrante, dándote el brillo perfecto al estilo Barbie. Con un delicioso aroma a fresa, este labial es tan divertido como nutritivo para tus labios.

Características Principales:
Reacciona al pH – Se adapta a tus labios para un tono rosa personalizado.
Fórmula Hidratante – Mantiene los labios suaves y humectados.
Tonos Rosa Vibrante – Aporta un color natural con un acabado brillante ideal para cualquier tono de piel.
Libre de Crueldad Animal – Belleza sin compromisos.
Incluye Llavero – Engánchalo a tu bolso o llaves para llevarlo contigo a todos lados.`,
                tag: null,
                tonos: null,
            },
            {
                id: 11,
                nombre: "Barbie X Beauty Creations - Set De 5 Esponjas - Me & My BFF'S",
                categoria: "Barbie",
                imagenes: [
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/BARBIE3534LESSSHINE.jpg?v=1743029124&width=700",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/SPONGES-1.png?v=1740686863&width=700",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/SPONGES-2.png?v=1743029124&width=700"
                     ],
                descripcion: `Di ¡hola! a tus nuevas mejores amigas con este perfecto conjunto de esponjas, diseñado para ayudarte a crear looks de maquillaje impecables. Ideales para productos líquidos, en crema o polvo, este set de 5 piezas tiene todo lo que necesitas para una aplicación precisa.

Características Clave:
Reutilizables – Ecológicas y diseñadas para durar, hacen de tu rutina de belleza sostenible y eficiente.
Para Líquidos, Cremas y Polvos – Esponjas versátiles que funcionan con diversas fórmulas de maquillaje para un acabado impecable.
Incluido en el Set:
Esponja para Corrector – Perfecta para tratar áreas debajo de los ojos ó comisuras de la nariz.
Esponja para Contorno – Diseñada para esculpir y definir tus rasgos con facilidad.
Esponja Rectangular – Ideal para aplicar base y polvo fijador con precisión.
Esponja Angulada para Difuminar – Ideal para difuminar los bordes y lograr un acabado suave y aireado.
Esponja Doble para Difuminar – Esponja de doble uso para un difuminado impecable y acabados suaves.`,
                tag: null,
                tonos: null,
            },
            {
                id: 12,
                nombre: "Barbie X Beauty Creations - Polvo Suelto Fijador - Future Is Bright",
                categoria: "Barbie",
                imagenes: [
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/BARBIE3785.jpg?v=1753389631&width=700",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/SETTINGPOWDER.png?v=1754415872&width=700",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/FUTURE-IS_BRIGHT.jpg?v=1743029178&width=700"
                     ],
                descripcion: `Fija, difumina y perfecciona tu maquillaje con el Polvo Suelto Rosa "Future Is Bright. Este polvo de larga duración tiene un subtono frío color rosa bebé con reflejos plateados que iluminan y dan un brillo radiante al rostro. Su acabado satinado con un resplandor aperlado ayuda a crear un look impecable, inspirado en Barbie, que dura todo el día.

Características Clave:
Tono Frío – Rosa claro bebé con reflejos plateados para un efecto iluminador.
Cobertura Ligera – Ideal para fijar el maquillaje con un acabado natural y suave.
Larga Duración – Se mantiene todo el día para un look fresco y pulido.
Acabado Satinado con Resplandor Aperlado – Un resplandor sutil para un rostro luminoso.
Fija, Difumina e Ilumina – Ayuda a perfeccionar tu maquillaje mientras difumina imperfecciones.
Detalles de la Fórmula:
Libre de Crueldad Animal
Libre de Parabenos
Libre de Sulfatos
Detalles Adicionales:
Nuevo Tono Edición Limitada – Un producto exclusivo que no puede faltar en tu colección.`,
                tag: null,
                tonos: null,
            },
            {
                id: 13,
                nombre: "Betty Boop X Beauty Creations - Set Dúo De Labiales - Classy & Sassy",
                categoria: "Betty Boop",
                imagenes: [
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/LIP_DUO_STORY_SIZE_v2.jpg?v=1738860037&width=700",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/12.png?v=1738860037&width=700",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/1-LipDuo.png?v=1738860037&width=700",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/2-LipDuo.png?v=1738860037&width=700"
                     ],
                descripcion: `Cuando tengas dudas... ¡dale un toque con el Dúo de Labios Elegante y Atrevido! 
Este dúo para labios con fragancia a cereza incluye un lápiz labial de gel pH-reactivo y un aceite labial transparente nutritivo para mantener tus labios frescos, hidratados y súper glamurosos.

¿Qué incluye?:

Trendy (Lápiz Labial de Gel pH): Se adapta a tu pH natural para un tono rosado personalizado.
Stylish (Aceite Labial): Un aceite claro y ligero infundido con aceite de semilla de jojoba y vitamina E para nutrir e hidratar.
Características principales:

Lápiz Labial de Gel:

Fórmula pH-reactiva para un tono rosado personalizado
Hidrata los labios para un confort duradero
Fragancia a cereza
Aceite Labial:

Infundido con aceite de jojoba y vitamina E para una nutrición profunda
Fórmula clara y no pegajosa para un brillo natural y luminoso
Fragancia a cereza
¿Por qué te encantará?

Un dúo perfecto para un color personalizado y un brillo nutritivo
Hidratación, ligereza y comodidad durante todo el día
Ingredientes que cuidan tu piel
Fácil de usar y apto para viajes, ideal para un look aprobado por Betty todos los días
Cruelty-free`,
                tag: null,
                tonos: null,
            },
            {
                id: 14,
                nombre: "Spongebob X Beauty Creations - Espejo De Mano - I'm Ready",
                categoria: "Bob Sponja",
                imagenes: [
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/MIRRORSPONGEBOB.jpg?v=1733775611&width=700",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/I_M-READY-HAND-MIRROR-2.jpg?v=1742253210&width=700",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/I_M-READY-HAND-MIRROR-4.jpg?v=1733170143&width=700",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/I_M-READY-HAND-MIRROR.jpg?v=1733170143&width=700"
                     ],
                descripcion: `¡Prepárate para brillar con el Espejo de Mano I'm Ready de la colección de Bob Esponja Pantalones Cuadrados X Beauty Creations! 

Lleno de la energía contagiante de Bob Esponja, este espejo divertido hará que tu rutina de belleza sea mucho más DIVERTIDA. 
Con un diseño vibrante inspirado en tu esponja favorita, es el accesorio perfecto para ver cómo te queda el look, ya sea para un día de aventuras en Fondo de Bikini o para lucir tu última creación de belleza. 

Características:

Ligero
Compacto
Lleno de Personalidad 
Este espejo te sacará una sonrisa cada vez que lo uses. ¿Entonces, estás listo para reflejar tu mejor versión? 

Tip: ¡Lleva el Espejo I'm Ready contigo a todas partes y agrega un toque divertido a tu rutina de belleza! Perfecto para retocar tu look en cualquier momento. `,
                tag: null,
                tonos: null,
            },
            {
                id: 15,
                nombre: "Bratz X Beauty Creations - Espejo De Mano - Lookin' Good",
                categoria: "Bratz",
                imagenes: [
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/Mirror_Collection_Bratz.jpg?v=1757109131&width=700",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/espejo-bratz-1.jpg?v=1757109131&width=700"
                     ],
                descripcion: `¡Para estar siempre luciendo increíble, necesitas este espejo de mano de Bratz X Beauty Creations!

Con un diseño único inspirado en las Bratz, este espejo es perfecto para retocar tu maquillaje y asegurarte de que siempre te veas increíble.

¡No podrás resistir a su encanto!`,
                tag: null,
                tonos: null,
            },
            {
                id: 16,
                nombre: "My Little Pony X Beauty Creations - Espejo De Mano - Sky's the Limit",
                categoria: "My Little Pony",
                imagenes: [
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-mx-beauty-creations-x-my-little-pony-skys-the-limit-handheld-mirror-mlp-hm-902266.jpg?v=1723537000&width=700",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-mx-beauty-creations-x-my-little-pony-skys-the-limit-handheld-mirror-mlp-hm-592583.jpg?v=1723545338&width=700",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-mx-beauty-creations-x-my-little-pony-skys-the-limit-handheld-mirror-mlp-hm-336001.jpg?v=1723545365&width=700",
                    "https://beautycreationscosmetics.com.mx/cdn/shop/files/beauty-creations-mx-beauty-creations-x-my-little-pony-skys-the-limit-handheld-mirror-mlp-hm-220054.jpg?v=1723545381&width=700"
                     ],
                descripcion: `Descubre la magia del cielo con el nuevo espejo de mano "Sky's the Limit" de Beauty Creations x My Little Pony. Con un estilo inspirado en el arcoíris y las estrellas, este espejo es el accesorio perfecto para una experiencia de belleza llena de fantasía.

¡Deja que la magia del cielo y el brillo de My Little Pony iluminen tu rutina de belleza con cada vistazo en tu nuevo espejo "Sky's the Limit"!`,
                tag: null,
                tonos: null,
            },
            {
                id: 17,
                nombre: `Candy Land x Beauty Creations Sugar High Shadow Palette & 4-Piece Brush Set`,
                categoria: "Candy Land",
                imagenes: [
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/SHADOW_BRUSHES.jpg?v=1761608531&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/SUGAR-HIGH.jpg?v=1761608531&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/BEAUTYCREATIONSRESTOFSHADES_ARM_LIP_EYEMACROS0318.jpg?v=1762457782&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/SUGARHIGHARMUS.jpg?v=1762464560&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/SUGARHIGHUS.png?v=1762464560&width=600"
                     ],
                descripcion: `Experimenta una explosión de color con el set de sombras y pinceles Sugar High, inspirado en el fantástico mundo de Candyland. Esta paleta de ensueño de 9 tonos incluye pasteles fáciles de usar en acabados mate y brillantes. Desde suaves rosas algodón de azúcar hasta brillantes verdes menta, estos dulces tonos son perfectos para añadir un toque de color alegre a cualquier look.

¿Qué hay dentro?
Paleta de sombras
Juego de 4 pinceles para ojos
La paleta incluye 9 tonos de sombra:
Princesa Lolly → amarillo mantequilla mate
Jolly Gumdrop → lavanda mate
¡Bubblegum Pop! → rosa chicle mate
Frostine → azul hielo brillante con reflejos verde azulado
Candy Coated → brillo jaspeado rosa, azul y blanco que se combinan en un lila helado
Manzana Ácida → brillo verde-amarillo con destellos dorados
King Kandy → melocotón suave mate
Choco-Wish → marrón suave mate
Cookie Crunch → marrón cacao mate
El juego incluye 4 pinceles:
1 Pincel definidor plano
1 brocha aplicadora
1 brocha grande de precisión puntiaguda
1 brocha grande para difuminar
Por qué te encantará:
Completo con 4 pinceles esenciales para ojos diseñados para mezclar, sombrear y aplicar pigmento, este set tiene todo lo que necesitas para crear infinitos looks llamativos. `,
                tag: "nuevo",
                tonos: null,
            },
            {
                id: 18,
                nombre: `Candy Land x Beauty Creations Triple Treat Lip Balm Set`,
                categoria: "Candy Land",
                imagenes: [
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/LIPBALMS.jpg?v=1761591706&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/TRIPLE-TREAT-BOX.jpg?v=1762476272&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/TRIPLE-TREAT-OPEN-CAP.jpg?v=1762476272&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/SOSOURUS.png?v=1762476272&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/BERRYJOLLYUS.png?v=1762476272&width=600"
                     ],
                descripcion: `¡Prepárate para una experiencia labial deliciosa y divertida con el Set de Bálsamos Labiales Triple Treat! Inspirado en el querido universo Candyland™, cada bálsamo presenta tres capas de color inspirado en los dulces y está enriquecido con una mezcla nutritiva de ingredientes que hidratan, suavizan y añaden un toque de diversión a tus labios con cada aplicación. 

El juego incluye:
¡Tan ácido! → Con aroma a manzana ácida
Berry Jolly → Con aroma a bayas dulces
Características principales:
Vitamina E
Aceite de semilla de jojoba
Manteca de karité
Niacinamida
Aceite de semilla de espuma de la pradera
Cica
SIN CRUELDAD

Por qué te encantará:
¡El set de labios hidratante perfecto para ti! Disfruta de esta fórmula de lujo a un precio accesible.`,
                tag: null,
                tonos: null,
            },
            {
                id: 19,
                nombre: `Candy Land x Beauty Creations Sweet Swirl Cream and Powder Blush & Brush Set`,
                categoria: "Candy Land",
                imagenes: [
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/BLUSH_BRUSH.jpg?v=1762457782&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/CANDYLAND-SWEET-SWIRL.jpg?v=1761608125&width=600",
                    ""
                     ],
                descripcion: `Atrévete con este dúo de rubores inspirado en Candy Land, que incluye nuestro bálsamo-rubor estrella, Stay Blushin' Cute, y nuestro icónico Blush Hush. El bálsamo-rubor en crema se funde con la piel para un brillo radiante y húmedo, mientras que el polvo proporciona un acabado suave y aerografiado. Contiene ingredientes que cuidan la piel, como manteca de karité, aceite de camelia y vitamina E, para mantener tus mejillas frescas y nutridas

¿Qué contiene?
Rubor en crema Royally Sweet
Rosa de tono medio con subtono frío
Infundido con aceite de Camellia Japonica y vitamina E
Fórmula multiusos para labios y mejillas.
Ligero
Difumina los poros y la textura
Acabado natural
Rubor en polvo rosa Bon Bon
Rosa de tono medio con subtono cálido
Polvos suaves y sedosos
Acabado mate
Altamente pigmentado
Brocha para colorete de doble cara
Perfecto para mezclar diferentes fórmulas de rubor.
VEGANO Y CRUELTY FREE

Por qué te encantará:
Viene con un pincel para rubor de doble cara: el extremo denso es perfecto para mezclar la crema, mientras que el extremo esponjoso aplica el polvo como un sueño.`,
                tag: "nuevo",
                tonos: null,
            },
            {
                id: 20,
                nombre: `Candy Land x Beauty Creations Sweet Tooth Wooden Lip Liner Set (6PC)`,
                categoria: "Candy Land",
                imagenes: [
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/LIP_LINERS.jpg?v=1761608281&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/SWEETTOOTH.jpg?v=1761608281&width=600",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/SWEETTOOTHUS.jpg?v=1762476045&width=600"
                     ],
                descripcion: `Inspirado en el colorido mundo de Candy Land, este set de 6 delineadores de labios de madera presenta nuestros tonos más vendidos y favoritos de los fans en una colección deliciosamente dulce. Cada lápiz cremoso y de alta pigmentación se desliza sin esfuerzo para definir, dar forma y realzar tus labios con un color duradero que se mantiene intacto, sin manchas, sin decoloración, solo una definición deliciosamente precisa

Tonos:
Toffee Bites → Marrón medio con subtonos rojos
Nice and Toasty → Marrón medio con subtonos dorados
Agítalo como gelatina → Rosa malva
Truffle Maker → Rosa con subtono amarillo
Me conquistaste con un Espresso → Marrón cacao intenso
Ur Cherry Sweet → Rojo azulado brillante
Características principales:
Larga duración
Difuminable
Suave-mate
VEGANO Y CRUELTY FREE

Por qué te encantará:
Ahora en un empaque de edición limitada de Candy Land, dile sí a la dulce vida con nuestros lápices labiales de madera más vendidos en tonos marrones tostados y rojos y rosas frutales, ¡todo en un solo juego!`,
                tag: null,
                tonos: null,
            },
        ];

  const productosInicio = [
            {
                id: 't1',
                nombre: "Feeling Envy 24 PC Brush Set - Beauty Creations",
                categoria: "Accesorios",
                imagenes: [
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/feeling_envy_grey.png?v=1773076284&width=1100",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/SAGE.jpg?v=1773075282&width=1100",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/BCFEB1134.jpg?v=1773075282&width=1100"
                ],
                descripcion: `¡Te encantará! ¡Nuestros sets de brochas son una maravilla! Ahora en un elegante tono verde frío, este set de 24 brochas incluye todo lo que necesitas para aplicar, difuminar y perfeccionar tu maquillaje con facilidad. Nuestras brochas son ultrasuaves, delicadas con tu piel y duraderas, ¡para que te duren toda la vida! Y con su estuche a juego, podrás llevar tu set de brochas contigo a donde quieras.

Detalles del juego de 24 pinceles:

Cabello sintético
Mango de madera
Casquillo de aluminio
 El conjunto incluye:

#1 - BROCHA FACIAL DE LUJO

#2 - POLVO DE GRAN CÓNICO 

#3 - BASE DE MAQUILLAJE DE LUJO

#4 - BROCHA PARA COLORETE

#5 - CONTORNO DE LUJO

#6 - BROCHA ILUMINADORA DE LUJO

#7 - BROCHA PARA POLVO CÓNICA

#8 - CONTORNO DE CREMA DE LUJO

#9 - CORRECTOR GRANDE

#10 - MINI BROCHA PARA CORRECTOR

#11 - LICUADORA DE LUJO PUNTA

#12 - MEZCLA CON FORMA DE CÚPULA

#13 - DIFUMINADOR DE DETALLE PUNTA

#14 - BATIDORA PEQUEÑA PUNTA

#15 - PINCEL GRANDE PARA SOMBRAS

#16 - PINCEL PEQUEÑO PARA SOMBRAS

#17 - BROCHA GRANDE PARA MEZCLAR

#18 - BROCHA PARA MEZCLAR ESPONJOSA

#19 - DIFUMINADO DE PLIEGUES

#20 - MINI MEZCLA

#21- MEZCLA PLANA MNI

#22 - DIFUMINADO CON LÁPIZ

#23 - PINCELES PLANOS

#24 - PINCELES DOBLES ANGULARES `,
                tag: "Nuevo",
                tonos: null
            },
            {
                id: 't2',
                nombre: "Teddy Cosmetic Vanity Bag - Beauty Creations",
                categoria: "Accesorios",
                imagenes: [
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/NIGHTMARE_BEFORE_XMAS0625.jpg?v=1767483589&width=1100",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/NIGHTMARE_BEFORE_XMAS0622.jpg?v=1758149280&width=1100"
                ],
                descripcion: `Fluffy, cute, and handy! Upgrade your cosmetic vanity bag with The Teddy 🐻

Makeup bag with multiple compartments and a durable, easy-to-clean material, it keeps your cosmetics neatly arranged and protected.

Dimensions: 21 X 12 X 13 CM `,
                tag: null,
                tonos: [
                    { nombre: "PINK", hex: "#ffbfcb" },
                    { nombre: "BLACK", hex: "#000000" }
                ]
            },
            {
                id: 't3',
                nombre: "Rosy McMichael x Beauty Creations Rosy's Essentials Vol. 1",
                categoria: "Colaboraciones",
                imagenes: [
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/COLLECTION1-RESIZE_16c1ad29-8012-4152-ac46-60aebf3bf4c2.jpg?v=1763443598&width=500",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/PhotoNov162025_13432PM_b676f574-5418-48e9-88f1-53d2cbe8ccbf.jpg?v=1763663770&width=500",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/PALETTE_ef115e70-b745-48d8-a335-596f9eed0ae0.jpg?v=1763442167&width=500",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/ARMSWTCHGRAPHICSROSYMCSHADOWENGLISH.jpg?v=1763442167&width=500"
                ],
                descripcion: `Beauty Creations y Rosy McMichael se han unido una vez más para traer de vuelta uno de los productos favoritos de sus fans, con un toque especial. Presentamos Rosy's Essentials Volume 1 (Mini Edición): Rosy ha elegido sus 12 tonos favoritos de la paleta original para traerlos de vuelta en un formato compacto, práctico y lleno de amor.`,
                tag: "PR BOX",
                tonos: null,
            },
            {
                id: 't4',
                nombre: "Tinte líquido en gel Kiss Me",
                categoria: "Labios",
                imagenes: [
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/56661.jpg?v=1773687599&width=1000",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/BETTER-IN-PINK-S.jpg?v=1773687434&width=1100",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/MAGENTA-MOVES.jpg?v=1773687434&width=1100",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/ARMSWATCHES-KISSME_93446286-b453-404e-ac91-30059206d049.jpg?v=1773687434&width=1000",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/MAGENTA-MOVES.jpg?v=1773687434&width=1100",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/TENDER-ROSE.jpg?v=1773687434&width=1100",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/WINE-O-CLOCK.jpg?v=1773687434&width=1100",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/CORALLY-HOT.jpg?v=1773687434&width=1100",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/BARELY-BROWN.jpg?v=1773687434&width=1100",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/RED-CRUSH.jpg?v=1773687434&width=1100",
                    "https://www.beautycreationscosmetics.com/cdn/shop/files/TERRACOTTA-TEASE.jpg?v=1773687434&width=1100"
                ],
                descripcion: `Beauty Creations y Rosy McMichael se han unido una vez más para traer de vuelta uno de los productos favoritos de sus fans, con un toque especial. Presentamos Rosy's Essentials Volume 1 (Mini Edición): Rosy ha elegido sus 12 tonos favoritos de la paleta original para traerlos de vuelta en un formato compacto, práctico y lleno de amor.`,
                tag: "Nuevo",
                tonos: [
                    { nombre: "Mejor en Rosa", hex: "#e3447a" },
                    { nombre: "Magenta se mueve", hex: "#ee025b" },
                     { nombre: "Rosa tierno", hex: "#c94b58" },
                    { nombre: "Hora del vino", hex: "#c1345d" },
                     { nombre: "Corally Hot", hex: "#fa1b40" },
                    { nombre: "Marron claro", hex: "#b14340" },
                    { nombre: "Aplastamiento Rojo", hex: "#9e042a" },
                    { nombre: "Terracota Burlón", hex: "#e15f3c" }
                ]
            },

        ];

  const productosCatalogo = [
            { id: 1, name: 'Velvet Lipstick', category: 'labios', price: 125, img: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=600' },
            { id: 2, name: 'Glow Palette', category: 'rostro', price: 250, img: 'https://images.unsplash.com/photo-1596462502278-27bfdd403ea6?q=80&w=600' },
            { id: 3, name: 'Skin Serum', category: 'rostro', price: 255, img: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=600' },
            { id: 4, name: 'Set de Brochas', category: 'rostro', price: 180, img: 'https://images.unsplash.com/photo-1522335208411-974a69ce7c04?q=80&w=600' },
            { id: 5, name: 'Mascara Volume', category: 'ojos', price: 95, img: 'https://images.unsplash.com/photo-1631214500115-598fc2cb8d2d?q=80&w=600' },
            { id: 6, name: 'Eyeliner Gel', category: 'ojos', price: 85, img: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=600' },
            { id: 7, name: 'Lip Gloss Pink', category: 'labios', price: 75, img: 'https://images.unsplash.com/photo-1571781535014-53bd94295ea7?q=80&w=600' },
            { id: 8, name: 'Magic Foundation', category: 'rostro', price: 190, img: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=600' },
        ];

  window.EC_PRODUCTS = {
    rostro: productosRostro,
    ojos: productosOjos,
    labios: productosLabios,
    skincare: productosSkincare,
    cuerpo: productosCuerpo,
    accesorios: productosAccesorios,
    collabs: productosCollabs
  };

  window.EC_TOP_PRODUCTS = productosInicio;
  window.EC_CATALOGO_PRODUCTS = productosCatalogo;

  window.EC_GET_PRODUCTS = function (categoria) {
    if (categoria === 'inicio') return window.EC_TOP_PRODUCTS;
    if (categoria === 'catalogo') return window.EC_CATALOGO_PRODUCTS;
    return window.EC_PRODUCTS[categoria] || [];
  };
})();
