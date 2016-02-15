/**
 * Created by jonassimonsen on 15/02/2016.
 */
/** Purpose IIMF
 Immidiately invoked function expression lig med Module Pattern
 er et mønster til at få en funktion til at kalde sig selv
 Immediately-invoked function expressions can be used to avoid variable
 hoisting from within blocks, protect against polluting the global environment
 and simultaneously allow public access to methods while retaining privacy for
 variables defined within the function.

 A lack of block scope means that variables defined inside, for example, a for
 loop will have their definition "hoisted" to the top of the enclosing function.
 denne kodestump kalder sig selv fordi der er paranteser rundt om og der er sat
 dobbelte paranteser i enden...() det er en anonym selvkaldende funktion
 de to paranteser der omslutter den anonyme funktion ændrer den anonyme funktion til
 et funktions udtryk/function expression eller variable expression
 de variabler der ligger i funktionen kan ikke tilgås udefra **/

//med iife
(function () {
    var x = "Hello!!";      // I will invoke myself
    console.log(x);
})();
//uden iimf
//funktionen kalder sig selv med navnet Jonas og dermed sættes greeting lig med Jonas
var greeting = function (name) {
    console.log('First Hello ' + name);
    return name;
}('Jonas');

console.log(greeting);

//med iife
//her bliver greeting sat til Hello og kalder sig selv med from IIFe son name
(function (name) {
    var greeting = 'Hello ';
    console.log(greeting + name);
}("from IIFE"));
