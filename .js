document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  if (username && password) {
    localStorage.setItem("quizUser", username);
    message.textContent = `Conta criada com sucesso! Bem-vindo(a), ${username}!`;
    message.style.color = "#00ffcc";

    setTimeout(() => {
      window.location.href = "quiz.html"; // depois pode redirecionar para o quiz
    }, 2000);
  } else {
    message.textContent = "Por favor, preencha todos os campos.";
    message.style.color = "#ff4e50";
  }
});
