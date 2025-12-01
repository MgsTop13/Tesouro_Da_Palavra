CREATE DATABASE Versiculos;
USE Versiculos; 

create table cadastro(
    id_user int primary key auto_increment,
    name varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
    dataNasc date NOT NULL,
    admin boolean default(false),
    palavraRecuperacao varchar(255) NOT NULL
);

create table Admins(
    id_Admin int primary key auto_increment,
    id_user int NOT NULL,
    nameADM varchar(255) NOT NULL,
    foreign key (id_user) references cadastro(id_user)
);

create table VersiculosUser(
    id_Vers int primary key auto_increment,
    id_user int NOT NULL,
    sentimento varchar(50) NOT NULL,
    descricao varchar(255) NOT NULL,
    desc_vers varchar(255) NOT NULL,
	vers varchar(255) NOT NULL,
    favorito boolean DEFAULT(false),
    foreign key (id_user) references cadastro(id_user)
);

create table VersiculosGlobal(
    id_Vers int primary key auto_increment,
    id_user int NOT NULL,
    sentimento varchar(50) NOT NULL,
    descricao varchar(255) NOT NULL,
    desc_vers varchar(255) NOT NULL,
	vers varchar(255) NOT NULL,
    favorito boolean DEFAULT(false),
    foreign key (id_user) references cadastro(id_user)
);

create table Suporte(
    id_msg int primary key auto_increment,
    id_user int NOT NULL,
    nameUser varchar(255) NOT NULL,
    msg varchar(255) NOT NULL,
    foreign key (id_user) references cadastro(id_user)
)
