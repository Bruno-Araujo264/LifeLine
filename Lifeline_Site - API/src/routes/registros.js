var express = require("express");
var router = express.Router();

var registrosController = require("../controllers/registrosController");

//Recebendo os dados do html e direcionando para a função cadastrar de registrosController.js
router.post("/registrar", function (req, res) {
    registrosController.registrar(req, res);
})

module.exports = router;