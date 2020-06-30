# Employee-Tracker

![GitHub last commit](https://img.shields.io/github/last-commit/salpharre/Employee-Tracker) ![npm version](https://badge.fury.io/js/inquirer.svg)

CLI application to track your employees utilizing a database built with MySQL.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Technology](#technology)
* [Tests](#tests)
* [Contributors](#contributors)
* [License](#license)
* [Launch](#launch)

### Installation

Enter the following to install:
`npm install or npm i`

and

Use schema.sql to create database in MySQL Workbench,

and

Change any of below information to match your own localhost:

`
    //name of your host
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "area",
    database: "employee_trackerDB",
`

### Usage

To be used to track employees within your company. Upon the start of the CLI application, you will be prompted to answer questions that will populate three tables within the database, to view the entirety of all the information, choose `View All Employees`. It is recommended you select any of the three view options before adding new information.


To run the application:
1. Fork it
2. `git clone`
3. In directory, follow installation instructions
4. In directory, run `node server.js` and follow prompts


DEMO:

[To youtube!](https://youtu.be/8lzWoJKZIdg)

### Technology

* VS Code v1.46.1
* shields.io
* Node v12.16.1
* MySQL v8.0.20
* console.table

### Tests

Enter the following to test:

`no tests`

### Contributors

* Sandra Arredondo

### License

None

### Launch

Date application releases: `June 30th, 2020`
