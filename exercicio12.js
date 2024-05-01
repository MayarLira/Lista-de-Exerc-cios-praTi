const arr = [];

for(let i = 1000; i < 2000; i ++){

    arr[i] = parseInt(i)

    if(arr[i] % 11 == 5) {

    console.log(arr[i]);
    }
}