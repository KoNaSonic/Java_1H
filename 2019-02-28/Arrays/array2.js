let arr = ["a", "aa", "aab", "b", "aabb"]

//let found = arr.find((s) => s.length > 2);
//console.log(found);

let found = arr.find((s,i) => s.length < i);
console.log(found);
