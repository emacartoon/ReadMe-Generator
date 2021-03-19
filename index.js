// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkDown = require("./utils/generateMarkdown.js");
const generateBadges = require("./utils/stinkin_badges.js");
const fs = require("fs");
// const { inherits } = require("util");

// TODO: Create an array of questions for user input
const questions = [];

inquirer
  .prompt([
    {
      type: "input",
      name: "username",
      message: "What is GitHub username?",
      default: "EmaCartoon"
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
      default: "emacartoon@gmail.com"
    },
    {
      type: "input",
      name: "projtitle",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "links",
      message: "Links for your project?",
      default: "Repo URL"
    },
    {
      type: "input",
      name: "linksToo",
      message: "Second link for your project?",
      default: "Live URL"
    },
    {
      type: "input",
      name: "installa",
      message: "Installation Instructions?",
      default: "npm i",
    },
    {
      type: "input",
      name: "usage",
      message: "How should this project be used?",
    },
    {
      type: "checkbox",
      name: "license",
      message: "What license would you like to use?",
      choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "IBM", "ISC", "WTFPL", "None"],
    },
    {
      type: "checkbox",
      name: "tech",
      message: "Technology used?",
      choices: ["HTML", "CSS", "JavaScript"],
    },
    {
      type: "input",
      name: "techAdd",
      message: "Any others?",
    },
    {
      type: "input",
      name: "tests",
      message: "Tests",
    },
    {
      type: "input",
      name: "credits",
      message: "Who helped out?",
    },
  ])
  .then(function (data) {
       fs.writeFile("ReadMe.md", generateMarkDown(data), function (err) {
        if (err) {
            return console.log(err);
       }
        console.log("Wrote to file");
    })
});

// init();