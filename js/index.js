const fs = require("fs");
const inquirer = require("inquirer");
const managerJS = require("./manager");
const employeejs = require("./employee");
const internjs = require("./intern");
const engineerjs = require("./engineer");
var htmlString = "";

function startProject() {
  //Call function that inquires for manager details
  htmlString = htmlString + managerJS();
  addEmployee();
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
        // engineerjs();
        console.log("Engineer");
        addEmployee();
      } else if (answer.choose == "ADD AN INTERN") {
        //   internjs();
        console.log("Intern");
        addEmployee();
      } else {
        compileHTML();
      }
    });
}

startProject();
