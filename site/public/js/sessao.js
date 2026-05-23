// sessão
function validarSessao() {
  let email = sessionStorage.EMAIL_USUARIO;
  let nome = sessionStorage.NOME_USUARIO;

  let b_usuario = document.getElementById("b_usuario");

  if (email != null && nome != null) {
    b_usuario.innerHTML = nome;
  } else {
    window.location = "../login.html";
  }
}

function limparSessao() {
  sessionStorage.clear();
  window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
  let divAguardar = document.getElementById("div_aguardar");
  divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
  let divAguardar = document.getElementById("div_aguardar");
  divAguardar.style.display = "none";

  let divErrosLogin = document.getElementById("div_erros_login");
  if (texto) {
    divErrosLogin.style.display = "flex";
    divErrosLogin.innerHTML = texto;
  }
}
