"use strict";

const createBtn = document.querySelector(".js-create-btn");
const cardResultElement = document.querySelector(".js-card-result");
const urlShareElement = document.querySelector(".js-share__link");
const shareContainer = document.querySelector(".js-share__container");
const createBtnContainer = document.querySelector(".js-createbtn-container");

function handleCreateBtn(ev) {
  ev.preventDefault();
  console.log("Mis datos", getUserData());

  const url = "https://profileawesome.herokuapp.com/card";
  const data = getUserData();

  fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Server response:", data);
      if (data.success === true) {
        cardResultElement.innerHTML = data.cardURL;
        urlShareElement.innerHTML = data.cardURL;
        shareContainer.classList.remove("hidden");
        createBtnContainer.classList.remove("collapsable__share");
        createBtnContainer.classList.add("collapsable__share--clicked")
        createBtn.disable = true;
      } else {
        cardResultElement.innerHTML = data.error;
        urlShareElement.innerHTML = "ERROR. No se ha podido crear la tarjeta";
      }
    });
}

createBtn.addEventListener("click", handleCreateBtn);
