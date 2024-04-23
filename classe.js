// Definição da classe Heroi
class Heroi {
    // Construtor para inicializar as propriedades nome, idade e tipo
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    // Método para o herói atacar
    atacar() {
      let ataque;
      // Define o tipo de ataque com base no tipo do herói
      switch (this.tipo) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'atacou';
      }
      // Exibe a mensagem de ataque
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Criação de um herói e chamada do método atacar
  const meuHeroi = new Heroi('Aragorn', 30, 'guerreiro');
  meuHeroi.atacar(); // Saída: O guerreiro atacou usando espada
  