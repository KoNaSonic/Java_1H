
function getIJ(i, j) {
    // let index = document.querySelectorAll("table tr");
    let index = document.querySelectorAll("table tr")[i-1]
        .children[j-1]
        .innerText;
    console.log(index);

}