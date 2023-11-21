/*
    Crie uma função que escreva o nome do usuário.
    Crie uma função que verifique a idade do usuário.
    Crie uma função "main" que chame ambas as funções anteriores.
*/

function WriteUserName(name) {
    return "Your name is " + name
}

function VerifyAge(age) {
    if (age < 18) {
        return "you are a Minor."
    } else {
        return "you are an Adult."
    }
}

function main(name, age) {
    console.log(WriteUserName(name) + " and " + VerifyAge(age))
}

main("Fabio", 20)
