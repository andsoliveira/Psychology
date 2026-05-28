b_usuario.innerHTML = sessionStorage.NOME_USUARIO;

let perguntas = [
  {
    pergunta: "O que ajuda no bem-estar emocional?",
    alternativas: [
      "Privação de sono",
      "Exposição ao sol",
      "Estresse constante",
      "Sedentarismo"
    ],
    correta: 1,
    hormonio: "serotonina"
  },

  {
    pergunta: "A serotonina está ligada principalmente a:",
    alternativas: [
      "Bem-estar",
      "Digestão",
      "Força muscular",
      "Adrenalina"
    ],
    correta: 0,
    hormonio: "serotonina"
  },

  {
    pergunta: "A serotonina influencia diretamente:",
    alternativas: [
      "Mais disposição",
      "Alterações de humor",
      "Mais energia física",
      "Crescimento muscular"
    ],
    correta: 1,
    hormonio: "serotonina"
  },

  {
    pergunta: "Dormir bem ajuda no equilíbrio de qual hormônio?",
    alternativas: [
      "Insulina",
      "Adrenalina",
      "Serotonina",
      "Cortisol"
    ],
    correta: 2,
    hormonio: "serotonina"
  },

  {
    pergunta: "Qual hormônio está ligado à motivação?",
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
    pergunta: "A dopamina está relacionada ao:",
    alternativas: [
      "Sistema de recompensa",
      "Crescimento ósseo",
      "Digestão",
      "Controle respiratório"
    ],
    correta: 0,
    hormonio: "dopamina"
  },

  {
    pergunta: "Cumprir metas pode aumentar:",
    alternativas: [
      "Insulina",
      "Dopamina",
      "Cortisol",
      "Ácido lático"
    ],
    correta: 1,
    hormonio: "dopamina"
  },

  {
    pergunta: "Pequenas metas ajudam na:",
    alternativas: [
      "Motivação",
      "Digestão",
      "Respiração",
      "Circulação"
    ],
    correta: 0,
    hormonio: "dopamina"
  },

  {
    pergunta: "Qual hormônio aumenta após exercícios físicos?",
    alternativas: [
      "Insulina",
      "Endorfina",
      "Cortisol",
      "Adrenalina"
    ],
    correta: 1,
    hormonio: "endorfina"
  },

  {
    pergunta: "A endorfina ajuda no:",
    alternativas: [
      "Alívio da dor",
      "Crescimento capilar",
      "Controle da glicose",
      "Aumento da gordura"
    ],
    correta: 0,
    hormonio: "endorfina"
  },

  {
    pergunta: "O que estimula naturalmente a endorfina?",
    alternativas: [
      "Sedentarismo",
      "Exercícios físicos",
      "Privação de sono",
      "Isolamento"
    ],
    correta: 1,
    hormonio: "endorfina"
  },

  {
    pergunta: "A endorfina está ligada à sensação de:",
    alternativas: [
      "Bem-estar",
      "Fadiga extrema",
      "Estresse",
      "Ansiedade"
    ],
    correta: 0,
    hormonio: "endorfina"
  },

  {
    pergunta: "Qual hormônio está ligado à confiança?",
    alternativas: [
      "Adrenalina",
      "Ocitocina",
      "Insulina",
      "Cortisol"
    ],
    correta: 1,
    hormonio: "ocitocina"
  },

  {
    pergunta: "Convívio social positivo aumenta:",
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
    pergunta: "A ocitocina está ligada a:",
    alternativas: [
      "Empatia",
      "Digestão",
      "Crescimento muscular",
      "Produção de energia"
    ],
    correta: 0,
    hormonio: "ocitocina"
  },

  {
    pergunta: "A ocitocina é conhecida por fortalecer:",
    alternativas: [
      "Relações sociais",
      "Produção de adrenalina",
      "Crescimento ósseo",
      "Digestão"
    ],
    correta: 0,
    hormonio: "ocitocina"
  }
];

let respostasUsuario = [];
let perguntaAtual = 0;

  // Função para embaralhar perguntas do quiz
function embaralharPerguntas() {
  // Percorre todas as perguntas
  for (let i = 0; i < perguntas.length; i++) {
    // Gera um índice aleatório
    let indiceAleatorio = Math.floor(Math.random() * perguntas.length);

    // Guarda temporariamente a pergunta atual
    let temp = perguntas[i];

    // Troca a pergunta atual pela pergunta aleatória
    perguntas[i] = perguntas[indiceAleatorio];

    // Coloca a pergunta guardada na posição aleatória
    perguntas[indiceAleatorio] = temp;
  }
}

