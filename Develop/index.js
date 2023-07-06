// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    name: 'title',
    message: "What is your project's title?",
  },
  {
    type: 'input',
    name: 'description',
    message: 'Write a brief description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples for usage:',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'How can others contribute to your project?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Describe any tests for your application and how to run them:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'],
  },
  {
    type: 'input',
    name: 'githubUsername',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
];

// Function to generate the README content
function generateREADME(answers) {
    let readmeContent = `# Node.js Challenge: Professional README Generator\n\n`;
    readmeContent += `When creating an open source project on GitHub, it’s important to have a high-quality README for the app. This should include what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions—this last part increases the likelihood that other developers will contribute to the success of the project.\n\n`;
    readmeContent += `We can quickly and easily generate a README file by using a command-line application to generate one. This allows the project creator to devote more time working on the project.\n\n`;
  
    // Table of Contents
    readmeContent += '## Table of Contents\n\n';
    readmeContent += '- [Installation](#installation)\n';
    readmeContent += '- [Usage](#usage)\n';
    readmeContent += '- [License](#license)\n';
    readmeContent += '- [Contributing](#contributing)\n';
    readmeContent += '- [Questions](#questions)\n\n';
  
    // Installation
    readmeContent += '## Installation\n\n';
    readmeContent += `${answers.installation}\n\n`;
  
    // Usage
    readmeContent += '## Usage\n\n';
    readmeContent += `${answers.usage}\n\n`;
  
    // License
    readmeContent += '## License\n\n';
    readmeContent += `This project is licensed under the MIT license.\n\n`;
  
    // Contributing
    readmeContent += '## Contributing\n\n';
    readmeContent += `Sri: [https://github.com/Sowchirukuri](https://github.com/Sowchirukuri)\n\n`;
  
    // Questions
    readmeContent += '## Questions\n\n';
    readmeContent += `For any questions or inquiries, please reach out to me via [GitHub](https://github.com/Sowchirukuri) or email me at lakshmisowmya.chirukuri@gmail.com.\n`;
  
    return readmeContent;
  }
  
  
  inquirer.prompt(questions).then((answers) => {
    const readmeContent = generateREADME(answers);
  
    // Write the README file
    fs.writeFile('README.md', readmeContent, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('README.md file generated successfully!');
      }
    });
  });