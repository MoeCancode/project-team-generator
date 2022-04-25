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
    
    addOrNo();

    
  });
  
}

function addOrNo() {
  inquirer.prompt([
    {
      type: "list",
      message: "WOULD YOU LIKE TO ADD ANOTHER EMPLOYEE?",
      name: "yesno",
      choices: ["YES", "NO"]
    }
  ]).then(answer => {
    if(answer.yesno == "YES") {
      addEmployee();
    }
    else {
      console.log(htmlString);
    }
  })
}

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "DO YOU WANT TO ADD AN ENGINEER OR AN INTERN? ",
        name: "choose",
        choices: [
          "ADD AN ENGINEER",
          "ADD AN INTERN",
        ],
      },
    ])
    .then((answer) => {
      if (answer.choose == "ADD AN ENGINEER") {
        engineerjs().then(engineerString => {
            htmlString = htmlString + engineerString;
            addOrNo();
        })
      } 
      else if (answer.choose == "ADD AN INTERN") {
        internjs().then(internString => {
            htmlString = htmlString + internString;
            addOrNo();
        })
        
      } 
    });
}

startProject();
