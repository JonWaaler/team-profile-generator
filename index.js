// Includes
const inquirer = require("inquirer");
const fs = require("fs");

// Classes that inherit from Employee class
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// all employees are added and organized into this a
var employeesArr = [];

const collectInputs = async (inputs = []) => {
  const prompts = [
    // Get employee Name
    {
      type: "input",
      name: "employeeName",
      message: "What is Employee's Name?",
    },
    // Get employee Email
    {
      type: "input",
      name: "employeeEmail",
      message: "What is Employee's Email address?",
    },
    {
      type: "list",
      name: "employeeType",
      message: "Select Employee Type...",
      choices: ["Manager", "Engineer", "Intern"],
    },
    // Get employee other Github Username
    {
      type: "input",
      name: "specialInfo",
      message:
        "If Manager enter: office number, if Engineer enter: github username, if intern enter: school name.",
    },
    {
      type: "confirm",
      name: "again",
      message: "Do you have another Employee to add?",
      default: true,
    },
  ];

  const { again, ...answers } = await inquirer.prompt(prompts);
  const newInputs = [...inputs, answers];
  return again ? collectInputs(newInputs) : newInputs;
};

// Empty and/or create file the file
ClearHtmlFile = () => {
  try {
    fs.writeFile("index.html", "", function (err) {
      if (err) throw err;
    });
  } catch (err) {
    console.log(err);
  }
};

const main = async () => {
  const inputs = await collectInputs();

  // debug
  console.log(inputs);

  for (let i = 0; i < inputs.length; i++) {
    switch (inputs[i].employeeType) {
      case "Manager":
        employeesArr.push(
          new Manager(
            inputs[i].employeeName,
            i,
            inputs[i].employeeEmail,
            inputs[i].specialInfo
          )
        );
        break;
      case "Engineer":
        employeesArr.push(
          new Engineer(
            inputs[i].employeeName,
            i,
            inputs[i].employeeEmail,
            inputs[i].specialInfo
          )
        );
        break;
      case "Intern":
        employeesArr.push(
          new Intern(
            inputs[i].employeeName,
            i,
            inputs[i].employeeEmail,
            inputs[i].specialInfo
          )
        );
        break;

      default:
        console.log(
          "Error, employee type undifined for name:" + inputs[i].employeeName
        );
        break;
    }
  }

  console.log("\n\nEmployeesArray:");
  console.log(employeesArr);

  handleHtmlDocument(getHtmlData(employeesArr));
};

function getHtmlData(employees) {
  var employeeGen = ``;

  // Loops through employees array
  for (let i = 0; i < employees.length; i++) {
    switch (employees[i].getRole()) {
      case "Manager":
        employeeGen += `<div class="item">
        <h3>${employees[i].getName()}</h3>
        <h4>Manager</h4>
        <p>ID: ${employees[i].getId()}</p>
        <p>Email: ${employees[i].getEmail()}</p>
        <p>Github: ${employees[i].getOfficeNumber()}</p>
      </div>`;
        break;
      case "Engineer":
        employeeGen += `<div class="item">
        <h3>${employees[i].getName()}</h3>
        <h4>Engineer</h4>
        <p>ID: ${employees[i].getId()}</p>
        <p>Email: ${employees[i].getEmail()}</p>
        <p>Github: ${employees[i].getGitUsername()}</p>
      </div>`;
        break;
      case "Intern":
        employeeGen += `<div class="item">
        <h3>${employees[i].getName()}</h3>
        <h4>Intern</h4>
        <p>ID: ${employees[i].getId()}</p>
        <p>Email: ${employees[i].getEmail()}</p>
        <p>Github: ${employees[i].getSchool()}</p>
      </div>`;
        break;

      default:
        console.log("Err: Employee role undefined. index:" + i);
        break;
    }
  }

  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body>
      <header>
        <h1>MY TEAM</h1>
      </header>
  
      <section class="container"></section>
      ${employeeGen}
    </body>
  </html>`;
}

function handleHtmlDocument(data) {
  ClearHtmlFile();

  // Create HTML page with user information using collected inputs
  fs.appendFile("index.html", data, (err) => {
    if (err) {
      console.log(err);
    }
  });
}

main();
