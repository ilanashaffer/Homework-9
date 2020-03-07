// include node fs module

const fs = require("fs");

// include inquirer for prompts

const inquirer = require("inquirer");

// import markdownMaker function

const markdownMaker = require("./markdownMaker");

// import api function

const api = require("./api");

// readme questions

let questions = [
  {
    type: "input",
    name: "title",
    message: "Project Title:"
  },
  {
      type: "input",
      name: "description",
      message: "Description:"
    },
    {
      type: "input",
      name: "table_of_contents",
      message: "Table of Contents:"
    },
    {
      type: "input",
      name: "installation",
      message: "Installation:"
    },
    {
      type: "input",
      name: "usage",
      message: "Usage:"
    },
    {
      type: "input",
      name: "license",
      message: "License:"
    },
    {
      type: "input",
      name: "contributing",
      message: "Contributing:"
    },
    {
      type: "input",
      name: "tests",
      message: "Tests:"
    },
    {
      type: "input",
      name: "questions",
      message: "Questions:"
    }
];

// Welcome message

console.log("Welcome! Let's generate a Readme.");

// Readme prompts via inquirer

function questionsPrompt() {

inquirer.prompt(questions).then(function(data) {
  
    fs.appendFile("README.md", markdownMaker(data), function(err) {
  
      if (err) {
        return console.log(err);
      }

      githubPrompt();
  
    });

  });

};

questionsPrompt();

// github questions

const githubQuestions = [
  {
    type: "input",
    name: "username",
    message: "Github username:"
  }

];

// github api prompt and call

function githubPrompt() {

  inquirer.prompt(githubQuestions).then(function(data) {

    fs.appendFile("README.md", api(data), function(err) {
  
      if (err) {
        return console.log(err);
      }
  
      console.log("Success! Now let's add a badge.");
  
      badgePrompt();

    });

  });

};

// badge questions

const badgeQuestions = [
  {
    type: "input",
    name: "label",
    message: "Label:"
  },
  {
    type: "input",
    name: "message",
    message: "Message:"
  },
  {
    type: "list",
    name: "color",
    message: "Select color:",
    choices: ["brightgreen", "green", "yellowgreen", "yellow", "orange", "red", "blue", "lightgrey", "success", "important", "critical", "informational", "inactive", "blueviolet", "ff69b4", "9cf"]
  }

];


 // badge generator

 function badgePrompt() {
  inquirer.prompt(badgeQuestions)
  .then(function(response) {
    let badgeUrl = `https://img.shields.io/badge/${response.label}-${response.message}-${response.color}`;

    let completeBadge = `![Badge](${badgeUrl})`;

    fs.appendFile("README.md", completeBadge, function(err) {

      if (err) {
        return console.log(err);
      }

      console.log("Badge Added! Readme complete.");

    });


  })
 };