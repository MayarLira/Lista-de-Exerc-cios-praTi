//Exercício 3

// Solicitar ao usuário que insira quatro números inteiros
let num1 = require("prompt-sync")()("Insira um número inteiro: ");
let num2 = require("prompt-sync")()("Insira mais um número inteiro: ");
let num3 = require("prompt-sync")()("Insira um terceiro número inteiro: ");
let num4 = require("prompt-sync")()("Insira um quarto número inteiro: ");

// Armazenar os valores originais dos três primeiros números

let somaOriginal = Number(num1) + Number(num2) + Number(num3);

// Fazer as modificações nos números

num1 = Number(num1) + 25;
num2 = Number(num2) * 3;
num3 = Number(num3) * 0.12;
num4 = somaOriginal;

// Imprimir os números modificados

console.log("Primeiro número modificado: " + num1);
console.log("Segundo número modificado: " + num2);
console.log("Terceiro número modificado: " + num3);
console.log("Quarto número modificado: " + num4);
