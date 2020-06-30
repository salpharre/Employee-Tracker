//requires packages needed for application
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
    database: "employee_trackerDB",
});

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    choices();
});

//prompt user to choose what they want to do
function choices() {
    inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "What would you like to do? (Use arrow keys to move up and down)",
            choices: [
                "View All Employees",
                "View All Roles",
                "View All Departments",
                "Add Employees",
                "Add Roles",
                "Add Departments",
                "UPDATE Employee Role",
                "Exit"
            ],
        }
    ]).then(answer => {
        console.log(answer);

        switch (answer.choice) {
            case "View All Employees":
                viewAllEmployees();
                break;

            case "View All Roles":
                viewRoles();
                break;

            case "View All Departments":
                viewDep();
                break;

            case "Add Employees":
                addEmployee();
                break;

            case "Add Roles":
                addRole();
                break;

            case "Add Departments":
                addDepartment();
                break;

            case "UPDATE Employee Role":
                updateEmpRole();
                break;

            case "Exit":
                connection.end();
                console.log("All Done!");
                break;
        }
    })
}

//add to employee table
function addEmployee() {
    //query role table to grab title
    connection.query("SELECT * FROM role", function(err, results) {
        if (err) throw err;
        //inquire user for name, role and department and manager of employee
        inquirer.prompt([
            {
                type: "input",
                name: "fname",
                message: "Enter first name"
            },
            {
                type: "input",
                name: "lname",
                message: "Enter last name"
            },
            {
                type: "list",
                name: "roleForEmp",
                choices: function() {
                    let roleArray = [];
                    for (let i = 0; i < results.length; i++) {
                      roleArray.push(results[i].title);
                    }
                    return roleArray;
                },
                message: "What title does this employee have?"
            },
            {
                type: "input",
                name: "manager",
                message: "Using the ids corresponding to each employee, enter the manager id number for this employee. (Leave blank if manager is CEO)",
                validate: function(value) {
                    if (isNaN(value) === false) {
                      return true;
                    }
                    return false;
                  },
                default: 1
            },
        ]).then(answer => {
            //get ids for corresponding tables, role and department
            let role;
            for (let i = 0; i < results.length; i++) {
                if (results[i].title === answer.roleForEmp) {
                    role = results[i].title;
                }
            }
            //query employee table to insert values
            connection.query(
                "INSERT INTO employee SET ?",
                {
                    first_name: answer.fname,
                    last_name: answer.lname,
                    role_id: role,
                    manager_id: answer.manager,
                },
                function(err) {
                    if (err) throw err;
                    console.log("New Employee Added Successfully!")
                    choices();
                }
            )
        });
    })
};
//add a new role to role table
function addRole() {
    //query the database for all existing departments
    connection.query("SELECT department_name FROM department", function (err, results) {
        if (err) throw err;
        //prompt user to input title, salary and pick a department the role goes under
        inquirer.prompt([
            {
                type: "input",
                name: "title",
                message: "Enter a title"
            },
            {
                type: "input",
                name: "salary",
                message: "Enter corresponding salary to entered title"
            },
            {
                type: "list",
                name: "chooseDep",
                choices: function () {
                    let depArray = [];
                    for (var i = 0; i < results.length; i++) {
                        depArray.push(results[i].department_name)
                    }
                    return depArray;
                },
                message: "Choose department this position will be under"
            }
        ]).then(answer => {
            //get department name from department table for role table
            let chosenDep;
            for (let i = 0; i < results.length; i++) {
                if (results[i].department_name === answer.chooseDep) {
                    chosenDep = results[i].department_name;
                }
            }
            //role table to input title, salary and deparment id
            connection.query("INSERT INTO role SET ?",
                {
                    title: answer.title,
                    salary: answer.salary,
                    department_id: chosenDep
                },
                function (err) {
                    if (err) throw err;
                    console.log("New Employee Added Successfully!");
                    choices();
                }
            )
        })
    })
}
//add another department to department table
function addDepartment() {
    //prompt user for new department to add
    inquirer.prompt([
        {
            type: "input",
            name: "department",
            message: "Enter a department"
        }
    ]).then(answer => {
        //query department table to insert new department
        connection.query(
            "INSERT INTO department SET ?",
            {
                department_name: answer.department
            },
            function (err) {
                if (err) throw err;
                console.log("New Department added successfully!");
                choices();
            }
        );
    });
};

//update role_id in employee table
function updateEmpRole() {
    //query the database for all employees
    connection.query("SELECT * FROM role", function (err, results) {
        if (err) throw err;
        //prompt user to choose which employee
        inquirer.prompt([
            {
                type: "input",
                name: "first",
                message: "Type in the first name of the employee you want to update"
            },
            {
                type: "input",
                name: "last",
                message: "Type in the last name of the employee you want to update"
            },
            {
                type: "list",
                name: "chooseRole",
                choices: function () {
                    let choiceArray = [];
                    for (var i = 0; i < results.length; i++) {
                        choiceArray.push(results[i].title)
                    }
                    return choiceArray;
                },
                message: "Choose the title you would like to change the employee to"
            }
        ]).then(answer => {
            //get title in role table for employee table
            let chosenRole;
            for (let i = 0; i < results.length; i++) {
                if (results[i].title === answer.chooseRole) {
                    chosenRole = results[i].title
                }
            }

            //query employee table to change role_id for employee
            connection.query(
                "UPDATE employee SET ? WHERE first_name = ? AND last_name = ?",
                [{ role_id: chosenRole }, answer.first, answer.last],
                function (err) {
                    if (err) throw err;
                    console.log("Employee Role update was succesful!");
                    choices();
                }
            );
        });
    });
};


////////////////View FUNCITONS FOR QUERIES//////////////////

//queries the joined tables
function viewAllEmployees() {
    connection.query(
        "SELECT employee.id, employee.first_name, employee.last_name, employee.role_id, role.salary, department.department_name, concat(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN employee AS manager ON employee.manager_id = manager.id LEFT JOIN role ON employee.role_id = role.title LEFT JOIN department ON role.department_id = department.department_name", function (err, results) {
            if (err) throw err;
            console.table(results);
            choices();
        });
};
//queries department table
function viewDep() {
    connection.query("SELECT * FROM department", function (err, results) {
        if (err) throw err;
        console.table(results);
        choices();
    });
};
//queries role table
function viewRoles() {
    connection.query("SELECT * FROM role", function (err, results) {
        if (err) throw err;
        console.table(results);
        choices();
    });
};
