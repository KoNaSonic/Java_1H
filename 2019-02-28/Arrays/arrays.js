let arr0 = [];
let arr00 =[1,2,3,4,5,4,3,2,1];

let arr1 = [];
arr1.push(8,11,13);
arr1.unshift(0);
arr1.unshift(-9);
arr1.unshift(-2);

console.log(arr1);

//delete arr1[3];  //with delete we not working

let arrslice = arr1.slice(3); //--> from 3 index to end of array
console.log(arr1);
console.log(arrslice);

let arrcopy = arr1.slice();//clone array arr1
arrcopy[2] = 22;
console.log(arr1);
console.log(arrcopy);

arr1.splice(2,3,44,55,66,77);//delete from 2 index --> 3 elements --> add 4 element
console.log(arr1);

let arrfirst = [9,8,7];
let arrsecond = [1,2,3];
let arrthird = [4,5,4];
let arrresult = arrfirst.concat(arrsecond,arrthird);
console.log(arrresult);

//split and join in array
let orig = "sasha;62;74.5;true";
let dataObj = orig.split(";");
console.log(dataObj);
console.log(dataObj.join("$"));