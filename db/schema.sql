DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
	burger_name VARCHAR(55) NOT NULL,
    devoured BOOLEAN DEFAULT false
);

INSERT INTO burgers (burger_name, devoured)
VALUES ("Cheeseburger", false);

SELECT * FROM burgers;