 -- Create Table
create table students (
  student_id serial primary key,
  first_name varchar(50) not null,
  last_name varchar(50) not null,
  age int,
  grade char(2),
  course varchar(50),
  email varchar(100) unique,
  dob date,
  blood_group varchar(5),
  country varchar(50)
)

 -- Insert Data
INSERT INTO students 
(first_name, last_name, age, grade, course, email, dob, blood_group, country)
VALUES
('Aarav', 'Sharma', 20, 'A+', 'Computer Science', 'aarav.sharma@gmail.com', '2004-03-12', 'O+', 'India'),
('Riya', 'Verma', 19, 'A', 'Information Technology', 'riya.verma@gmail.com', '2005-07-25', 'A+', 'India'),
('Kabir', 'Mehta', 21, 'B+', 'Mechanical Engineering', 'kabir.mehta@gmail.com', '2003-11-02', 'B+', 'India'),
('Ananya', 'Gupta', 22, 'A', 'Electrical Engineering', 'ananya.gupta@gmail.com', '2002-09-18', 'AB+', 'India'),
('Rahul', 'Singh', 20, 'B', 'Civil Engineering', 'rahul.singh@gmail.com', '2004-01-30', 'O-', 'India'),
('Sneha', 'Patel', 19, 'A+', 'Computer Applications', 'sneha.patel@gmail.com', '2005-05-14', 'B-', 'India'),
('Vikram', 'Iyer', 23, 'B+', 'Electronics', 'vikram.iyer@gmail.com', '2001-08-09', 'A-', 'India'),
('Pooja', 'Nair', 21, 'A', 'Data Science', 'pooja.nair@gmail.com', '2003-12-21', 'O+', 'India'),
('Arjun', 'Reddy', 22, 'B+', 'Artificial Intelligence', 'arjun.reddy@gmail.com', '2002-06-04', 'AB-', 'India'),
('Neha', 'Malhotra', 20, 'A', 'Software Engineering', 'neha.malhotra@gmail.com', '2004-10-16', 'A+', 'India');

-- Using Select
select * from students;
select first_name, last_name, age  from students;

-- [Column Alias]
select first_name as "First Name" from students;
select first_name as "First Name", last_name as "Last Name", age as "Student Age"  from students;

-- [Sorting]
select first_name, last_name, age from students order by age desc;
select first_name, last_name, age from students order by first_name asc;