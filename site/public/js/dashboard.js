// Função responsável por carregar os dados do último quiz na dashboard
function carregarDashboardQuiz() {

  // Pega o id do usuário logado no sessionStorage
  let idUsuario = sessionStorage.ID_USUARIO;

  // Busca no backend o último resultado do quiz desse usuário
  fetch("/quiz/ultimo/" + idUsuario)
    .then(function (resposta) {
      if (resposta.status == 204) {
        console.log("Nenhum resultado encontrado para este usuário.");
        return;
      }

      return resposta.json();
    })
    // Recebe os dados convertidos em JSON
    .then(function (dados) {
      // Só continua se realmente existirem dados
      if (dados) {
        // Converte os valores recebidos do banco para número
        let serotonina = Number(dados.serotonina);
        let dopamina = Number(dados.dopamina);
        let endorfina = Number(dados.endorfina);
        let ocitocina = Number(dados.ocitocina);

        let porcentagemSerotonina = document.getElementById(
          "porcentagem_serotonina",
        );
        porcentagemSerotonina.innerHTML = serotonina + "%";
        porcentagemSerotonina.style.color = escolherCor(serotonina);

        let porcentagemDopamina = document.getElementById(
          "porcentagem_dopamina",
        );
        porcentagemDopamina.innerHTML = dopamina + "%";
        porcentagemDopamina.style.color = escolherCor(dopamina);

        let porcentagemEndorfina = document.getElementById(
          "porcentagem_endorfina",
        );
        porcentagemEndorfina.innerHTML = endorfina + "%";
        porcentagemEndorfina.style.color = escolherCor(endorfina);

        let porcentagemOcitocina = document.getElementById(
          "porcentagem_ocitocina",
        );
        porcentagemOcitocina.innerHTML = ocitocina + "%";
        porcentagemOcitocina.style.color = escolherCor(ocitocina);

        // Cria o gráfico com os valores recebidos do banco
        criarGrafico(serotonina, dopamina, endorfina, ocitocina);

        // Calcula a média geral do quiz
        let mediaQuiz = (serotonina + dopamina + endorfina + ocitocina) / 4;

        // Pega o card do KPI e o texto que será alterado
        let kpi = document.getElementById("kpi_entendimento");
        let texto = document.getElementById("texto_kpi");

        // Remove as classes antigas antes de aplicar uma nova cor
        kpi.classList.remove("kpi-verde", "kpi-amarelo", "kpi-vermelho");

        // Define a cor e a mensagem do KPI conforme a média do quiz
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

// Função responsável por escolher a cor
function escolherCor(valor) {
  if (valor >= 80) {
    return "#4cff88";
  } else if (valor >= 60) {
    return "#ffd54f";
  } else {
    return "#ff4c4c";
  }
}

// Função responsável por criar o gráfico da dashboard
function criarGrafico(serotonina, dopamina, endorfina, ocitocina) {
  let ctx = document.getElementById("graficoQuiz");

  // Guarda os valores que serão exibidos no gráfico
  let dadosGrafico = [serotonina, dopamina, endorfina, ocitocina];

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Serotonina", "Dopamina", "Endorfina", "Ocitocina"],
      datasets: [
        {
          label: "",
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
