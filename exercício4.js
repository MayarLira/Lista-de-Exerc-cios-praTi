//Exercício 4

// Lê as notas das duas avaliações do aluno no semestre

let nota1 = parseFloat(require("prompt-sync")()("Digite a 1ª nota:"));
let nota2 = parseFloat(require("prompt-sync")()("Digite a 2ª nota:"));

// Calcula a média semestral

let media = (nota1 + nota2) / 2;

// Escreve a média semestral

console.log("Média semestral: " + media);

// Verifica se o aluno foi aprovado e escreve a mensagem

if (media >= 6.0) {
    console.log("PARABÉNS! Você foi aprovado!");
}