/*
    # [Challenge] Geração de Biomas em um Mundo de Blocos

      ## INSTRUCTIONS
        Você é um mestre construtor em um mundo de blocos e tem a tarefa de gerar biomas em diferentes regiões do mundo. 
        Cada bioma tem características únicas, como tipos de solo, vegetação e clima.

      ## OBJECTIVE
        Sua tarefa é coletar minérios enquanto ataca uma rocha com sua picareta. 
        Use loops e lógica de programação para representar cada golpe na rocha e determinar qual minério foi obtido.

        ### INPUT
          • O programa irá solicitar que você digite um número inteiro positivo representando a quantidade de golpes que você deseja dar com a picareta.

        ### OUTPUT
          • Para cada golpe que você der, o programa exibirá uma mensagem indicando o resultado do golpe. 
          • Será mostrado o número do golpe e o minério obtido, que pode ser 1: Carvao, 2: Ferro, 3: Diamante e 4: Pedra.
*/


//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Lê a quantidade de golpes informada pelo usuário. 
// O parseInt(()) vai converter os valores de entrada(string) para um valor numérico(Int).
const quantidadeGolpes = parseInt(gets());

// TODO: Defina aqui os tipos de minerais Carvao, Ferro, Diamante e Pedra
let minerais = ["Pedra", "Carvao", "Ferro", "Diamante"];

// Loop para cada golpe, de 1 até a quantidade informada
for (let i = 1; i <= quantidadeGolpes; i++) {
  // Calcula o índice do mineral usando o operador de módulo (%) para garantir que o índice esteja dentro do tamanho do array
  let minaIndex = i % minerais.length;
  
  // TODO: Agora exiba o índice i, concatene com o caractere ":", após, concatene com tipo de minerais[minaIndex]:
  print(i  + ": " + minerais[minaIndex]);
}
