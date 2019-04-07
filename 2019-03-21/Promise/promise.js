let url = 'https://api.exchangeratesapi.io/latest';

getRequest(url)
    .then(
        (res)=> console.log(res),
        (err)=> console.log(err)
    );

let urlp = "https://jsonplaceholder.tyicode.com/post";

/*postRequest(urlp, {})

    .then(
        (res)=> console.log(res));*/