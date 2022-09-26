const fs = require("fs");
const http = require("http");

const server = http.createServer();
const rstream = fs.createReadStream("index.js", "utf-8");

// server.on("request", (req, res) => {
//     const rstream = fs.createReadStream("indexbghbur.js", "utf-8");

//     // rstream.on("data", (chunkdata) => {
//     //     res.write(chunkdata);
//     // })
//     // rstream.on("end", () => {
//     //     res.end();
//     // })
//     rstream.on("error", () => {
//         res.end("File not found");
//     })

//     rstream.pipe(res);

// })

const wstream = fs.createWriteStream("out.txt", "utf-8");
rstream.on("data", (chunk) => {
    wstream.write(chunk);
})

rstream.on("end", (chunk) => {
    wstream.end();
})
wstream.on("error", () => {
    console.log("error while writing the content");
})

wstream.on("finish", () => {
    console.log("Write is completed");
})
// server.listen(5000, () => console.log("server is up at 5000"));