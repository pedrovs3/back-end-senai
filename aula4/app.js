/*********************************
 * Objetivo: Aplicar estruturas de repetição (While e for)
 * Autor: Pedro Henrique Vieira Silva
 * Data de Criação: 04/08/2022
 * Versão: 1.0
 *********************************/

//Import biblioteca entrada de dados
var readline = require('readline');
const { tabuada } = require('./modules/tabuada');

//instancia do obj entradaDados
var entradaDados = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Calcular tabuada Simples');

entradaDados.question('Gostaria de saber a tabuada de qual numero? \nR: ', tabuada);
