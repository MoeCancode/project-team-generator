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
        console.log(`My github username is ${this.ghUsername}`);
    }
    getRole() {
        console.log(`My role is ${this.role}`);
    }
}

function inquireEngineer() {
    return inquirer.prompt([
        {
            type: "input",
            message: "ENTER ENGINEER NAME: ",
            name: "inputName",
        },
        {
            type: "input",
            message: "ENTER ENGINEER ID: ",
            name: "inputID",
        },
        {
            type: "input",
            message: "ENTER ENGINEER EMAIL: ",
            name: "inputEmail",
        },
        {
            type: "input",
            message: "ENTER ENGINEER GITHUB USERNAME: ",
            name: "inputGithub",
        }
    ]).then(answers => {
        const newEngineer = new Engineer(answers.inputName, answers.inputID, answers.inputEmail, answers.inputGithub);
        return makeEngineerHTML(newEngineer);
        // addEmployee();
    })
}

function makeEngineerHTML(data) {
    var EngineerString = `
    <div class="card">
    <div class="card-header">
        ${data.name}
    </div>
    <div class="card-body">
      <h5 class="card-title">${data.id}</h5>
      <p class="card-text">${data.email}</p>
      <p class="card-text">${data.ghUsername}</p>
    </div>
  </div>`
  return EngineerString;
}

module.exports = inquireEngineer;