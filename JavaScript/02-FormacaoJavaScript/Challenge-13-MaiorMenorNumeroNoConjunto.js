/*
  Faça um programa que receba N (quantidade de numeros) e seus respectivos valores.
  Imprima o maior numero Par e o menor numero Impar.

  Exemplo:
    Entrada: 
      [5, 3, 4, 1, 10, 8]
    Saída: 
      Maior numero Par = 10
      Menor numero Impar = 1
*/

const { gets, print } = require('./funcoes-auxiliares-ex2')

const listaNumeros = gets()
let maiorNumeroPar = null
let menorNumeroImpar = null

for (let index = 0; index < listaNumeros; index++) {
  const numero = gets()
  
  if (numero % 2 === 0) {
    if (maiorNumeroPar === null || numero > maiorNumeroPar) {
      maiorNumeroPar = numero
    }
  } else {
    if (menorNumeroImpar === null || numero < menorNumeroImpar) {
      menorNumeroImpar = numero
    }
  }
}

print("Maior numero Par: " + maiorNumeroPar)
print("Menor numero Impar: " + menorNumeroImpar
  

          
