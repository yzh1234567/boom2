set names utf8;
drop database if exists coobar;
create database coobar charset utf8;
use coobar;
create table coobar_user(
     uid int primary key auto_increment,
     uname varchar(20) unique not null,
     upwd varchar(20)  not null,
     phone char(11) ,
     email varchar(20),
     sex tinyint,
     birthday date
);

