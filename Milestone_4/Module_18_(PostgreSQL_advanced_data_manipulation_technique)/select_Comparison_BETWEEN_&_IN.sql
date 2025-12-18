-- Comparison operators
select * from students where age > 20;
select * from students where age < 20;
select * from students where age = 20;
select * from students where country != 'India';
select * from students where country <> 'India';

-- Between 
select * from students where age between 20 and 21;

--In
select * from students where country = 'England' or country = 'USA' or country = 'China'
select * from students where country in ('USA','China');