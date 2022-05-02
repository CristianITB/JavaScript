const codigo = [];
const maxIntentos = 8;
var turnos = 0;

/*1. Genera una constante CODIGO_SECRETO de tipo array de 5 número aleatorios entre 0 y 9 usando la libreria Math.random();*/
function codigoSecreto() {
    for (let i = 0; i < 5; i++) {
        codigo[i] = Math.floor((Math.random() * 10));
    }
}

codigoSecreto();

function generarCasillasRespondidas(){
    let raiz = document.getElementById("Result");
    let rowResult = document.createElement("div").classList.add('rowResult', 'w100', 'flex', 'wrap');

    let w20 = document.getElementById("rowResult");
    let w20div = document.createElement("div").classList.add('w20');
    
    let w20divSub = document.getElementById("w20");
    let w20div = document.createElement("div").classList.add('celResult', 'flex');


    for(i = 0; i <= maxIntentos; i++){
        raiz.appendChild(rowResult);
        for(j = 0; j <= 5; j++){
            rowResult.appendChild()
        }
    }
}