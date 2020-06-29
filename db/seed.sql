-- Pre-populates database to make development easier

USE employee_trackerDB;

INSERT INTO department (department_name) 
VALUES ("Sales"),
       ("Logistics"),
       ("Quality Assurance"),
       ("Human Resources");

INSERT INTO role (title, salary, department_id) 
VALUES  ("VP of Sales", 100000, 1),
        ("Manager", 60000, 3),
        ("Tech", 30000, 3),
        ("VP of HR", 70000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES  ("Jane", "Doe", 4, null),
        ("John", "Doe", 3, null),
        ("Jennifer", "Grass", 2, 2),
        ("Jacob", "Cob", 1, null);

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;

-- SELECT 
	-- employee.id, 
--    employee.first_name,
--    employee.last_name, 
--    role.title, 
--    role.salary, 
--    department.department_name, 
--    concat(manager.first_name, " ", manager.last_name) AS manager   
-- FROM employee
-- LEFT JOIN employee AS manager ON employee.manager_id = manager.id
-- LEFT JOIN role ON employee.role_id = role.id
-- LEFT JOIN department ON role.department_id = department.id;