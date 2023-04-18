// packages needed for this application
const inquirer = require('inquirer')

const fs = require ('fs') 
const generateMarkdown = require ('./utils/generateMarkdown')
// array of questions for user input
const questions =[
    {
      type: 'input',
      name: 'title',
      message: 'what is the title of your project?',
    },
    {
      type: 'input',
      name: 'license',
      message: 'what license would you like to add?',
    },
    {
      type: 'input',
      name: 'purpose',
      message: 'what is the purpose of this project? (what problem does it solve?)',
    },
    {
      type: 'input',
      name: 'contributions',
      message: 'what are the guidelines for contributions?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'what steps are needed for installation?',
    },
    {
      type:'input',
      name: 'usage',
      message: 'what will the user experience be?',
    },
    {
      type:'input',
      name:'tests',
      message:'describe how you go about testing this application.',
    },

  ]


// function to write README file
function writeToFile(fileName, data) {
   fs.writeFileSync(fileName, data) 
}

// function to initialize app
function init() {
  inquirer.prompt (questions) .then((answers=>{
    console.log(answers)
    const markdown = generateMarkdown(answers)
    writeToFile ('test.md', markdown)
  }))
}

// Function call to initialize app
init();
