function Person(name, age, weight, married){
    this.name = name;
    this.age = age;
    this.weight = weight;
    this.married = married;
}

let people = [];

people.push(new Person("Sasha",61,76.4,true));
people.push(new Person("Masha",21,66.2,false));
people.push(new Person("Dasha",33,56.8,true));
people.push(new Person("Glasha",51,58.6,true));
people.push(new Person("Natasha",18,51.0,false));

//people.forEach((p)=> console.log(p));

let tbl = document.createElement("table");
tbl.classList.add("centered");

let row = tbl.insertRow();
for (let key of Object.keys(people[0])){
    let cell = row.insertCell();
    cell.innerText = key;
}

people.forEach((p)=>{
    row = tbl.insertRow();
    for (let key of Object.keys(p)){
        let cell = row.insertCell();
        cell.innerText = p[key];
    }
})

document.body.appendChild(tbl);