/**
 * Objetivo: Iniciar e executar a classe calculadora presente em modules
 * Autor: Pedro Henrique Vieira Silva
 * Data de criação: 01/08/2022
 *  Versão: 1.0
 */

console.log('Calculadora');
const Calculadora = require('./modules/calculadora');

// Instancia da classe calculadora, que contem os metodos para calculos matemáticos.
const calculadora = new Calculadora();
// Chamada ao metodo de inicialização da calculadora
calculadora.init();

//typeOf() - Verifica qual o tipos de dados de uma variavel ou um objeto