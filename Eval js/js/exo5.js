document.getElementById("Inscription").addEventListener("submit", function(e) {

var erreur;
 var nom = document.getElementById("nom");
var prénom = document.getElementById("prénom");
var genre = document.getElementsByName("genre");
var Naissance = document.getElementById("Naissance");
var postal = document.getElementById("postal");
var email = document.getElementById("email");
var question = document.getElementById("question");



                      //*******************  nom  *****************************
var error_nom = document.getElementById("error_nom");
var filtre_nom = new RegExp("^[a-zA-Z]+$");

console.log("nom :" + nom.value);
var resultat = filtre_nom.test( nom.value);
console.log(resultat);

if (nom.value==""){

    error_nom.innerHTML="Veuillez renseigner votre nom !!!!" .fontcolor("red"); 
    e.preventDefault();
}
else{
    if (resultat ==false) {
        error_nom.innerHTML="format incorrect" .fontcolor("red"); 
        e.preventDefault();
    }
    else{

    error_nom.innerHTML="";
    }
}

           //******************************************* prénom*****************************************

var error_prénom = document.getElementById("error_prénom");
var filtre_prénom = new RegExp("^[a-zA-Z]+$");

console.log("prénom :" + prénom.value);
var resultat = filtre_prénom.test(prénom.value);
console.log(resultat);

if (prénom.value==""){

    error_prénom.innerHTML="Veuillez renseigner votre prénom !!!!" .fontcolor("red"); 
    e.preventDefault();
}
else{
    if (resultat ==false) {
        error_prénom.innerHTML="format incorrect" .fontcolor("red"); 
        e.preventDefault();
    }
    else{

    error_prénom.innerHTML="";
    }
}

          //***************************** sexe ****************************
var error_genre = document.getElementById("error_genre");
v=genre.checked;
console.log("genre"+genre)
console.log(v+"v")
if (v==false){
    error_genre.innerHTML="Veuillez selectionner une case !!!!" .fontcolor("red"); 
            e.preventDefault();
}


// var error_genre = document.getElementById("error_genre");
// console.log("genre :" + genre.checked);
// console.log();
// (resultat== genre)
// if (genre={ 
// }
// else{ (genre.checked==false)

//         error_genre.innerHTML="Veuillez selectionner une case !!!!" .fontcolor("red"); 
//         e.preventDefault();
// }

          //****************************** date de naissance ***********************

var error_Naissance = document.getElementById("error_Naissance");
var filtre_Naissance = new RegExp("^([0-9][0-9][0-9][0-9])\-([0-9][0-9]?)\-([0-9][0-9]?)$");
          
console.log("Naissance :" + Naissance.value);
var resultat = filtre_Naissance.test(Naissance.value);
console.log(resultat);
          
if (Naissance.value==""){
          
    error_Naissance.innerHTML="Veuillez renseigner votre Date de Naissance !!!!" .fontcolor("red"); 
    e.preventDefault();
}
else{
    if (resultat == false) {
        error_Naissance.innerHTML="format incorrect" .fontcolor("red"); 
        e.preventDefault();
    }
    else{
          
    error_Naissance.innerHTML="";
    }
}

          //****************************** code postal ******************************
        
var error_postal = document.getElementById("error_postal");
var filtre_postal = new RegExp("^([0-9]{5})$");

console.log("postal :" + postal.value);
var resultat = filtre_postal.test(postal.value);
console.log(resultat);


if (postal.value==""){

    error_postal.innerHTML="Veuillez renseigner votre code postal !!!!" .fontcolor("red"); 
    e.preventDefault();
}
else{
    if (resultat ==false) {
        error_postal.innerHTML="Veuillez saisir 5 chiffres" .fontcolor("red"); 
        e.preventDefault();
    }
    else{

    error_postal.innerHTML="";
    }
}

                    //********************* adresse *******************************
                    //********************* ville *********************************

                    //********************* email ********************************

var error_email = document.getElementById("error_email");
var filtre_email = new RegExp("^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,4}$");

console.log("email :" + email.value);
var resultat = filtre_email.test(email.value);
console.log(resultat);


if (email.value==""){

    error_email.innerHTML="Veuillez renseigner votre email !!!!" .fontcolor("red"); 
    e.preventDefault();
}
else{
    if (resultat ==false) {
        error_email.innerHTML="Email incorrect" .fontcolor("red"); 
        e.preventDefault();
    }
    else{

    error_email.innerHTML="";
    }
}

             //************************* votre question ******************************

var error_question = document.getElementById("error_question");
var filtre_question = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");

console.log("question :" + question.value);
var resultat = filtre_question.test(question.value);
console.log(resultat);

if (question.value==""){

    error_question.innerHTML="Veuillez poser votre question svp !!!!" .fontcolor("red"); 
    e.preventDefault();
    
}


//*******************************confirmation d'envoie*******************

var error_formulaire = document.getElementById("error_formulaire");
console.log("formulaire :" + formulaire.checked);
console.log(resultat);

if (formulaire.checked==""){

    error_formulaire.innerHTML="Veuillez poser votre question svp !!!!" .fontcolor("red"); 
    e.preventDefault();
    
}

});















