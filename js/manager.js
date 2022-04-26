const fs = require('fs');
const inquirer = require('inquirer');
var EmployeeClass = require('./employee');

console.log(EmployeeClass)

class Manager extends EmployeeClass {
    constructor(name, id, email, officeNum) {
        super(name, id, email);
        this.officeNum = officeNum;
        this.role = "Manager";
    }
    getofficeNum() {
        return `My office number is ${this.officeNum}`;
    }
    getRole() {
        return `My role is ${this.role}`;
    }
}


function inquireManager() {
    return inquirer.prompt([
        {
            type: "input",
            message: "ENTER MANAGER NAME: ",
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
            message: "ENTER MANAGER ID: ",
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
            message: "ENTER MANAGER EMAIL: ",
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
            message: "ENTER MANAGER OFFICE NUMBER: ",
            name: "inputOfficeNumber",
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
        const newManager = new Manager(answers.inputName, answers.inputID, answers.inputEmail, answers.inputOfficeNumber);
        // console.log(newManager);
        return makeManagerHTML(newManager);
        // addEmployee();
    })
}

function makeManagerHTML(data) {
    var managerString = `
    <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
  <div class="card-header"><i class="fa-solid fa-person-rays fa-xl"></i> ${data.role}</div>
  <div class="card-body">
    <h5 class="card-title">${data.name}</h5>
    <p class="card-text">ID: ${data.id}</p>
    <p class="card-text">EMAIL: <a href="mailto:${data.email}">${data.email}</a></p>
    <p class="card-text">OFFICE #: ${data.officeNum}</p>
  </div>
</div>
  `
//   console.log(managerString);
  return managerString;
}

module.exports = {inquireManager, Manager};