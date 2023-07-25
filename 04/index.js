

function verificaMultiplos(numero, limite){
    let multiplos = [];
    for (let i = 0; i <= limite; i++) {
        if (i % numero == 0) {
            multiplos.push(i);
        }
    }
    console.log(`${multiplos}`);
}

verificaMultiplos(3,500);

