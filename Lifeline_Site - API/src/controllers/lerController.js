var lerModel = require("../models/lerModel");

function coletarRegistros(req, res) {
    const idUsuario = req.query.idUsuario;
        lerModel.coletarRegistros(idUsuario)
            .then(
                function (resultado) {
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); 
                    res.json(resultado);

                    }
            );
    }

module.exports = {
    coletarRegistros
};