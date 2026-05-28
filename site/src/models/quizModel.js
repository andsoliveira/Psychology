let database = require("../database/config");

// Função responsável por salvar o resultado do quiz no banco
function salvarResultado(fkUsuario, serotonina, dopamina, endorfina, ocitocina, acertos, totalPerguntas) {
    // Cria o comando SQL para inserir os dados do quiz
    let instrucao = `
        INSERT INTO QuizResultado 
        (fkUsuario, serotonina, dopamina, endorfina, ocitocina, acertos, totalPerguntas)
        VALUES 
        (${fkUsuario}, ${serotonina}, ${dopamina}, ${endorfina}, ${ocitocina}, ${acertos}, ${totalPerguntas});
    `;

     // Executa o comando SQL no banco de dados
    return database.executar(instrucao);
}

// Função responsável por buscar o último resultado do usuário
function buscarUltimoResultado(idUsuario) {
    // Cria o comando SQL para buscar o último quiz salvo
    let instrucao = `
        SELECT 
            serotonina,
            dopamina,
            endorfina,
            ocitocina,
            acertos,
            totalPerguntas,
            dataResposta
        FROM QuizResultado
        WHERE fkUsuario = ${idUsuario}
        ORDER BY dataResposta DESC
        LIMIT 1;
    `;

    // Executa o comando SQL no banco de dados
    return database.executar(instrucao);
}

// Exporta as funções para serem usadas no controller
module.exports = {
    salvarResultado,
    buscarUltimoResultado
};