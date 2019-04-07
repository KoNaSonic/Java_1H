let table = document.createElement("table");
table.classList.add("centered");

//table.addEventListener("click", function (e) {
table.addEventListener("mouseover", function (e) {
    let target = e.target;
    if(target.tagName != "TD") return;
    e.target.classList.toggle("r");
//    e.target.parentElement.classList.toggle("r");
})

for (let i=0; i<10; i++){
    let row = table.insertRow();
    for (let j=0; j<10; j++){
      //  let cell = row.insertCell();
      //  cell.addEventListener("click", toggleRed);
        row.insertCell();
    }
}
document.body.appendChild(table);

function toggleRed() {
    this.classList.toggle("r");

}