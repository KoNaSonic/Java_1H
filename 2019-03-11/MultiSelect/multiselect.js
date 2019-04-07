// function  show() {
//     sp.innerText = sel.value;
// }

function show() {
    let res = [];
    // sel.options.forEach((opt)=>{

    //1-st method for take element
    // for (let i=0; i<sel.options.length; i++){
    //     let opt = sel.options[i];
    //     if (opt.selected)res.push(opt.value);
    // };

    //2-nd method for take element
    [].forEach.call(sel.options, (opt)=>{
        if (opt.selected)res.push(opt.value);
    });
    sp.innerText = res.toString();
}