/*
Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
    • Preço da Gasolina
    • Preço do Etanol
    • Tipo de combustível abastecido
    • Gasto médio de combustível por KM
    • Distância da viagem em KM
*/

let combustivelGasolinaPreco = 5.67
let combustivelEtanolPreco = 4.56
let combustivelTipo = "Gasolina"
const KML_Gasolina = 13
const KML_Etanol = 10
const viagemDistanciaKM = 1234

if (combustivelTipo === "Gasolina") {
    const viagemCusto = (viagemDistanciaKM / KML_Gasolina) * combustivelGasolinaPreco
    console.log("O custo da viagem com Gasolina será de: " + viagemCusto)
} else {
    const viagemCusto = (viagemDistanciaKM / KML_Etanol) * combustivelEtanolPreco
    console.log("O custo da viagem com Etanol será de: " + viagemCusto)
}
