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

class Department {
    constructor(){}

    addDep() {
        connection.query("INSERT INTO department SET ?", [
            {
                department_name: "",
            }
        ],
        function(error) {
            if (err) throw err;
        });
    }
    viewDep() {
      connection.query("SELECT * FROM department", function(err, results) {
          if (err) throw err;
          console.table(results);
      });
  }
}
//exports Deparment object module
module.exports = Department;