var dashboardModel = require("../models/dashboardModel");

function contarEmocoes(req, res) {
    const idUsuario = req.query.idUsuario;
        dashboardModel.contarEmocoes(idUsuario)
            .then(
                function (resultado) {
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); 
                    res.json(resultado);

                    }
            );
    }

function ordenarEmocoes(req, res) {
    const idUsuario = req.query.idUsuario;

    dashboardModel.ordenarEmocoes(idUsuario)
        .then(
            function (resultado) {
                console.log(`Resultados: ${JSON.stringify(resultado)}`); 
                res.json(resultado);

                }
        );
}

function contarUltimaSemana(req, res) {
    const idUsuario = req.query.idUsuario;

        dashboardModel.contarUltimaSemana(idUsuario)
            .then(
                function (resultado) {
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); 
                    res.json(resultado);
                    }
            );
    }

module.exports = {
    contarEmocoes,
    ordenarEmocoes,
    contarUltimaSemana
}