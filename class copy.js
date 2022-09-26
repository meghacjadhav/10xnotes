// class Rectangle {
//     #height = 5;
//     #width = 10;

//     constructor(height, width) {
//         this.#height = height;
//         this.#width = width;
//     }

//     get height() {
//         return this.#height;
//     }

//     get width() {
//         return this.#width;
//     }
// }

// // 
// let rec1 = new Rectangle(8, 16);

// console.log(rec1.height);
// console.log(rec1.width);

class Animal {
    displayName = 'Animal'

    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    constructor(name, legs) {
        super(name);
        // do something
        this.legs = legs;
    }

    speak() {
        super.displayName;
        super.speak();
        console.log(`${this.name} barks.`);
    }

    legsCount() {
        console.log(`Number of legs ${this.legs}`);
    }
}

// let animal = new Animal('Lion');
let dog = new Dog('Dog', 4);

// animal.speak();
dog.speak();
dog.legsCount();


// Base class, Parent class, super class

// Derived class, child class, extended class


class GermanS extends Dog {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
}

let gS = new GermanS('Dog', 'GermanS');


class MyDate extends Date {
    getFormattedDate() {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return this.getDate() + '-' + months[this.getMonth()] + '-' + this.getFullYear();
    }
}

let date = new MyDate();
console.log(date.getFormattedDate());


// Array, Object, Map, Set, Date, Error, BigInt, String, Boolean, Number, ArrayBuffer

// let calcMixIn = Base => class extends Base {
//     cal();
// }

// class Foo {
//     // fields and functions
// }

// class Bar extends calculatorMixin(calcMixIn(Foo)) { }

// let Rectangle = class {

// }

// let Rectangle2 = class Rectangle2 {

// }

// function add(x, y) {
//     return x() + y;
// }

// function add1() {
//     return 10;
// }

// console.log(add(add1, 3));


// 1. add two numbers

function add(x, y) {
    return x + y;
}

add(10, 20);
add(10, 21);
add(10, 22);
add(10, 23);

// 2. Build a calculator utility in JS

// 1. add, sub, div, mul, per, frac, log

class Calculator {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    add() {
        return this.x + this.y;
    }

    sub() {
        return this.x - this.y;
    }

    mul() {
        return this.x * this.y;
    }

    div() {
        if (this.y !== 0) {
            return this.x / this.y;
        }

        return NaN;
    }
}

let cal = new Calculator(10, 20);

cal.add()
cal.sub()
cal.mul();
cal.div();


let arr1 = new Array();

arr1.
