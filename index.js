//  index.js contains our const arrays, this main index.js serves as the main data page for all user inputs from which data is gathered and can be relayed.

const inquirer = require('inquirer');
const fs = require('fs');
const generatelogo = require('./utilities/GenerateLogo');

const questions = [
    // enter a desired shape to be generated
    {
        type: "list",
        message: "please choose a desired shape for your SVG",
        name: "shape",
        choices: [ "Square", "Circle", "Triangle"],
    },
    // enter a desired color keyword or "hex" code
    {
        type: "input",
        message: "please choose a desired shape color to be generated",
        name: "shape_color",

    },
    // enter a set of 3 desired characters
    {
        type: "input",
        message: "please enter 3 desired characters to be generated to your logo",
        name: "text",
    },
    // enter a desired color for your generated logo
    {
        type:"input",
        message: "please enter a desired color for your generated text characters",
        name: "text_color",
    },
];

// write to file function based off user prompt inputs
// will generate a "logo.svg"
function writetoFile(fileName, data) {
    var contents = generatelogo(data);
    fs.writeFile(fileName, contents, function(error){
        // fail safe error function
        if (error) {
            return console.log(error);
        }
        console.log('your logo.svg has been generated');
    });
}

// function to initialize application
function init() {
    inquirer.prompt(questions).then(function (data) {
        var fileName = 'logo.svg';
        writetoFile(fileName, data);
    });
}

// call initialize app
init();

// open 'logo.svg' file in browser to see generated logo
