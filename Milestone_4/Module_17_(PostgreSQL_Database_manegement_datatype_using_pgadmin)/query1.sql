-- Create Database
CREATE DATABASE school;

-- Delete Database
DROP DATABASE school;

-- Table Creation
CREATE TABLE students (
  id serial,
  name VARCHAR(50),
  age INT,
  isActive BOOLEAN,
  dob DATE
);

-- Delete (Drop) the table permanently
DROP TABLE students;
-- or
DROP TABLE IF EXISTS students;