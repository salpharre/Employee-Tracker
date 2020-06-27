const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");
const Employee = require("./lib/Employee");
const Department = require("./lib/Department");
const Role = require("./lib/Role");

//const all the objects here in global so can call on the different funcions
const employee = new Employee();
const department = new Department();
const role = new Role(); 

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
  // run the start function after the connection is made to prompt the user
  choices();
});

//////////test console.table after connection, using below function and a query, does it print the database in console?
// function showTable () {
//     //query joined tables
//     //console.table(res)??
// }

function choices () {
    inquirer.prompt([
        {
            type: "list",
            name:"choice",
            message: "What would you like to do? (Use arrow keys to move up and down)" ,
            choices: [
                "View All Employees", 
                "View All Employees BY Role",
                "View All Employees BY Department",
                "Add Employees",
                "UPDATE Employee Role"
            ],
        }
    ]).then(answer => {
        console.log(answer);

        let userChoice = answer.choice;
        if(userChoice === "View All Employees") {
            employee.viewEmployees();
        }
        else if (userChoice === "View All Employees BY Role") {
            employeesByRole();
        }
        else if (userChoice === "View All Employees BY Department") {
            employeesByDep();
        }
        else if (userChoice === "Add Employees") {
            //
        }
        else if (userChoice === "UPDATE Employee Role") {

        }
        else {
            connection.end();
        }
    })
}

//object.methodname.then()

function addEmployee () {
    inquirer.prompt([
        //first name
        //last name
        //title
        //department
        //salary
    ]);
}

function updateRole () {
    inquirer.prompt([
        //change role for employee
            //call object.method for updateRole
        //ask if salary changed with new role
            //if yes then inquire into inputting new salary (after .then) and if no then move on
    ]);
}

