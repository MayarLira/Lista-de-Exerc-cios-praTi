let A = parseInt(require("prompt-sync")()("Digite lado A:"));;
let B = parseInt(require("prompt-sync")()("Digite lado B:"));
let C = parseInt(require("prompt-sync")()("Digite lado C:"));

if( A + B > C && B + C > A && C + A > B ){
    

    if((A == B || A ==C || B == C)){
        console.log("Triângulo isósceles");
    }
    if((A != B && B != C)){
        console.log("Triângulo escaleno");
    }
    if((A == B && B == C)){
        console.log("Triângulo eqüilátero");
    }
}else {
    console.log("NÃO É UM TRIÂNGULO");
}

