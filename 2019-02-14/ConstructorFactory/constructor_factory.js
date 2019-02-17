function constructorFactory(fields){

    let code = "";
    fields.forEach((f)=> {code = code + "this."+ f +" = "+ f +"; ";});
    return new Function(fields, code);

  /*  let gs = function(fieldName, value){
        if (value != 0 && value !== false && !value) return this[fieldName];
        else this[fieldName] = value;
    }
*/

}

let Car = constructorFactory(["model","year","engine","ac"]);
//console.log(Car.toString());

console.log(new Car("Zhiguli", 1983, 1.3, false));

let Person = constructorFactory(["name","age","weihgt","married"]);

console.log(new Person("Masha", 33, 55, true));

//console.log(Car.gs("model"));