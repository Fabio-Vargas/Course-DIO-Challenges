/*
  # [Challenge] Jornada do Herói
  
    ## INSTRUCTIONS 
      Você é um jovem herói que embarca em uma jornada épica para derrotar o temido dragão que aterroriza o reino. 
      No entanto, você precisa atravessar uma floresta perigosa para chegar à caverna do dragão. 
      Cada passo é crucial, e sua jornada será determinada pela lógica afiada que você possuir.

    ## OBJECTIVE
      Escreva um algoritmo que simule a jornada do herói pela floresta. 
      O herói começa em uma posição inicial e deve dar uma série de passos para atravessar a floresta até a caverna do dragão.

      ### INPUT
        A posição inicial do herói na floresta (um número inteiro).
        O número total de passos que o herói deve dar (um número inteiro).

      ### OUTPUT
        Imprima a posição final do herói após dar a quantidade de passos especificada.
*/


//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Para converter os valores inseridos na entrada, utilizamos a função JavaScript parseInt() que converte a parte inicial da string em um número inteiro.
const posicaoInicial = parseInt(gets());
const totalPassos = parseInt(gets());

//TODO: Calcule a posição final do herói:
const posicaoFinal = posicaoInicial + totalPassos;

// Imprime a posição final
print("Posicao final do heroi:", posicaoFinal);
