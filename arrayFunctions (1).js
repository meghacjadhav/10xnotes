// different functions that Javascript provides

// 1) Iterating on arrays 
// 2) push function

let arr1 = []

arr1.push(5) // [1, 2, 3, 4, 5]
arr1.push(7)
arr1.push(8)
arr1.push(6) 

console.log("New length of array  " + arr1.push(1, 2, 3, 4)) // [5 7 8 6 1 2 3 4]

// console.log(arr1)
// console.log(arr1.length)

// Pop function - deletes the last element of the array And return the deleted element
let poped_element = arr1.pop()
// console.log("poped element ::" + poped_element)

poped_element = arr1.pop()
// console.log("poped element ::" + poped_element)
console.log(arr1)

// shift ,unshift, slice [ 5, 7, 8, 6, 1, 2 ]

// shift
// console.log(arr1.shift())
// console.log(arr1)

// console.log(arr1.shift())
// console.log(arr1)

console.log(arr1.unshift(3))
console.log(arr1)

// push, pop => works at the end of the array
// shift, unshift => Works at starting of the array

let arr2 = []

arr2.push(1)    // [1]
arr2.unshift(2) // [2 1]
arr2.push(3)    // [2 1 3]
arr2.unshift(4) // [4 2 1 3]
arr2.pop()      // [4 2 1]

console.log(arr2) // [4 2 1]

arr1 = [1, 2, 3, 4, 5, 6 ,7]
//          0 1 2 3 4 5 6
// slice.. [1 2 3 4 5 6 7]
// Are these continous sub-arrays
// [1]       - True
// [1 2 3 4] - True
// [2 3 4 6] - No
// [2 4 5 7] - No
// [4 5 6 7] - Yes
console.log(arr1.slice(4))

// [1 2 3]
console.log(arr1.slice(0, 3))
// [2 3 4]
console.log(arr1.slice(1, 4))
// [ 6 7 ]
console.log(arr1.slice(5, 1000))
// [3 2 1]
// console.log(arr1.slice(4)) // Not possible !!
