const randomNum = (min = 0, max = 100) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const arrayNumeros = new Array();
for (let i = 0; i <= randomNum(1, 50); i++) {
  arrayNumeros.push(i);
}

const numerosPares = (numeros) => {
  let arrayPares = new Array();
  numeros.forEach((numero) => {
    if (numero % 2 == 0) arrayPares.push(numero);
  });

  return arrayPares;
};

const numerosImpares = (numeros) => {
  let arrayImpares = new Array();
  numeros.forEach((numero) => {
    if (numero % 2 != 0) arrayImpares.push(numero);
  });

  return arrayImpares;
};

const arrayUnico = () => {
  const paresImpares = new Array();
  const impares = numerosImpares(arrayNumeros);
  const pares = numerosPares(arrayNumeros);

  paresImpares.push(pares, impares);
  return paresImpares;
};

console.log(arrayUnico());
