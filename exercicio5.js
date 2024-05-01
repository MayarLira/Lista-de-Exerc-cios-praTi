 //Exercício 5

// Lê as notas das duas avaliações do aluno no semestre

let nota1 = parseFloat(require("prompt-sync")()("Digite a 1ª nota:"));
let nota2 = parseFloat(require("prompt-sync")()("Digite a 2ª nota:"));

// Calcula a média das duas notas

let media = (nota1 + nota2) / 2;

// Escreve a média semestral no console

console.log("Média semestral: " + media);

// Verifica se a média é maior ou igual a 6.0

if (media >= 6.0) {
    
    // Se a média for maior ou igual a 6.0, imprime a mensagem de aprovação
    
    console.log("PARABÉNS! Você foi aprovado!");
} else {
    
    // Se a média for menor que 6.0, imprime a mensagem de reprovação
    
    console.log("Você foi REPROVADO! Estude mais!");
}