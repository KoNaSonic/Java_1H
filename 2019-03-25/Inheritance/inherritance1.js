
function Animal(name, age) {

    this.name = name;
    this.age = age;
}
const  animal = new Animal("Roger", 4);

function Rabbit(earsLenght) {

    this.earsLenght = earsLenght;
    // this.__proto__ = animal;
}
Rabbit.prototype = animal;

const rabbit = new Rabbit(75);
rabbit.__proto__= animal; //nasledovanie ekzempliara
// rabbit.name = "Masha";

// console.log(rabbit.name);
// console.log(animal.name);

function  Cat(name, age, numberOfStripes) {
    this.numberOfStripes = numberOfStripes;
    // this.__proto__ = new Animal(name, age);
}

const cat = new Cat("Barsik", 5, 4);

console.log(cat.name);