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

///////sql queries for 
class Role {
    constructor(){}

    viewByRole() {
        connection.query("", function(err, results) {
            if (err) throw err;
            console.table(results);
        });
    }
    addTitle() {
        connection.query("", [
            {

            }
        ],
        function(error) {
            if (err) throw err;
        });
    }
    addSalary() {
        connection.query("", [
            {
                
            }
        ],
        function(error) {
            if (err) throw err;
        });
    }
    updateTitle() {
        connection.query("", [
            {
                
            }
        ],
        function(error) {
            if (err) throw err;
        });
    }
    updateSalary () {
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
module.exports = Role;