let car = {
    model: "Zhiguli",
    year: 1985,
    engine: 1.3,
    ac: false,
    toString: function(){
        return this.model+"; "+
                this.year+"; "+
                this.engine+"; "+
                (this.ac ? "yes" : "no");
    }
};

car.engine = 4.8;
console.log(car);
console.log(car.engine);
console.log(car.toString());

function Person(name, age, weight, married){
    this.name = name;
    this.age = age;
    this.weight = weight;
    this.married = married;
}

let masha = new Person("Masha",22, 48.7, false);
console.log(masha);

function getMasha(field){
    return masha[field];
}

console.log(getMasha("married"));

console.log(Object.keys(masha));

for(let key of Object.keys(masha))
    console.log(key+": "+masha[key]);