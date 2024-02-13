// list of consts for shape generation 
const Square = require("../lib/square.js");
const Circle = require("../lib/circle.js");
const Triangle = require("../lib/triangle.js");

// generate logo function 
function generateLogo(data) {
    let shape = undefined
    if (data.shape === "Square") {
        shape = new Square(data.shape_color, data.text, data.text_color)
    } else if (data.shape === "Circle") {
        shape = new Circle(data.shape_color, data.text, data.text_color)
    } else {
        shape = new Triangle(data.shape_color, data.text, data.text_color)
    }
    return shape.render();
};

module.exports = generateLogo;