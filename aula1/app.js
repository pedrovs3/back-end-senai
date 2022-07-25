// Exibe uma linha no prompt
console.log("Aoba");

// import da biblioteca para interação com o usuário
var readLine = require("readline");

// instancia da biblioteca (objeto) para entrada e saida de dadios via prompt
var entradaDados = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Exibe uma mensagem no prompt para o usuário e o que for digitado é enviado através de uma função de callback
entradaDados.question("Digite seu nome:\n", (nome) => {console.log(`Bem vindo, ${nome}`)});
  