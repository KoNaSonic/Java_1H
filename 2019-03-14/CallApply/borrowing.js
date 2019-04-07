function  Person(fName, lName) {
    this.fNane = fName;
    this.lName = lName;
    this.fullName = function (title) {
        return title+". "+this.fNane+" "+this.lName+" ";
    }
}

let p = new Person("Sarah", "Rabinovich");

console.log((p.fullName("Mrs")));

function  Employee(fName, lName) {
    this.fNane = fName;
    this.lName = lName;
}

let e = new Employee("David", "Rabinovich");

console.log(p.fullName.call(e, "Mr"));