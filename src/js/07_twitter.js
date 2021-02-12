"use strict";

// API request function
function sendRequest(json) {
    fetch(`https://awesome-profile-cards.herokuapp.com/card`, {
        method: "POST",
        body: JSON.stringify(linkData),
        headers: {
            "content-type": "application/json",
        },
    })
        .then(function (resp) {
            return resp.json();
        })
        .then(function (result) {
            showURL(result);
        });
}

// Set URL function
function showURL(result) {
    // Link
    const cardLink = document.querySelector(".js-share__link");
    // Twitter
    const buttonTwitter = document.querySelector(".js-twitter");
    const twitterText = encodeURIComponent(
        "¡He creado mi tarjeta!"
    );
    const twitterHashtag = "Catrinas,Team2,PromoKizzy,Adalab";
    const twitterVia = "&via=yanira_fr,@Chopper_hat,@teresaurio_,@Sus_G1";

    const created = document.querySelector(".js-created");

    if (result.success === true) {
        cardLink.innerHTML = result.cardURL;
        cardLink.href = result.cardURL;
        buttonTwitter.style.display = "unset";
        created.innerHTML = "Tu tarjeta ha sido creada";
        buttonTwitter.href = `https://twitter.com/intent/tweet?text=${twitterText}&url=${result.cardURL}&hashtags=${twitterHashtag}${twitterVia}`;
        buttonTwitter.innerHTML = `<i class="fab fa-twitter"></i> Compartir en twitter</a>`;
    } else if (result.error === undefined) {
        cardLink.innerHTML = `Creando tu link</br><i class="fas fa-spinner"></i>`;
        buttonTwitter.style.display = "none";
        created.innerHTML = " ";
        cardLink.removeAttribute("href");
    } else {
        cardLink.innerHTML = `ERROR: ${result.error}`;
        cardLink.removeAttribute("href");
        buttonTwitter.style.display = "none";
        created.innerHTML = " ";
    }
}