"use strict";

function getUserData() {
  return {
    photo: photo,
    typo: document.querySelector(".js-typo:checked").value,
    palette: parseInt(document.querySelector(".js-palette:checked").value),
    name: document.querySelector(".js-input-name").value,
    job: document.querySelector(".js-input-job").value,
    email: document.querySelector(".js-input-email").value,
    phone: document.querySelector(".js-input-phone").value,
    linkedin: document.querySelector(".js-input-linkedin").value,
    github: document.querySelector(".js-input-github").value,
  };
}

function saveInLocalStorage() {
  const userData = getUserData();
  const userDataInString = JSON.stringify(userData);
  localStorage.setItem("userData", userDataInString);
}

function getFromLocalStorage() {
  const userDataInString = localStorage.getItem("userData");

  if (userDataInString !== null) {
    const userData = JSON.parse(userDataInString);
    document.querySelector(".js-input-name").value = userData.name;
    document.querySelector(".js-input-job").value = userData.job;
    document.querySelector(".js-input-email").value = userData.email;
    document.querySelector(".js-input-phone").value = userData.phone;
    document.querySelector(".js-input-linkedin").value = userData.linkedin;
    document.querySelector(".js-input-github").value = userData.github;
    photo = userData.photo;

    const paletteElements = document.querySelectorAll(".js-palette");
    for (const paletteElement of paletteElements) {
      if (paletteElement.value === userData.palette) {
        paletteElement.checked = true;
      }
    }
    //TYPOS
    const typoElements = document.querySelectorAll(".js-typo");
    for (const typoElement of typoElements) {
      if (typoElement.value === userData.typo) {
        typoElement.checked = true;
      }
    }
    updateAllInputs();
    updatePalette();
    updatePhoto();
    updateTypo();
  }
}
