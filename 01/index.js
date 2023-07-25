const numeros = [2, 3, 4, 6];

function soma(array){
var soma = 0;
for(var i = 0; i < array.length; i++) {
    soma += array[i];
}
console.log(soma);
}

soma(numeros);