let express = require("express");
let router = express.Router();

// Importa o controller responsável pelo quiz
let quizController = require("../controllers/quizController");

// Rota responsável por salvar o resultado do quiz
router.post("/salvar", function (req, res) {
    quizController.salvar(req, res);
});

// Rota responsável por buscar o último quiz do usuário
router.get("/ultimo/:idUsuario", function (req, res) {
    quizController.buscarUltimo(req, res);
});

module.exports = router;