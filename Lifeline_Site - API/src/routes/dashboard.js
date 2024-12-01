var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

//Recebendo os dados do html e direcionando para a função contar(emoção) de dashboardController.js

router.get("/contarEmocoes", function (req, res) {
    dashboardController.contarEmocoes(req, res);
})

router.get("/contarUltimaSemana", function (req, res) {
    dashboardController.contarUltimaSemana(req, res);
})

router.get("/ordenarEmocoes", function (req, res) {
    dashboardController.ordenarEmocoes(req, res);
})



module.exports = router;