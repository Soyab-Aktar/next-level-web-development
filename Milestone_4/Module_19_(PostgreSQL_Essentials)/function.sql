-- count employees
create function emp_count()
returns int
language sql
as
$$
  select count(*) from employees;
$$

select emp_count()

-- Delete Employee
create function delete_emp_id(emp_id int)
returns void
language sql
as
$$
  delete from employees where id = emp_id
$$

select delete_emp_id(1)