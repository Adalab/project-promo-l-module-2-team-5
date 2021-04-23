/* eslint-disable quotes */
// eslint-disable-next-line quotes
"use strict";

const createBtn = document.querySelector(".js-create-btn");
// const cardResultElement = document.querySelector(".js-card-result");
const urlShareElement = document.querySelector(".js-share__link");
const shareContainer = document.querySelector(".js-share__container");
const createBtnContainer = document.querySelector(".js-createbtn-container");


let linkUrl = '';

function handleCreateBtn(ev) {
  ev.preventDefault();
  // console.log("Mis datos", getUserData());

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
      //   console.log("Server response:", data);
      if (data.success === true) {
        data.cardURL;
        linkUrl = data.cardURL;
        urlShareElement.innerHTML += `<a href="${linkUrl}" target="_blank">
        ${linkUrl}</a>`;
        shareContainer.classList.remove("hidden");
        createBtnContainer.classList.remove("collapsable__share");
        createBtnContainer.classList.add("collapsable__share--clicked");
        createBtn.disable = true;
      } else {
        urlShareElement.innerHTML = "ERROR. No se ha podido crear la tarjeta";
      }
    });
}

createBtn.addEventListener("click", handleCreateBtn);