const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];

const limiteFilaDentro = 5;

function filaDoBanco (filaDeDentro, filaDeFora, limiteFilaDentro){
while (filaDeFora.length > 0 && filaDeDentro.length < limiteFilaDentro) {
  const pessoa = filaDeFora.shift(); 
  filaDeDentro.push(pessoa); 
}
console.log(filaDeDentro);
console.log(filaDeFora);
}

filaDoBanco(filaDeDentro,filaDeFora,limiteFilaDentro);


