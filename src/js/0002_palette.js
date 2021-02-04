"use strict";

const paletteElements = document.querySelectorAll(".js-palette");
const cardElement = document.querySelector(".js-card");
/* 
for (const paletteElement of paletteElements) {
  paletteElement.addEventListener("change", handlePalette);
}

function handlePalette(event) {
  cardElement.classList.remove("palette-1", "palette-2", "palette-3");
  let checkedPalette = document.querySelector(".js-palette:checked").value;
  cardElement.classList.add("palette-" + checkedPalette);
} */
function handlePalette() {
  // borro las clases palette-1, palette-2 y palette-3 del js-card
  cardElement.classList.remove("palette-1", "palette-2", "palette-3");
  // añado palette-x a js-card en función de la paleta seleccionada
  const checkedPalette = document.querySelector(".js-palette:checked");
  const checkedPaletteValue = checkedPalette.value;
  cardElement.classList.add("palette-" + checkedPaletteValue);
}

for (const paletteElement of paletteElements) {
  paletteElement.addEventListener("change", handlePalette);
}
handlePalette();

/*   const clickedPalette = event.currentTarget;
  const clickedInput = clickedPalette.parentNode; 
  let color1 = document.querySelector(".color-1");
let color2 = document.querySelector(".color-2");
let color3 = document.querySelector(".color-3");
const nameColorEl = document.querySelector(".js-card");
*/
