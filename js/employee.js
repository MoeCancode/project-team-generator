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
        return `This is ${this.name}`;
    }
    getId() {
        return `My ID is ${this.id}`;
    }
    getEmail() {
        return `My email address is ${this.email}`;
    }
    getRole() {
        return `My role is ${this.role}`
    }
}

module.exports = Employee;