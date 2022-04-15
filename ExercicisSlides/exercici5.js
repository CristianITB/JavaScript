/* ------ Dates ---- */
function dataActual(){
    let date = new Date();
    let diaSetmana = date.getDay() //passar a dilluns dimarts etc
    let diaMes = date.getDate();
    let mes = date.getMonth();
    let any = date.getFullYear();
    
    if (diaSetmana == 0){
        diaSetmana = 'diumenge';
    } else if (diaSetmana == 1){
        diaSetmana = 'dilluns';
    } else if (diaSetmana == 2){
        diaSetmana = 'dimarts';
    } else if (diaSetmana == 3){
        diaSetmana = 'dimecres';
    } else if (diaSetmana == 4){
        diaSetmana = 'dijous';
    } else if (diaSetmana == 5){
        diaSetmana = 'divendres';
    } else if (diaSetmana == 6){
        diaSetmana = 'dissabte';
    }

    if (diaMes < 10){
        diaMes = "0" + diaMes;
    }
    if (mes < 10){
        mes = "0" + (mes+1);
    }

    return [diaSetmana, diaMes, mes, any]
}
let diaSetmana = document.getElementsByClassName("diaSetmana");
let diaMes = document.getElementById("diaMes");
let mes = document.getElementById("mes");
let any = document.getElementById("any");
let infoDates = dataActual();
for (i = 0; i < diaSetmana.length; i++) {
    diaSetmana.item(i).innerHTML = infoDates[0];
}
diaMes.innerHTML = infoDates[1];
mes.innerHTML = infoDates[2];
any.innerHTML = infoDates[3];


/* ----- Rellotge ---- */
setInterval(imprimirSegons, 500);
function imprimirSegons(){
    let date = new Date();
    let hora = date.getHours();
    let minuts = date.getMinutes();
    let segons = date.getSeconds();

    //let hora = String(date.getHours()).padStart(2, "0");

    if (hora < 10){
        hora = "0" + hora
    }
    if (minuts < 10){
        minuts = "0" + minuts
    }
    if (segons < 10){
        segons = "0" + segons
    }

    let rellotge = document.getElementsByClassName("rellotge")
    for (i = 0; i < rellotge.length; i++) {
        rellotge.item(i).innerHTML = hora + ':' + minuts + ':' + segons
    }
}


/* ------ Estic a M04? ----- */
function esticM04(){

    let date = new Date();
    let diaSetmana = date.getDay();
    let hora = date.getHours();
    let minuts = date.getMinutes();

    let tenimClasse = false;

    if (diaSetmana == 1){
        if (hora == 11){
            if (minuts > 15){
                tenimClasse = true;
            }
        } else if (hora == 12){
            if (minuts < 10){
                tenimClasse = true;
            }
        }
    } else if (diaSetmana == 5){
        if (hora == 8 || hora == 9){
            if (minuts < 50){
                tenimClasse = true;
            }
        } 
    }

    if (tenimClasse == true){
        return "si"
    } else{
        return "no"
    }
}
let estasAClasse = esticM04();
document.getElementById("tensClasse").innerHTML = estasAClasse;
