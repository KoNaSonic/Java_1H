import {Random} from "../../Common/randomlib.js"

let side = 50;
let num = 10;

let squareStyle = {
    position: "absolute",
    width: side+"px",
    height: side+"px"
}

let cont = document.createElement("div");
cont.classList.add("centered");

cont.style.width = num*side+"px";
cont.style.height = num*side+"px";

for (let i=0; i<num; i++){
    let top = i*side+"px";
    for (let j=0; j<num; j++){
        let sq = document.createElement("div");
        Object.assign(sq.style, squareStyle);
        sq.style.left = j*side+"px";
        sq.style.top = top;
        sq.style.backgroundColor = Random.color();

        cont.appendChild(sq);

    }
}

document.body.appendChild(cont);
