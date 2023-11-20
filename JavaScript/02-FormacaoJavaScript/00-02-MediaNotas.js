/*
    Faça um algoritmo que dado as notas tiradas por um aluno, calcule e imprima a média e sua classificação 
    conforme a tabela abaixo.
    
        • Média = (nota1 + nota2 + nota3) / 3

    Classificação:
        • Média menor que 5, reprovação
        • Média entre 5 e 7, recuperação
        • Média acima de 7, aprovado
*/

let nota1 = 9
let nota2 = 6
let nota3 = 3

const media = (nota1 + nota2 + nota3) / 3

console.log("A média do aluno é de: " + media)
if (media < 5) {
    console.log("O aluno está reprovado!")
} else if (media >= 5 && media < 7) {
    console.log("O aluno está de recuperação!")
} else {
    console.log("O aluno está aprovado!")
}
