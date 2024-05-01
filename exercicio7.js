let totalDaCompra;
let numMacas = parseInt(require("prompt-sync")()("Digite o número de maÇas:"));


function calcularTotalDaCompra(numMacas) {
    
    if (numMacas < 12) {

        return totalDaCompra = numMacas * 0.30;


    } else {

        return totalDaCompra = numMacas * 0.25;

    }
    
}
calcularTotalDaCompra(numMacas);

console.log(totalDaCompra);