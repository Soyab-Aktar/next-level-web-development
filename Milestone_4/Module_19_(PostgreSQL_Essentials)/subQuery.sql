select * from employees where salary = (select max(salary) from employees);
select * from employees where salary > (select avg(salary) from employees);
select * from employees where  salary = (select max(salary) from employees where department = 'HR' )