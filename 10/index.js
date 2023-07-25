const numeros = [2, 8, 12, 15, 80];

function calcularMaiorDiferenca(array){
  let maiorDiferenca = 0;
  let menorNumero = array[0];

  for (let i = 1; i < array.length; i++) {
    const numeroAtual = array[i];
    const diferenca = numeroAtual - menorNumero;

    if (diferenca > maiorDiferenca) {
      maiorDiferenca = diferenca;
    }
    if (numeroAtual < menorNumero) {
      menorNumero = numeroAtual;
    }
  }
  console.log("Maior diferença:", maiorDiferenca);
}

calcularMaiorDiferenca(numeros);

