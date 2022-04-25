const fs = require('fs');
const inquirer = require('inquirer');
var EmployeeClass = require('./employee');

class Intern extends EmployeeClass {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.role = "Intern"
    }
    getSchool() {
        console.log(`My school is ${this.school}`);
    }
    getRole() {
        console.log(`My role is ${this.role}`);
    }
}

function inquireIntern() {
    return inquirer.prompt([
        {
            type: "input",
            message: "ENTER INTERN NAME: ",
            name: "inputName",
        },
        {
            type: "input",
            message: "ENTER INTERN ID: ",
            name: "inputID",
        },
        {
            type: "input",
            message: "ENTER INTERN EMAIL: ",
            name: "inputEmail",
        },
        {
            type: "input",
            message: "ENTER INTERN SCHOOL NAME: ",
            name: "inputSchool",
        }
    ]).then(answers => {
        const newIntern = new Intern(answers.inputName, answers.inputID, answers.inputEmail, answers.inputSchool);
        // console.log(newIntern);
        return makeInternHTML(newIntern);
    })
}

function makeInternHTML(data) {
    var internString = `
    <div class="card text-white bg-success mb-3" style="max-width: 18rem;">
  <div class="card-header"><i class="fa-solid fa-glasses fa-xl"></i> ${data.role}</div>
  <div class="card-body">
    <h5 class="card-title">${data.name}</h5>
    <p class="card-text">ID: ${data.id}</p>
    <p class="card-text">EMAIL: <a href="mailto:${data.email}">${data.email}</a></p>
    <p class="card-text">SCHOOL NAME: ${data.school}</p>
  </div>
</div>
  `
//   console.log(internString);
  return internString;
}

module.exports = inquireIntern;