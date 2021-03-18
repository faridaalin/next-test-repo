
-- UP

CREATE TABLE Users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT,
    age INTEGER
);


INSERT INTO Users (username, age) values ('Anna', 28);
INSERT INTO Users (username, age) values ('Kevin', 14);
INSERT INTO Users (username, age) values ('Anna', 32);

CREATE TABLE Orders (
id INTEGER PRIMARY KEY AUTOINCREMENT,
userID INTEGER REFERENCES Users(id),
title TEXT,
description TEXT
);

INSERT INTO Orders (userID, title, description) values (1, 'Nike Air Zoom', 'Best shoes')
INSERT INTO Orders (userID, title, description) values (2, 'Vans', 'Nice shoes')
INSERT INTO Orders (userID, title, description) values (3, 'Rebook', 'Cool shoes')

-- DOWN
DROP TABLE Users;