const arr = [];
let num1 = require("prompt-sync")()("Insira um número:");
let num2 = require("prompt-sync")()("Insira outro número:");

arr[1] = num1;
arr[2] = num2;

arr.sort();

for(let i = 0; i < 2; i ++){
    console.log(arr[i]);
}