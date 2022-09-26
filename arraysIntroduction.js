// Arrays

// CRUD Operations of Array

// C - Create Operation
// Create operation empty array
let arr1 = []
let random_name = []
console.log(arr1)
console.log(random_name)

// Create array with elements initialised
let arr2 = [1, 2, 3, 4, 5, 6] // homogenous array
console.log(arr2)

//                0     1         2
let arr3_hetro = [1, "swargam", true, false, 1.01] // hetrogenous array
console.log(arr3_hetro)

// Add elements to an array
let arr5 = [1, 2, 3]
arr5[3] = 4
console.log(arr5) // [1, 2, 3, 4]
console.log(arr5.length) // 4

// [a b c d e f gh] - length of the array 7
//  0 1 2 3 4 5 6
// arr[6]

// R - Retrieve Operation
// retrieve / access operation
console.log(arr3_hetro[2])
console.log(arr3_hetro[1])

// what will happen for this ??
console.log(arr1[1])

// U - Update operation
//          0    1         2       3      4
let arr4 = [1, "swargam", true, false, 1.01] 
arr4[2] = "10X"
arr4[3] = "siri"
console.log(arr4)

// "=" -> operator 
// 1) =   - Assigment operator 
// 2) ==  - Compares if two values are equal
// 3) === - Compares if two values are equal & if datatype is equals

let x = 10
console.log(10 == '10') // True !!
console.log(10 === '10') // False !!

console.log("--------------------- \n")
console.log(true == 1) // True
console.log(false == 1) // false
console.log(true === 1) // false
console.log(1.01 == 1) // false

console.log("--------------------- \n")
console.log(false == 0) // True
console.log(undefined == 0) // True

