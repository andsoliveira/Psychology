b_usuario.innerHTML = sessionStorage.NOME_USUARIO;

var perguntas = [
  {
    pergunta: "A serotonina está mais relacionada a qual aspecto?",
    alternativas: ["Equilíbrio do humor", "Digestão", "Respiração", "Visão"],
    correta: 0,
    hormonio: "serotonina",
  },
  {
    pergunta: "Baixos níveis de serotonina podem estar associados a:",
    alternativas: [
      "Melhora do humor",
      "Alterações de humor",
      "Aumento da força física",
      "Melhora da visão",
    ],
    correta: 1,
    hormonio: "serotonina",
  },
  {
    pergunta: "Qual prática pode ajudar naturalmente na produção de serotonina?",
    alternativas: [
      "Contato com luz solar",
      "Privação de sono",
      "Isolamento social",
      "Estresse constante",
    ],
    correta: 0,
    hormonio: "serotonina",
  },
  {
    pergunta: "A dopamina está relacionada principalmente a qual processo?",
    alternativas: ["Motivação e recompensa", "Digestão", "Respiração", "Visão"],
    correta: 0,
    hormonio: "dopamina",
  },
  {
    pergunta: "Qual situação estimula a dopamina naturalmente?",
    alternativas: [
      "Cumprir metas",
      "Evitar desafios",
      "Dormir mal",
      "Ficar isolado",
    ],
    correta: 0,
    hormonio: "dopamina",
  },
  {
    pergunta: "No contexto do projeto, a dopamina está ligada a:",
    alternativas: [
      "Sensação de conquista",
      "Controle da temperatura",
      "Digestão",
      "Sono profundo",
    ],
    correta: 0,
    hormonio: "dopamina",
  },
  {
    pergunta: "Qual prática estimula a liberação de endorfina?",
    alternativas: [
      "Atividade física",
      "Sedentarismo",
      "Privação de sono",
      "Estresse contínuo",
    ],
    correta: 0,
    hormonio: "endorfina",
  },
  {
    pergunta: "A endorfina está associada a:",
    alternativas: ["Alívio da dor e prazer", "Memória", "Visão", "Digestão"],
    correta: 0,
    hormonio: "endorfina",
  },
  {
    pergunta: "Durante exercícios, a endorfina contribui para:",
    alternativas: [
      "Sensação de bem-estar",
      "Cansaço extremo",
      "Perda de energia",
      "Redução do humor",
    ],
    correta: 0,
    hormonio: "endorfina",
  },
  {
    pergunta: "A ocitocina está ligada a:",
    alternativas: ["Vínculos sociais", "Digestão", "Visão", "Respiração"],
    correta: 0,
    hormonio: "ocitocina",
  },
  {
    pergunta: "Qual ação estimula a ocitocina?",
    alternativas: [
      "Abraços e interação social",
      "Isolamento",
      "Estresse",
      "Falta de sono",
    ],
    correta: 0,
    hormonio: "ocitocina",
  },
  {
    pergunta: "A ocitocina ajuda principalmente em:",
    alternativas: ["Confiança e conexão", "Dor muscular", "Fome", "Visão"],
    correta: 0,
    hormonio: "ocitocina",
  },
];

var respostasUsuario = [];

function embaralharPerguntas() {
  for (var i = 0; i < perguntas.length; i++) {
    var indiceAleatorio = Math.floor(Math.random() * perguntas.length);

    var temp = perguntas[i];
    perguntas[i] = perguntas[indiceAleatorio];
    perguntas[indiceAleatorio] = temp;
  }
}

function embaralharAlternativas(pergunta) {
  var respostaCorreta = pergunta.alternativas[pergunta.correta];

  for (var i = 0; i < pergunta.alternativas.length; i++) {
    var indiceAleatorio = Math.floor(Math.random() * pergunta.alternativas.length);

    var temp = pergunta.alternativas[i];
    pergunta.alternativas[i] = pergunta.alternativas[indiceAleatorio];
    pergunta.alternativas[indiceAleatorio] = temp;
  }

  for (var i = 0; i < pergunta.alternativas.length; i++) {
    if (pergunta.alternativas[i] == respostaCorreta) {
      pergunta.correta = i;
    }
  }
}

function carregarQuiz() {
  embaralharPerguntas();

  for (var i = 0; i < perguntas.length; i++) {
    embaralharAlternativas(perguntas[i]);
  }

  montarQuiz();
}

