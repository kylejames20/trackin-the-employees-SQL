const inquirer = require('inquirer');
const { allDataBases, addQuery } = require('./db/index');

//questions asking what you would like to do, leading to the next set of questions
const theQuestions = [
    {
        type: 'list',
        name: 'Manager',
        message: 'What would you like to view?',
        choices: [
            'department',
            'role',
            'employee',
            'add a role',
            'add an employee',
            'update the employees role',
            'exit'
        ],
        filter(value) {
            return value.toLowerCase();
        }
    }
]
 //questions for the roles
const theRolesQuestions = [
    {
        type: 'input',
        name: 'title',
        message: 'What role would you like to add?'
    },
    {
        type: 'input',
        name: 'salary',
        message: 'What is the salary for the new role?'
    },
    {
        type: 'input',
        name: 'department_id',
        message: 'What is the id for the new department? (Numbers only)'
    }
]
//questions for the employees/manager
const theEmployeesQuestions = [
    {
        type: 'input',
        name: 'first_name',
        message: 'What is the first name of the employee?'
    },
    {
        type: 'input',
        name: 'last_name',
        message: 'What is the last name of the employee?'
    },
    {
        type: 'input',
        name: 'role_id',
        message: 'What is id for the new role?'
    },
    {
        type: 'input',
        name: 'manager_id',
        message: 'What is the id for the new manager?'
    }

]
//questions for employees not labeled manager
const otherEmployeeQuestions = [
    {
        type: 'input',
        name: 'employee_id',
        message: 'What is the id for the new employee?'
    },
    {
        type: 'input',
        name: 'role_id',
        message: 'What is the role for the new employee?'
    }
]
//question for what department will be added
const theDepartmentQuestion = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the new department?'
    }
]

const theMenu = async () => {
    const firstQuestion = await inquirer.prompt(theQuestions).then((answers) => {
        return answers.Manager
    })
    return firstQuestion;
}

 const mainFunction = async () => {
    const allQuestions = await theMenu()
    // console.log(allQuestions)
    if (allQuestions === 'department') {
        allDataBases('department')
    } 
    else if(allQuestions === 'role') {
        allDataBases('role')
    }
    else if(allQuestions === 'employee') {
        allDataBases('employee')
    }
    else if(allQuestions === 'add a role') {

    }
    else if(allQuestions === 'add an employee') {

    }
    else if(allQuestions === 'update the employees role') {

    }
    // else {
    //      console.error('No selection made. Now exiting.')
    //      process.exit()
    // }
 }

 mainFunction()