import inquirer from "inquirer";
import fs from "fs/promises";
import { title } from "process";

const {Title, Description, Contents, Installation, Usage, License, Contributing, Tests, Questions} =
 await inquirer
 .prompt([
    {
        name:'Title',
        message: "Project title:",
        type: 'input',
        default(){return 'Project README';},
    },
    {
        name:'Description',
        message: "Description of project:",
        type: 'input',
        default(){return 'Insert description here:';},
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
        default(){return 'N/A';},
    },
    {
        name:'Usage',
        message: ":",
        type: 'input',
        
    },
    {
        name:'License',
        message: "?",
        type: 'input',
        
    },
    {
        name:'Contributing',
        message: "?",
        type: 'input',
        
    },
    {
        name:'Tests',
        message: "?",
        type: 'input',
        
    },
    {
        name:'Questions',
        message: "?",
        type: 'input',
        
    },
])

let readmeText = `
# ${Title}
## Description
${Description}

${Contents}

## Installation

## Usage

## License

## Contributing

## Tests

## Questions


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