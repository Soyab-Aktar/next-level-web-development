-- limit
select * from students limit 5;
select * from students where country in ('USA','England','China') limit 3;

-- offset
select * from students order by student_id asc limit 5 offset 3;