"use strict";

const createBtn = document.querySelector(".js-create-btn");
const cardResultElement = document.querySelector(".js-card-result");
const urlShareElement = document.querySelector(".js-share__link");
const shareContainer = document.querySelector(".js-share__container");

function handleCreateBtn(ev) {
  ev.preventDefault();
  shareContainer.classList.remove("hidden");
  const url = "https://awesome-profile-cards.herokuapp.com/";
  const data = getUserData();
  
  fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then(handleData)
    .then(disableBtn);
  
}
createBtn.addEventListener("click", handleCreateBtn);

function disableBtn() {
  createBtn.disable = true;
}

function handleData(data) {
  if (data.success === true) {
    cardResultElement.innerHTML = data.cardURL;
    cardResultElement.href = data.cardURL;
  } else {
    cardResultElement.innerHTML = data.error;
  }
}