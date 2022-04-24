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