"use strict";

const paletteElements = document.querySelectorAll(".js-palette");
const cardElement = document.querySelector(".js-card");
const typoElements = document.querySelector(".js-typo");

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

function updateTypo() {
  cardElement.classList.remove("typo-1", "typo-2", "typo-3");
  const checkedTypo = document.querySelector(".js-typo:checked");
  const checkedTypoValue = checkedTypo.value;
  cardElement.classList.add("typo-" + checkedTypoValue);
  saveInLocalStorage();
}

for (const typoElement of typoElements) {
  typoElement.addEventListener("change", updateTypo);
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
