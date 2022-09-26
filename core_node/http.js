const http = require("http");
const querystring = require("querystring");

const server = http.createServer((req, res) => {

    // console.log(req.url.split("?")[1]);

    // console.log(querystring.parse(req.url.split("?")[1]));
    const data = querystring.parse(req.url.split("?")[1]);

    // if(req.url == "/home"){
    //     res.end("I am in home page");
    // }else if(req.url == "/aboutus")  {
    //     res.end("I am in about in about us page");
    // }else {
    //     res.end("I dont knwo where I am ");
    // }

    res.end(JSON.stringify({
        status : "Ok",
        user : {
            name : data.name,
            age :data.age
        }

    }));
})


server.listen(3000, () => console.log("Server is up at 3000"));

