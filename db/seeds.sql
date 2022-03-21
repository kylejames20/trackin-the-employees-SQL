INSERT INTO department (id, name)
VALUES (1, "Coaches"),
       (2, "Starters"),
       (3, "Bench");

INSERT INTO role (id, title, salary, department_id)
VALUES (1, "Head Coach", 90000, 1),
       (2, "Assisstant Coach", 50000, 1),
       (3, "Starting Point Guard", 50000, 2),
       (4, "Starting Two Guard", 50000, 2),
       (5, "Starting Forward", 50000, 2),
       (6, "Starting Power Forward", 50000, 2),
       (7, "Starting Center", 50000, 2),
       (8, "Bench Point Guard", 40000, 3),
       (9, "Bench Forward", 40000, 3),
       (10, "Bench Center", 40000, 3);

INSERT INTO employee(id, first_name, last_name, role_id, manager_id)
VALUES (1, "Juwan", "Howard", 1, 1),
       (2, "Phil", "Martelli", 1, 1),
       (3, "Devonte", "Jones", 2, 1),
       (4, "Eli", "Brooks", 2, 1),
       (5, "Moussa", "Diabate", 2, 1),
       (6, "Caleb", "Houstan", 2, 1),
       (7, "Hunter", "Dickenson", 2, 1),
       (8, "Frankie", "Collins", 3, 1),
       (9, "Terrance", "Williams", 3, 1),
       (10, "Brandon", "Johns", 3, 1),
       (11, "Kobe", "Bufkin", 3, 1),
       (12, "Adrian", "Nunez", 3, 1);
