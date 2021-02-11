"use strict";

const resetElement = document.querySelector(".js-reset");
const formReset = document.querySelector(".js-inputs-reset"); //hemos cambiado la clase desde el form (que estaba en origen) a una clase de los inputs
/* const smallPhoto = document.querySelector(".js-small-photo");
const bigPhoto = document.querySelector(".js-big-photo"); */
const cardReset = document.querySelector(".js-card-reset");

function handleReset() {
  document.getElementById("js-form-reset").reset();
  localStorage.clear(cardReset);
}

/* function handleReset() {
  handleResetForm();
  handleResetPalPrev();
  handleResetDesignValue();
  saveInLocalStorage();
}

function handleResetForm() {
  for (let i = 0; i < formReset.length; i++) {
    if (formReset[i].value !== "") {
      formReset[i].value = "";
    }
  }
  photo = "";
  updateAllInputs();
}

function handleResetPalPrev() {
  const paletteValue = document.querySelector(".js-palette:checked").value;
  cardReset.classList.remove("palette-" + paletteValue);
}
function handleResetDesignValue() {
  const paletteDefault = document.querySelector(".js-input-default");
  const paletteReset = document.querySelector(".js-palette:checked");
  paletteReset.checked = false;
  paletteDefault.checked = true;
}
function handleResetDesignValue() {
    const paletteInput1 = document.querySelector(“.js-input1”);
    const palettetoReset = document.querySelector(“.js-palette:checked”);
    palettetoReset.checked = false;
    paletteInput1.checked = true;
} */

resetElement.addEventListener("click", handleReset);
