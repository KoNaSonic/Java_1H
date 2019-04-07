const currencies = ["USD", "EUR"];

const xhr = new XMLHttpRequest();


xhr.addEventListener("readystatechange", ()=>{
    if (xhr.readyState !=4) return;
//    console.log(JSON.parse(xhr.response));
    const cuurObj = JSON.parse(xhr.response);
    const base = cuurObj.base;
    const rates = cuurObj.rates;
    rates[base] = 1;

    let tbl = document.createElement("table");
    let row = tbl.insertRow();
    row.insertCell();
    for (let i=0; i<currencies.length; i++){
        let sell = row.insertCell();
        cell.innerText = currencies[i];
    }
    for (let i=0; i<currencies.length; i++){
        let row = tbl.insertRow();
        let sell = row.insertCell();
        cell.innerText = currencies[i];
        for (let j=0; j<currencies.length; j++){
            let sell = row.insertCell();
            cell.innerText =  rates [currencies[i]]/rates [currencies[j]];
        }

    }

})

xhr.open("GET","https://api.exchangeratesapi.io/latest");
xhr.send();