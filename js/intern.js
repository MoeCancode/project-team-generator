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
    inquirer.prompt([
        {
            type: "input",
            message: "ENTER Intern NAME: ",
            name: "inputName",
        },
        {
            type: "input",
            message: "ENTER Intern ID: ",
            name: "inputID",
        },
        {
            type: "input",
            message: "ENTER Intern EMAIL: ",
            name: "inputEmail",
        },
        {
            type: "input",
            message: "ENTER Intern SCHOOL NAME: ",
            name: "inputSchool",
        }
    ]).then(answers => {
        const newIntern = new Intern(answers.inputName, answers.inputID, answers.inputEmail, answers.inputSchool);
        console.log(newIntern);
        makeInternHTML(newIntern);
    })
}