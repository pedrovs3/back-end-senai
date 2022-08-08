//const Professor = require("./professor");
const process = require('process');

class Aluno {
  constructor(nome, sexo, curso, disciplina, notas, professor, sexoProfessor) {
    this.nome = nome;
    this.sexo = sexo;
    this.curso = curso;
    this.disciplina = disciplina;
    this.notas = notas;
    this.professor = professor;
    this.sexoProfessor = sexoProfessor;
  }

  validaSexo() {
    if (!this.sexo == 'f' || !this.sexo == 'm' || !this.sexoProfessor == 'f' || !this.sexoProfessor == 'm') {
      console.erro('Erro: ')
      process.exit()
    }
  }

  media() {
    this.mediaParcial;
    this.status = '';
    const somaNotas = this.notas.reduce(function (ac, nota) {
      ac += nota;
      return ac;
    });

    if (this.notas.includes(undefined)) {
      console.error('Uma das notas nao foi digitada');
      process.exit();
    }

    const erro = this.validaNota();
    if (!erro) {
      console.log('Alguma nota foi inserida incorretamente. Tente Novamente!');
      process.exit();
    } else {
      this.mediaParcial = somaNotas / this.notas.length;
      this.status = this.statusMedia();
    }

    return { media: this.mediaParcial, status: this.status };
  }

  statusMedia() {
    if (this.mediaParcial >= 70) {
      return 'aprovado';
    } else if (this.mediaParcial <= 50) {
      return 'reprovado';
    } else {
      return 'exame';
    }
  }

  validaNota() {
    for (let nota of this.notas) {
      if (0 >= nota || nota >= 100) return false;
    }

    return true;
  }

  notaExame(nota) {
    this.mediaFinal = (Number(nota) + this.mediaParcial) / 2;
    if (this.mediaFinal >= 60) this.status = 'aprovado';
    else this.status = 'reprovado';
  }

  relatorio() {
    if (this.sexo == 'feminino' || this.sexo == 'f') {
      console.log(`\nA aluna ${this.nome} foi ${
        this.status
      } na disciplina ${this.disciplina}.\n
      Curso: ${this.curso}\n
      Professor: ${this.professor}\n
      Notas do aluno ${this.notas}\n
      Média Final: ${this.mediaParcial}\n`);
    }

    if (this.sexo == 'feminino' || this.sexo == 'f' && this.sexoProfessor == 'f' || this.sexoProfessor == 'feminino') {
      console.log(`\nA aluna ${this.nome} foi ${
        this.status
      } na disciplina ${this.disciplina}.\n
      Curso: ${this.curso}\n
      Professora: ${this.professor}\n
      Notas da aluna: ${this.notas}\n
      Média Final: ${this.mediaParcial}\n`);
    }

    if (this.sexo == 'masculino' || this.sexo == 'm' && this.sexoProfessor == 'f' || this.sexoProfessor == 'feminino') {
      console.log(`\nO aluno ${this.nome} foi ${
        this.status
      } na disciplina ${this.disciplina}.\n
      Curso: ${this.curso}\n
      Professora: ${this.professor}\n
      Notas do aluno ${this.notas}\n
      Média Final: ${this.mediaParcial}\n`);
    }

    if (this.sexo == 'masculino' || this.sexo == 'm' && this.sexoProfessor == 'm' || this.sexoProfessor == 'masculino') {
      console.log(`\nO aluno ${this.nome} foi ${this.status} na disciplina ${this.disciplina}.\n
      Curso: ${this.curso}\n
      Professor: ${this.professor}\n
      Notas do aluno ${this.notas}\n
      Média Final: ${this.mediaParcial}\n`)
    }
    
    if (this.statusMedia() == 'exame') console.log(`\tMédia final do exame: ${this.mediaFinal}`);
  }
}

module.exports = Aluno;
