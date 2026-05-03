var database = require("../database/config");

function salvarResultado(fkUsuario, serotonina, dopamina, endorfina, ocitocina, acertos, totalPerguntas) {
    var instrucao = `
        INSERT INTO QuizResultado 
        (fkUsuario, serotonina, dopamina, endorfina, ocitocina, acertos, totalPerguntas)
        VALUES 
        (${fkUsuario}, ${serotonina}, ${dopamina}, ${endorfina}, ${ocitocina}, ${acertos}, ${totalPerguntas});
    `;

    return database.executar(instrucao);
}

function buscarUltimoResultado(idUsuario) {
    var instrucao = `
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

    return database.executar(instrucao);
}

module.exports = {
    salvarResultado,
    buscarUltimoResultado
};