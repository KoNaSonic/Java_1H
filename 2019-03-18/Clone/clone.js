
let big = document.querySelector(".big");
console.log(big);

// let clone = big.cloneNode();
 let clone = big.cloneNode(true);
document.body.appendChild(clone);

