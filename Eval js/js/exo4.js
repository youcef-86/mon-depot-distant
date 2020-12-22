//prix unitaire
var PU;
//quantité commandée
var QTECOM;
//prix à payer
var PAP;
//remise
var REM;
//port
var PORT;

            //saisie prix unitaire
function prixunitaire ()
{
    PU = prompt("saisir le prix unitaire ");
}prixunitaire ();

            //saisie quantité commandée
function quantitécommandée()
{
    QTECOM = prompt("saisir la quantité commandée");
}quantitécommandée()

function prixapayer()
{
    TOT = PU * QTECOM

    if (TOT >= 100 && TOT <= 200)
    {
        
        REM = 0.95 * TOT;
        PORT = REM * 0.02;
        PORTMAX = Math.max(PORT, 6);
        PAP = PORTMAX + REM;
        console.log("remise  5% soit "+(Math.round((REM) * 100) / 100)+" et frais port 2% soit + "+(Math.round((PORT) * 100) / 100)+" €; à payer : "+(Math.round((REM) * 100) / 100)+" + "+(Math.round((PORTMAX) * 100) / 100)+ " = " +Math.round((PAP) * 100) / 100+" €. ");
    }
    else if (TOT > 200 && TOT<500)
    {
        REM = 0.90 * TOT;
        PORT = REM * 0.02;
        PORTMAX = Math.max(PORT, 6);
        PAP = PORTMAX + REM;
        console.log("remise  10% soit "+(Math.round((REM) * 100) / 100)+" et frais port 2% soit + "+(Math.round((PORT) * 100) / 100)+" €; à payer : "+(Math.round((REM) * 100) / 100)+" + "+(Math.round((PORTMAX) * 100) / 100)+ " = " +Math.round((PAP) * 100) / 100+" €. ");
    }

     // tot inferieur  100
    else if (TOT < 100)
     {
         PORT = TOT * 0.02;
         PORTMAX = Math.max(PORT, 6);
         PAP = PORTMAX + TOT;
         console.log("remise 0, frais de port 2% soit + " +(Math.round((PORT) * 100) / 100)+ " € donc le minimum de 6 € s'applique; à payer : "+(Math.round((TOT) * 100) / 100)+" + "+(Math.round((PORTMAX) * 100) / 100)+ " = " +Math.round((PAP) * 100) / 100+ " €. " );
     }
    
    
    else if (TOT >= 500)
    {
        REM = TOT*0.90;
        //si rem supérieur a 500 frais gratuit
        if (REM >= 500)
        {
            PORT = 0;
            PAP = REM + PORT;
            VALTOT = REM-TOT;
            console.log(" remise 10% ("+(Math.round((VALTOT) * 100) / 100)+"€) soit "+(Math.round((REM) * 100) / 100)+"€ et frais port = 0; à payer : "+(Math.round((PAP) * 100) / 100)+" €");
          
        }
    //     si rem inférieur à 500 paie fdp
        else
            {
                PORT = REM * 0.02;
                PORTMAX = Math.max(PORT, 6);
                PAP = REM + PORTMAX;
                VALTOT = TOT - REM;
                console.log(Math.round((PAP) * 10) / 10);
                console.log("remise 10% ("+(Math.round((VALTOT) * 100)/100)+"€) soit " + (Math.round((REM) * 100) / 100)+" et frais port 2% (de "+(Math.round((REM) * 10) / 10)+ " €) soit +"+(Math.round((PORTMAX) * 100) / 100) + " € ; à payer : "+(Math.round((REM) * 100) / 100)+ "+"+(Math.round((PORTMAX) * 100) / 100)+ " = "+Math.round((PAP) * 100) / 100+" €. ");

            }
    }
    
 
}
prixapayer();

