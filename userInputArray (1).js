// how do you take input in javascript ??
// Input from file - driver code.
let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// Actualy code.
let inputLine = readLine().split(' ').map(x => parseInt(x)) 

console.log(inputLine) // Single input from the input file

