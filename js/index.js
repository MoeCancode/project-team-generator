const fs = require("fs");
const inquirer = require("inquirer");
const managerJS = require('./manager');
const employeejs = require('./employee');
const internjs = require('./intern');
const engineerjs = require('./engineer');
var htmlString = "";




function startProject() {
    //Call function that inquires for manager details
    htmlString = htmlString + managerJS();
    
    
}

function addEmployee() {

}

startProject();

