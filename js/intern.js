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