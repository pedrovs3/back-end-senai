const fs = require('fs');
const estados = JSON.parse(fs.readFileSync('./cidades.json'))

const searchState = (siglaInput = '') => {
  let cidades = new Array();

  estados.forEach((estado) => {
    if (estado.sigla === siglaInput.toUpperCase()) {
      estado.cidades.forEach((cidade) => {
        cidades.push(cidade.nome);
      });
    }
  });

  if (cidades <= 0) return false;
  return cidades;
};

const response = 'sp';

if (!searchState(response)) console.log('Estado inválido.');
else console.table(searchState(response));
