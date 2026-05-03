var quizModel = require("../models/quizModel");

function salvar(req, res) {
    var fkUsuario = req.body.fkUsuario;
    var serotonina = req.body.serotonina;
    var dopamina = req.body.dopamina;
    var endorfina = req.body.endorfina;
    var ocitocina = req.body.ocitocina;
    var acertos = req.body.acertos;
    var totalPerguntas = req.body.totalPerguntas;

    quizModel.salvarResultado(
        fkUsuario,
        serotonina,
        dopamina,
        endorfina,
        ocitocina,
        acertos,
        totalPerguntas
    ).then(function () {
        res.status(200).json({
            mensagem: "Resultado salvo com sucesso"
        });
    }).catch(function (erro) {
        res.status(500).json(erro);
    });
}

function buscarUltimo(req, res) {
    var idUsuario = req.params.idUsuario;

    quizModel.buscarUltimoResultado(idUsuario)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado[0]);
            } else {
                res.status(204).json({
                    mensagem: "Nenhum resultado encontrado"
                });
            }
        })
        .catch(function (erro) {
            res.status(500).json(erro);
        });
}

module.exports = {
    salvar,
    buscarUltimo
};