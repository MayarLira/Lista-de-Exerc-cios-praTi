         //Exercício 2

 // Solicitar ao usuário que insira o número total de eleitores

 let totalEleitores = require("prompt-sync")()("Insira o número total de eleitores: ");

 // Solicitar ao usuário que insira o número de votos brancos
 
 let votosBrancos = require("prompt-sync")()("Insira o número de votos brancos: ");
 
 // Solicitar ao usuário que insira o número de votos nulos
 
 let votosNulos = require("prompt-sync")()("Insira o número de votos nulos: ");
 
 // Solicitar ao usuário que insira o número de votos válidos
 
 let votosValidos = require("prompt-sync")()("Insira o número de votos válidos: ");
 
 // Calcular o percentual de votos brancos, nulos e válidos em relação ao total
 
 let percentualBrancos = (votosBrancos / totalEleitores) * 100;
 let percentualNulos = (votosNulos / totalEleitores) * 100;
 let percentualValidos = (votosValidos / totalEleitores) * 100;
 
 // Imprimir os percentuais
 
 console.log("Percentual de votos brancos: " + percentualBrancos + "%");
 console.log("Percentual de votos nulos: " + percentualNulos + "%");
 console.log("Percentual de votos válidos: " + percentualValidos + "%");