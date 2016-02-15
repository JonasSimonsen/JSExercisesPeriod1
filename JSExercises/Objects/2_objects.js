/**
 * Created by jonassimonsen on 15/02/2016.
 */
function person(first, last, age){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.getDetails = function(){
        return"" + this.firstName + " " + this.lastName + " " + this.age;
    };
}

var user = new person("Jonas","Simonsen",23);

console.log(user.getDetails());