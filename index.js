// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input

const questions = [
    {
        type: "input",
        message: "title:",
        name: "title",
        validate: (input) => input ? true : "Project title is required."
    },
    {
        type: "input",
        message: "description:",
        name: "description"
    },
    {
        type: "input",
        message: "installation instructions:",
        name: "installation"
    },
    {
        type: "input",
        message: "usage information:",
        name: "usage"
    },
    {
        type: "input",
        message: "contribution guidelines:",
        name: "contribution"
    },
    {
        type: "input",
        message: "test instructions:",
        name: "test"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    console.log("\nPlease answer each question to fill out the coresponding section in your README file.");
    console.log("If you wish to skip a question, simply press the enter key.\n");
    console.log("Enter your project...");
    inquirer.prompt(questions).then((response) => console.log(response.title));
}

// Function call to initialize app
init();
