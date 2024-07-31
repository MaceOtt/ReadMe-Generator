// npm install of inquirer fs, then important package.json
import inquirer from 'inquirer';
import fs from 'fs';

// created objects in an array
const readmeQuestions =[
        {
            // created object properties
            type: 'input',
            message: 'What title would you like?',
            name: 'Title',

        },
        {
            type: 'input',
            message: 'Please discribe your node.js?',
            name: 'Description',
        },
        {
            type: 'input',
            message: 'How to install',
            name: 'Installation',

        },
        {
            type: 'input',
            message: 'Please tell on how to use ReadMe?',
            name: 'Usage',
        },
        {
            type: 'input',
            message: 'Who contributed?',
            name: 'Contributing',
        },
        {
            type: 'input',
            message: 'How would you run a test?',
            name: 'Tests',
        },
        {
            type: 'input',
            message: 'How would you run a test?',
            name: 'Tests',
        },
        {
            // created a list of licenses to choose
            type: 'list',
            message: 'what licenses did you use?',
            name: 'License',
            choices: ['Apache 2.0', 'Mit', 'None'],
        },
        {
            type: 'input',
            message: 'Please enter GitHub username',
            name: 'GitHub',
        },
        {
            type: 'input',
            message: 'Please enter your Email',
            name: 'Email',
        },
];

// created name of fuction and its perameter
function licenseBadges(license) {
// switch statment evaluates 'licence' parameter, if license is selected returns badge and license page link, if None is selected nothing happens
switch (license) {
    case 'Apache 2.0':
        return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'Mit':
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    default:
        return '';
    }
}

function makeReadme(answer) {
    const badgeLicense = licenseBadges(answer.License);
    return `# ${answer.Title}
  ${badgeLicense}

  ## Description
  ${answer.Description}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${answer.Installation}

  ## Usage
  ${answer.Usage}

  ## License
  ${answer.license}

  ## Contributing
  ${answer.Contributing}

  ## Tests
  ${answer.Tests}

  ## Questions
  Please provide questions to 
  *Email:${answer.Email}
  *GitHub:${answer.GitHub}
  `;
}

inquirer.prompt(readmeQuestions).then((answer) => {
    const readmePage = makeReadme(answer);
    // Fs used to write content in 'readmePage' to file name 'ReadMe.md'
    fs.writeFile('ReadMe.md', readmePage, (err) =>{
        if (err) throw err;
        console.log('The readMe has been Made');
    });
});

  
