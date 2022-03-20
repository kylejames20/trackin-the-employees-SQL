const inquirer = require('inquirer');

const theQuestions = [
    {
        type: 'list',
        name: 'Employee Manager',
        message: 'What would you like to view?',
        choices: [
            'Departments',
            'Roles',
            'Employees',
            'Add a role',
            'Add an Employee'
        ],
        filter(value) {
            return value.toLowerCase();
        }
    }
]

const theMenu = async () => {
    const firstQuestion = await inquirer.prompt(theQuestions).then((answers) => {
        return JSON.stringify(answers, null, ' ')
    })
    return firstQuestion;
}
 const mainFunction = async () => {
    const allQuestions = await theMenu()
    // console.log(allQuestions)
    if (allQuestions === 'view the departments') {

    } 
    else if(allQuestions === 'view the roles') {

    }
    else if(allQuestions === 'view the employees') {

    }
    else if(allQuestions === 'add a role') {

    }
    else if(allQuestions === 'add an employee') {

    }
    else if(allQuestions === 'update the employees role') {

    }
    else
 }

 mainFunction()