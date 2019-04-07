let arr = [1,3,5,7,9,0,8,6,4,2];

let sum = arr.reduce((prev, item)=>{return prev+item;}, 0);
console.log(sum);

let rarr = [];
for (let i = 0; i<1000; i++)rarr.push(Math.random());
console.log(rarr);

let result = rarr.reduce((prev,item) => {
            return item > 0.5 ? prev+1 : prev;
}, 0);

console.log(result);