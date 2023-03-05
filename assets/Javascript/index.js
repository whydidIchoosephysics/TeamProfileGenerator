import { Manager, createManager } from "./manager.js";
import Engineer from "./engineer"
import Intern from "./intern"
import inquirer from "inquirer";
import * as fs from "fs";
import Path from Path



async function runApp() {
    let results = await inquirer.prompt(arrObj);
    generateREADME(results);
  }

runApp()