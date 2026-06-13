// Productos Cuerpo - Esmeralda's Cosmetic
// Edita solo este archivo para agregar, quitar o cambiar productos de Cuerpo.
(function () {
  const productosCuerpo = [
         {
              id: 1,
              nombre: "Bratz Forever Shimmerin Hair & Body Shimmer",
              categoria: "Brillos Corporales",
              marca: "Bratz X Beauty Creations",
              precio: "Q 140",
              colaboracion: "True",
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
              nombre: "The Powerpuff x Beauty Creations Girls El Dorado Hair & Body Glitter Spray",
              categoria: "Brillos Corporales",
                marca: "The Powerpuff Girls X Beauty Creations",
                precio: "Q 145",
                colaboracion: "True",
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
         
          
      ];

  if (window.EC_REGISTER_PRODUCTS) {
    window.EC_REGISTER_PRODUCTS('cuerpo', productosCuerpo);
  } else {
    window.EC_PRODUCTS = window.EC_PRODUCTS || {};
    window.EC_PRODUCTS.cuerpo = productosCuerpo;
  };
})();
