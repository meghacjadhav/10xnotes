// CRUD operations

//      0  1 2   3  4
arr1 = [1, 2, 3, 4, 5]
len_arr1 = arr1.length // 5

// How do you iterate an array ?
// - For
// - while

// Using for loop to loop through the array
for (let i = 0; i < len_arr1; i++) {
    // console.log(arr1[i])
}
// console.log("\n") // Add a new line

// Using while loop to loop through the array
// [1, 2, 3, 4, 5] 0 1 2 3 4 5
let i = 0
while(i < arr1.length) {
    // console.log(arr1[i])
    // console.log("arr1[" + i + "]")
    i++
}

// Is there a other way ?? for-each => for - of
//  0   1  2  3  4
// [1, 2, 3, 4, 5]
let loop_number = 0
for (let z of arr1) {
    console.log("loop number :: " + loop_number)
    loop_number++
    console.log(z)
}


//  for / while - we defined i - index of the array
// for - of  - Did we define index ??