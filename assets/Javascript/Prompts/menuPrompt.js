let menu = [
  {
    type: "list",
    message: "What do you wish to do now?",
    name: "menuOption",
    choices: ["Add an engineer", "Add an intern", "Finish building the team"],
  },
];

// Function to go in the .then part to add answers to the README file
let generateREADME = function (answers) {
  let license = "";
  switch (answers.menuOption) {
    case menu[0].choices[0]:
      // createEngineer()
      break;
    case menu[0].choices[1]:
      // createIntern()
      break;
    default:
      // showTeam()
      break;
  }
  fs.writeFile("generatedREADME.md", genReadme(answers, license), (error) =>
    error ? console.log(error) : console.log("File created!")
  );
};
