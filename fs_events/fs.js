// working with files 
const fs = require("fs");
const path = require("path");
const os = require("os");

// Reading a file

// fs.readFile("C:\\Users\\AjKumar\\Desktop\\Nodejs\\Intro\\main.js", "utf-8", (err, data) => {
//     if(err)
//         console.log("File not found");
//     else
//         console.log(data);
// })
// const data = fs.readFileSync("main.js", "utf-8");
// console.log(data);
// writing to a file

// fs.writeFile("output.txt", (err) => {
//     console.log(err);
// })


// fs.writeFile("output.txt", "This is the first file we are creating fdshfvhdvfh ", (err) => {
//     console.log(err);
// })
// updating or appending some content to the file

// fs.appendFile("output2.txt", "\nI am adding a new line to the file", (err)=>{
//     if(err)
//         console.log(err)
//     else 
//         console.log("file write mis completed ")
// })
// delete a file , rename a file etc

// fs.unlink("output2.txt", (err) => {
//     console.log(err);
// })

// fs.rename("file.txt", "file-renamed.txt", (err) => {
//     console.log(err);
// })

// copying a file into different directory
// fs.readFile("main.js", (err, data) => {
//     fs.writeFile(path.join(__dirname, "newfolder", "out.js"), data, (err) =>{
//         console.log(err);
//     })
// })

// C:/folder/file
// C:\folder\file