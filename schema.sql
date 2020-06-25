-- Drops the employee_trackerDB if it exists currently --
DROP DATABASE IF EXISTS employee_trackerDB;
-- Creates the "employee_trackerDB" database --
CREATE DATABASE employee_trackerDB;

-- Makes it so all of the following code will affect employee_trackerDB --
USE employee_trackerDB;

-- Creates the table "department" within employee_trackerDB --
CREATE TABLE department (
  -- Integer called "id" that auto increments and cannot contain null
  id INTEGER NOT NULL AUTO_INCREMENT
  -- A string column called "name" which cannot contain null --
  name VARCHAR(30) NOT NULL,
  -- Keywords that define which column is the primary key that uniquely defines the table
  PRIMARY KEY (id)
);

-- Creates the table "role" within employee_trackerDB --
CREATE TABLE role (
  -- Integer called "id" that auto increments and cannot contain null
  id INTEGER NOT NULL AUTO_INCREMENT
  -- Makes a string column called "name" which cannot contain null --
  title VARCHAR(30) NOT NULL,
  -- Makes a decimal column called "salary" which cannot contain null --
  salary DECIMAL NOT NULL,
  -- Makes a integer column called "department_id" --
  department_id INT NOT NULL,
  -- Keywords that define which column is the primary key that uniquely defines the table
  PRIMARY KEY (id)
);

-- Creates the table "employee" within employee_trackerDB --
CREATE TABLE employee (
  -- Integer called "id" that auto increments and cannot contain null
  id INTEGER NOT NULL AUTO_INCREMENT
  -- Makes a string column called "first_name" which cannot contain null --
  first_name VARCHAR(30) NOT NULL,
  -- Makes a sting column called "last_name" --
  last_name VARCHAR(30) NOT NULL,
  -- Integer column called "role_id" to hold reference to role employee has --
  role_id INTEGER(10) NOT NULL,
    -- Integer column called "role_id" to hold reference to role employee has --
  manager_id INTEGER(10) NULL,
  -- Keywords that define which column is the primary key that uniquely defines the table
  PRIMARY KEY (id)
);