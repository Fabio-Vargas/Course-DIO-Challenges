/*
  # [Challenge] Pontos De Experiência

    ## INSTRUCTIONS
      Você é um herói em um mundo mágico repleto de monstros e desafios. 
      Sua missão agora é enfrentar inimigos e ganhar pontos de experiência (XP) para se tornar mais forte. 
      A cada vitória, você ganha XP e se aproxima de se tornar um lendário campeão.

    ## OBJECTIVE
      Escreva um programa simples que simule o ganho de XP após derrotar um monstro. 
      O programa deve calcular e exibir a quantidade de XP ganhos com base no nível do monstro e na dificuldade da batalha.

      Calculo do XP: Para calcular a quantidade de XP ganhos, o programa precisa considerar o nível do monstro e a dificuldade da batalha. 
      A fórmula num1 * num2 * 100 é usada para calcular essa quantidade com base nos valores fornecidos.

    Explicação:
      {num1} : Este é o nível do monstro. Quanto maior o nível do monstro, mais XP você ganhará ao derrotá-lo. 
      Multiplicar o nível do monstro por um valor maior ajudará a refletir o aumento da recompensa de XP para monstros mais poderosos.
  
      {num2} : Este é o valor da dificuldade da batalha, variando de 1 a 100. Quanto maior a dificuldade da batalha, mais XP você deve ganhar para enfrentar um desafio maior. 
      Multiplicar pela dificuldade ajuda a ajustar a recompensa de XP com base na intensidade da batalha.

      {100} : Este é o multiplicador constante que determina a escala geral de recompensa de XP. 
      Multiplicar pelo nível do monstro e pela dificuldade aumenta a recompensa em 100 vezes o valor do nível e da dificuldade.

    ## INPUT
      • O nível do monstro (um número inteiro).
      • A dificuldade da batalha, representada por um valor de 1 a 100 (um número inteiro).

    ## OUTPUT
      • Imprima a quantidade de XP ganhos após a batalha.
*/


//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Entrada de dados. Lembre-se: O parseInt(()) é importante para a conversão dos valores de entrada(String) para um valor numérico(int).
let num1 = parseInt(gets());
let num2 = parseInt(gets());

//TODO: Implemente a lógica para exibir o xpGanho:
const xpGanho = num1 * num2 * 100;

// Imprime a quantidade de XP ganho
print("Voce ganhou " + xpGanho + " XP!");
