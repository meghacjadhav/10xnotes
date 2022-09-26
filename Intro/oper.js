function add (a, b) {
    return a + b;
}

var name = "Ajeet";
function sub (a, b) {
    return a - b;
}
function mult (a, b) {
    return a * b;
}

// module.exports.add = add;
// module.exports.sub = sub;
// module.exports.mult = mult;
// module.exports.name = name;

module.exports = {add, sub, mult, name};