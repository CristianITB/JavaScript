const codigo = [1, 3, 5, 7, 9];
const maxIntentos = 8;
var turnos = 0;

var input = document.getElementById("userNum");

input.addEventListener("keypress", function(event){
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("check").click();
  }
});

function generarCodigoSecreto() {
    for (let i = 0; i < 5; i++) {
        codigo[i] = Math.floor((Math.random() * 10));
    }
    console.log(codigo);
}
generarCodigoSecreto();


function comprobar(){
    turnos++;
    if (turnos < maxIntentos){
        let hasWin = comprobarResultado();
        document.getElementById("userNum").focus();
        if (hasWin == true){
            endGame(true);
        }
    } else{
        endGame(false);
    }
}

function comprobarResultado(){
    var userNum = getUserNum();

    if (userNum.length != codigo.length){
        alert("Por favor, introduce un número de "+ codigo.length + " cifras.");
        userNum = ["-", "-", "-", "-", "-"];
        turnos--;
    }
    for (let i = 0; i < 5; i++) {
        console.log(typeof userNum[i]);
            if (parseInt(userNum[i]) == NaN){
                console.log("manolo")
            }       
    }
    alert("Por favor, introduce un número de "+ codigo.length + " cifras.");
    userNum = ["-", "-", "-", "-", "-"];
    turnos--;
    



    let fraseInfo = document.getElementById("info");
    fraseInfo.innerHTML = "Intento número " + (turnos+1) + ".";

    const raiz = document.getElementById("Result");
    let rowResult = document.createElement("div");
    rowResult.setAttribute('class', 'rowResult w100 flex wrap');

    var totalCorrect = 0

    for(j = 0; j <= codigo.length-1; j++){

        let w20div = document.createElement("div");
        w20div.setAttribute('class', 'w20');
        
        let celResult = document.createElement("div");
        celResult.innerHTML = userNum[j];

        if(userNum[j] == codigo[j]){
            totalCorrect++;
            celResult.setAttribute('class', 'celResult flex correctCel');
        } else if(codigo.includes(parseInt(userNum[j])) && codigo[j] != userNum[j]){
            celResult.setAttribute('class', 'celResult flex existingCel');
        } else{
            celResult.setAttribute('class', 'celResult flex');
        }       

        rowResult.appendChild(w20div);
        w20div.appendChild(celResult);
    }
    raiz.appendChild(rowResult);
    document.getElementById('userNum').value = "";

    if (totalCorrect == codigo.length){
        return true;
    } else{
        return false;
    }
}

function getUserNum(){
    let userNum = document.getElementById("userNum").value;
    return userNum
}

function endGame(hasWin){
    const raiz = document.getElementsByClassName("cel");
    for (i = 0; i < codigo.length; i++){
        raiz[i].innerHTML = codigo[i];
    }
    
    if (hasWin == true){
        let sectionInfo = document.getElementsByClassName("info");
        for (i = 0; i < sectionInfo.length; i++){
            sectionInfo[i].setAttribute('class', 'correctCel info');
        }
        let fraseInfo = document.getElementById("info");
        fraseInfo.innerHTML = "Muy bien! Has acertado todas en " + turnos + " intentos!";
    } else{
        let fraseInfo = document.getElementById("info");
        fraseInfo.innerHTML = "Lo siento, has perdido:(";
    }
}
