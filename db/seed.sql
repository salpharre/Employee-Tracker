-- Pre-populates database to make development easier

USE employee_trackerDB;

INSERT INTO department (department_name) 
VALUES ("Sales"),
       ("Logistics"),
       ("Quality Assurance"),
       ("Human Resources");

INSERT INTO role (title, salary, department_id) 
VALUES  ("VP of Sales", 100000, "Sales"),
        ("Manager", 60000, "Quality Assurance"),
        ("Tech", 30000, "Quality Assurance"),
        ("VP of HR", 70000, "Human Resources");

INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES  ("Jane", "Doe", "VP of Sales", null),
        ("John", "Doe", "Manager", null),
        ("Jennifer", "Grass", "Tech", 2),
        ("Jacob", "Cob", "VP of HR", null);

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;

-- SELECT 
	-- employee.id, 
--    employee.first_name,
--    employee.last_name, 
--    employee.role_id, 
--    role.salary, 
--    department.department_name, 
--    concat(manager.first_name, " ", manager.last_name) AS manager   
-- FROM employee
-- LEFT JOIN employee AS manager ON employee.manager_id = manager.id
-- LEFT JOIN role ON employee.role_id = role.title
-- LEFT JOIN department ON role.department_id = department.id;