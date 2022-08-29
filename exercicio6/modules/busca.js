const { cidades: estados } = require('./cidades');
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

const response = 'ce';

if (!searchState(response)) console.log('Estado inválido.');
else console.table(searchState(response));
