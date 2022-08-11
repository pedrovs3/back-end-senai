/****************************************
 * Objetivo: Criar um sistema simples de gerenciamento de notas e alunos para uma universidade
 * Autor: Pedro Henrique Vieira Silva
 * Data de criaçao: 04/08/2022
 * Versão: 1.0.0
 * 
 ***************************************/

const Aluno = require('./modules/aluno');
const aluno = new Aluno();
var readline = require('readline');
var entradaDados = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

entradaDados.question('Digite o nome do aluno: ', (nomeInput) => {
  aluno.nome = nomeInput;

  entradaDados.question('Informe o nome do Professor: ', (professorInput) => {
    aluno.professor = professorInput;

    entradaDados.question('Informe o sexo do aluno: ', (sexoAluno) => {
      aluno.sexo = sexoAluno.toLowerCase().charAt(0);

      entradaDados.question('Informe o sexo do professor: ', (sexoProfessorInput) => {
        aluno.sexoProfessor = sexoProfessorInput.toLowerCase().charAt(0);
        
        console.log(aluno.validaSexo())
        if(!aluno.validaSexo()) {
          console.log('Erro:') 
          process.exit();
        } else {
          entradaDados.question('Informe o nome do curso: ', (curso) => {
            aluno.curso = curso.toUpperCase();
  
            entradaDados.question('Informe o nome da disciplina: ', (disciplina) => {
              aluno.disciplina = disciplina.toUpperCase();
  
              entradaDados.question('Informe a Primeira nota do aluno: ', (notaInput) => {
                const nota1 = Number(notaInput);
  
                entradaDados.question('Informe a Segunda nota do aluno: ', (notaInput2) => {
                  const nota2 = Number(notaInput2);
    
                  entradaDados.question('Informe a Terceira nota do aluno: ', (notaInput3) => {
                    const nota3 = Number(notaInput3);
      
                    entradaDados.question('Informe a Quarta nota do aluno: ', (notaInput4) => {
                      const nota4 = Number(notaInput4);
                      let notas = [nota1, nota2, nota3, nota4];
                      aluno.notas = notas
                      if(aluno.media().status == 'exame') {
                        console.log('O aluno precisará de exame para passar de ano.')
                        entradaDados.question('Informe a nota do exame: ', (nota) => {
                          notas.push(Number(nota))
                          aluno.notaExame(nota);
                          aluno.relatorio();
                          process.exit();
                        });
                      }

                      else {
                        aluno.relatorio();
                        entradaDados.close();
                      }
                    });
                  });
                });
              });
            });
          });
        }
        
      });
    });
  });
});