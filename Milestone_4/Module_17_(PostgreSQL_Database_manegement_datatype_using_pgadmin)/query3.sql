-- Create Table
CREATE TABLE person(
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE,
  email VARCHAR(50) UNIQUE,
  age INT CHECK (age >= 18),
  isActive BOOLEAN DEFAULT true
)

-- Single-Row insert 
INSERT INTO person (id,username,email,age,isActive) VALUES (1, 'Soyab Aktar', 'soyab23@gmail.com', 21, true);
INSERT INTO person (id,username,email,age,isActive) VALUES (2, 'Evo Fresh', 'evo@gmail.com', 23, false);

-- Multi-Row insert
INSERT INTO person (id,username,email,age,isActive) VALUES
(3, 'Tantrik Tripathi', 'tantrik@gmail.com', 22, true),
(4, 'Harshit Malhotra', 'harshit@gmail.com', 25, true),
(5, 'Aman Akther', 'aman@gmail.com', 22, false);