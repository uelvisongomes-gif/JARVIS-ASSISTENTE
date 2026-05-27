document.getElementById("send").addEventListener("click", async () => {

  const prompt = document.getElementById("prompt").value;

  const responseBox = document.getElementById("response");

  responseBox.innerHTML = "Analisando...";

  try {

    responseBox.innerHTML = `
      Você perguntou:
      <br><br>
      "${prompt}"
      <br><br>
      Em breve o JARVIS responderá com IA real.
    `;

  } catch (error) {

    responseBox.innerHTML = "Erro ao analisar.";

  }

});
