"use strict";

const collapHeader = document.querySelectorAll(".js-collapsable");
const collapBox = document.querySelectorAll(".collapsable__box");
const collapArrow = document.querySelectorAll(".js-collapsable-arrow");

for (let index = 0; index < collapHeader.length; index++) {
  collapHeader[index].addEventListener("click", handleCollap);
}

function handleCollap(event) {
  const clickedHeader = event.currentTarget;
  const clickedCollap = clickedHeader.parentNode;
  const collapSection = document.querySelectorAll(".collapsable");
  for (let index = 0; index < collapSection.length; index++) {
    if (clickedCollap === collapSection[index]) {
      collapBox[index].classList.toggle("js-collapsable-close");
    } else {
      collapBox[index].classList.add("js-collapsable-close");
    }
  }
  for (let index = 0; index < collapArrow.length; index++) {
    if (clickedCollap === collapSection[index]) {
      collapArrow[index].classList.toggle("js-collapsable-arrow");
    } else {
      collapBox[index].classList.add("js-collapsable-arrow");
    }
  }
}