function montarQuiz() {
  var area = document.getElementById("area_perguntas");
  area.innerHTML = "";

  var letras = ["A", "B", "C", "D"];

  for (var i = 0; i < perguntas.length; i++) {
    var alternativasHTML = "";

    for (var j = 0; j < perguntas[i].alternativas.length; j++) {
      var corBotao = "";

      if (respostasUsuario[i] == j) {
        corBotao = "style='background-color:#32b9cd'";
      }

      alternativasHTML += `
        <button ${corBotao} onclick="responder(${i}, ${j})">
          ${letras[j]}) ${perguntas[i].alternativas[j]}
        </button>
      `;
    }

    area.innerHTML += `
      <div class="card-pergunta">
        <h3>${i + 1}. ${perguntas[i].pergunta}</h3>
        ${alternativasHTML}
      </div>
    `;
  }
}

function responder(numeroPergunta, alternativaEscolhida) {
  respostasUsuario[numeroPergunta] = alternativaEscolhida;
  montarQuiz();
}

function finalizarQuiz() {
  var acertos = 0;

  var pontosSerotonina = 0;
  var pontosDopamina = 0;
  var pontosEndorfina = 0;
  var pontosOcitocina = 0;

  var totalSerotonina = 0;
  var totalDopamina = 0;
  var totalEndorfina = 0;
  var totalOcitocina = 0;

  for (var i = 0; i < perguntas.length; i++) {
    if (perguntas[i].hormonio == "serotonina") {
      totalSerotonina++;
    } else if (perguntas[i].hormonio == "dopamina") {
      totalDopamina++;
    } else if (perguntas[i].hormonio == "endorfina") {
      totalEndorfina++;
    } else if (perguntas[i].hormonio == "ocitocina") {
      totalOcitocina++;
    }

    if (respostasUsuario[i] == perguntas[i].correta) {
      acertos++;

      if (perguntas[i].hormonio == "serotonina") {
        pontosSerotonina++;
      } else if (perguntas[i].hormonio == "dopamina") {
        pontosDopamina++;
      } else if (perguntas[i].hormonio == "endorfina") {
        pontosEndorfina++;
      } else if (perguntas[i].hormonio == "ocitocina") {
        pontosOcitocina++;
      }
    }
  }

  var porcentagemSerotonina = (pontosSerotonina / totalSerotonina) * 100;
  var porcentagemDopamina = (pontosDopamina / totalDopamina) * 100;
  var porcentagemEndorfina = (pontosEndorfina / totalEndorfina) * 100;
  var porcentagemOcitocina = (pontosOcitocina / totalOcitocina) * 100;

  resultado_quiz.innerHTML =
    "<h2>Resultado</h2>" +
    "<p>Você acertou " + acertos +" de " + perguntas.length + " perguntas.</p>" +
    "<p>Serotonina: " + porcentagemSerotonina.toFixed(0) + "%</p>" +
    "<p>Dopamina: " + porcentagemDopamina.toFixed(0) + "%</p>" +
    "<p>Endorfina: " + porcentagemEndorfina.toFixed(0) + "%</p>" +
    "<p>Ocitocina: " + porcentagemOcitocina.toFixed(0) + "%</p>";

  sessionStorage.PORCENTAGEM_SEROTONINA = porcentagemSerotonina.toFixed(0);
  sessionStorage.PORCENTAGEM_DOPAMINA = porcentagemDopamina.toFixed(0);
  sessionStorage.PORCENTAGEM_ENDORFINA = porcentagemEndorfina.toFixed(0);
  sessionStorage.PORCENTAGEM_OCITOCINA = porcentagemOcitocina.toFixed(0);

  fetch("/quiz/salvar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      fkUsuario: sessionStorage.ID_USUARIO,
      serotonina: porcentagemSerotonina.toFixed(0),
      dopamina: porcentagemDopamina.toFixed(0),
      endorfina: porcentagemEndorfina.toFixed(0),
      ocitocina: porcentagemOcitocina.toFixed(0),
      acertos: acertos,
      totalPerguntas: perguntas.length,
    }),
  })
    .then(function (resposta) {
      return resposta.json();
    })
    .then(function () {
      setTimeout(function () {
        window.location = "./dashboard.html";
      }, 2000);
    })
    .catch(function (erro) {
      console.log(erro);
    });
}