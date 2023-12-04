/*
  Faça um programa que calcule e imprima o salario a ser transferido para um funcionario.
  Para realizar o calculo receba o valor bruto do salario e o adicional dos beneficios.
  O salario a ser transferido é calculado da seguinte maneira:

    - Valor bruto do salario (-) percentual de imposto mediante a 
      faixa salarial (+) adicional dos beneficios.

  Para calcular o percentual de imposto segue as aliquotas:
    - De R$ 0.00 a R$ 1100.00 = 5.00%
    - De R$ 1100.01 a R$ 2500.00 = 10.00%
    - Maior que R$ 2500.00 = 15.00%
*/

const { gets, print } = require('./funcoes-auxiliares-ex3')

const valorSalarioBruto = gets()
const valorBeneficios = gets()

function CalcularPorcentagem(valor, percentual) {
  return valor * (percentual / 100)
}

function PegarAliquota(salario) {
  if (salario >= 0 && salario <= 1100) {
    return 5
  } else if (salario >= 1100.01 && salario <= 2500) {
    return 10
  } else {
    return 15
  }
}

const aliquotaImposto = PegarAliquota(valorSalarioBruto)
const valorImposto = CalcularPorcentagem(valorSalarioBruto, aliquotaImposto)

const valorATransferir = valorSalarioBruto - valorImposto + valorBeneficios

print(valorATransferir)
