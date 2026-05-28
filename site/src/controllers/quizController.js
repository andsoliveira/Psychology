//Importa o model responsável pelas funções do quiz
let quizModel = require("../models/quizModel");

//Função responsável por salvar os resultados do quiz
function salvar(req, res) {

    // Recupera os dados enviados pelo front-end
    let fkUsuario = req.body.fkUsuario;
    let serotonina = req.body.serotonina;
    let dopamina = req.body.dopamina;
    let endorfina = req.body.endorfina;
    let ocitocina = req.body.ocitocina;
    let acertos = req.body.acertos;
    let totalPerguntas = req.body.totalPerguntas;

    // Chama o model para salvar os dados no banco
    quizModel.salvarResultado(
        fkUsuario,
        serotonina,
        dopamina,
        endorfina,
        ocitocina,
        acertos,
        totalPerguntas
    )
    //Caso de certo retorna 200    
    .then(function () {
        res.status(200).json({
            mensagem: "Resultado salvo com sucesso"
        });
    //Caso aconteça algum erro retorna 500
    }).catch(function (erro) {
        res.status(500).json(erro);
    });
}

// Função responsável por buscar o último quiz do usuário
function buscarUltimo(req, res) {

    // Recupera o id enviado pela rota
    let idUsuario = req.params.idUsuario;

    // Chama o model para buscar o último resultado do usuário
    quizModel.buscarUltimoResultado(idUsuario)

        .then(function (resultado) {
            // Verifica se encontrou algum resultado sobre o usuário
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

// Exporta as funções para serem usadas nas rotas
module.exports = {
    salvar,
    buscarUltimo
};