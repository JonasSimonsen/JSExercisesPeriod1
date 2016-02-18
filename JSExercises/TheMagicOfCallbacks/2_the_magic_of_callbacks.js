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
function myMap(array, callback) {
    for(var i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

newUpperCaseList = [];
myMap(names, function(name) {
    var upperName = name.toUpperCase();
    newUpperCaseList.push(upperName);
});

console.log(newUpperCaseList);




//// LARS MAPPED EXAMPLE ////

var numbers = [1,2,3,4,5];

//// USING THE MAP FUUNCTION ////

var numbersMapped = numbers.map(function (number){
    return number * 10;
});

 //// MAKING OUR OWN MAP FUNCTION ////

function myMap(arr,callback){
    var returnArray = [];
    for(var i = 0; i < arr.length; i++) {
        returnArray.push(callback(arr[i]));

        // var temp = callback(arr[i]);
        // retrunArray.push(temp);
    }
    return returnArray;
}
var res2 = myMap(numbers, function (number){
    return number * 10;
});

console.log(numbersMapped);
console.log(res2);
