/**
 * Objetivo: classe que contem as funções para calculos matematicos
 * Autor: Pedro Henrique Vieira Silva
 * Data de criação: 01/08/2022
 * Versão: 1.0.0
 */

module.exports = class Operations {
    constructor(numero1, numero2) {
        this.numero1 = numero1;
        this.numero2 = numero2;
    }

    somar() {
        const result = this.numero1 + this.numero2;
        return result;
    }

    //metodo que subtrai os dois numeros inseridos pelo usuário
    subtrair() {
        const result = this.numero1 - this.numero2;
        return result;
    }

    //metodo que multiplica os dois numeros inseridos pelo usuário
    multiplicar() {
        const result = this.numero1 * this.numero2;
        return result;
    }

    //metodo que divide os dois numeros inseridos pelo usuário
    dividir() {
        if (this.numero2 === 0)
            return false;

        const result = this.numero1 / this.numero2
        return result;
    }
};
