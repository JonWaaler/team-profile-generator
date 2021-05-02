const inquirer = require("inquirer");
const fs = require("fs");

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// all employees are added and organized into this a
var employees = [];

// TODO: prompt user for team members and their information
// inquirer
//   .prompt([])
//   .then((answers) => {
//     // Use user feedback for... whatever!!
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// TODO: Generate HTML File that displays a nicely formatted team roster based on user input

// TODO: The HTML file contains Emails that should open up the users default email app

// http://www.penandpaperprogrammer.com/blog/2018/12/16/repeating-questions-with-inquirerjs

const collectInputs = async (inputs = []) => {
  const prompts = [
    // Get employee Name
    {
      type: "input",
      name: "employeeName",
      message: "What is Employee: " + 1 + "'s Name?",
    },
    // Get employee Email
    {
      type: "input",
      name: "employeeEmail",
      message: "What is Employee: " + 1 + "'s Email address?",
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
      name: "spcialInfo",
      message:
        "If Manager enter: office number, if Engineer enter: github username, if intern enter: school name.",
    },
    {
      type: "confirm",
      name: "again",
      message: "Enter another input? ",
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

  // Create html structure
  var htmlData = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>
      ${inputs[0].employeeName}
      ${inputs[0].employeeType}
      ${inputs[0].employeeEmail}
      ${inputs[0].spcialInfo}
    </p>
</body>
</html>`;

  ClearHtmlFile();

  // Create HTML page with user information using collected inputs
  fs.appendFile("index.html", htmlData, (err) => {
    if (err) {
      console.log(err);
    }
  });
};

main();
