const EventEmitter = require("events");

const event = new EventEmitter();

event.on("sayHello", (name, message) => {
    console.log(`Hello ${name} ${message}`);
})

event.on("sayHello", (name, message) => {
    console.log(`Hello ${name} ${message}`);
})

event.on("sayHello", (name, message, whate) => {
    console.log(`Hello ${name} ${message} and whatever is ${whate}`);
})

event.emit("sayHello", "Ajeet" , "fsdfd ghregh rehg hr gvfd !!", "d ewhf gwe ft");

