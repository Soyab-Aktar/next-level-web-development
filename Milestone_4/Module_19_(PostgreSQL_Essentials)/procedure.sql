-- Update employee
create procedure update_emp_id(emp_id int)
language plpgsql
as
$$
  begin
  update employees set name = 'EVO' where id = emp_id;
  end
$$

-- Insert Data
create procedure insert_Data(emp_id int, emp_name varchar, emp_department varchar, emp_salary int) language plpgsql as
$$
  begin
  insert into employees (id,name,department,salary) values (emp_id, emp_name, emp_department, emp_salary);
  end
$$

-- inc Salary to 10%
create procedure inc_salary_emp (emp_department varchar(50)) language plpgsql as
$$
  declare avg_salary int;
  begin
  select avg(salary) into avg_salary from employees where department = emp_department;
  update employees set salary = salary * 1.1 where department = emp_department and salary < avg_salary;
  end
$$




call insert_Data(6,'EVO','3dArtist',60000)
call update_emp_id(6);
call inc_salary_emp('IT')

