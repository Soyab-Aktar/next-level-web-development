-- Update
update students set email = 'default2@gmail.com' where email is null;
update students set email = 'default@gmail.com' where email is null and student_id = '8';
update students set first_name = 'Soyab', last_name = 'Aktar' ,age = 21 where student_id = 1;

--Delete
delete from students where grade = 'B'; 
delete from students where age = 20;

--Group By
select country, count(*) as Students from students group by country;
select grade, count(*) as Students from students group by grade;

--GROUP BY With HAVING
select grade , count(*) from students group by grade having count(*) < 4
select course , count(*) from students group by course having count(*) < 4
select country, count(*) from students group by country having avg(age) > 20