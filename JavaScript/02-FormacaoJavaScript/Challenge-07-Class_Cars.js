/*
    Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por KM rodado.
    Crie um método que dado a distancia e o preço do combustivel, retorne o valor 
    gasto em reais para realizar este percurso.
*/

class Car {
    brand
    color
    fuelUsage

    constructor(brand, color, fuelUsage) {
        this.brand = brand
        this.color = color
        this.fuelUsage = fuelUsage
    }

    CalculateTravelCost (distance, fuelCost) {
        return (distance / this.fuelUsage) * fuelCost
    }
}


const Car1 = new Car ("Audi", "Black", 8)
console.log(Car1)
console.log("The travel cost is: R$ " + Car1.CalculateTravelCost(1234, 5.6))

const Car2 = new Car ("Nissan", "Black", 8)
console.log(Car2)
console.log("The travel cost is: R$ " + Car2.CalculateTravelCost(123, 5.6))
