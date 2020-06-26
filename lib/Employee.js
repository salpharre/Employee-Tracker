var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
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

    getFirstName() {
        connection.query("", [
            {
                
            }
        ],
        function(error) {
            if (err) throw err;
        });
    }
    getLastName() {
        connection.query("", [
            {
                
            }
        ],
        function(error) {
            if (err) throw err;
        });
    }
}
//exports Deparment object module
module.exports = Employee;