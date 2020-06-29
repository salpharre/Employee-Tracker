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

    multipleStatements: true
});

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    choices();
});


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


// function addEmployee() {
//     //query role and department tables in a multi statement
//     connection.query("SELECT * FROM role; SELECT * FROM department", function(err, resulst) {
//         if (err) throw err;
//         //inquire user for name, role and department and manager of employee
//         inquirer.prompt([
//             {
//                 type: "input",
//                 name: "fname",
//                 message: "Enter first name"
//             },
//             {
//                 type: "input",
//                 name: "lname",
//                 message: "Enter last name"
//             },
//             {
//                 type: "list",
//                 name: "role4emp",
//                 choices: function() {
//                     var roleArray = [];
//                     for (var i = 0; i < results[0].length; i++) {
//                       roleArray.push(results[0][i].title);
//                     }
//                     return roleArray;
//                 },
//                 message: "What title does this employee have?"
//             },
//             {
//                 type: "list",
//                 name: "dep4emp",
//                 choices: function() {
//                     var depArray = [];
//                     for (var i = 0; i < results[1].length; i++) {
//                       depArray.push(results[1][i].department_name);
//                     }
//                     return depArray;
//                 },
//                 message: "What department is this employee a part of?"
//             },
//         ]).then(answer => {
//             //get ids for corresponding tables, role and department



//             connection.query(
//                 "INSERT INTO employee SET ?",
//                 {
//                     first_name: answer.fname,
//                     last_name: answer.lname,
//                     role_id: ,
//                     manager_id: ,
//                 },
//                 function(err) {
//                     if (err) throw err;
//                     console.log("New Employee add Successfully!")
//                 }
//             )
//         });
//     })
// };

// function addRole() {
//     inquirer.prompt([
//         {
//             type: "input",
//             name: "title",
//             message: "Enter a title"
//         },
//         {
//             type: "input",
//             name: "salary",
//             message: "Enter corresponding salary to entered title"
//         }
//     ]).then(answer => {

//          connection.query("")
//     })
// }

function addDepartment() {
    //prompt user for new department to add
    inquirer.prompt([
        {
            type: "input",
            name: "department",
            message: "Enter a department"
        }
    ]).then(answer => {
        //query department table to insert
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
            //get id of title in role table
            let chosenRole;
            for (let i = 0; i < results.length; i++) {
                if (results[i].title === answer.chooseRole) {
                    chosenRole = results[i].id
                }
            }

            //query employee table to change role_id for employee
            connection.query(
                "UPDATE employee SET ? WHERE ?",
                [
                    {
                        role_id: chosenRole
                    },
                    {
                        first_name: answer.first,
                        last_name: answer.last
                    }
                ],
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

function viewAllEmployees() {
    connection.query(
        "SELECT employee.id, employee.first_name, employee.last_name, employee.role_id, role.salary, department.department_name, concat(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN employee AS manager ON employee.manager_id = manager.id LEFT JOIN role ON employee.role_id = role.title LEFT JOIN department ON role.department_id = department.department_name", function (err, results) {
            if (err) throw err;
            console.table(results);
            choices();
        });
};

function viewDep() {
    connection.query("SELECT * FROM department", function (err, results) {
        if (err) throw err;
        console.table(results);
        choices();
    });
};

function viewRoles() {
    connection.query("SELECT id, title, salary FROM role", function (err, results) {
        if (err) throw err;
        console.table(results);
        choices();
    });
};
