# GAME

Desafio classificador de nível de Herói

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
console.log(`O Herói de nome ${heroi} está no nível de ${nivel}`); 