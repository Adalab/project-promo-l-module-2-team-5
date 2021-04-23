/* eslint-disable quotes */
"use strict";

const paletteElements = document.querySelectorAll(".js-palette");
const cardElement = document.querySelector(".js-card");
const typoElements = document.querySelectorAll(".js-typo");

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
// TYPOS
function updateTypo() {
  cardElement.classList.remove("typography-1", "typography-2", "typography-3");
  const checkedTypo = document.querySelector(".js-typo:checked");
  const checkedTypoValue = checkedTypo.value;
  cardElement.classList.add("typography-" + checkedTypoValue);
  saveInLocalStorage();
}

for (const typoElement of typoElements) {
  typoElement.addEventListener("change", updateTypo);
}
