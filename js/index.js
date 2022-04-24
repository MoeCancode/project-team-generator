const fs = require("fs");
const inquirer = require("inquirer");
const managerjs = require("./manager");
const employeejs = require("./employee");
const internjs = require("./intern");
const engineerjs = require("./engineer");
var htmlString = "";

function startProject() {
  //Call function that inquires for manager details
  managerjs().then(managerString => {
    htmlString = htmlString + managerString;
    addEmployee();
  });
  
}

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "WOULD YOU LIKE TO ADD SOMEONE ELSE TO YOUR PROJECT? ",
        name: "choose",
        choices: [
          "ADD AN ENGINEER",
          "ADD AN INTERN",
          "TEAM IS COMPLETE (EXIT)",
        ],
      },
    ])
    .then((answer) => {
      if (answer.choose == "ADD AN ENGINEER") {
        engineerjs().then(engineerString => {
            htmlString = htmlString + engineerString;
        })
        addEmployee();
      } 
      else if (answer.choose == "ADD AN INTERN") {
        internjs().then(internString => {
            htmlString = htmlString + internString;
        })
        addEmployee();
      } 
      else {
        // compileHTML();
        console.log(htmlString);
      }
    });
}

startProject();
