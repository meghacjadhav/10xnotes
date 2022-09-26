const express = require("express") 
const bodyParser = require("body-parser") 
const cors = require("cors")


const app = express() 

app.use( bodyParser.json() )
app.use( cors() )


const PORT = 8080 

app.listen(PORT , () => {
     console.log(`App is listening on ${PORT}`)
})

const students = []  // hold the students dat 
const professors = [] // hold the professors data 
// apis 

app.get("/" , (req,resp) => { 
    console.log("Browser requested") 
    resp.send({ message: "dnfsjkngkfdngjkdjn"}) 
})

app.get("/allstudents" , (req,resp) => {
    resp.send(students) 
})
app.get("/allprofessors" , (req,resp) => {
    resp.send(professors) 
})











app.post("/addstudent" , (req,resp) => {
     // req.body 
     console.log(req.body) 
     students.push(req.body) 
     resp.send({status: "success" , data: req.body })
})


app.post("/somedata" , (req,resp) => {
     console.log(req.body) 
     resp.send({ message: "Receved data" , status: "Success" })
})














app.post("/addprofessor" , (req,resp) => {
    // req.body 
    professors.push(req.body) 
    resp.send({status: "success" , data: req.body })
})
