'use strict';

const collapDesignHeader = document.querySelector('.collapsable__content--close');
const collapDesignIcon = document.querySelector('.collapsable__content');

function handleCollapDesign () {
  collapDesignIcon.classList.toggle('collapsable--close');
}

collapDesignHeader.addEventListener('click' , handleCollapDesign );