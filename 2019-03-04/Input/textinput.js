inp.addEventListener("keypress", (e)=>{
    if (e.key == "Enter") sp.innerText = inp.value;
})

inp.addEventListener("change", ()=>{
    sp.innerText = int.value;
})

inp.addEventListener("input", ()=>{
    sp.innerText = int.value;
})