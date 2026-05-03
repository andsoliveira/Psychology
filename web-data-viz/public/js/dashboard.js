function carregarDashboardQuiz() {
    var idUsuario = sessionStorage.ID_USUARIO;

    fetch("/quiz/ultimo/" + idUsuario)
        .then(function (resposta) {
            if (resposta.status == 204) {
                console.log("Nenhum resultado encontrado para este usuário.");
                return;
            }

            return resposta.json();
        })
        .then(function (dados) {
            if (dados) {
                var serotonina = Number(dados.serotonina);
                var dopamina = Number(dados.dopamina);
                var endorfina = Number(dados.endorfina);
                var ocitocina = Number(dados.ocitocina);

                document.getElementById("porcentagem_serotonina").innerHTML = serotonina + "%";
                document.getElementById("porcentagem_dopamina").innerHTML = dopamina + "%";
                document.getElementById("porcentagem_endorfina").innerHTML = endorfina + "%";
                document.getElementById("porcentagem_ocitocina").innerHTML = ocitocina + "%";

                criarGrafico(serotonina, dopamina, endorfina, ocitocina);
            }
        })
        .catch(function (erro) {
            console.log(erro);
        });
}

function criarGrafico(serotonina, dopamina, endorfina, ocitocina) {
    var ctx = document.getElementById("graficoQuiz").getContext("2d");

    new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["Serotonina", "Dopamina", "Endorfina", "Ocitocina"],
            datasets: [{
                label: "Porcentagem de acertos",
                data: [serotonina, dopamina, endorfina, ocitocina]
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
}