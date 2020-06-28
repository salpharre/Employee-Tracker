const mysql = require("mysql");
const inquirer = require("inquirer");
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
  // run the start function after the connection is made to prompt the user
  choices();
});


function choices () {
    inquirer.prompt([
        {
            type: "list",
            name:"choice",
            message: "What would you like to do? (Use arrow keys to move up and down)" ,
            choices: [
                "View",
                "Add",
                "Update",
                "Exit"
            ],
        }
    ]).then(answer => {
        console.log(answer);
        //change if else to switch/case/default like in greatbay
        switch (answer.choice) {
        case "View":
            view();
            break;
        
        case "Add":
            add();
            break;

        case "Update":
            update();
            break;

        case "Exit":
            connection.end();
            console.log("All Done!");
            break;
        }
    })
}

//"View All Employees", 
// "View All Roles",
// "View All Departments",
// "Add Employees",
// "UPDATE Employee Role",

function view() {
    inquirer.prompt([
      //choices as to what they want to view

    ]);
}

function add() {
    inquirer.prompt([
        //first name
        //last name
        //title
        //department
        //salary

    ]);
}

function update() {
    inquirer.prompt([
        //change role for employee
            //call object.method for updateRole
        //ask if salary changed with new role
            //if yes then inquire into inputting new salary (after .then) and if no then move on
    ]);
}

////////////////FUNCITONS FOR QUERIES//////////////////

function viewEmployees() {
    connection.query(
        "SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.department_name, concat(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN employee AS manager ON employee.manager_id = manager.id LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id", function(err, results) {
        if (err) throw err;
        console.table(results);
    });
};

function addEmployeeName() {
    connection.query("INSERT INTO employee SET ?", [
        {
            first_name: answer.first,
            last_name: answer.last
        }
    ],
    function(error) {
        if (err) throw err;
    });
};

function addDep() {
    connection.query("INSERT INTO department SET ?", [
        {
            department_name: "",
        }
    ],
    function(error) {
        if (err) throw err;
    });
};

function viewDep() {
    connection.query("SELECT * FROM department", function(err, results) {
        if (err) throw err;
        console.table(results);
    });
};

function viewRoles() {
    connection.query("SELECT * FROM role", function(err, results) {
        if (err) throw err;
        console.table(results);
    });
}

function addRole() {
    connection.query("", [
        {
            title: answer.title
        }
    ],
    function(error) {
        if (err) throw err;
    });
};

function updateRoleItems() {
    connection.query("", [
        {
            title: answer.title,
            salary: answer.salary
        }
    ],
    function(error) {
        if (err) throw err;
    });
};