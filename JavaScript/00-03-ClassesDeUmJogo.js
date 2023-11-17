/*
  # [Challenge] Escrevendo as Classes de um Jogo

    ## OBJECTIVE
      Crie uma classe genérica que represente um herói de uma aventura e que possua as seguintes propriedades:
        • Nome
        • Idade
        • Tipo (ex: Guerreiro, Mago, Monge, Ninja )

      Além disso, deve ter um método chamado "atacar" que deve atender os seguintes requisitos:
        • Exibir a mensagem: "O {tipo} atacou usando {ataque}".
        • aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
        • e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo.

      ### PROCESS
        • Se mago -> no ataque exibir (usou magia)
        • Se guerreiro -> no ataque exibir (usou espada)
        • Se monge -> no ataque exibir (usou artes marciais)
        • Se ninja -> no ataque exibir (usou shuriken)

      ### OUTPUT
        • Ao final deve se exibir uma mensagem:
          "o {tipo} atacou usando {ataque}"
            ex: Mago atacou usando Magia
                Guerreiro atacou usando Espada
*/


// 

class hero {
  constructor(name, age, type, attackType) {
    this.name = name
    this.age = age
    this.type = type
    this.attackType = attackType
  }

  attack() {
    console.log(`O herói do tipo ${hero.type} atacou usando ${hero.attackType}`)
  }
}

let mage = new hero("Gandalf", 80, "Mago", "Magia")
let warrior = new hero("Aragorn", 35, "Guerreiro", "Espada")
let monk = new hero("Jack Chan", 30, "Monge", "Artes Marciais")
let ninja = new hero("Naruto", 20, "Ninja", "Shuriken")

