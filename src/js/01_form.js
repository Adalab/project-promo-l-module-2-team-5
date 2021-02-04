'use strict';

const inputsTextConfig = [
  {
    inputClass: '.js-input-name',
    cardClass: '.js-card-name',
    defaultValue: 'Nombre apellidos',
    cardPrefix: '',
    cardElementAttribute: 'innerHTML'
  },
  {
    inputClass: '.js-input-job',
    cardClass: '.js-card-job',
    defaultValue: 'Programadora front end',
    cardPrefix: '',
    cardElementAttribute: 'innerHTML'
  },
  {
    inputClass: '.js-input-email',
    cardClass: '.js-card-email',
    defaultValue: '',
    cardPrefix: 'mailto:',
    cardElementAttribute: 'href'
  },
  {
    inputClass: '.js-input-phone',
    cardClass: '.js-card-phone',
    defaultValue: '',
    cardPrefix: '',
    cardElementAttribute: 'href'
  },
  {
    inputClass: '.js-input-linkedin',
    cardClass: '.js-card-linkedin',
    defaultValue: '',
    cardPrefix: 'https://www.linkedin.com/in/',
    cardElementAttribute: 'href'
  },
  {
    inputClass: '.js-input-github',
    cardClass: '.js-card-github',
    defaultValue: '',
    cardPrefix: 'https://www.github.com/',
    cardElementAttribute: 'href'
  }
];

function updateAllinputs() {
  for (const inputTextConfig of inputsTextConfig) {
    console.log('Empiezo la iteración', inputTextConfig);

    const inputElement = document.querySelector(inputTextConfig.inputClass);
    console.log('Elemento del formulario:', inputTextConfig.inputClass, inputElement)
  
    const cardElement = document.querySelector(inputTextConfig.cardClass);
    console.log('Elemento del la tarjeta:', inputTextConfig.cardClass, cardElement);

    let newValue = inputElement.value;

    if (inputTextConfig.cardElementAttribute === 'innerHTML') {
      if (inputElement.value === '') {
        newValue = inputTextConfig.defaultValue;
      } else {
        newValue = inputElement.value;
      }
      console.log('Valor por defecto:', inputTextConfig.defaultValue);
      console.log('Nuevo valor a poner en la tarjeta:', newValue);
      cardElement.innerHTML = newValue;
    }
    else if (inputTextConfig.cardElementAttribute === 'href') {
      if (inputElement.value === '') {
        newValue = '#';
      } else {
        newValue = newValue.replace(inputTextConfig.cardPrefix, '');
        newValue = inputTextConfig.cardPrefix + newValue;
      }
      console.log('Valor del prefijo:', inputTextConfig.cardPrefix);
      console.log('Nuevo valor a poner en la tarjeta:', newValue);
      cardElement.href = newValue;
    }
    console.log('-------------------------------------------------');
    }
    //saveInLocalStorage();
  }
  const inputTextElements = document.querySelectorAll('.js-input-text');
  for (const inputTextElement of inputTextElements) {
    inputTextElement.addEventListener('keyup', updateAllinputs);
  }
  
//Tenemos que añadir updateAllInputs() al final del main para que se ejecute 


/*
//Name

const nameElement = document.querySelector('.js-name');
const nameElementPreview = document.querySelector('.js-name-preview');

function handleName(event) {
  const nameValue = event.target.value;

  if (nameValue === '') {
    nameElementPreview.innerHTML = 'Nombre Apellidos';
  } else {
    nameElementPreview.innerHTML = nameValue;
  }
}
nameElement.addEventListener('keyup', handleName);

//Job
const jobElement = document.querySelector('.js-job');
const jobElementPreview = document.querySelector('.js-job-preview');

function handleJob(event) {
  const jobValue = event.target.value;

  if (jobValue === '') {
    jobElementPreview.innerHTML = 'Front-end developer';
  } else {
    jobElementPreview.innerHTML = jobValue;
  }
}
jobElement.addEventListener('keyup', handleJob);

//Email
const emailElement = document.querySelector('.js-email');
const emailElementPreview = document.querySelector('.js-email-preview');

function handleEmail(event) {
  const emailValue = event.target.value;

  if (emailValue === '') {
    emailElementPreview.href = '#';
  } else {
    emailElementPreview.href = `mailto:${emailValue}`;
  }
}
emailElement.addEventListener('keyup', handleEmail);

//Phone
const phoneElement = document.querySelector('.js-phone');
const phoneElementPreview = document.querySelector('.js-phone-preview');

function handlePhone(event) {
  const phoneValue = event.target.value;

  if (phoneValue === '') {
    phoneElementPreview.href = '';
  } else {
    phoneElementPreview.href = phoneValue;
  }
}
phoneElement.addEventListener('keyup', handlePhone);

//Linkedin
const linkedinElement = document.querySelector('.js-linkedin');
const linkedinElementPreview = document.querySelector('.js-linkedin-preview');

function handleLinkedin(event) {
  const linkedinValue = event.target.value;

  if (linkedinValue === '') {
    linkedinElementPreview.href = '';
  } else {
    linkedinElementPreview.href = linkedinValue;
  }
}
linkedinElement.addEventListener('keyup', handleLinkedin);

//Github
const githubElement = document.querySelector('.js-github');
const githubElementPreview = document.querySelector('.js-github-preview');

function handleGithub(event) {
  const githubValue = event.target.value;

  if (githubValue === '') {
    githubElementPreview.href = '';
  } else {
    githubElementPreview.href = githubValue;
  }
}
githubElement.addEventListener('keyup', handleGithub);
*/