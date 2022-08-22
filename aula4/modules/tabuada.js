/*********************************
 * Objetivo: Criaçao de funçoes para calcular tabuada
 * Autor: Pedro Henrique Vieira Silva
 * Data de Criação: 04/08/2022
 * Versão: 1.0
 *********************************/

const { exit } = require('process');

const tabuada = (valor) => {
  let numero = valor;
  // declaraçao de i para o exemplo de While:
  // let i = 0;

  for (let i = 0; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }

  // exemplo While:
  /**
   * While (i <= 10) {
   *  resultado = numero * i;
   *  console.log(`${numero} x ${i} = ${resultado}`);
   *  i++;
   * }
   */
  exit();
};

module.exports = {
  tabuada,
};
