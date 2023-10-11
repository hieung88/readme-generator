// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title for your project?",
        validate: (input) => {
            return input ? true : 'Please enter a title for your project';
        },
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a description of the project:",
        validate: (input) => {
            return input ? true : 'Please enter a description for your project!';
          },
    },
    {
        type: "input",
        name: "installation",
        message: "How do you install your project?",
        validate: (input) => {
            return input ? true : 'Please provide instructions on how to install your project!';
          },
    },     
    {
        type: "input",
        name: "usage",
        message: "How do you use this project?",
        validate: (input) => {
            return input ? true : 'Please provide information on how to use your project!';
          },
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license you will use for your project:',
        choices: ['gnu', 'Apache', 'mit', 'unlicense']
    },
    {
        type: "input",
        name: "contribution",
        message: "Please provide any other contributions to the project:",
        validate: (input) => {
            return input ? true : 'Please enter other contributions!';
          },
    },
    {
        type: "input",
        name: "test",
        message: "Please provide any testing intructions:",
        validate: (input) => {
            return input ? true : 'Please enter any testing intructions';
        },
    },    
    {
        type: "input",
        name: "githubUsername",
        message: "What is your GitHub Username?",
        validate: (input) => {
            return input ? true : 'Please enter your GitHub Username!';
        },
    },    
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
        validate: (input) => {
            return input ? true : 'Please enter your emial adress!';
        },
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }         
      });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        const markdown = generateMarkdown(answers);
        writeToFile('README.md', markdown);  
        console.log('Success! READDME.md file has been createrd!');      
      })
      .catch((error) => {
        console.log(error);
      });
}

// Function call to initialize app
init();
