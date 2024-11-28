var registrosModel = require("../models/registrosModel");

function registrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo registros.html
    var assunto = req.body.assuntoServer;
    var emoji = req.body.emojiServer;
    var conteudo = req.body.conteudoServer;
    var data = req.body.dataServer;
    var fkUsuario = req.body.fkUsuarioServer;

    // Faça as validações dos valores
    if (assunto == undefined) {
        res.status(400).send("Seu emoji está undefined!");
    } else if (data == undefined) {
        res.status(400).send("Seu conteudo está undefined!");
    } else if (conteudo == undefined) {
        res.status(400).send("Seu assunto está undefined!");
    } else if (emoji == undefined) {
        res.status(400).send("Sua data está undefined!");
    }  else if (fkUsuario == undefined) {
        res.status(400).send("Sua data está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo registrosModel.js
        registrosModel.registrar(assunto, emoji, conteudo, data, fkUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    registrar
}