// Classe genérica para representar um Herói
class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    // Método para atacar
    atacar() {
      let ataque;
  
      // Estrutura de decisão para definir o ataque com base no tipo de herói
      if (this.tipo === "mago") {
        ataque = "magia";
      } else if (this.tipo === "guerreiro") {
        ataque = "espada";
      } else if (this.tipo === "monge") {
        ataque = "artes marciais";
      } else if (this.tipo === "ninja") {
        ataque = "shuriken";
      } else {
        ataque = "ataque desconhecido";  // Caso o tipo não seja reconhecido
      }
  
      // Exibe a mensagem de ataque
      console.log(`O ${this.tipo} atacou usando ${ataque}.`);
    }
  }
  
  // Exemplo de criação de diferentes heróis
  let heroi1 = new Heroi("Arthas", 30, "guerreiro");
  let heroi2 = new Heroi("Merlin", 150, "mago");
  let heroi3 = new Heroi("Ryu", 28, "monge");
  let heroi4 = new Heroi("Naruto", 18, "ninja");
  
  // Chamando o método atacar para cada herói
  heroi1.atacar();  // Saída: O guerreiro atacou usando espada.
  heroi2.atacar();  // Saída: O mago atacou usando magia.
  heroi3.atacar();  // Saída: O monge atacou usando artes marciais.
  heroi4.atacar();  // Saída: O ninja atacou usando shuriken.
  