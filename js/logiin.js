function register() {

  const email = document.getElementById("registerEmail").value;

  const password = document.getElementById("registerPassword").value;

  if (!email || !password) {

    alert("Preencha todos os campos");

    return;

  }

  localStorage.setItem(email, password);

  alert("Registro realizado com sucesso!");

  window.location.href = "index.html";

}

function login() {

  const email = document.getElementById("loginEmail").value;

  const password = document.getElementById("loginPassword").value;

  const storedPassword = localStorage.getItem(email);

  if (storedPassword === password) {

    alert("Login realizado com sucesso!");

  } else {

    alert("Email ou senha incorretos");

  }

}
 
Java script
 