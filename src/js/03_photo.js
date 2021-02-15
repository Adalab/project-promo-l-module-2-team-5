"use strict";

const fr = new FileReader();
const uploadBtn = document.querySelector(".js__profile-trigger");
const fileField = document.querySelector(".js__profile-upload-btn");
const profileImage = document.querySelector(".js__profile-image");
const profilePreview = document.querySelector(".js__profile-preview");
let photo = "";

/**
 * Recoge el archivo añadido al campo de tipo "file"
 * y lo carga en nuestro objeto FileReader para que
 * lo convierta a algo con lo que podamos trabajar.
 * Añade un listener al FR para que ejecute una función
 * al tener los datos listos
 * @param {evento} e
 */
function getImage(e) {
  const myFile = e.currentTarget.files[0];
  fr.addEventListener("load", writeImage);
  fr.readAsDataURL(myFile);
}

function writeImage() {
  photo = fr.result;
  updatePhoto();
  saveInLocalStorage();
}
function updatePhoto() {
  const currentPhoto =
    photo || "https://media.giphy.com/media/pH7zVFpsSU1mkk7cLV/giphy.gif";
  profilePreview.style.backgroundImage = `url(${currentPhoto})`;
  profileImage.setAttribute("src", currentPhoto);
}

function fakeFileClick() {
  fileField.click();
}
uploadBtn.addEventListener("click", fakeFileClick);
fileField.addEventListener("change", getImage);
