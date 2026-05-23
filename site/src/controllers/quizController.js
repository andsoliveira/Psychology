let quizModel = require("../models/quizModel");

function salvar(req, res) {
    let fkUsuario = req.body.fkUsuario;
    let serotonina = req.body.serotonina;
    let dopamina = req.body.dopamina;
    let endorfina = req.body.endorfina;
    let ocitocina = req.body.ocitocina;
    let acertos = req.body.acertos;
    let totalPerguntas = req.body.totalPerguntas;

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
    let idUsuario = req.params.idUsuario;

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