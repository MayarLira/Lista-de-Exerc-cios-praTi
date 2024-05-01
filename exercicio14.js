let num = parseInt(require("prompt-sync")()("Insira um número:"));
let mediaAritmetica;
let soma = 0;
let contador = 0;

while(num != 0){
    soma += num;
    contador++;
    console.log(soma);
    console.log(contador);
    num = parseInt(require("prompt-sync")()("Insira um número:"));
}
mediaAritmetica = soma/contador;
console.log(mediaAritmetica);