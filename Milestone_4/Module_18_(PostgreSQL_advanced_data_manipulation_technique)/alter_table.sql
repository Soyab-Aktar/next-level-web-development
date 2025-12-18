-- Create Table
create table employe (
  id serial,
  name varchar(50),
  age int
)

-- Rename Table Name
alter table employe rename to employee;

-- Add a new column
alter table employee add column email varchar(50);

-- Rename a column
alter table employee rename column name to user_name;

-- Modifying Constraints
alter table employee alter column user_name type varchar(45);

-- Add Constraints
alter table employee alter column email set not null;

-- Drop Constraints
alter table employee alter column email  drop not null;

-- Remove Default
alter table employee alter column email drop Default;

-- Add Constrints (Table level Constraints)
alter table employee add constraint unique_employee_email unique(email);
alter table employee add constraint pk_employee_id primary key(id);

-- Remove Constrints ( Table Level Constraints)
alter table employee drop constraint unique_employee_email;

