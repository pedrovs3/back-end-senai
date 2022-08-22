let listaAlunos = [];
let disciplinas = ['Programaçao web Front-end', 'Programaçao web Back-end', 'Banco de dados', 'Interface para Dispositivos Móveis']

class Aluno {
  constructor(name, classroom){
    this.name = name;
    this.classroom = classroom
  }
}

const aluno1 = new Aluno('Enzo', 'DSM');
const aluno2 = new Aluno('Pedro', 'DSM');
const aluno3 = new Aluno('Molera', 'DSM');
const aluno4 = new Aluno('Dobbeck', 'ADM');

listaAlunos.push(aluno1, aluno2, aluno3, aluno4);

const admClass = listaAlunos.filter(aluno => aluno.classroom !== 'DSM');
console.log(admClass)

//console.log(listaAlunos)
const novaLista = [...listaAlunos, disciplinas]
console.log(listaAlunos)
console.log(novaLista)

console.log(novaLista[4][0])

//Removendo elementos apartir de um indice
  //Remove apenas o escolhido
    //listaAlunos.splice(indice, 1);
  // Remove apartir do escolhido
    //listaAlunos.splice(indice)
  //console.log(listaAlunos)