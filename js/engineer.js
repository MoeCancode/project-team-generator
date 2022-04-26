const fs = require('fs');
const inquirer = require('inquirer');
var EmployeeClass = require('./employee');

class Engineer extends EmployeeClass {
    constructor(name, id, email, ghUsername) {
        super(name, id, email);
        this.ghUsername = ghUsername;
        this.role = "Engineer";
    }
    getGithub() {
        return `My github username is ${this.ghUsername}`;
    }
    getRole() {
        return `My role is ${this.role}`;
    }
}

function inquireEngineer() {
    return inquirer.prompt([
        {
            type: "input",
            message: "ENTER ENGINEER NAME: ",
            name: "inputName",
            validate: (inputvalue) => {
                if (inputvalue) {
                  return true;
                } else {
                  console.log(" PLEASE ENTER A VALID ANSWER");
                  return false;
                }
              }
        },
        {
            type: "input",
            message: "ENTER ENGINEER ID: ",
            name: "inputID",
            validate: (inputvalue) => {
                if (inputvalue) {
                  return true;
                } else {
                  console.log(" PLEASE ENTER A VALID ANSWER");
                  return false;
                }
              }
        },
        {
            type: "input",
            message: "ENTER ENGINEER EMAIL: ",
            name: "inputEmail",
            validate: (inputvalue) => {
                if (inputvalue) {
                  return true;
                } else {
                  console.log(" PLEASE ENTER A VALID ANSWER");
                  return false;
                }
              }
        },
        {
            type: "input",
            message: "ENTER ENGINEER GITHUB USERNAME: ",
            name: "inputGithub",
            validate: (inputvalue) => {
                if (inputvalue) {
                  return true;
                } else {
                  console.log(" PLEASE ENTER A VALID ANSWER");
                  return false;
                }
              }
        }
    ]).then(answers => {
        const newEngineer = new Engineer(answers.inputName, answers.inputID, answers.inputEmail, answers.inputGithub);
        return makeEngineerHTML(newEngineer);
        // addEmployee();
    })
}

function makeEngineerHTML(data) {
    var EngineerString = `
    <div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
  <div class="card-header"><i class="fa-solid fa-computer fa-xl"></i> ${data.role}</div>
  <div class="card-body">
    <h5 class="card-title">${data.name}</h5>
    <p class="card-text">ID: ${data.id}</p>
    <p class="card-text">EMAIL: <a href="mailto:${data.email}">${data.email}</a></p>
    <p class="card-text">GITHUB USERNAME: <a href = "https://github.com/${data.ghUsername}/" target = "_blank"> Github </a></p>
  </div>
</div>
  `
  return EngineerString;
}

module.exports = {inquireEngineer, Engineer};