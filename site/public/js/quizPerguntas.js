b_usuario.innerHTML = sessionStorage.NOME_USUARIO;

let perguntas = [
  {
    pergunta: "Segundo o conteúdo apresentado no site, qual hábito pode auxiliar naturalmente no equilíbrio da serotonina?",
    alternativas: [
      "Dormir poucas horas",
      "Exposição ao sol",
      "Uso excessivo de telas",
      "Isolamento social"
    ],
    correta: 1,
    hormonio: "serotonina"
  },

  {
    pergunta: "A serotonina está mais relacionada a:",
    alternativas: [
      "Controle emocional e sensação de bem-estar",
      "Crescimento muscular imediato",
      "Digestão de gordura",
      "Produção de adrenalina"
    ],
    correta: 0,
    hormonio: "serotonina"
  },

  {
    pergunta: "Uma rotina saudável de sono pode auxiliar principalmente no equilíbrio de:",
    alternativas: [
      "Serotonina",
      "Ácido lático",
      "Insulina",
      "Adrenalina"
    ],
    correta: 0,
    hormonio: "serotonina"
  },

  {
    pergunta: "Segundo estudos sobre bem-estar, baixos níveis de serotonina podem estar relacionados a:",
    alternativas: [
      "Maior estabilidade emocional",
      "Alterações de humor",
      "Aumento da disposição física extrema",
      "Crescimento muscular acelerado"
    ],
    correta: 1,
    hormonio: "serotonina"
  },

  {
    pergunta: "Qual hábito abaixo pode auxiliar naturalmente na regulação emocional e bem-estar?",
    alternativas: [
      "Sedentarismo",
      "Privação de sono",
      "Exposição à luz solar e rotina equilibrada",
      "Estresse constante"
    ],
    correta: 2,
    hormonio: "serotonina"
  },

  {
    pergunta: "Concluir uma meta importante pode estimular principalmente qual substância ligada ao sistema de recompensa cerebral?",
    alternativas: [
      "Cortisol",
      "Dopamina",
      "Melatonina",
      "Insulina"
    ],
    correta: 1,
    hormonio: "dopamina"
  },

  {
    pergunta: "A dopamina possui forte relação com:",
    alternativas: [
      "Motivação e sensação de recompensa",
      "Digestão intestinal",
      "Produção de cálcio",
      "Crescimento ósseo"
    ],
    correta: 0,
    hormonio: "dopamina"
  },

  {
    pergunta: "Receber reconhecimento após alcançar um objetivo pode aumentar a liberação de:",
    alternativas: [
      "Dopamina",
      "Ocitocina",
      "Cortisol",
      "Adrenalina"
    ],
    correta: 0,
    hormonio: "dopamina"
  },

  {
    pergunta: "Criar pequenas metas diárias pode auxiliar principalmente em qual aspecto cerebral?",
    alternativas: [
      "Motivação e continuidade de hábitos",
      "Crescimento ósseo",
      "Controle respiratório",
      "Digestão de proteínas"
    ],
    correta: 0,
    hormonio: "dopamina"
  },

  {
    pergunta: "O sistema de recompensa cerebral está diretamente associado à:",
    alternativas: [
      "Dopamina",
      "Hemoglobina",
      "Insulina",
      "Melatonina"
    ],
    correta: 0,
    hormonio: "dopamina"
  },

  {
    pergunta: "Após exercícios físicos intensos, qual substância está associada à sensação de bem-estar?",
    alternativas: [
      "Endorfina",
      "Insulina",
      "Cortisol",
      "Adrenalina"
    ],
    correta: 0,
    hormonio: "endorfina"
  },

  {
    pergunta: "As endorfinas são conhecidas principalmente por auxiliar:",
    alternativas: [
      "No alívio natural da dor",
      "Na digestão de gordura",
      "No crescimento capilar",
      "Na produção de glicose"
    ],
    correta: 0,
    hormonio: "endorfina"
  },

  {
    pergunta: "Qual hábito pode estimular naturalmente a produção de endorfina?",
    alternativas: [
      "Sedentarismo",
      "Exercícios físicos",
      "Privação de sono",
      "Isolamento social"
    ],
    correta: 1,
    hormonio: "endorfina"
  },

  {
    pergunta: "Durante atividades físicas, a liberação de endorfina pode auxiliar em:",
    alternativas: [
      "Sensação de bem-estar",
      "Redução da memória",
      "Queda da circulação sanguínea",
      "Diminuição da respiração"
    ],
    correta: 0,
    hormonio: "endorfina"
  },

  {
    pergunta: "As endorfinas são frequentemente chamadas de:",
    alternativas: [
      "Hormônios do medo",
      "Analgésicos naturais do cérebro",
      "Hormônios da digestão",
      "Hormônios do estresse"
    ],
    correta: 1,
    hormonio: "endorfina"
  },

  {
    pergunta: "Qual substância está mais relacionada à conexão social e confiança?",
    alternativas: [
      "Cortisol",
      "Ocitocina",
      "Insulina",
      "Adrenalina"
    ],
    correta: 1,
    hormonio: "ocitocina"
  },

  {
    pergunta: "Interações sociais positivas podem estimular a liberação de:",
    alternativas: [
      "Ocitocina",
      "Ácido lático",
      "Insulina",
      "Cortisol"
    ],
    correta: 0,
    hormonio: "ocitocina"
  },

  {
    pergunta: "A ocitocina possui forte relação com:",
    alternativas: [
      "Vínculos afetivos e empatia",
      "Digestão intestinal",
      "Crescimento muscular",
      "Produção de energia"
    ],
    correta: 0,
    hormonio: "ocitocina"
  },

  {
    pergunta: "Qual hábito abaixo pode contribuir para conexões sociais saudáveis?",
    alternativas: [
      "Isolamento constante",
      "Convívio social positivo",
      "Privação emocional",
      "Estresse contínuo"
    ],
    correta: 1,
    hormonio: "ocitocina"
  },

  {
    pergunta: "A ocitocina é frequentemente associada a:",
    alternativas: [
      "Relações interpessoais e confiança",
      "Produção de adrenalina",
      "Crescimento ósseo",
      "Digestão de gordura"
    ],
    correta: 0,
    hormonio: "ocitocina"
  }
];

