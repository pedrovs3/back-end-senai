class Produto {
  constructor(nome, cor, preco, unidades) {
    this.nome = nome;
    this.cor = cor;
    this.preco = preco;
    this.unidades = unidades;
  }

  cleanUp(){
    return { nome: this.nome, cor: this.cor, preco: this.preco, unidade: this.unidades };
  }
}

// Declaracao arrays
const pessoas = [
  {
    nome: 'Pedro',
    idade: 17,
  },
  {
    nome: 'Luiz',
    idade: 30,
  },
];

const produtos = [
  {
    nome: 'teclado',
    cor: 'branco',
    preco: 50.8,
    unidades: 10,
  },
  {
    nome: 'mouse',
    cor: 'preto',
    preco: 30.0,
    unidades: 50,
  },
  {
    nome: 'monitor',
    cor: 'preto',
    preco: 1000.2,
    unidades: 5,
  },
];

let nome = ['joao'];
let numeros = [1, 2, 3, 4];

function randomValue(max = 1000, min = 0){
  const valorAleatorio = Math.random() * (max - min) + min
  return Number(valorAleatorio.toFixed(2));
}

// Testando metodos array
// Map e filter 
// (map() gera um novo array com o retorno da sua callback {modificando totalmente o array original})
// ( O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função.{Nao modificando o original, apenas filtrando})

let numerosMultiplicado = numeros.map((num) => {
  return num * 2;
});
let numerosMaioresQue2 = numeros.filter((numero) => {
  return numero > 2;
});

// Adicionando ao ultimo indice
const produtoPreto = produtos.filter((produto) => produto.cor === 'preto');

console.log(produtoPreto);

const pessoasMaior = pessoas.filter((pessoa) => pessoa.idade > 18);

// Exibindo resultados
pessoasMaior.forEach((pessoa) => console.log(pessoa));  
console.log(numeros, numerosMultiplicado, numerosMaioresQue2);
// criando novo produto
const mousepad = new Produto('mousepad', 'preto', randomValue(), 60)
const celular = new Produto('celular', 'branco', randomValue(), 1200)

// Adiciona ao final do array
produtos.push(mousepad.cleanUp());

// Adiciona no inicio do array
produtos.unshift(celular.cleanUp());

//remove o ultimo elemento do array
//produtos.pop();

console.log(produtos)
