'use strict';

const paletteElements = document.querySelectorAll('.js-palette');
const cardElement = document.querySelector('.js-card');

function handlePalette() {
  cardElement.classList.remove('palette-1', 'palette-2', 'palette-3');
  let checkedPalette = document.querySelector ('.js-palette:checked').value;
  cardElement.classList.add('palette-' + checkedPalette);
}

for (const paletteElement of paletteElements) {
  paletteElement.addEventListener('change', handlePalette);
}
handlePalette();