/**
 * Objetivo: Obter uma lista de estados.
 * Autor: Pedro Vieira
 * Data: 29/08
 */

// Simulando resultado API
let estados = [
  {
    sigla: 'SP',
    nome: 'São Paulo',
  },
  {
    sigla: 'RJ',
    nome: 'Rio de Janeiro',
  },
  {
    sigla: 'AC',
    nome: 'Acre',
  },
  {
    sigla: 'BA',
    nome: 'Bahia',
  },
  {
    sigla: 'CE',
    nome: 'Ceará',
  },
  {
    sigla: 'MG',
    nome: 'Minas Gerais',
  },
  {
    sigla: 'GO',
    nome: 'Goiás',
  },
  {
    sigla: 'SC',
    nome: 'Santa Catarina',
  },
];

// Retorna todos os estados pela sigla
const getSiglaList = () => {
  const siglas = new Array();
  estados.forEach((estado) => {
    siglas.push(estado.sigla);
  });

  if (siglas.length <= 0) return false;
  return siglas;
};

// Busca no JSON pela sigla.
const getStateSingla = (siglaInput = '') => {
  let resultado;

  estados.forEach((estado) => {
    if (estado.sigla === siglaInput.toUpperCase()) resultado = estado;
  });

  if (!resultado) return false;
  return resultado;
};

const input = 'sp';
console.table(getSiglaList());

if (!getStateSingla(input)) console.log('Estado nao encontrado.');
else console.log(getStateSingla(input));
