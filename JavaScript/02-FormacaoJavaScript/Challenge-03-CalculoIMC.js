/*
    O IMC - Indice de Massa Corporal é um critério da Organização Mundial da Saúde (OMS) 
    para dar uma indicação sobre a condição de peso de uma pessoa adulta.

        Fórmula do IMC:
        IMC = peso / (altura * altura)

    Elabore um algoritmo que dado o peso e a altura de um adulto, mostre sua condição 
    de acordo com a tabela abaixo.

        IMC em adultos:
            • Abaixo de 18.5 = Abaixo do peso
            • Entre 18.5 e 25 = Peso normal
            • Entre 25 e 30 = Acima do peso
            • Entre 30 e 40 = Obeso
            • Acima de 40 = Obesidade Grave
*/

let pesoKG = 80
const alturaMetros = 1.85

const IMC_Calculo = pesoKG / (alturaMetros * alturaMetros) // Math.pow(alturaMetros , 2)

console.log("O IMC é de: " + IMC_Calculo)
switch (true) {
    case IMC_Calculo < 18.5:
        console.log("O paciente está Abaixo do Peso.")
        break
    case IMC_Calculo >= 18.5 && IMC_Calculo < 25:
        console.log("O paciente está no Peso Normal.")
        break
    case IMC_Calculo >= 25 && IMC_Calculo < 30:
        console.log("O paciente está Acima do Peso.")
        break
    case IMC_Calculo >= 30 && IMC_Calculo < 40:
        console.log("O paciente está Obeso.")
        break
    default:
        console.log("O paciente está com Obesidade Grave.")
        break
}
