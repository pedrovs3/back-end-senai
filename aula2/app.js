console.log("Exercicio para calcular a média");

// Import da biblioteca readline (Permite interaçao com o usuario)
const readLine = require("readline");

// instancia o objeto para criar a interaçao com o usuario
var entradaDados = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Declaraçao do acumulador usado na soma de notas.
let ac = 0;

// entrada do nome do aluno
entradaDados.question("Digite o nome do aluno: ", (nome) => {
  // Declaraçao de variavel local e atribuindo um valor.
  const nomeAluno = nome;
  let status;

  // Entrada da nota 1
  entradaDados.question("Digite a 1 nota:\n", (nota) => {
    ac += Number(nota);

    // entrada nota 2
    entradaDados.question("Digite a 2 nota:\n", (nota2) => {
      ac += Number(nota2);

      // entrada nota 3
      entradaDados.question("Digite a 3 nota:\n", (nota3) => {
        ac += Number(nota3);

        // Entrada da nota 4
        entradaDados.question("Digite a 4 nota:\n", (nota4) => {
          ac += Number(nota4);

          // Verificaçoes de nome de aluno e nota ausente
          if (nomeAluno === "") {
            console.error("Nome ausente, por favor digite o nome.");
            entradaDados.close();
          } else if (
            nota === "" ||
            nota2 === "" ||
            nota3 === "" ||
            nota4 === ""
          ) {
            console.error("Alguma nota esta ausente!");
            entradaDados.close();
          } else {
            const mediaTemp = media(ac);

            // Verificaçao de alguma nota nao ser um numero.
            if (isNaN(mediaTemp)) {
              return (
                console.log("Alguma nota foi digitada de maneira incorreta"),
                entradaDados.close()
              );
            } else if (mediaTemp < 7.0 && mediaTemp >= 4) {
              // verificaçao se o aluno precisará de exame.
              status = 'de exame'
            } else if (mediaTemp < 4) {
              // verificando se o aluno está reprovado.
              status = 'reprovado';
            } else {
              // Caso o aluno esteja aprovado essa parte do codigo é mostrada
              status = 'aprovado';
            }

            console.log(`O aluno ${nomeAluno} está ${status}, sua média foi ${mediaTemp}`);
            entradaDados.close();
          }
        });
      });
    });
  });
});

// Function criada para calcular e retornar a média do aluno.
function media(ac) {
  let media = ac / 4;
  return media.toFixed(2);
}

            // parseFloat converte uma string ou valor para um valor real
            // parseInt converte uma string ou valor para um valor inteiro.
            // chamada da function que calcula e exibe a media das notas.
/*
  var - permite criar uma variavel de escopop global no projeto
        A variavel criada com var, terá existencia em todas as partes do projeto, ou seja,
        todas as funçoes terao acesso a esta variavel
  
  let - Permite criar uma variavel de escopo local
        A variavel criada com let, tera existencia somente na funçao
        que esta sendo utilizada.
*/
