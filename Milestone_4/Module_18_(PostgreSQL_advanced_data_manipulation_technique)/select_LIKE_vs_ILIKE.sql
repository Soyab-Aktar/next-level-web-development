-- Like
select * from students where first_name  like 'A%';
select * from students where first_name  like '%a';
select * from students where first_name  like 'P____';
select * from students where first_name  like '%a_';

--ILike
select * from students where email ilike 'A%';
select * from students where email ilike 'a%';