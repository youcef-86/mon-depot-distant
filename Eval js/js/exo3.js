
var tableau = ["Audrey", "Aurelien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"]; 
console.log(tableau[2]);
console.log(tableau);


var saisi = prompt("saisissez un nom");


console.log(tableau.indexOf(saisi));

var position = tableau.indexOf(saisi);

if( position== (-1)){

    console.log("le prénom n'est pas présent !");
}

else{

    //on supprime du tableau le prénom trouvé
    tableau.splice(position, 1);

    console.log(tableau);
    tableau.push('');
    console.log(tableau);

}










