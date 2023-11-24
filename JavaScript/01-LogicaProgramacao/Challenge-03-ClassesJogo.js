/*
    # [Challenge] Classes de um Jogo

        ## OBJECTIVE
            Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:
                • nome
                • idade
                • tipo (ex: guerreiro, mago, monge, ninja )

            Além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:
                • Exibir a mensagem: "o {tipo} atacou usando {ataque}")
                • O {tipo} deve ser concatenado com o tipo que está na propriedade da classe
                • O {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

            ### PROCESS
                Se mago -> no ataque exibir (usou magia)
                Se guerreiro -> no ataque exibir (usou espada)
                Se monge -> no ataque exibir (usou artes marciais)
                Se ninja -> no ataque exibir (usou shuriken)

            ### OUTPUT
                Ao final deve se exibir uma mensagem:
                    • "o {tipo} atacou usando {ataque}"
                        ex: mago atacou usando magia
                        ex: guerreiro atacou usando espada
*/

class hero {
    constructor(name, age, type, attackType) {
        this.name = name
        this.age = age
        this.type = type
        this.attackType = attackType
    }
    
    attack() {
        console.log(`O herói do tipo ${this.type} atacou usando ${this.attackType}`)
    }
}

let mage = new hero("Merlin", 80, "Mago", "Magia")
let warrior = new hero("Aragorn", 35, "Guerreiro", "Espada")
let monk = new hero("Jack Chan", 30, "Monge", "Artes Marciais")
let ninja = new hero("Naruto", 20, "Ninja", "Shuriken")
    
mage.attack()
warrior.attack()
monk.attack()
ninja.attack()
