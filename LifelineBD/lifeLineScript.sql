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

select * from registros; 

select count(dtRegistro) from registros where dtRegistro = '2024-11-24';

select distinct dtregistro from registros order by dtRegistro desc limit 7;

select count(dtregistro) from registros;

select count(emocao) from registros where emocao = "feliz" and dtRegistro > '2024-11-24';
select count(emocao) from registros where emocao = "triste" and dtRegistro > '2024-11-24';
select count(emocao) from registros where emocao = "raiva" and dtRegistro > '2024-11-24';
select count(emocao) from registros where emocao = "surpreso" and dtRegistro > '2024-11-24';
select count(emocao) from registros where emocao = "medo" and dtRegistro > '2024-11-24';





