import inquirer from "inquirer";
import fs from "fs/promises";

const {first_name, last_name, location, bio, Linkedin, Github} =
 await inquirer
 .prompt([
    {
        name:'',
        message: "",
        type: '',
    },
    {
        name:'',
        message: "?",
        type: 'input',
        default(){return '';},
    },
    {
        name:'',
        message: "?",
        type: 'input',
    },
    {
        name:'',
        message: ":",
        type: 'input',
    },
    {
        name:'',
        message: "?",
        type: 'input',
    },
    {
        name:'',
        message: "?",
        type: 'input',
    },
])

let readmeText = ``

fs.writeFile("README.md",readmeText)