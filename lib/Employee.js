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
        connection.query("", function(err, results) {
            if (err) throw err;
            console.table(results);
        }); //query joined tables
        //console.table(res)??
        //any this here?
    }
    addEmployeeName() {//what's the ? again?
        connection.query("INSERT INTO employee WHERE ?", [
            {
                first_name: this.first,
                last_name: this.last
            }
        ],
        function(error) {
            if (err) throw err;
        });
    }
    updateEmployeeName() {
        connection.query("", [
            {
                first_name: this.first,
                last_name: this.last
            }
        ],
        function(error) {
            if (err) throw err;
        });
    }
}
//exports Deparment object module
module.exports = Employee;