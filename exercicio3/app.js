/**
 * Objetivo: Interaçao com usuario em separaçao de pares e impares
 * Autor: Pedro Henrique Vieira Silva
 * Data de criaçao: 11/08/2022
 * Versão: 1.0.0
 */

var readline = require('readline');
var entradaDados = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const Numeros = require('./modules/numeros');

entradaDados.question('Digite o número inicial: ', (numeroInicial) => {
  let minimo = Number(numeroInicial);

  entradaDados.question('Digite o último numero: ', (numeroFinal) => {
    let maximo = Number(numeroFinal);

    entradaDados.question('Escolha uma opçao: \n[par]\n[impar]\n[ambos]\n', (opcaoInput) => {
      let opcao = opcaoInput.toLowerCase();

      const app = new Numeros(minimo, maximo, opcao);
      app.init();

      entradaDados.close();
    });
  });
});
