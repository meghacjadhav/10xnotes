let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

// Algorithm:
// 1. Read the first number and store it in a variable (say num1)
// 2. Read the second number and store it in a variable (say num2)
// 3. Calculate the sum of num1 and num2 and store it in a variable (say sum)
// 4. Print the sum as output
let num1 = parseInt(readLine()); // "5" vs 5
// console.log(num1);
let num2 = parseInt(readLine());
// console.log(num2);
let sum = num1 + num2;
console.log(sum);