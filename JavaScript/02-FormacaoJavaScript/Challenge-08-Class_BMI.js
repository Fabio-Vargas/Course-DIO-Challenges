/*
    Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos: nome, peso e altura.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura))
    Instancie uma pessoa chamada José que tenha 70kg, 1.75m e peça ao josé para dizer 
    o valor de seu IMC.
*/

class Person {
    name
    weightKG
    heightMeters

    constructor(name, weightKG, heightMeters) {
        this.name = name
        this.weightKG = weightKG
        this.heightMeters = heightMeters
    }

    // Body Mass Index (BMI)
    CalculateBMI() {
        return this.weightKG / (this.heightMeters * this.heightMeters)
    }

    ClassifyBMI() {
        const valueBMI = this.CalculateBMI()

        switch (true) {
            case valueBMI < 18.5:
                return "Underweight";
                break
            case valueBMI >= 18.5 && valueBMI < 25:
                return "Normal"
            case valueBMI >= 25 && valueBMI < 30:
                return "Overweight"
            case valueBMI >= 30 && valueBMI < 40:
                return "Obesity"
            default:
                return "Extreme Obesity"
        }
    }

    DescribePersonBMI() {
        console.log(`José: My BMI is ${this.CalculateBMI()} and it falls under the ${this.ClassifyBMI()} classification.`)
    }
}

const jose = new Person("José", 70, 1.75)
console.log(jose) // Debug
jose.DescribePersonBMI()
