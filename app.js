const express = require("express");
const faker = require("faker");
var bodyParser = require('body-parser')

const app = express();

app.use(express.static("public"));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.set('views', './views');
app.set('view engine', 'ejs');


const users = [];

for(let i = 0; i< 10; i++){
    users.push({
        id: i, 
        name: faker.name.findName(),
        email: faker.internet.email(),
        image : faker.image.image()
    })
}

console.log(users);

app.get("/", (req, res) => {
    // res.send("Ok");
    res.render("user.ejs", {users});
})


app.get("/form", (req, res) => {
    // res.send("Ok");
    res.render("form.ejs");
})

app.post("/add/user", (req, res) => {
    console.log(req.body);
    users.push({
        name: req.body.name,
        email: req.body.email,
        image:  faker.image.image()
    })
    res.redirect("/");

})

app.listen(5000, () => console.log("Expressb server is up"));