/**
 * Objetivo: Arquivo com funçoes responsaveis por criar a tabuada de determinado numero
 * Autor: Pedro Henrique Vieira Silva
 * Data de criação: 11/08
 *
 */

const tabuada = (
  numeroMinino, 
  numeroMaximo, 
  numeroMinContador,  
  numeroMaxContador 
) => {
  const min = Number(numeroMinino);
  const max = Number(numeroMaximo);
  const contadorMinimo = Number(numeroMinContador);
  const contadorMaximo = Number(numeroMaxContador);

  if (!validaEntrada(min, max, numeroMinContador, numeroMaxContador)) return false;
  else{
    for (let i = numeroMinino; i <= numeroMaximo; i++) {
      console.log();
      console.log(`Tabuada do [${i}]`);
      for (let indice = contadorMinimo; indice <= contadorMaximo; indice++) {
        console.log(`${i} x ${indice} = ${i * indice}`);
      }
    }
  };
};

const validaEntrada = (
  numeroMinino = 0,
  numeroMaximo = 0,
  numeroMinContador = 'NaN',
  numeroMaxContador = 'NaN'
) => {
  if (numeroMaximo > 100) return false;
  else if (numeroMinino < 2) return false;
  else if (numeroMaximo == 0 || numeroMaxContador == 'NaN' || numeroMinContador == 'NaN') return false;
  else if (numeroMinContador < 0 || numeroMaxContador > 50) return false;
  else return true;
};

module.exports = tabuada;