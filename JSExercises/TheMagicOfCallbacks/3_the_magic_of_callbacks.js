/**
 * Created by jonassimonsen on 15/02/2016.
 */
var names = ["Lars", "Jan", "Peter", "Bo", "Frederik"];

//Filter Prototype
Array.prototype.filterArrayLength = function(callback) {
    var newArray = [];
    for(var i = 0; i < this.length; i++) {
        if(callback(this[i]))
            newArray.push(this[i]);
    }
    return newArray;
};

var filterArray = names.filterArrayLength(function(name){
    return name.length <= 3;
});

console.log("Filter Prototype: " + filterArray);


//UpperCase Prototype
Array.prototype.myUpperCase = function(callback) {
    var newArray = [];
    for(var i = 0; i < this.length; i++) {
        newArray.push(this[i].toUpperCase());
    }
    return newArray;
};

var upperCased = names.myUpperCase();
console.log("UpperCase Prototype: " + upperCased);