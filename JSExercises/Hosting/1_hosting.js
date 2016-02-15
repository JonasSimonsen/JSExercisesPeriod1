/**
 * Created by jonassimonsen on 15/02/2016.
 */
//Declaration is hoisted

x = 5; // Assign 5 to x
console.log(x);
var x; // Declare x

//JavaScript only hoists declarations, not initializations.

console.log(y);
var y = 5;

// Outputs: "Yes!"
isItHoisted();

function isItHoisted() {
    console.log("Yes!");
}