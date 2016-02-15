/**
 * Created by jonassimonsen on 15/02/2016.
 */
var names = ["Lars", "Jan", "Peter", "Bo", "Frederik"];

//Filter Method

function namesOfLength(value) {
    return value.length <= 3;
}

var filtered = names.filter(namesOfLength);
console.log(filtered);


//Map Method
function upperCase(value) {
    return value.toUpperCase();
}

var upperCased = names.map(upperCase);
console.log(upperCased);