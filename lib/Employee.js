const mysql = require("mysql");
const cTable = require("console.table");

// create the connection information for the sql database
const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "area",
  database: "employee_trackerDB"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
});

//class object constructor to be used in server.js with inquirer functions

class Employee {
    constructor(){}

    viewEmployees() {
        connection.query(
            "SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.department_name, concat(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN employee AS manager ON employee.manager_id = manager.id LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id", function(err, results) {
            if (err) throw err;
            console.table(results);
        });
    }
    addEmployeeName() {
        connection.query("INSERT INTO employee SET ?", [
            {
                first_name: answer.first,
                last_name: answer.last
            }
        ],
        function(error) {
            if (err) throw err;
        });
    }
}
//exports Deparment object module
module.exports = Employee;