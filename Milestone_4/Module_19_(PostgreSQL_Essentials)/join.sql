-- Inner Join
select title , username from posts join users on posts.user_id = users.id
select * from posts join users on posts.user_id = users.id
select posts.id , title, username from posts join users on posts.user_id = users.id
select p.id , title, username from posts as p join users as u on p.user_id = u.id

--Left Join
select * from posts as p left join users as u on p.user_id = u.id 
select * from users as u left join posts as p on p.user_id = u.id 

-- Right Join
select * from posts as p right join users as u on p.user_id = u.id 
select * from users as u right join posts as p on p.user_id = u.id 

--Full Join
select * from posts as p full join users as u on p.user_id = u.id 
select * from users as u full join posts as p on p.user_id = u.id 