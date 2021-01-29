'use strict';
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
