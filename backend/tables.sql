create database Mgs;
use Mgs;

create table cadastro(
    id_user int primary key auto_increment,
    name varchar(255),
    email varchar(255),
    password varchar(255),
    dataNasc date,
    palavraRecuperacao varchar(255)
)



create table tb_VersUser(
    id_Vers int primary key auto_increment,
    id_user int,
    sentimento varchar(50),
    descricao varchar(255),
    desc_vers varchar(255),
	vers varchar(255),
    foreign key (id_user) references cadastro(id_user)
);

