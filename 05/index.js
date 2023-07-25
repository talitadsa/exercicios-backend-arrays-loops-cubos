const original = [1, 4, 12, 21, 53, 88, 112];

function imprimeNumerosPares(array){
const numerosPares = array.filter(numero => numero % 2 == 0);
console.log(numerosPares);
}

imprimeNumerosPares(original);