 -- NOT
select * from students where not country = 'India';
select * from students where not grade = 'A+' ;

-- Scalar Function
-- upper, lower, concat , length
select
  upper(first_name) as "First Name as upper form",
  lower(first_name) as "First Name as lower form",
  concat(first_name, ' ', last_name) as "Full Name [first_name + last_name]",
  length(first_name) as "First Name Length"
from
  students;

-- Aggregate Function
-- avg, max, min, count
select
  avg(age) as "Student Age [Avg]",
  max(age) as "Student Age [Max]",
  min(age) as "Student Age [Min]",
  sum(age) as "Student Age [Sum]",
  count(first_name) as "Total Students [count]",
  count(*) as "Total Students [count]" 
from
  students;