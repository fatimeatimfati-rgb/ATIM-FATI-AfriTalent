main.js
JavaScript
/* FORMULAIRE */
const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

e.preventDefault();

/* RECUPERATION */
let nom = document.getElementById("nom").value.trim();
let prenom = document.getElementById("prenom").value.trim();
let email = document.getElementById("email").value.trim();
let sujet = document.getElementById("sujet").value;
let message = document.getElementById("message").value.trim();

/* RESET ERREURS */
document.getElementById("nomError").textContent="";
document.getElementById("prenomError").textContent="";
document.getElementById("emailError").textContent="";
document.getElementById("sujetError").textContent="";
document.getElementById("messageError").textContent="";

let valid = true;

/* NOM */
if(nom === ""){
document.getElementById("nomError").textContent =
"Le nom est obligatoire";
valid = false;
}

/* PRENOM */
if(prenom === ""){
document.getElementById("prenomError").textContent =
"Le prénom est obligatoire";
valid = false;
}

/* EMAIL */
const regex =
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(email === ""){

document.getElementById("emailError").textContent =
"L'email est obligatoire";

valid = false;

}else if(!regex.test(email)){

document.getElementById("emailError").textContent =
"Email invalide";

valid = false;
}

/* SUJET */
if(sujet === ""){

document.getElementById("sujetError").textContent =
"Choisissez un sujet";

valid = false;
}

/* MESSAGE */
if(message.length < 20){

document.getElementById("messageError").textContent =
"Le message doit contenir au moins 20 caractères";

valid = false;
}

/* SUCCES */
if(valid){

document.getElementById("successMessage").style.display =
"block";

form.reset();
}

});