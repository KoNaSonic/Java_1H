let tbl = document.createElement("table");

for (let i=1; i<=10; i++){
    let row = tbl.insertRow();
    for (let j=1; j<=10; j++)
       row.insertCell().innerText = i*j;
}

cont.appendChild(tbl);

getIJ(5,7);