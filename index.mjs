import inquirer from "inquirer";
import fs from "fs/promises";

const {Title, Description, Contents, Installation, Usage, License, Contributing, Tests, Questions} =
 await inquirer
 .prompt([
    {
        name:'Title',
        message: "Project title:",
        type: 'input',
        // default(){return '';},
    },
    {
        name:'Description',
        message: "Description of project:",
        type: 'input',
        // default(){return '';},
    },
    {
        name:'Table of contents',
        message: "Do you require a table of contents?",
        type: 'confirm',
        
    },
    {
        name:'Installation',
        message: "?",
        type: 'input',
        // default(){return '';},
    },
    {
        name:'Usage',
        message: ":",
        type: 'input',
        // default(){return '';},
    },
    {
        name:'License',
        message: "?",
        type: 'input',
        // default(){return '';},
    },
    {
        name:'Contributing',
        message: "?",
        type: 'input',
        // default(){return '';},
    },
    {
        name:'Tests',
        message: "?",
        type: 'input',
        // default(){return '';},
    },
    {
        name:'Questions',
        message: "?",
        type: 'input',
        // default(){return '';},
    },
])

let readmeText = `
# The largest heading
## The second largest heading
###### The smallest heading
`

fs.writeFile("README.md",readmeText);

//functions for license option and contents option

function generateLicense(License) {
    if(License === ""){

    }
}

function generateContents(Contents) {
    if(Contents === "Yes"){

    }
}