/**
 * Objetivo: arquivo que faz interaçao de tabuada com o usuario
 * Autor: Pedro Henrique Vieira Silva
 * Data de criação: 11/08
*/

var readline = require('readline');
const tabuada = require('./modules/tabuada')

const entradaDados = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

entradaDados.question('Digite a primeira tabuada que será mostrada: [min= 2]\n', (numeroMinino) => {
  let primeiroNumero = numeroMinino;
  
  entradaDados.question('Digite a ultima tabuada que gostaria de saber: [max= 100]\n', (numeroMaximo) => {
    let ultimoNumero = numeroMaximo;
    
    entradaDados.question('Digite o primeiro contador da tabuada: [min= 0]\n', (numeroMinContador) => {
      let contadorMinimo = numeroMinContador;
      
      entradaDados.question('Digite o ultimo contador da tabuada: [max= 50] \n', (numeroMaxContador) => {
        let contadorMaximo = numeroMaxContador;

        tabuada(primeiroNumero, ultimoNumero, contadorMinimo, contadorMaximo);
        if (!tabuada(primeiroNumero, ultimoNumero, contadorMinimo, contadorMaximo)) {
          console.log('Alguma entrada foi feita de maneira incorreta. Tente Novamente!')
        }
        entradaDados.close();
      });
    });
  });
});