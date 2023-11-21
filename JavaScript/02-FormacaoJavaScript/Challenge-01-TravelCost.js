/*
    Faça um programa para calcular o valor de uma viagem.

    Você terá 5 variáveis. Sendo elas:
        • Preço da Gasolina
        • Preço do Etanol
        • Tipo de combustível abastecido
        • Gasto médio de combustível por KM
        • Distância da viagem em KM
*/

let fuelGasolinePrice = 5.67
let fuelEtanolPrice = 4.56
let fuelType = "Gasoline"
const KML_Gasoline = 13
const KML_Etanol = 10
const travelDistanceKM = 1234

if (fuelType === "Gasoline") {
    const travelCost = (travelDistanceKM / KML_Gasoline) * fuelGasolinePrice
    console.log("The fuel cost to travel using Gasoline is: R$ " + travelCost)
} else {
    const travelCost = (travelDistanceKM / KML_Etanol) * fuelEtanolPrice
    console.log("The fuel cost to travel using Etanol is: R$ " + travelCost)
}
