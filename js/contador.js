document.addEventListener("DOMContentLoaded", function () {
    // Data inicial
    const dataInicial = new Date("2023-12-04");
  
    // Data atual
    const dataAtual = new Date();
  
    // Calcula a diferença em milissegundos
    const diferencaEmMilissegundos = dataAtual.getTime() - dataInicial.getTime();
  
    // Converte a diferença para horas, meses e dias restantes
    const umDiaEmMilissegundos = 1000 * 60 * 60 * 24;
    const diferencaEmHoras = Math.floor(diferencaEmMilissegundos / (umDiaEmMilissegundos / 24));
  
    const meses = Math.floor(diferencaEmHoras / (24 * 30));
    const diasRestantes = Math.floor((diferencaEmHoras % (24 * 30)) / 24);
    const horasRestantes = diferencaEmHoras % 24;
  
    // Exibe a diferença no elemento HTML
    const contadorElement = document.getElementById("contador");
    contadorElement.textContent = `${meses} meses ${diasRestantes} dias e ${horasRestantes} horas de namoro`;
  });
  
