let promptSync = require("prompt-sync")();
let n = parseInt(promptSync("Insira um número:"));

while(n != null && n > 0){

    if(n % 2 == 0){
        console.log("PAR");
    }else if(n % 2 == 1){
        console.log("ÍMPAR");
    }

    n = parseInt(promptSync("Insira um número:"));
}