let codProduto = parseInt(require("prompt-sync")()("Insira o código de produto:"));

if(codProduto == 1){
    console.log("Sul");
}else if(codProduto == 2){
    console.log("Norte");
}else if(codProduto == 3){
    console.log("Leste");
}else if(codProduto == 4){
    console.log("Oeste");
}else if(codProduto == 5 || codProduto == 6){
    console.log("Nordeste");
}else if(codProduto == 7 ||codProduto == 8 || codProduto == 9  ){
    console.log("Sudeste");
}else if(codProduto >= 10 && codProduto <= 20 ){
    console.log("Centro-Oeste");
}else if(codProduto >= 25 && codProduto <= 50 ){
    console.log("Nordeste2");
}else{
    console.log("Produto importado");

}
