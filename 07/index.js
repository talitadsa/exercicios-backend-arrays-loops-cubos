const nomes = ["Ana", "Joana", "Carlos", "amanda"];

function ImprimeNomesComA(array){
const nomesComA = array.filter(nome => nome.startsWith('a') || nome.startsWith('A'));
console.log(nomesComA);
}

ImprimeNomesComA(nomes);