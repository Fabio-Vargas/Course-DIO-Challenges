/*
    Elabore um algoritmo com funções que calcule o que deve ser pago por um produto,
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
let paymentForm = 5

function ApplyDiscount(basePrice, discount) {
    return (basePrice * (1 - (discount / 100)))
}

function ApplyInterest(basePrice, interestRate) {
    return (basePrice * (1 + (interestRate / 100)))
}


switch(paymentForm) {
    case 1: // Payment w/ Cash = 15% Discount
        console.log("The product price is: R$ " + (ApplyDiscount(productPrice, 15)))
        break
    case 2: // Payment w/ Debit Card = 10% Discount
        console.log("The product price is: R$ " + (ApplyDiscount(productPrice, 10)))
        break
    case 3: // Payment w/ Credit Card = Base Price
        console.log("The product price is: R$ " + (ApplyDiscount(productPrice, 0)))
        break
    case 4: // Payment in 2x Installments = Base Price
        console.log("The product price is: R$ " + (ApplyDiscount(productPrice, 0)))
        break
    case 5: // Payment in 3x or more Installments = 10% Interest
        console.log("The product price is: R$ " + (ApplyInterest(productPrice, 10)))
        break
}
