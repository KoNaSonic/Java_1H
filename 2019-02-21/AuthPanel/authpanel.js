let authObject = {};
//authObject.classList.add("centered");

function  submit() {
    authObject.log = log.value;
    authObject.psw = psw.value;

    console.log(authObject);
}

function reset() {
    log.value = "";
    psw.value = "";
}

but.addEventListener("keypress", function (e) {

    switch (e.key) {
        case "R":
            sq.style.backgroundColor = "red";
            break;

        case "G":
            sq.style.backgroundColor = "green";
            break;
    }

})
