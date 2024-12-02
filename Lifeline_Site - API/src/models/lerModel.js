var database = require("../database/config")

function coletarRegistros(idUsuario) { 
    var instrucaoSql = `
        SELECT 
    assunto, emocao, conteudo, dtRegistro
    FROM
        registros
    WHERE
        fkUsuario = ${idUsuario}
    ORDER BY dtRegistro;
    `; 
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    coletarRegistros
};