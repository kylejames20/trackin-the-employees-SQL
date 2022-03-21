//importing
const mysql = require('mysql2');

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
        console.table(results);
    });
}
//determining what table to query
const allDataBases = async(table) => {
    if (table === 'department') {
        dbAll('SELECT * FROM department')
    }
    else if (table === 'employee') {
        dbAll('SELECT employee.id, first_name, last_name, (SELECT employee.first_name WHERE employee.id = 1) AS Manager, role.title, role.salary, department.name AS Department FROM employee INNER JOIN role ON employee.id = role.id INNER JOIN department ON role.id = department.id')
    }
    else if (table === 'role') {
        dbAll('SELECT * FROM role')
    }
};




module.exports = allDataBases;