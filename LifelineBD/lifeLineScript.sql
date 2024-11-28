create database lifeLine;
use lifeLine;



CREATE TABLE usuario (
  idusuario INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(45),
  senha VARCHAR(45),
  email VARCHAR(60),
  titulo VARCHAR(45)
  );
  
  describe usuario;

CREATE TABLE registros (
  idregistro INT AUTO_INCREMENT,
  assunto VARCHAR(45),
  emocao VARCHAR(10),
  conteudo varchar(1000),
  dtRegistro DATE,
  fkUsuario INT,
  CONSTRAINT pkRegistro PRIMARY KEY (idregistro,fkUsuario),
  CONSTRAINT fkRegistrosUsuario FOREIGN KEY (fkUsuario) REFERENCES usuario(idusuario));

select * from usuario;
alter table registros modify column idregistro int AUTO_INCREMENT;
select * from registros;


