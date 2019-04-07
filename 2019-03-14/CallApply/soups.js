let getResult = function () {
    let radiobuttons = document.getElementsByName("soups");
    // for (let i=0; i < radiobuttons.length; i++){
    //     if (radiobuttons[i].checked){
    //         console.log(radiobuttons[i].value);
    //         break;
    //     }
    // }
    [].forEach.call(radiobuttons , (rb)=>{
        if(rb.checked){sp.innerText = rb.value;}
    })
}