let respostasUsuario = [];
let perguntaAtual = 0;

function embaralharPerguntas() {
  for (let i = 0; i < perguntas.length; i++) {
    let indiceAleatorio = Math.floor(Math.random() * perguntas.length);

    let temp = perguntas[i];
    perguntas[i] = perguntas[indiceAleatorio];
    perguntas[indiceAleatorio] = temp;
  }
}

function embaralharAlternativas(pergunta) {
  let respostaCorreta = pergunta.alternativas[pergunta.correta];

  for (let i = 0; i < pergunta.alternativas.length; i++) {
    let indiceAleatorio = Math.floor(
      Math.random() * pergunta.alternativas.length,
    );

    let temp = pergunta.alternativas[i];
    pergunta.alternativas[i] = pergunta.alternativas[indiceAleatorio];
    pergunta.alternativas[indiceAleatorio] = temp;
  }

  for (let i = 0; i < pergunta.alternativas.length; i++) {
    if (pergunta.alternativas[i] == respostaCorreta) {
      pergunta.correta = i;
    }
  }
}

function carregarQuiz() {
  embaralharPerguntas();

  for (let i = 0; i < perguntas.length; i++) {
    embaralharAlternativas(perguntas[i]);
  }

  montarQuiz();
}

function montarQuiz() {
  let area = document.getElementById("area_perguntas");
  area.innerHTML = "";

  let letras = ["A", "B", "C", "D"];
  let alternativasHTML = "";

  for (let j = 0; j < perguntas[perguntaAtual].alternativas.length; j++) {
    let corBotao = "";

    if (respostasUsuario[perguntaAtual] == j) {
      corBotao = "style='background-color:#32b9cd'";
    }

    alternativasHTML += `
      <button ${corBotao} onclick="responder(${perguntaAtual}, ${j})">
        ${letras[j]}) ${perguntas[perguntaAtual].alternativas[j]}
      </button>
    `;
  }

  let botaoNavegacao = "";

  if (perguntaAtual == 0) {
    botaoNavegacao = `
    <button onclick="proximaPergunta()">Próxima</button>
  `;
  } else if (perguntaAtual < perguntas.length - 1) {
    botaoNavegacao = `
    <button onclick="voltarPergunta()">Voltar</button>
    <button onclick="proximaPergunta()">Próxima</button>
  `;
  } else {
    botaoNavegacao = `
    <button onclick="voltarPergunta()">Voltar</button>
    <button onclick="finalizarQuiz()">Finalizar Quiz</button>
  `;
  }

  area.innerHTML = `
    <div class="card-pergunta">
      <h3>${perguntaAtual + 1}. ${perguntas[perguntaAtual].pergunta}</h3>
      ${alternativasHTML}
    </div>

    ${botaoNavegacao}
  `;
}

function responder(numeroPergunta, alternativaEscolhida) {
  respostasUsuario[numeroPergunta] = alternativaEscolhida;
  montarQuiz();
}

function proximaPergunta() {
  if (respostasUsuario[perguntaAtual] == undefined) {
    alert("Escolha uma alternativa antes de continuar.");
  } else {
    perguntaAtual++;
    montarQuiz();
  }
}

function voltarPergunta() {
  if (perguntaAtual > 0) {
    perguntaAtual--;
    montarQuiz();
  }
}

function finalizarQuiz() {
  let acertos = 0;

  let pontosSerotonina = 0;
  let pontosDopamina = 0;
  let pontosEndorfina = 0;
  let pontosOcitocina = 0;

  let totalSerotonina = 0;
  let totalDopamina = 0;
  let totalEndorfina = 0;
  let totalOcitocina = 0;

  for (let i = 0; i < perguntas.length; i++) {
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

  let porcentagemSerotonina = (pontosSerotonina / totalSerotonina) * 100;
  let porcentagemDopamina = (pontosDopamina / totalDopamina) * 100;
  let porcentagemEndorfina = (pontosEndorfina / totalEndorfina) * 100;
  let porcentagemOcitocina = (pontosOcitocina / totalOcitocina) * 100;

  resultado_quiz.innerHTML =
    "<h2>Resultado</h2>" +
    "<p>Você acertou " +
    acertos +
    " de " +
    perguntas.length +
    " perguntas.</p>" +
    "<p>Serotonina: " +
    porcentagemSerotonina.toFixed(0) +
    "%</p>" +
    "<p>Dopamina: " +
    porcentagemDopamina.toFixed(0) +
    "%</p>" +
    "<p>Endorfina: " +
    porcentagemEndorfina.toFixed(0) +
    "%</p>" +
    "<p>Ocitocina: " +
    porcentagemOcitocina.toFixed(0) +
    "%</p>";

  sessionStorage.PORCENTAGEM_SEROTONINA = porcentagemSerotonina.toFixed(0);
  sessionStorage.PORCENTAGEM_DOPAMINA = porcentagemDopamina.toFixed(0);
  sessionStorage.PORCENTAGEM_ENDORFINA = porcentagemEndorfina.toFixed(0);
  sessionStorage.PORCENTAGEM_OCITOCINA = porcentagemOcitocina.toFixed(0);

  fetch("/quiz/sallet", {
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
