'use strict';

const twitterElement = document.querySelector(".js-twitter-btn");
const twitterLinkElement = document.querySelector(".js-twitter-link");

function handleTwitterShare(data) {
    twitterLinkElement.href = `https://twitter.com/intent/tweet?text=Aquí%20tienes%20mi%20nueva%20tarjeta%20${linkUrl}`;
}
twitterElement.addEventListener("click", handleTwitterShare);