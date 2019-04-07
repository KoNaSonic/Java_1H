console.log("!!!"+sqRed.style.width);

let obj = getComputedStyle(sqRed);
//console.log(obj.width);

console.log(obj.backgroundColor);
console.log(obj.width);


function getHex(clr){
    let hex = parseInt(clr).toString(16);
    return clr < 16 ? clr == 0 ? "00" : "0" + hex : hex;
}

