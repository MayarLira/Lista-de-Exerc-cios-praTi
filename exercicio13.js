let N1 = parseInt(require("prompt-sync")()("Insira um número:"));
let N2 = parseInt(require("prompt-sync")()("Insira um número:"));
let N3 = parseInt(require("prompt-sync")()("Insira um número:"));
let N4 = parseInt(require("prompt-sync")()("Insira um número:"));
let N5 = parseInt(require("prompt-sync")()("Insira um número:"));

function tabuada(N) {
for(let i = 1; i <= N; i++){
    let tabuada1 = parseInt(N * i);
    console.log(`${i} x ${N} = ${tabuada1}`);
    }
}

tabuada(N1);
tabuada(N2);
tabuada(N3);
tabuada(N4);
tabuada(N5);