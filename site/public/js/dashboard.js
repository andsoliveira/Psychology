function carregarDashboardQuiz() {
  let idUsuario = sessionStorage.ID_USUARIO;

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
        let serotonina = Number(dados.serotonina);
        let dopamina = Number(dados.dopamina);
        let endorfina = Number(dados.endorfina);
        let ocitocina = Number(dados.ocitocina);

        let porcentagemSerotonina = document.getElementById(
          "porcentagem_serotonina",
        );
        porcentagemSerotonina.innerHTML = serotonina + "%";
        porcentagemSerotonina.style.color = escolherCorTexto(serotonina);

        let porcentagemDopamina = document.getElementById(
          "porcentagem_dopamina",
        );
        porcentagemDopamina.innerHTML = dopamina + "%";
        porcentagemDopamina.style.color = escolherCorTexto(dopamina);

        let porcentagemEndorfina = document.getElementById(
          "porcentagem_endorfina",
        );
        porcentagemEndorfina.innerHTML = endorfina + "%";
        porcentagemEndorfina.style.color = escolherCorTexto(endorfina);

        let porcentagemOcitocina = document.getElementById(
          "porcentagem_ocitocina",
        );
        porcentagemOcitocina.innerHTML = ocitocina + "%";
        porcentagemOcitocina.style.color = escolherCorTexto(ocitocina);

        document.getElementById("porcentagem_serotonina").innerHTML =
          serotonina + "%";
        document.getElementById("porcentagem_dopamina").innerHTML =
          dopamina + "%";
        document.getElementById("porcentagem_endorfina").innerHTML =
          endorfina + "%";
        document.getElementById("porcentagem_ocitocina").innerHTML =
          ocitocina + "%";

        criarGrafico(serotonina, dopamina, endorfina, ocitocina);

        let mediaQuiz = (serotonina + dopamina + endorfina + ocitocina) / 4;

        let kpi = document.getElementById("kpi_entendimento");
        let texto = document.getElementById("texto_kpi");

        kpi.classList.remove("kpi-verde", "kpi-amarelo", "kpi-vermelho");

        if (mediaQuiz >= 80) {
          kpi.classList.add("kpi-verde");
          texto.innerHTML = "Você entendeu o conteúdo.";
        } else if (mediaQuiz >= 60) {
          kpi.classList.add("kpi-amarelo");
          texto.innerHTML = "Você entendeu bem, mas ainda pode melhorar.";
        } else {
          kpi.classList.add("kpi-vermelho");
          texto.innerHTML = "Reveja o conteúdo para melhorar seu entendimento.";
        }
      }
    })
    .catch(function (erro) {
      console.log(erro);
    });
}

function escolherCor(valor) {
  if (valor >= 80) {
    return "#4cff88";
  } else if (valor >= 60) {
    return "#ffd54f";
  } else {
    return "#ff4c4c";
  }
}

function criarGrafico(serotonina, dopamina, endorfina, ocitocina) {
  let ctx = document.getElementById("graficoQuiz").getContext("2d");

  let dadosGrafico = [serotonina, dopamina, endorfina, ocitocina];

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Serotonina", "Dopamina", "Endorfina", "Ocitocina"],
      datasets: [
        {
          label: "Porcentagem de acertos",
          data: dadosGrafico,
          backgroundColor: [
            escolherCor(serotonina),
            escolherCor(dopamina),
            escolherCor(endorfina),
            escolherCor(ocitocina),
          ],
          borderColor: [
            escolherCor(serotonina),
            escolherCor(dopamina),
            escolherCor(endorfina),
            escolherCor(ocitocina),
          ],
          // Ajuste de largura das barras para melhorar a visualização
          borderWidth: 1,
          barPercentage: 0.8,
          categoryPercentage: 0.6,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,

      scales: {
        y: {
          beginAtZero: true,
          max: 100,
        },
      },
    },
  });
}

function escolherCorTexto(valor) {
  if (valor >= 80) {
    return "#4cff88";
  } else if (valor >= 60) {
    return "#ffd54f";
  } else {
    return "#ff4c4c";
  }
}
