/**
 * Created by jonassimonsen on 15/02/2016.
 */
var names = ["Lars", "Jan", "Peter", "Bo", "Frederik"];

//Filter Method
function myFilter(array, callback) {
    for(var i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

newNames = [];
myFilter(names, function(name) {
    if(name.length <= 3)
        newNames.push(name);
});

console.log(newNames);


//Map Method
newUpperCaseList = [];

myFilter(names, function(name) {
    var upperName = name.toUpperCase();
    newUpperCaseList.push(upperName);
});

console.log(newUpperCaseList);