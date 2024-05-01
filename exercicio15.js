let promptSync = require("prompt-sync")();
let somaTotal = 0;
let somaPeso = 0;

let num = parseFloat(promptSync("Insira um número: "));
let peso = parseFloat(promptSync("Insira o peso do número: "));

while(num != 0){
    somaTotal += num * peso;
    somaPeso += peso;

    num = parseFloat(promptSync("Insira um número: "));
    peso = parseFloat(promptSync("Insira o peso do número: "));
}

let mediaPonderada = somaTotal / somaPeso;

console.log("A média ponderada é: " + mediaPonderada);