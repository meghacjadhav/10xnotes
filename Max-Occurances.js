// Given a sorted list of n non negative integers. 
// Find the integer which is occurring the maximum number of times. 
// If no such number exists, please print -1. 
// If there are multiple numbers with the same maximum occurrence count. 
// Print all of them in ascending order.

// 1 2 3 4 5 6 7 8 ?
// 9 8 7 6 5 4 ? - Des
// [1 2 2 2 3 3 3 3 3] - 3

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
let arr = readLine().split(' ').map(x => parseInt(x)) 

let element_max_occur = 0
let max_occr = 0

// [1 2 | 2 2 3 3 3 3 3]
// [0 1   2 3 4 5 6 7 8]

// i, arr[i], temp, curr_occr - j
// 1,  2,   2, 3  - 
let curr_occr = 0
for (let i=0; i < arr.length; i = i + curr_occr) { // [1 2 2 2 3 3 3 3 3] i = 0
    let temp = arr[i]  // 1
    curr_occr = 1
    for (let j = i + 1; j< arr.length; j++) { 
        if (temp == arr[j]) { 
            curr_occr++
        } else {
            break
        }
    }
    console.log("element :: " + temp + " occured :: " + curr_occr)
    if (max_occr < curr_occr) {
        element_max_occur = temp
        max_occr = curr_occr
    }
}

console.log("Max occur element :: " + element_max_occur + " occured :: " + max_occr)

// Inner for loop is trying to count the occurances of elemented selected
// Outer for loop is ulitmate running on unique elements of the array.

// element :: 1 occured :: 1
// element :: 2 occured :: 3
// element :: 3 occured :: 5