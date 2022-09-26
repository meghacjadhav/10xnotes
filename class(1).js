class Address {
    constructor(street, city, state, pinCode, country) {
        this.street = street;
        this.city = city;
        this.state = state;
        this.pinCode = pinCode;
        this.country = country;
    }
}

const OrderStatus = {
    SHIPPED: "SHIPPED",
    PENDING: "PENDING"
}

class Account {
    #password;
    shippingAddress;
    creditCards;
    bankAccounts;

    constructor(userName, password, name, email, phone) {
        this.userName = userName;
        this.#password = password;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    addProduct() {
        // TODO:
    }

    addProductReview() {
        // TODO:
    }

    resetPassword(currentPassword, newPassword) {
        // TODO:

        if (this.#password === currentPassword) {
            this.#password = newPassword;
        }
    }
}

class Customer {
    constructor(cart, order) {
        this.cart = cart;
        this.order = order;
    }

    getShippingCart() {

    }

    addItemToCart() {

    }

    removeItemFromCart() {

    }
}

class Guest extends Customer {
    registerAccount() {

    }
}

class Member extends Customer {
    constructor(account) {
        this.account = account;
    }

    placeOrder() {

    }
}

class ProductCategory {
    name;
    description;

    constructor(name, description) {
        this.name = name;
        this.description = description;
    }
}

class Product {
    name;
    description;
    price;
    category;
    seller;
    stock;

    updatePrice() {

    }
}

// Every product belongs to some product category
// One product category can have many products [One-to-many]

class ProductReview {
    constructor(rating, review, reviewer, product) {
        this.rating = rating;
        this.review = review;
        this.reviewer = reviewer; // its a member
        this.product = product;
    }
}

class Item {
    constructor(product, quantity, price) {

    }

    updateQuantity() {

    }
}

let item1 = new Item(prod1, 2, 100);
let item2 = new Item(prod2, 1, 1000);

class ShoppingCart {
    items = [];

    constructor(items) {
        this.items = items;
    }

    addItem() {

    }

    updateQuantity() {

    }

    removeItem() {

    }

    checkout() {

    }
}

let cart = new ShoppingCart([item1, item2]);

class Order {
    constructor(dateTime, orderStatus) {

    }

    makePayment() {

    }
}

class Shipment {
    constructor(dateTime, estimatedArrival, corier) {

    }
}

const NotificationType = {
    PUSH: "PUSH",
    EMAIL: "EMAIL",
    SMS: "SMS"
}

class Notification {
    constructor(content, type) {
        this.content = content;
        this.type = type; // NotificationType
    }
}


class Greet {
    sayHello() {
        console.log("Hello");
    }
}


let g = new Greet();