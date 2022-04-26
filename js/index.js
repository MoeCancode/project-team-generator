const fs = require("fs");
const inquirer = require("inquirer");
const managerjs = require("./manager");
const employeejs = require("./employee");
const internjs = require("./intern");
const engineerjs = require("./engineer");
const path = require("path");
var htmlString = "";

function startProject() {
  //Call function that inquires for manager details
  managerjs.inquireManager().then((managerString) => {
    htmlString = htmlString + managerString;

    addOrNo();
  });
}

//Asks if a new member needs to be added to team
function addOrNo() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "WOULD YOU LIKE TO ADD ANOTHER EMPLOYEE?",
        name: "yesno",
        choices: ["YES", "NO"],
      },
    ])
    .then((answer) => {
      if (answer.yesno == "YES") {
        addEmployee();
      } else {
        compileHtml();
        compileCss();
      }
    });
}

//Asks if you want a new Engineer or intern
function addEmployee() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "DO YOU WANT TO ADD AN ENGINEER OR AN INTERN? ",
        name: "choose",
        choices: ["ADD AN ENGINEER", "ADD AN INTERN"],
      },
    ])
    .then((answer) => {
      if (answer.choose == "ADD AN ENGINEER") {
        engineerjs.inquireEngineer().then((engineerString) => {
          htmlString = htmlString + engineerString;
          addOrNo();
        });
      } else if (answer.choose == "ADD AN INTERN") {
        internjs.inquireIntern().then((internString) => {
          htmlString = htmlString + internString;
          addOrNo();
        });
      }
    });
}

//Takes the compiled html string and makes an html file
function compileHtml() {
  var completeString = `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script
      src="https://kit.fontawesome.com/30f3a925af.js"
      crossorigin="anonymous"
    ></script>
    <link rel="stylesheet" href="./style.css">

    <title>Team Generator</title>
</head>
<body>
    <div class="heading">
        <h1>PROJECT TEAM MEMBERS</h1>
    </div>
    <div id= "flexThis">
    
    ${htmlString}
    
    </div>

    <script src="./js/script.js"></script>
</body>
</html>
    `;

    fs.writeFileSync(path.join(process.cwd(), "../index.html"), completeString);
}

//Styles the created html file
function compileCss() {
  var cssString = `
  body {
    background-color: rgb(7, 56, 78);
    font-family: Arial, Helvetica, sans-serif;
    color: white;
}

h1 {
    text-align: center;
    background-color: rgb(12, 0, 5);
    padding-top: 40px;
    padding-bottom: 40px;
    margin: 0px;
}

a {
    text-decoration: none;
    color: black;
}

.card {
    margin: 25px;
    text-align: left;
}

.card-header {
    background-color: white;
    color: black;
}

#flexThis {
  text-align: -webkit-center;
}
  `;

  fs.writeFileSync(path.join(process.cwd(), "../style.css"), cssString);

}

startProject();
