/* ==========================
   ANNÉE AUTOMATIQUE FOOTER
========================== */

const year = document.getElementById("year");

if(year){
    year.textContent = new Date().getFullYear();
}

/* ==========================
   COMPTEURS ANIMÉS
========================== */

const targets = [
    {id:'cnt1', val:2500, suf:'+'},
    {id:'cnt2', val:800, suf:'+'},
    {id:'cnt3', val:12000, suf:'+'}
];

let animated = false;

function animateCounters(){

    if(animated) return;

    animated = true;

    targets.forEach(item => {

        let current = 0;

        const element = document.getElementById(item.id);

        if(!element) return;

        const step = item.val / 50;

        const timer = setInterval(() => {

            current += step;

            if(current >= item.val){

                current = item.val;

                clearInterval(timer);
            }

            element.textContent =
            Math.round(current).toLocaleString("fr-FR")
            + item.suf;

        },30);

    });

}

window.addEventListener("load", animateCounters);

/* ==========================
   FILTRE FREELANCES
========================== */

function filterFreelances(category, button){

    const cards =
    document.querySelectorAll(".fl-card");

    const buttons =
    document.querySelectorAll(".filter-btn");

    buttons.forEach(btn=>{
        btn.classList.remove("active");
    });

    if(button){
        button.classList.add("active");
    }

    cards.forEach(card=>{

        if(
            category === "tous" ||
            card.dataset.cat === category
        ){
            card.style.display = "block";
        }
        else{
            card.style.display = "none";
        }

    });

}

/* ==========================
   MODE SOMBRE
========================== */

let darkMode = false;

function toggleDark(){

    darkMode = !darkMode;

    if(darkMode){

        document.body.style.background =
        "#111";

        document.body.style.color =
        "#fff";

    }
    else{

        document.body.style.background =
        "#fff";

        document.body.style.color =
        "#000";

    }

}

/* ==========================
   FAQ ACCORDÉON
========================== */

function toggleFaq(index){

    const faqBodies =
    document.querySelectorAll(".faq-body");

    faqBodies.forEach((body,i)=>{

        if(i === index){

            if(
                body.style.display === "block"
            ){
                body.style.display = "none";
            }
            else{
                body.style.display = "block";
            }

        }
        else{
            body.style.display = "none";
        }

    });

}

/* ==========================
   VALIDATION FORMULAIRE
========================== */

function validateForm(){

    let valid = true;

    const email =
    document.getElementById("f-email");

    const message =
    document.getElementById("f-msg");

    const errEmail =
    document.getElementById("err-email");

    const errMsg =
    document.getElementById("err-msg");

    const success =
    document.getElementById("form-success");

    if(email){

        email.classList.remove(
            "error",
            "valid"
        );

    }

    if(message){

        message.classList.remove(
            "error",
            "valid"
        );

    }

    if(errEmail)
        errEmail.style.display="none";

    if(errMsg)
        errMsg.style.display="none";

    if(success)
        success.style.display="none";

    const regex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(email){

        if(
            !regex.test(email.value)
        ){

            email.classList.add("error");

            if(errEmail)
                errEmail.style.display =
                "block";

            valid = false;

        }
        else{

            email.classList.add("valid");

        }

    }

    if(message){

        if(
            message.value.trim().length < 20
        ){

            message.classList.add("error");

            if(errMsg)
                errMsg.style.display =
                "block";

            valid = false;

        }
        else{

            message.classList.add("valid");

        }

    }

    if(valid){

        if(success)
            success.style.display =
            "block";

    }

}

/* ==========================
   NAVIGATION ENTRE PAGES
========================== */

function showPage(pageId){

    const pages =
    document.querySelectorAll(".page");

    pages.forEach(page=>{
        page.classList.remove("active");
    });

    const page =
    document.getElementById(
        "page-" + pageId
    );

    if(page){
        page.classList.add("active");
    }

}

/* ==========================
   MESSAGE CONSOLE
========================== */

console.log(
    "AfriTalent chargé avec succès"
);
// Filtrage JS sans rechargement de page
document.getElementById('filterSelect').addEventListener('change', function() {
  const category = this.value;
  const cards = document.querySelectorAll('.freelance-card');
  
  cards.forEach(card => {
    if (category === 'all' || card.dataset.category === category) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});

 const boutons = document.querySelectorAll(".btn-plan");

boutons.forEach(btn => {

    btn.addEventListener("click", () => {

        alert(`Merci d\'avoir choisi une offre AfriTalent !`);
    });

});