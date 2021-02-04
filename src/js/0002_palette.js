"use strict";

const paletteElements = document.querySelectorAll(".js-palette");
const cardElement = document.querySelector(".js-card");
const nameColorEl = document.querySelector(".js-card");
let color1 = document.querySelector(".color-1");
let color2 = document.querySelector(".color-2");
let color3 = document.querySelector(".color-3");

function handlePalette() {
  cardElement.classList.remove("palette-1", "palette-2", "palette-3");
  let checkedPalette = document.querySelector(".js-palette:checked").value;
  cardElement.classList.add("palette-" + checkedPalette);
}

for (const paletteElement of paletteElements) {
  paletteElement.addEventListener("change", handlePalette);
}
for (let index = 0; index < array.length; index++) {
  const element = array[index];
}
handlePalette();
