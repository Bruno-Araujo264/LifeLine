var express = require("express");
var router = express.Router();

var lerController = require("../controllers/lerController");

router.get("/coletarRegistros", function (req, res) {
    lerController.coletarRegistros(req, res);
})

module.exports = router;