
function makeSelect(arr, container) {
    let sel = document.createElement("select");
    arr.forEach((a)=>{
        let opt = document.createElement("option");
        opt.innerText = a;
        sel.appendChild(opt);
    })
    container.appendChild(sel);
}

let arr = ["Jerusalem", "Tel-Aviv", "Haifa", "Beer-Sheva", "Eilat"];

makeSelect(arr, document.body);