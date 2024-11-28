var database = require("../database/config")

function registrar(assunto, emocao, conteudo, dtRegistro, fkUsuario) {
    console.log("ACESSEI O REGISTROS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", assunto, emocao, conteudo, dtRegistro, fkUsuario);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO registros VALUES (default,'${assunto}', '${emocao}', '${conteudo}', '${dtRegistro}', '${fkUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    registrar
};