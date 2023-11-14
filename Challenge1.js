// INSTRUCTIONS
/*
[Challenge 1] Desafio Classificador de Nível de Herói

## OBJETIVO
Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, 
depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor que 1.000 = Bronze
Se XP for entre que 1.000 e 1.999 = Ferro
Se XP for entre que 2.000 e 3.999 = Aço
Se XP for entre que 4.000 e 5.999 = Prata
Se XP for entre que 6.000 e 7.999 = Ouro
Se XP for entre que 8.000 e 9.99 = Platina
Se XP for entre que 10.000 e 11.999 = Radiante
Se XP for entre que 12.000 e 13.999 = Ascendente
Se XP for maior ou igual a 14.000 = Imortal

## SAÍDA
Ao final deve se exibir uma mensagem:
"O Herói **{nome}** está no nível **{nível}**"
*/


// VARIABLES
let characterName = "HERO"
let experience = 6514
let rank = ""


// INPUT


// PROCESSING
switch (true) 
    {
        case experience < 1000:
            rank = "Bronze"
            break
        case experience >= 1000 && experience < 2000:
            rank = "Iron"
            break
        case experience >= 2000 && experience < 4000:
            rank = "Steel"
            break
        case experience >= 4000 && experience < 6000:
            rank = "Silver"
            break
        case experience >= 6000 && experience < 8000:
            rank = "Gold"
            break
        case experience >= 8000 && experience < 10000:
            rank = "Platinum"
            break
        case experience >= 10000 && experience < 12000:
            rank = "Radiant"
            break
        case experience >= 12000 && experience < 14000:
            rank = "Ascendant"
            break
        case experience >= 14000:
            rank = "Immortal"
            break
    }


// OUTPUT
console.log("Your character called " + characterName + " is at the " + rank + " rank!")
