/**
 * Created by jonassimonsen on 15/02/2016.
 */
function handleNumArrays(na1, na2, callback) {
    var sumArray = [];
    for (var i = 0; i < na1.length; i++) {
        sumArray.push(na1[i] + na2[i]);
    }
    callback(sumArray);
}

var a = [1,2,3];
var b = [1,2,3];

handleNumArrays(a, b, function (res) {
    console.log(res.join(','));
});

handleNumArrays(a, b, function (res) {
    var sum = 0;
    res.forEach(function (element) {
        sum += element;
    });
    console.log(sum);
});

handleNumArrays(a, b, function (res) {
    var newArray = [];
    res.forEach(function (element) {
        newArray.push(element * 10);
    });
    console.log(newArray.join(','));
});