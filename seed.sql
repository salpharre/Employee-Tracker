-- Pre-populates database to make development easier

USE employee_trackerDB;

INSERT INTO department (department_name) 
VALUES (Sales),
       (Logistics);

INSERT INTO role (title, salary, department_id) VALUES ();

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ();