const numeros = [3, 4, 7, 8, 1, 6, 5, 10];

function SomaNumerosPares(array){
const numerosPares = array.filter(numero => numero % 2 == 0);
var soma = 0;
for(var i = 0; i < numerosPares.length; i++) {
    soma += numerosPares[i];
}
console.log(soma);
}

SomaNumerosPares(numeros);
