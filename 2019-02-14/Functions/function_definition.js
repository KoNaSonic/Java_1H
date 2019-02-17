/*console.log(sum(3,5));

function sum(a,b){
    return a + b;
}

console.log(sum(33,55));
console.log(sum)*/

let mul = function(a,b){return a*b;}

console.log(mul(3,5));

function addOne(a, b=1){return a + b;}
console.log(addOne(7,10));

let operation = "-";

// 100500 lines of code

let code = "return a"+operation+"b;";

let s = new Function(["a","b"], code);

console.log(s(4,7));



