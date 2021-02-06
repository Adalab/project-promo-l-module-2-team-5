"use strict";

const paletteElements = document.querySelectorAll(".js-palette");
const cardElement = document.querySelector(".js-card");

function updatePalette() {
  cardElement.classList.remove("palette-1", "palette-2", "palette-3");
  const checkedPalette = document.querySelector(".js-palette:checked");
  const checkedPaletteValue = checkedPalette.value;
  cardElement.classList.add("palette-" + checkedPaletteValue);
  saveInLocalStorage();
}

for (const paletteElement of paletteElements) {
  paletteElement.addEventListener("change", updatePalette);
}

// ESTO DE ABAJO ES LO QUE TENÍAMOS ANTERIORMENTE
/* handlePalette(); */

/* const paletteElements = document.querySelectorAll(".js-palette");
const cardElement = document.querySelector(".js-card");

function handlePalette() {
  cardElement.classList.remove("palette-1", "palette-2", "palette-3");
  const checkedPalette = document.querySelector(".js-palette:checked");
  const checkedPaletteValue = checkedPalette.value;
  cardElement.classList.add("palette-" + checkedPaletteValue);
  saveInLocalStorage();
}

for (const paletteElement of paletteElements) {
  paletteElement.addEventListener("change", handlePalette);
}
handlePalette();
 */
