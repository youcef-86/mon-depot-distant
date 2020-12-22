
var jeune = 0;
var moyens = 0;
var vieux = 0;
var personnes;

do
{
    personnes = window.prompt("Entrez votre âge");
    if (personnes <= 20)
    {
        console.log("jeune");
        jeune++;
    }
   
    else if (personnes > 20 && personnes <= 40)
    {
        console.log("moyens");
        moyens++;
    }
    
    else if (personnes > 40 && personnes <= 100)
    {
        console.log("vieux");
        vieux++;
    }
    else if(personnes > 100)
    {
    vieux++;
    break
    }
 
} while(personnes);


 


