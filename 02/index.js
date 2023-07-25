const letras = ["A", "a", "B", "C", "u", "n"];

function encontrarValor(array){
const vlProcurado = array.find(elemento => elemento == 'E' || elemento == "e");

if (vlProcurado == undefined){
console.log('Valor não encontrado! :(');
}
else{
console.log('Valor encontrado! :)');
}
}

encontrarValor(letras);