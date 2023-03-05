const managerInfo = [
  {
    type: "input",
    message: "What is the team manager's Name?",
    name: "name",
  },
  {
    type: "input",
    message: "Enter the Employee ID:",
    name: "id",
  },
  {
    type: "input",
    message: "What is their email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is their office number?",
    name: "officeNum",
  },
];

let answers = await inquirer.prompt(managerInfo);

// async function x() {
//   let res = await inquirer.prompt(arrObj);
//   generateREADME(res);
// }

export default managerInfo;
