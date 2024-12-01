var database = require("../database/config")

function contarEmocoes(idUsuario) { //Nesta função seleciono as emoções e a quantidade de vcs que eles se repetiram, nos últimos 7 dias
    var instrucaoSql = `
        SELECT emocao, COUNT(*) AS qtdEmocoes
        FROM registros
        WHERE dtRegistro >= 
        (SELECT dtregistro
            FROM (SELECT DISTINCT dtregistro 
                  FROM registros
                  WHERE fkUsuario = ${idUsuario}
                  ORDER BY dtRegistro DESC
                  LIMIT 7) 
                  AS UltimaSemana
                ORDER BY dtregistro ASC
                LIMIT 1)
                and fkUsuario = ${idUsuario}
        GROUP BY emocao;
    `; //Utilizo uma tabela derivada, para selecionar a data limite
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function contarUltimaSemana(idUsuario){//Nesta função, seleciono os ultimos 7 dias e a quantidade de registros em cada dia
    var instrucaoSql = `
    select dtregistro, count(*) as qtdRegistros
		FROM registros 
        WHERE fkUsuario = ${idUsuario}
        group by dtregistro
        order by dtregistro desc
        limit 7;
`;
console.log("Executando a instrução SQL: \n" + instrucaoSql);
return database.executar(instrucaoSql);
}

function ordenarEmocoes(idUsuario) {
    var instrucaoSql = `
        SELECT emocao, COUNT(*) AS qtdEmocoes
        FROM registros
        WHERE dtRegistro >= 
        (SELECT dtregistro
            FROM (SELECT DISTINCT dtregistro 
                  FROM registros
                  WHERE fkUsuario = ${idUsuario}
                  ORDER BY dtRegistro DESC
                  LIMIT 7) 
                  AS UltimaSemana
                ORDER BY dtregistro ASC
                LIMIT 1)
                and fkUsuario = ${idUsuario}
        GROUP BY emocao
        order by qtdEmocoes desc;
    `; //Utilizo uma tabela derivada, para selecionar a data limite
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    contarEmocoes,
    ordenarEmocoes,
    contarUltimaSemana
};