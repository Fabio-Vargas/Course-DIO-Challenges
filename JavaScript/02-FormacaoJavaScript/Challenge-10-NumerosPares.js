/*
  Crie um programa que seja capaz de percorrer uma lista de numeros e imprima cada numero PAR encontrado.
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let index = 0; index < numbers.length; index++) {
  const number = numbers[index]
  
  if (number % 2 === 0) {
    console.log(number)
  }
}
