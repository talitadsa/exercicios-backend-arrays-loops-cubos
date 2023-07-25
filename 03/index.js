const numeros = [54, 22, 14, 87, 10, 284];

function encontrarValor(array){
    const vlProcurado = array.find(elemento => elemento == 10);
    if (vlProcurado == undefined){
    console.log('Valor não encontrado! :(');
    }
    else{
    console.log(`Valor encontrado na posição ${array.indexOf(10)}! :)`);
    }
}
    
encontrarValor(numeros);

