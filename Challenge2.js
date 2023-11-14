// INSTRUCTIONS
/*
[Challenge 2] Calculadora de Partidas Rankeadas

## OBJETIVO
Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100 = Lendário
Se vitórias for maior ou igual a 101 = Imortal

## SAÍDA
Ao final deve se exibir uma mensagem:
"O Herói tem de saldo **{saldoVitorias}** e está no rank **{rank}**"
*/


// VARIABLES
let characterName = "HERO"
let matchesResult = matches(963, 369) // matches(Victories, Defeats)


// INPUT


// PROCESSING
function matches(victories, defeats)
{
    let matchesMath = victories - defeats
    /*console.log("DEBUG: Matches function processed! " + matchesMath)*/
    return matchesMath
}

switch (true) 
{
    case matchesResult < 10:
        rank = "Bronze"
        break
    case matchesResult >= 10 && matchesResult < 20:
        rank = "Iron"
        break
    case matchesResult >= 20 && matchesResult < 40:
        rank = "Steel"
        break
    case matchesResult >= 40 && matchesResult < 60:
        rank = "Silver"
        break
    case matchesResult >= 60 && matchesResult < 80:
        rank = "Gold"
        break
    case matchesResult >= 80 && matchesResult < 100:
        rank = "Platinum"
        break
    case matchesResult >= 100 && matchesResult < 120:
        rank = "Radiant"
        break
    case matchesResult >= 120 && matchesResult < 140:
        rank = "Ascendant"
        break
    case matchesResult >= 140:
        rank = "Immortal"
        break
}


// OUTPUT
console.log("Your character called " + characterName + " is at the " + rank + " rank" + " with a score of " + matchesResult + "!")
