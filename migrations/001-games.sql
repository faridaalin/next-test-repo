-- UP

CREATE TABLE Users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT,
    age INTEGER
);


INSERT INTO Users (username, age) values ('Anna', 28);
INSERT INTO Users (username, age) values ('Kevin', 14);
INSERT INTO Users (username, age) values ('Anna', 32);


-- DOWN
DROP TABLE Users;