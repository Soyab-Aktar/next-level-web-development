-- is
select * from students where email is null;
select * from students where email is not null;

-- Coalesce 
select coalesce(null, null,2, 3) -- Return First not null argumant
select first_name, age, coalesce(email,'Not Provided') as "email" from students