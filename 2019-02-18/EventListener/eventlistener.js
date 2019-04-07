function toggleRed() {
    document.getElementsByClassName("first")[0].classList.toggle("r");  //first method (use in Angular)
}
function toggleBorder() {
    document.getElementsByClassName("first")[0].classList.toggle("blue-border");
}

//document.getElementsByClassName("first")[0].onclick = toggleBorder;

document.getElementsByClassName("first")[0]  // !!! this method working
    .addEventListener("click", toggleBorder);
