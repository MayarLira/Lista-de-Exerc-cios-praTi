 //Exercício 1

// Solicitar ao usuário que insira uma temperatura em graus Celsius

let celsius = require("prompt-sync")()("Insira uma temperatura em graus Celsius: ");

// Converter a temperatura para Fahrenheit

let fahrenheit = celsius * 9/5 + 32;

// Imprimir a temperatura em Fahrenheit

console.log("Temperatura em Fahrenheit: " + fahrenheit);