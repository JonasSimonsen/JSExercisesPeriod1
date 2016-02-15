/**
 * Created by jonassimonsen on 15/02/2016.
 */
function Animal() {
    this.name = "unknown";
}

// Superclass method
Animal.prototype.setName = function(name){
    this.name = name;
    console.info('Name updated')
};

Animal.prototype.getName = function(){
    return this.name;
};

// Cat - subclass
function Cat(name) {
    Animal.call(this);
    this.name = name;
}

Cat.prototype = Object.create(Animal.prototype); // subclass extends superclass
Cat.prototype.constructor = Cat;
Cat.prototype.bark = function() {
    return 'WOW'
};

var animal = new Animal();
var cat = new Cat ('Daisy');

console.log('Is dog an instance of Cat?', cat instanceof Cat); // true)
console.log('Is dog an instance of Animal?', cat instanceof Animal);// true
cat.getName();
console.log('Cat bark: ' +  cat.bark());