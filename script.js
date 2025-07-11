// 1. Aguarda o carregamento completo da página
document.addEventListener("DOMContentLoaded", function () {
  // 2. Seleciona o formulário pelo ID
  const form = document.getElementById("quizForm");

  // 3. Adiciona o evento de submit ao formulário
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita o recarregamento da página

    // 4. Array para armazenar as respostas selecionadas
    const respostas = [];

    // 5. Número total de perguntas
    const totalPerguntas = 3;

    // 6. Loop para pegar cada resposta
    for (let i = 1; i <= totalPerguntas; i++) {
      const nomeCampo = "q" + i;
      const respostaMarcada = form.querySelector(`input[name="${nomeCampo}"]:checked`);

      if (respostaMarcada) {
        respostas.push(respostaMarcada.value);
      } else {
        // Se alguma pergunta não foi respondida
        document.getElementById("result").textContent = "⚠️ Por favor, responda todas as perguntas.";
        return;
      }
    }

    // 7. Contador de votos por gênero
    const contador = {};

    for (const genero of respostas) {
      if (contador[genero]) {
        contador[genero]++;
      } else {
        contador[genero] = 1;
      }
    }

    // 8. Encontrar o gênero mais votado
    let generoIdeal = "";
    let maxVotos = 0;

    for (const genero in contador) {
      if (contador[genero] > maxVotos) {
        maxVotos = contador[genero];
        generoIdeal = genero;
      }
    }

    // 9. Exibir o resultado final
    document.getElementById("result").textContent = `✨ Seu gênero ideal é: ${generoIdeal}!`;
  });
});

