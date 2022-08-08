// module.exports = class Professor {
//   constructor(nome, sexo) {
//     this.nome = nome
//     this.sexo = sexo
//   }
// } 




// Function que retorna media e status da media do aluno atraves de um objeto
// const media = (valor1, valor2, valor3, valor4) => {
//   let mediaParcial;
//   let status = '';
//   const notas = [valor1, valor2, valor3, valor4];

//   if (notas.includes(undefined)){
//     return console.error('Uma das notas nao foi digitada')
//   }
  
//   const somaNotas = notas.reduce(function(ac, nota){
//     ac += nota;
//     return ac;
//   });

//   const erro = validaNota(notas);

//   if (!erro) {
//     console.log('Alguma nota foi inserida incorretamente. Tente Novamente!')
//   } else {
//     mediaParcial = somaNotas / notas.length;
//     status = statusMedia(mediaParcial);

//     if (status = 'exame') {
//       console.log(notaExame(80, mediaParcial));
//     }
//   }

//   return {mediaParcial, status};
// }

// function statusMedia(media) {
//   if (media >= 70) return 'aprovado';
//   if (media <= 50) return 'reprovado';
//   //if (media < 50 && media <= 69) return 'exame';
//   return 'exame';
// }

// const validaNota = (notas) => {
//   for (let nota of notas) {
//     if (0 >= nota || nota >= 100) return false;
//   }
//   return true;
// }

// const notaExame = (nota ,mediaParcial) => {
//   console.log('informe a nota do aluno no exame: ')
//   const mediaFinal = (nota + mediaParcial) / 2
//   if (mediaFinal > 60) return 'aprovado';
//   return 'reprovado';
// }

// console.log(media(70,70,70));