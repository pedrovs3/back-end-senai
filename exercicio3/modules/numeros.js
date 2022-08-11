class Numeros {
  constructor(minimo, maximo, opcao) {
    this.minimo = minimo;
    this.maximo = maximo;
    this.opcao = opcao;
    this.numerosArray = new Array();
    this.numerosParesArray = new Array();
    this.numerosImparesArray = new Array();
  }

  init() {
    if (this.validaEntrada().status) {
      this.range();
      this.listas();
      this.exibicao();
    } else {
      console.log(`Erro: ${this.validaEntrada().erro}`);
    }
  }

  validaEntrada() {
    if (this.minimo < 0 || this.minimo > 500) return {status: false, erro: 'O valor minimo está fora do limite [ 0 - 500 ]' };
    else if (this.maximo < 10 || this.maximo > 1000) return {status: false, erro: 'O valor Máximo está fora do limite [ 10 - 100]' };
    else if (this.minimo == '' || this.maximo == '') return {status: false, erro: 'Um dos valores digitados está vazio.' };
    else if (this.minimo >= this.maximo) return {status: false, erro: 'O valor minimo é maior do que o Máximo.' };
    else return {status: true};
  }

  range() {
    for (let i = this.minimo; i <= this.maximo; i++) {
      this.numerosArray.push(i);
    }
  }

  listas() {
    this.numerosArray.forEach((numero) => {
      if (numero % 2 === 0) this.numerosParesArray.push(numero);
      else this.numerosImparesArray.push(numero);
    });
  }

  numerosPares() {
    console.log('Lista de numeros Pares:');
    this.numerosParesArray.forEach((numero) => console.log(numero));
    console.log(
      `Qtde de números encontrados: ${this.numerosParesArray.length}`
    );
  }

  numerosImpares() {
    console.log('Lista de Numeros impares: ');
    this.numerosImparesArray.forEach((numero) => console.log(numero));
    console.log(
      `Qtde de números encontrados: ${this.numerosParesArray.length}`
    );
  }

  exibicao() {
    if (this.opcao == 'par') this.numerosPares();
    else if (this.opcao == 'impar') this.numerosImpares();
    else if (this.opcao == 'ambos') {
      this.numerosPares();
      this.numerosImpares();
    }
  }
}

module.exports = Numeros;
