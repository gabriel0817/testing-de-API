CREATE TABLE firstapi;

CREATE TABLE users(
    id serial PRIMARY KEY,
    name varchar(50) not null,
    email text not null
);

insert into users(name,email) values
    ('juan','juan@gmail.com'),
    ('maria','maria@gmail.com');
