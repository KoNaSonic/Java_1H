function Person(name, age, weight, married){

    this.name = name;
    this.age = age;
    this.weight = weight;
    this.married = married;

    this.gs = function(fieldName, value){
        if (value != 0 && value !== false && !value) return this[fieldName];
        else this[fieldName] = value;
    }
}

let p = new Person("Sasha", 61, 75.8, true);

console.log(p.gs("weight"));

p.gs("married", false);
//p.gs("married", true);
//p.gs();
console.log(p);