function TableMultiplication()
{
    var a = window.prompt("Saisir le multiple")
    for (n=1; n<=10; n++)
    {
        resultat= a *n;
        document.write(a+ "*" +n+ "=" +a*n+"<br/>")
        console.log(a+" * " +n+ " = "+resultat);
    }
}
    TableMultiplication();
