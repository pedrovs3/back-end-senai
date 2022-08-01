/**************************************************************
* Objetivo: Arquivo que contem uma classe com todas as funções para calculos matemáticos
* Autor: Pedro Henrique Vieira Silva
* Data de criação: 01/08/2022
* Versão: 1.0.0
*
***************************************************************/

const { exit } = require('process');
// Import do arquivo de operações
const Operations = require('./operations');

//Import biblioteca entrada de dados
var readline = require('readline');

//instancia do obj entradaDados
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// criaçao e exportaçao da classe calculadora
class Calculadora extends Operations {
    constructor(numero1, numero2) {
        super(numero1, numero2)
        this.entrada = entradaDados;
    }

    // metodo de inicializaçao da classe calculadora
    init() {
        //entrada primeiro valor
        this.entrada.question('Digite o 1 numero: ', (valor1) => {
            // Declarando variavel local e convertendo o valor de input para float
            this.numero1 = parseFloat(valor1);

            //entrada segundo valor
            this.entrada.question('Digite o 2 numero: ', (valor2) => {
                this.numero2 = parseFloat(valor2);

                //Ultima chamada da entradaDados usando a classe calculadora de callback
                this.entrada.question(
                    'Escolha a opçao de operação\n[+] Somar\n[-] Subtrair\n[*] Multiplicar\n[/] Dividir\n',
                    (opcao) => {
                        this.chooseOperador(opcao);
                        this.entrada.close();
                    }
                );
            });
        });
    }

    calculate(operacao) {
        switch (operacao) {
            case '+':
            case 'somar':
                console.log(`${this.numero1} + ${this.numero2} = ${this.somar()}`);
                break;

            case '-':
            case 'subtrair':
                console.log(`${this.numero1} - ${this.numero2} = ${this.subtrair()}`);
                break;

            case '*':
            case 'multiplicar':
                console.log(`${this.numero1} * ${this.numero2} = ${this.multiplicar()}`);
                break;

            case '/':
            case 'dividir':
                if (!this.dividir()) {
                    console.log('Erro: Divisao por zero.');
                    exit();
                }

                console.log(`${this.numero1} / ${this.numero2} = ${this.dividir()}`);
                break;

            default:
                console.log(`ERRO: '${operacao}' não é uma entrada válida.`);
                break;
        };
    }

    validateNaN() {
        if (isNaN(this.numero1) || isNaN(this.numero2)) {
            console.log('Erro: Um dos valores digitados nao é um numero.');
            exit();
        };
    }

    //metodo usado para a escolha de operador que irá ser calculado
    chooseOperador(opcao) {
        let operacao = opcao.toLowerCase();

        //verificaçao caso algum input seja NaN
        this.validateNaN();

        this.calculate(operacao);
    }
}

module.exports = Calculadora