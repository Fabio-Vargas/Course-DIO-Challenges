/*
  Uma sala contem 5 alunos e para cada aluno foi sorteado um numero de 1 - 100.
  Faça um programa que receba os 5 numeros sorteados para os alunos e mostre o maior numero sorteado.

  Dados de Entrada:
    5
    50
    10
    98
    23

  Saída
    98
*/

// = = = = =
// /funcoes-auxiliares
const entradas = [5, 50, 10, 98, 23]
let index = 0

function gets() {
  const valor = entradas[index]
  index++
  return valor
}

function print(texto) {
  console.log(texto)
}

module.exports = { gets, print }

// = = = = =
const { gets, print } = require('./funcoes-auxiliares')

const numerosSorteados = []

for (let index = 0, index < 5, index++) {
  const numeroSorteado = gets()
  numerosSorteados.push(numeroSorteado)
}

let maiorValor = 0

for (let index = 0, index < numerosSorteados.length, index++) {
  const numeroSorteado = numerosSorteados[i]

  if (numeroSorteado > maiorValor) {
    maiorValor = numeroSorteado
  }
}

print(maiorValor)