// Embaralhar as alternativas
function embaralharAlternativas(pergunta) {

  //Guarda qual era a resposta correta antes de embaralhar
  let respostaCorreta = pergunta.alternativas[pergunta.correta];

  for (let i = 0; i < pergunta.alternativas.length; i++) {

    //Gera um índice aleatório para as alternativas
    let indiceAleatorio = Math.floor(
      Math.random() * pergunta.alternativas.length,
    );

    // Faz a troca das alternativas
    let temp = pergunta.alternativas[i];

    pergunta.alternativas[i] = pergunta.alternativas[indiceAleatorio];
    pergunta.alternativas[indiceAleatorio] = temp;
  }

  // Procura onde a resposta correta ficou após o embaralhamento
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

   // Percorre as alternativas da pergunta atual
  for (let j = 0; j < perguntas[perguntaAtual].alternativas.length; j++) {
    let corBotao = "";
    // Se o usuário já escolheu essa alternativa, muda a cor do botão
    if (respostasUsuario[perguntaAtual] == j) {
      corBotao = "style='background-color:#32b9cd'";  /* azul elétrico para sinalizar a alternativa selecionada */
    }

    // Monta o botão da alternativa atual
    alternativasHTML += `
      <button ${corBotao} onclick="responder(${perguntaAtual}, ${j})">
        ${letras[j]}) ${perguntas[perguntaAtual].alternativas[j]}
      </button>
    `;
  }

  // Guarda os botões de navegação: próxima, voltar ou finalizar
  let botaoNavegacao = "";

  // Se estiver na primeira pergunta, mostra só o botão próxima
  if (perguntaAtual == 0) {
    botaoNavegacao = `
    <button onclick="proximaPergunta()">Próxima</button>
  `;

  // Se estiver no meio do quiz entre 1~14, mostra voltar e próxima
  } else if (perguntaAtual < perguntas.length - 1) {
    botaoNavegacao = `
    <button onclick="voltarPergunta()">Voltar</button>
    <button onclick="proximaPergunta()">Próxima</button>
  `;
 } 
 
  // Última pergunta
 else {
    botaoNavegacao = `
    <button onclick="voltarPergunta()">Voltar</button>
    <button onclick="finalizarQuiz()">Finalizar Quiz</button>
  `;
  }

  //Exibe na tela a pergunta atual, alternativas e botões
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

//Função responsável pela finalização do quiz e início da comunicação com backend
function finalizarQuiz() {

  //Variáveis para contagem de acertos gerais, os acertos de cada hormônio e total de perguntas de cada hormônio

  let acertos = 0;

  let pontosSerotonina = 0;
  let pontosDopamina = 0;
  let pontosEndorfina = 0;
  let pontosOcitocina = 0;

  let totalSerotonina = 0;
  let totalDopamina = 0;
  let totalEndorfina = 0;
  let totalOcitocina = 0;

    // Percorre todas as perguntas
    // Conta o total de perguntas por hormônio e verifica os acertos do usuário

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


  //Calcula a porcentagem de acertos de cada hormônio

  let porcentagemSerotonina = (pontosSerotonina / totalSerotonina) * 100;
  let porcentagemDopamina = (pontosDopamina / totalDopamina) * 100;
  let porcentagemEndorfina = (pontosEndorfina / totalEndorfina) * 100;
  let porcentagemOcitocina = (pontosOcitocina / totalOcitocina) * 100;

  //Exibe os resultados do quiz na tela

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

    //sessionStorage salva temporariamente no navegador
  sessionStorage.PORCENTAGEM_SEROTONINA = porcentagemSerotonina.toFixed(0);
  sessionStorage.PORCENTAGEM_DOPAMINA = porcentagemDopamina.toFixed(0);
  sessionStorage.PORCENTAGEM_ENDORFINA = porcentagemEndorfina.toFixed(0);
  sessionStorage.PORCENTAGEM_OCITOCINA = porcentagemOcitocina.toFixed(0);

  // Aqui inicia a comunicação com o backend
  fetch("/quiz/salvar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", 
    },
    //Converte os dados do quiz para formato JSON em string para enviar
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
  //Converte a resposta do backend em JSON
    .then(function (resposta) {
      return resposta.json();
    })
    //2 segundo e vai direcionar para a dashboard
    .then(function () {
      setTimeout(function () {
        window.location = "./dashboard.html";
      }, 2000);
    })
    //Exibe erros caso aconteça algum problema na req
    .catch(function (erro) {
      console.log(erro);
    });
}