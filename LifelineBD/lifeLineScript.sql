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
    conteudo VARCHAR(1000),
    dtRegistro DATE,
    fkUsuario INT,
    CONSTRAINT pkRegistro PRIMARY KEY (idregistro , fkUsuario),
    CONSTRAINT fkRegistrosUsuario FOREIGN KEY (fkUsuario)
        REFERENCES usuario (idusuario)
);

alter table registros modify column dtRegistro varchar(10);
SELECT 
    *
FROM
    usuario;

SELECT 
    *
FROM
    registros;

