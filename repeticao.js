/*Desafio classificador de nível de Herói

O que deve ser utilizado:

- Variáveis
- Operadores
- Laços de repetição
- Estrutura de decisão

Objetivo
Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um
herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo;

Se o XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata Ouro
Se XP for entre 5.001 e 8.000 = Platina Diamante
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000 = Imortal
Se o XP for maior ou igual do que 10.001 = Radiante
- */

// Variáveis para armazenar o nome e a quantidade de experiência (XP) do herói
let heroi = "felipao";
let experiencia = 1000;
let nivel;

// Estrutura de decisão para classificar o nível do herói com base na experiência
/*if (experiencia < 1000) {
    nivel = "Ferro";
} else if (experiencia >= 1001 && experiencia <= 2000) {
    nivel = "Bronze";
} else if (experiencia >= 2001 && experiencia <= 5000) {
    nivel = "Prata Ouro";
} else if (experiencia >= 5001 && experiencia <= 8000) {
    nivel = "Platina Diamante";
} else if (experiencia >= 8001 && experiencia <= 9000) {
    nivel = "Ascendente";
} else if (experiencia >= 9001 && experiencia <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

// Exibe a mensagem com o nome e o nível do herói
console.log(`O Herói de nome ${heroi} está no nível de ${nivel}`); */

/*  # 2️⃣ Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**" */

function calcularNivel(vitorias, derrotas) {
    // Calcula o saldo de Rankeadas (vitórias - derrotas)
    let saldoVitorias = vitorias - derrotas;
    let nivel;

    // Determina o nível do jogador com base no saldo de vitórias
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // Retorna a mensagem com o saldo de vitórias e o nível do jogador
    return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

// Exemplo de uso da função
let mensagem = calcularNivel(70, 20);
console.log(mensagem); // Saída: O Herói tem de saldo de 50 está no nível de Ouro

