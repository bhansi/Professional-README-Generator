const fs = require("fs");
const inquirer = require("inquirer");
const gm = require("./utils/generateMarkdown");

const requiredField = (input) => input ? true : "This field is required.";

const licenses = [
    "---None---",
    "Apache License 2.0",
    "GNU General Public License v3.0",
    "MIT License",
    "BSD 2-Clause \"Simplified\" License",
    "BSD 3-Clause \"New\" or \"Revised\" License",
    "Boost Software License 1.0",
    "Creative Commons Zero v1.0 Universal",
    "Eclipse Public License 2.0",
    "GNU Affero General Public License v3.0",
    "GNU General Public License v2.0",
    "GNU Lesser General Public License v2.1",
    "Mozilla Public License 2.0",
    "The Unlicense"
];

const questions = [
    {
        type: "input",
        message: "title:",
        name: "title",
        validate: requiredField
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
        message: "contributing members:",
        name: "contributing"
    },
    {
        type: "input",
        message: "test instructions:",
        name: "testing"
    },
    {
        type: "list",
        message: "license:",
        choices: licenses,
        name: "license"
    },
    {
        type: "input",
        message: "GitHub username:",
        name: "username",
        validate: requiredField
    },
    {
        type: "input",
        message: "email:",
        name: "email",
        validate: requiredField
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    console.log("\nPlease answer each question to fill out the coresponding section in your README file.");
    console.log("If you wish to skip a question, simply press the enter key.\n");

    console.log("Please enter your project...");
    inquirer
        .prompt(questions)
        .then((response) => {
            console.log(gm.generateMarkdown(response));
            fs.writeFile(
                "./output/README.md",
                gm.generateMarkdown(response),
                (error) => error ? console.log("Error writing to file: " + error) : console.log("Successfully generated README.md into output folder.")
            );
        });
}

// Function call to initialize app
init();
