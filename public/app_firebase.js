'use strict';

//grab a form
const form = document.querySelector('.message');

//grab an input
const firstName = form.querySelector('#fname');
const lastName = form.querySelector('#lname');
const inputEmail = form.querySelector('#emailAdress');
const textInput = form.querySelector('#message');
// let myPromise = new Promise(function (myResolve, myReject) {
//     firebasePush(firstName, lastName, inputEmail, textInput);

//     // some code (try to change x to 5)

//     if (x == 0) {
//         myResolve("OK");
//     } else {
//         myReject("Error");
//     }
// });

//config your firebase push
const firebaseConfig = {
    apiKey: "AIzaSyASipZeu25I08rx6ww7jZEuqhPI5uEVdKI",
    authDomain: "h2oatvub.firebaseapp.com",
    databaseURL: "https://h2oatvub-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "h2oatvub",
    storageBucket: "h2oatvub.appspot.com",
    messagingSenderId: "727393891574",
    appId: "1:727393891574:web:63175fa132dad43950a8d7",
    measurementId: "G-4B4K45ZR7G"
};

//Display loading effect
function displayLoading() {


    switch (submit.getAttribute("value")) {
        case "Send":
            submit.setAttribute("value", "Sending..");
            submit.style.backgroundColor = "#003399";
            break;
        case "Versturen":
            submit.setAttribute("value", "Versturing..");
            submit.style.backgroundColor = "#003399";
            break;
        case "Envoyer":
            submit.setAttribute("value", "Chargement..");
            submit.style.backgroundColor = "#003399";
            break;
    }
}
function displaySent() {


    switch (submit.getAttribute("value")) {
        case "Sending..":
            submit.setAttribute("value", "Well received!");
            submit.style.backgroundColor = "green";
            break;
        case "Versturing..":
            submit.setAttribute("value", "Goed ontvangen!");
            submit.style.backgroundColor = "green";
            break;
        case "Chargement..":
            submit.setAttribute("value", "Bien reçu !");
            submit.style.backgroundColor = "green";
            break;
    }
    setTimeout(functie = () => {
        switch (submit.getAttribute("value")) {
            case "Well received!":
                submit.setAttribute("value", "Send");
                submit.style.backgroundColor = "#FF6600";
                break;
            case "Goed ontvangen!":
                submit.setAttribute("value", "Versturen");
                submit.style.backgroundColor = "#FF6600";
                break;
            case "Bien reçu !":
                submit.setAttribute("value", "Envoyer");
                submit.style.backgroundColor = "#FF6600";
                break;
        }
    }, 5000);
    $('.message')[0].reset();
}

//create a functions to push
function firebasePush(input1, input2, input3, input4) {


    //prevents from braking
    if (!firebase.apps.length) {
        firebase.initializeApp(config);
    }

    //push itself
    var mailsRef = firebase.database().ref('entries').push().set(
        {
            first_name: input1.value,
            last_name: input2.value,
            mail: input3.value,
            text: input4.value
        },

    );

}

//push on form submit
if (form) {
    form.addEventListener('submit', function (evt) {
        evt.preventDefault();

        //displayLoading();
        firebasePush(firstName, lastName, inputEmail, textInput)
        //.then(response => displaySent())
        //.catch(error => console.error('Error!', error.message));
        console.log(mailsRef)
        //shows alert if everything went well.
        return alert('Your message is received.');
    })
}

