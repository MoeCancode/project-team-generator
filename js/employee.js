// const fs = require('fs');
// const inquirer = require('inquirer');
// var EmployeeClass = require('./index');

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee";
    }
    getName() {
        console.log(`This is ${this.name}`);
    }
    getId() {
        console.log(`My ID is ${this.id}`);
    }
    getEmail() {
        console.log(`My email address is ${this.email}`);
    }
    getRole() {
        console.log(`My role is ${this.role}`);
    }
}

module.exports = Employee;