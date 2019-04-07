
function getRequest(url) {
    return new Promise(function (resolved, rejected) {
        let xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", ()=> {
            if (xhr.readyState != 4) return;
            if (xhr.status != 200) rejected(xhr.response);
            else resolved(xhr.response);
        })
        xhr.open(("GET"), url);
        xhr.send();
    })
}

function  postRequest(url, body) {
    return new Promise(function (resolved, rejected) {
        let xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", ()=> {
            if (xhr.readyState != 4) return;
            if (xhr.status != 200) rejected(xhr.response);
            else resolved(xhr.response);
        })
        xhr.open(("POST"), url);
        xhr.send(body);
    })
}