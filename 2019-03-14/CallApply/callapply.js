// let getResult = function () {
//     sp.innerText = sel.value;
// }

function getResult() {
    let res = [];
    [].forEach.call(sel.options, (opt)=>{
    if (opt.selected)res.push(opt.value);
});
sp.innerText = res.toString();
}