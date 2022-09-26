// // // function Pen(name, color, price) {
// // //     this.name = name;
// // //     this.color = color;
// // //     this.price = price;
// // // }

// // // Pen.prototype.showPrice = function() {
// // //     console.log(`Price of ${this.name} is ${this.price}`);
// // // }

// // // Pen.prototype.showColor = function() {
// // //     console.log(`Color of ${this.name} is ${this.color}`);
// // // }

// // // let pen1 = new Pen('Luxor', 'White', 50);

// // // pen1.showPrice();

// // // let pen2 = new Pen('Pilot', 'Blue', 40);

// // // pen2.showPrice();
// // // pen2.showColor();

// // class Pen {
// //     constructor(name, color, price) {
// //         this.name = name;
// //         this.color = color;
// //         this.price = price;
// //     }

// //     showPrice() {
// //         console.log(`Price of ${this.name} is ${this.price}`);
// //     }

// //     showColor() {
// //         console.log(`Color of ${this.name} is ${this.color}`);
// //     }
// // }

// // let pen1 = new Pen('Luxor', 'White', 50);

// // // pen1.showPrice();

// // let pen2 = new Pen('Pilot', 'Blue', 40);

// // // pen2.showPrice();
// // // pen2.showColor();

// // // console.log(pen1.name);

// // let pen3 = pen1;

// // // pen1.price = 100;

// // // pen1.showPrice();
// // // pen3.showPrice();

// // let pen4 = new Pen('Luxor', 'White', 50);

// // console.log(pen1);
// // console.log(pen4);
// // console.log(pen1 === pen4);
// // console.log(pen1 === pen3);

// // console.log(2 === '2');
// // console.log(typeof 2);
// // console.log(typeof '2');


// // // function printName(name, surName) {
// // //     console.log("My name is " + name + " " + surName);
// // //     console.log(`My name is ${name} ${surName}`);
// // // }


// // // printName('Rajeev', 'Sharma');

// // // printName('Ashok', 'Jain');




// // class Print {
// //     log (name) {
// //         console.log(name);
// //     }
// // }

// // let p = new Print();

// // p.log('Hello');











// // // function Pen(name, color, price) {
// // //     this.name = name;
// // //     this.color = color;
// // //     this.price = price;
// // // }

// // // const pen1 = new Pen("Marker", "Blue", "$3");
// // // console.log(pen1);

// // // Pen.prototype.showPrice = function(){
// // //     console.log(`Price of ${this.name} is ${this.price}`);
// // // }

// // // pen1.showPrice();



// // // 1.  Class is used as a template for declaring and 
// // //     creating the objects.

// // //     An object is an instance of a class.

// // // 2	When a class is created, no memory is allocated.

// // //     Objects are allocated memory space whenever they are created.

// // // 3	The class has to be declared only once.

// // //     An object is created many times as per requirement.

// // // 4	A class cannot be manipulated as they are not
// // //     available in the memory.

// // //     Objects can be manipulated.

// // // 5	A class is a logical entity.
// // //     An object is a physical entity.

// // // 6	It is declared with the class keyword

// // //     It is created with the new keywords in JavaScript.

// // // 7	Class does not contain any values which 
// // //     can be associated with the field.
    
// // //     Each object has its own values, which are
// // //     associated with it.

// // // 8	A class is used to bind data as well as methods together as a single unit.
// // //     Objects are like a variable of the class


// // let arr = new Array(10);

// // console.log(arr);



// class Rectangle {
//     constructor(h, w) {
//         this.height = h;
//         this.width = w;
//     }

//     area() {
//         console.log(`Area of rectangle is ${this.height * this.width}`);
//     }
// }

// let rec1 = new Rectangle(10, 20);

// rec1.area(); // 200

// let rec2 = new Rectangle(5, 10);

// rec2.area(); // 50


// class Greet {
//     constructor() {}

//     sayHello() {
//         console.log('Hello');
//     }
// }

// let g1 = new Greet();
// g1.sayHello();



// class Point {
//     constructor(x, y, z) {
//         this.x = x;
//         this.y = y;
//         this.z = z;

//         console.log('Inside constructor');

//         this.print();
//     }

//     print() {
//         console.log('Outside constructor');
//     }
// }

// let p1 = new Point(1, 2);
// let p2 = new Point(1, 2, 3);
// let p3 = new Point();

// console.log(p1.x); // 1
// console.log(p1.y); // 2
// console.log(p1.z); // undefined

// console.log(p2.x); // 1
// console.log(p2.y); // 2
// console.log(p2.z); // 3

// console.log(p3.x); // undefined
// console.log(p3.y); // undefined
// console.log(p3.z); // undefined


// class Point2 {
//     x;
//     y;

//     // constructor() { }

//     init(x, y) {
//         this.x = x;
//         this.y = y;
//     }

//     initX(x) {
//         this.x = x;
//     }

//     initY(y) {
//         this.y = y;
//     }
// }

// let p = new Point2();

// console.log(p.x); // undefined
// console.log(p.y); // undefined

// p.initX(1);

// console.log(p.x); // 1
// console.log(p.y); // undefined


// static


// class Point {
//     static displayName = 'Point In 2D Plane';

//     constructor(posX, posY) {
//         this.x = posX;
//         this.y = posY;
//     }

//     print() {
//         console.log(Point.displayName);
//         console.log(`Position of point is ${this.x}, ${this.y}`);
//     }

//     static printName() {
//         console.log(Point.displayName);
//     }
// }

// let p = new Point(1, 1);
// let p_ = new Point(2, 2);

// p.print();
// p_.print();

// Point.printName();

// // p.printName()

// class Rectangle {
//     h;
//     w;

//     constructor(height, width, name = 'Rec') {
//         this.h = height;
//         this.w = width;
//         this.name = name;
//     }

//     get area() {
//         console.log(`Area of the rectangle is ${this.h * this.w}`);
//     }
// }

// let rec = new Rectangle(10, 20);

// // console.log(rec.name)

// // rec.area

// let rec2 = new Rectangle(5, 10, 'Rec2');
// console.log(rec2.name);


class Point {
    #x = 3;
    #y = 5;

    get x() {
        console.log(`Here getting value of x as ${this.#x}`);
        return this.#x;
    }

    // set x(val) {
    //     console.log(`Here setting value of x = ${val}`);
    //     this.#x = val;
    // }

    get y() {
        console.log(`Here getting value of y as ${this.#y}`);
        return this.#y;
    }

    set y(val) {
        console.log(`Here setting value of y = ${val}`);
        this.#y = val;
    }
}

let p = new Point();

p.x = 1; //
p.y = 2;

console.log(p.x);
console.log(p.y);

