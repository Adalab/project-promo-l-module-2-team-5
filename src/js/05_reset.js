"use strict";

const resetElement = document.querySelector(".js-reset");
const formReset = document.querySelector(".js-form-reset");
const cardReset = document.querySelector(".js-card-reset");

function handleReset() {
  /* cardReset.classList.remove("js-card-reset"); */
  document.getElementById("js-form-reset").reset();
  localStorage.clear(cardReset);

  /*   inputsTextConfig = [];
  localStorage.removeItem("userData");
  updateAllInputs();
  updatePalette();
  updatePhoto();
  console.log("holi");*/
}
resetElement.addEventListener("click", handleReset);

/* function handleResetDesignValue() {
    const paletteInput1 = document.querySelector(“.js-input1”);
    const palettetoReset = document.querySelector(“.js-palette:checked”);
    palettetoReset.checked = false;
    paletteInput1.checked = true;
  } */
