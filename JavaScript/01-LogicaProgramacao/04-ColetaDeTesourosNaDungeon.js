/*
  # [Challenge] Coleta de Tesouro na Dungeon

    ## DESCRIPTION
      Sua missão é vasculhar as salas da masmorra em busca de recompensas lendárias e desafios perigosos. 
      Cada sala pode conter monstros formidáveis, tesouros preciosos ou ambos. 
      Use suas habilidades estratégicas para enfrentar as ameaças e coletar os tesouros!

    ## INSTRUCTIONS
      Escreva um programa que simule sua jornada heróica pela masmorra. 
      O programa deve percorrer cada sala e verificar se há tesouros ou monstros. 
      Se você encontrar um tesouro, colecionará a recompensa. Se encontrar um monstro, terá que derrotá-lo para continuar.

        Atenção!
          Em nossa resolução utilizamos a função.includes() do JavaScript para verificar 
          se um número (representando a sala atual) está presente nos arrays salasComTesouro e salasComMonstro.

      ### INPUT
        • O número total de salas no dungeon (um número inteiro).

      ### OUTPUT
        • Sempre que encontrar um tesouro, imprima " Tesouro na sala X!".
        • Sempre que encontrar um monstro, imprima "Monstro na sala X!".
*/


//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Entrada de dados. Lembre-se: O parseInt(()) é importante para a conversão dos valores de entrada(String) para um valor numérico(int).
const totalSalas = parseInt(gets());
//Aqui temos uma demonstração de array com valores já predefinidos:
const salasComTesouro = [2, 4, 7];
const salasComMonstro = [3, 6, 8];

//Aqui temos uma forma de loop para percorrer cada sala da masmorra:
for (let sala = 1; sala <= totalSalas; sala++) {
//Utilizamos o .includes() para verificar se um número está presente nos arrays:
    const temTesouro = salasComTesouro.includes(sala);
    const temMonstro = salasComMonstro.includes(sala);

//TODO: Agora implemente uma condição necessária para verificar e exibir se há tesouro na sala e se há montro na sala:
    if (temTesouro) {
        print("Tesouro na sala " + sala + "!");
    } else if (temMonstro) {
        print("Monstro na sala " + sala + "!");
    }
}

