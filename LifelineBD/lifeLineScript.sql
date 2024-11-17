create database LifeLine;
use LifeLine;

CREATE TABLE usuario (
  idusuario INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(45),
  senha VARCHAR(45),
  email VARCHAR(60));
  
CREATE TABLE livro (
  idlivro INT PRIMARY KEY AUTO_INCREMENT,
  titulo VARCHAR(45) NULL,
  fkUsuario INT NOT NULL,
  CONSTRAINT fkLivroUsuario FOREIGN KEY (fkUsuario) REFERENCES usuario(idusuario));

CREATE TABLE registros (
  idregistro INT,
  assunto VARCHAR(45),
  emocao VARCHAR(10),
  dtRegistro DATE,
  imagem BLOB,
  fkLivro INT,
  fkUsuario INT,
  CONSTRAINT pkRegistro PRIMARY KEY (idregistro,fkLivro,fkUsuario),
  CONSTRAINT fkRegistrosLivro FOREIGN KEY (fkLivro) REFERENCES livro(idlivro),
  CONSTRAINT fkRegistrosUsuario FOREIGN KEY (fkUsuario) REFERENCES usuario(fkUsuario));


