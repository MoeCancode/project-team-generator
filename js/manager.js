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
        console.log(`My office num is ${this.officeNum}`);
    }
    getRole() {
        console.log(`My role is ${this.role}`)
    }
}


function inquireManager() {
    return inquirer.prompt([
        {
            type: "input",
            message: "ENTER MANAGER NAME: ",
            name: "inputName",
        },
        {
            type: "input",
            message: "ENTER MANAGER ID: ",
            name: "inputID",
        },
        {
            type: "input",
            message: "ENTER MANAGER EMAIL: ",
            name: "inputEmail",
        },
        {
            type: "input",
            message: "ENTER MANAGER OFFICE NUMBER: ",
            name: "inputOfficeNumber",
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
    <p class="card-text">EMAIL: <a href = "" >${data.email}</a></p>
    <p class="card-text">OFFICE #: ${data.officeNum}</p>
  </div>
</div>
  `
//   console.log(managerString);
  return managerString;
}

module.exports = inquireManager;