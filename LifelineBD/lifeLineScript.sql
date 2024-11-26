create database LifeLine;
use LifeLine;



CREATE TABLE usuario (
  idusuario INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(45),
  senha VARCHAR(45),
  email VARCHAR(60),
  titulo VARCHAR(45)
  );
  
  describe usuario;

CREATE TABLE registros (
  idregistro INT,
  assunto VARCHAR(45),
  emocao VARCHAR(10),
  conteudo varchar(1000),
  dtRegistro DATE,
  -- imagem BLOB,
  fkUsuario INT,
  CONSTRAINT pkRegistro PRIMARY KEY (idregistro,fkUsuario),
  CONSTRAINT fkRegistrosUsuario FOREIGN KEY (fkUsuario) REFERENCES usuario(idusuario));

select * from usuario;


