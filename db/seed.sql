-- Pre-populates database, used for production

USE employee_trackerDB;

-- INSERT INTO department (department_name) 
-- VALUES ("Company"),
--        ("Logistics"),
--        ("Quality Assurance"),
--        ("Human Resources");

-- INSERT INTO role (title, salary, department_id) 
-- VALUES  ("CEO", 200000, "Company"),
--         ("Manager", 60000, "Quality Assurance"),
--         ("Tech", 30000, "Quality Assurance"),
--         ("VP of HR", 70000, "Human Resources");

-- INSERT INTO employee (first_name, last_name, role_id, manager_id) 
-- VALUES  ("Jane", "Doe", "CEO", null),
--         ("John", "Doe", "Manager", null),
--         ("Jennifer", "Grass", "Tech", 2),
--         ("Jacob", "Cob", "VP of HR", null);

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;
