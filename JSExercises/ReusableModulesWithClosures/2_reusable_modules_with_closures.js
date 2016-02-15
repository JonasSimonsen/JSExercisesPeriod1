/**
 * Created by jonassimonsen on 15/02/2016.
 */
var createPerson = function(name,age){
    var person = {name: name, age: age};
    function setAge(value){
        person.age = value;
    }
    function setName(value){
        person.name = value;
    }
    function getInfo(){
        return person.name + " " + person.age;
    }
    return {
        setAge: function(value) {setAge(value);},
        setName: function(value){setName(value);},
        getInfo: function() { return getInfo();}
    }
};

var person = createPerson("Christian", 23);
console.log(person.getInfo());

person.setName("Jonas");
console.log(person.getInfo());