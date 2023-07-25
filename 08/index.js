const numeros = [3, 24, 1, 8, 11, 7, 15];

function imprimeMaiorNumero (array){
    let maiorNumero = array[0];
    for (let i = 1; i < numeros.length; i++) {
      if (array[i] > maiorNumero) {
        maiorNumero = array[i];
      }
    }
    console.log(`O maior número é: ${maiorNumero}.`);
}

imprimeMaiorNumero(numeros);