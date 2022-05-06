const codigo = [1, 3, 5, 7, 9];
const maxIntentos = 8;
var turnos = 0;

function generarCodigoSecreto() {
    for (let i = 0; i < 5; i++) {
        codigo[i] = Math.floor((Math.random() * 10));
    }
}
generarCodigoSecreto();


function comprobar(){
    turnos++;
    if (turnos <= maxIntentos){
        comprobarResultado();
    } else{
        endGame();
    }
}


function comprobarResultado(){
    var userNum = comprobarUserNum();
    for (i = 0; i < userNum.length; i++){
        console.log(userNum[i]);
    }
    
    const raiz = document.getElementById("Result");
    let rowResult = document.createElement("div");
    rowResult.setAttribute('class', 'rowResult w100 flex wrap');

    for(j = 0; j <= codigo.length-1; j++){

        let w20div = document.createElement("div");
        w20div.setAttribute('class', 'w20');
        
        let celResult = document.createElement("div");
        celResult.setAttribute('class', 'celResult flex');

        rowResult.appendChild(w20div);
        w20div.appendChild(celResult);
    }
    raiz.appendChild(rowResult);
}

function endGame(){
    const raiz = document.getElementsByClassName("cel");
    for (i = 0; i < codigo.length; i++){
        raiz[i].innerHTML = codigo[i];
    }
}

function comprobarUserNum(){
    let userNum = document.getElementById("userNum").value;
    return userNum
}