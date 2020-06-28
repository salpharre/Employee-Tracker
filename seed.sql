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
