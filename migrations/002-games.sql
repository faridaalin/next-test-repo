
-- UP

CREATE TABLE Orders (
id INTEGER PRIMARY KEY AUTOINCREMENT,
userID INTEGER REFERENCES Users(id),
title TEXT,
description TEXT
);

INSERT INTO Orders (userID, title, description) values (1, 'Nike Air Zoom', 'Best shoes');
INSERT INTO Orders (userID, title, description) values (2, 'Vans', 'Nice shoes');
INSERT INTO Orders (userID, title, description) values (3, 'Rebook', 'Cool shoes');
INSERT INTO Orders (userID, title, description) values (3, 'Adidas', 'Cool shoes');

-- DOWN
DROP TABLE Orders;