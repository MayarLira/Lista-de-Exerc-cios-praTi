let i = 2;
let num = 100;
let arr = [];
var contador = 0;
 
while (contador < 50) {
  let i = 2;
  let ehPrimo = true;
  while (i * i <= num) {
    if (num % i == 0) {
      ehPrimo = false;
      break;
    }
    i++;
  }
  if (ehPrimo) {
    arr.push(num);
    contador++;
  }
  num++;
}
 
console.log(arr);