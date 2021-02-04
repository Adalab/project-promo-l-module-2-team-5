'use strict';
// Los querySelectorAll provocan un array en cada uno de los elementos con la misma clase
const collapHeader = document.querySelectorAll('.js-collapsable');
const collapBox = document.querySelectorAll('.collapsable__box');
const collapArrow = document.querySelectorAll('.js-collapsable-arrow');

// Como se produce un array, necesitamos un bucle para poder buscar en cada array
for (let index = 0; index < collapHeader.length; index++) {
  //Escuchamos donde se ha hecho el click, recorre los arrays para ejecutar la función (handleCollap)
  collapHeader[index].addEventListener('click', handleCollap);
}

//Tras la escucha y el bucle a través de handleCollap se desencadena la función
function handleCollap(event) {
  //Esta constante nos dice, gracias al currentTarget, que todo el header es la parte clickable
  const clickedHeader = event.currentTarget;
  //Esta constante nos busca a los padres (section) de cada hijo (div)
  const clickedCollap = clickedHeader.parentNode;
  //Esta constante trae del HTML los padres (section)
  const collapSection = document.querySelectorAll('.collapsable');
  //Ahora entramos en otro bucle para preguntar quién es el padre del elemento clickado
  for (let index = 0; index < collapSection.length; index++) {
    //Este If comprueba que la llamada del hijo al padre es la section correspondiente
    if (clickedCollap === collapSection[index]) {
      //Cuando collapSection encuentra al collapasable box correspondiente, quita o pone la clase 'js-collapsable-close' (o lo que es igual, display: none)
      collapBox[index].classList.toggle('js-collapsable-close');
      //Este ELSE sirve para que cuando abres una pestaña las otras se cierren
    } else {
      collapBox[index].classList.add('js-collapsable-close');
    }
  }
  for (let index = 0; index < collapArrow.length; index++) {
    if (clickedCollap === collapSection[index]) {
      collapArrow[index].classList.toggle('js-collapsable-arrow');
    } else {
      collapBox[index].classList.add('js-collapsable-arrow');
    }
  }
}
