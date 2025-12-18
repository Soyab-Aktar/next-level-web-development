-- Create Table - Column_Constraints
CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  name VARCHAR(20) NOT NULL,
  email VARCHAR(100) UNIQUE,
  age SMALLINT CHECK (age >= 18),
  isActive BOOLEAN DEFAULT true
)
-- Create Table - Multiple Constraints
CREATE TABLE students (
  id SERIAL,
  userName VARCHAR(20) NOT NULL,
  email VARCHAR(100),
  age SMALLINT CHECK (age >= 18),
  isActive BOOLEAN DEFAULT true,
  PRIMARY KEY(id),
  UNIQUE(userName,email)
)
