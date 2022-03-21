//importing mysql2 and console.table
const mysql = require('mysql2');
const consoleTable = require('console.table');

//connecting to database
const dBase = mysql.createConnection( 
    {
        host: 'localhost',
        user: 'root',
        password: 'rootroot',
        database: 'department_db'
},)

//performing the query on the db
const dbAll = async(query) => {
    dBase.query(query, function (err, results) {
        if(err) {
            console.error(err);
        }
        console.clear();
        console.table(results);
        console.log('Navigate using up and down arrows.')
        return 
    });
}

//determining what table to query
const allDataBases = async(table) => {
    if (table === 'department') {
        dbAll('SELECT * FROM department')
    }
    else if (table === 'employee') {
        dbAll('SELECT employee.id, employee.first_name, employee.last_name, employee.manager_id, role.title, role.salary, department.name AS department FROM department INNER JOIN role ON department.id = role.department_id INNER JOIN employee ON role.id = employee.role_id;')
    }
    else if (table === 'role') {
        dbAll('SELECT * FROM role')
    }
}
//controls additions into the database
const addQuery = async (query, answers) => {
    if(query === 'role') {
        dBase.query('INSERT INTO role (title, salary, department_id) VALUES (?,?,?)', [answers.title, Number(answers.salary), Number(answers.department_id)], (err, results) => {
         if(err) {
             console.error(err);
         } else {
             console.log('Added Role');
         }   
        })
    }
    else if (query === 'department') {
        dBase.query('INSERT INTO department (name) VALUES (?)', [answers.name], (err, results) => {
            if(err) {
                console.error(err);
            } else {
                console.log('Added Department');
            }
        })
    }
    else if (query === 'employee') {
        dBase.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)', [answers.first_name, answers.last_name, Number(answers.role_id), Number(answers.manager_id)], (err, results) => {
            if(err) {
                console.error(err);
            } else {
                console.log('Added Employee');
            }
        })
    }
    else if (query === 'update') {
        dBase.query('UPDATE employee SET role_id = ? WHERE employee.id = ?', [Number(answers.role_id), Number(answers.employee_id)], (err, results) => {
           if(err) {
               console.error(err);
           } else {
               console.log('Added Updated Employee');
           }
        })
    }
}

module.exports = {allDataBases, addQuery};