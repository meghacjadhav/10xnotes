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

// Find maximum element in the array - minimum element in an array ?
max_value_seen = arr[0] // this will be the maximum value that you see when you are looping

for(let i = 1; i < arr.length; i++) {
    // a[i]
    if ( max_value_seen < arr[i] ) {
        max_value_seen = arr[i]
    }
}

console.log(max_value_seen)

// max_value_seen - Every time in the loop max_value_seen is the maximum element which
//                  you saw until now

// [10 1 3 50 2 122]
// max_value_seen , i, a[i]
// 10 - undefined
// 10 - 1(i) - 1(a[i])  -- [10, 1]
// 10 - 2(i) - 3(a[i])  -- [10, 1, 3]
// 10 - 3(i) - 50(a[i]) -- [10, 1, 3, 50]
   // 50 - 3(i) - 50(a[i])
// 50 - 4(i) - 2(a[i]) -- [10, 1, 3, 50, 2]
// 50 - 5(i) - 122(a[i]) -- [10, 1, 3, 50, 2, 122]
    // 122 - 5(i) - 122(a[i])