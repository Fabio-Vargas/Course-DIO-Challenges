/*
Elabore um algoritmo que calcule o que deve ser pago por um produto,
considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida 
e efetuar o cálculo adequado.

Código condição de pagamento:
    • A vista no Débito, recebe 10% de desconto.
    • A vista no Dinheiro ou PIX, recebe 15% de desconto.
    • Em duas vezes, preço normal sem juros.
    • Acima de duas vezes, preço normal mais juros de 10%.
*/

let product = "Graphics Card"
let productPrice = 5000
let paymentForm = 2

switch(paymentForm) {
    case 1: // Payment w/ Cash
        console.log("The product price is: R$ " + (productPrice * 0.85))
        break
    case 2: // Payment w/ Debit Card
        console.log("The product price is: R$ " + (productPrice * 0.90))
        break
    case 3: // Payment w/ Credit Card
        console.log("The product price is: R$ " + productPrice)
        break
    case 4: // Payment in 2x Installments
        console.log("The product price is: R$ " + productPrice)
        break
    case 5: // Payment in 3x or more Installments
        console.log("The product price is: R$ " + (productPrice * 1.10))
        break
}
