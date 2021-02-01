'use strict';

const collapHeader = document.querySelectorAll('.js-collapsable');
const collapBox = document.querySelectorAll('.collapsable__box');


function handleCollap (event) {

  for(let index = 0; index < collapHeader.length; index++) {
    collapBox[index].classList.toggle('js-collapsable-close');
    console.log(event.target);
  }
}

for(let index = 0; index < collapHeader.length; index++) {
  collapHeader[index].addEventListener('click', handleCollap);
}


handleCollap(); 



