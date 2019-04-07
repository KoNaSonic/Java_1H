let angle =0;

first.addEventListener("click", ()=>{

//    first.classList.toggle("arrow-up");
    angle = (angle + 15)%360;
    first.style.transform = "rotate("+angle+"deg)";

})