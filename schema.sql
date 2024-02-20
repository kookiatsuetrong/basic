create database basic default charset 'UTF8';
use basic;
create user sample identified with mysql_native_password by 'pass';
grant all on basic.* to sample;

-- set time_zone = '+07:00';

create table messages
(
	number     int not null unique auto_increment,
	topic      varchar(200) not null,
	detail     varchar(4000),
	email      varchar(200) not null,
	created    timestamp default current_timestamp()
);



