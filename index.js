var inquirer = require("inquirer");
var fs = require("fs");
var path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
    {
        type: "input",
        name: 'githubProfile',
        message: 'Enter your github username: '
    },
    {
        type: "input",
        name: 'githubEmail',
        message: 'Enter your github e-mail: '
    },
    {
        type: "input",
        name: "title",
        message: "Enter the title for your new project: "
    },
    {
        type: "input",
        name: 'description',
        message: 'Enter the project description: '
    },
    {
        type: "input",
        name: 'installation',
        message: 'Enter the command to install the dependencies: '
    },
    {
        type: "input",
        name: 'usage',
        message: 'Enter the command to run the app: '
    },
    {
        type: 'list',
        name: 'license',
        message: "Enter the license type, or choose Unlicensed if not licensed:",
        choices: ['MIT', 'ISC', 'GPLv3', 'Unlicensed'],
    },
    {
        type: "input",
        name: 'contributing',
        message: 'What should other users know if they wish to contribute? '
    },
    {
        type: "input",
        name: 'tests',
        message: 'Enter the command to run the tests: '
    },
    {
        type: "input",
        name: 'questions',
        message: "Enter the questions section documentation details: "
    }
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err)
            console.log(err);

        console.log("README.md generated and saved successfully!")
    })
}

function init() {
    inquirer.prompt(questions)
    .then(function(answers) {
        var data = generateMarkdown(answers);
        writeToFile("README.MD", data);
    })

}

init();
