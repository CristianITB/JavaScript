let date = new Date();

//1. Obtén la fecha de hoy y sacala por pantalla.
function fechaHoy(){
    let date = new Date();
    let any = date.getFullYear();
    let mes = date.getMonth();
    let dia = date.getDate();
    console.log(any + "/" + (mes+1) + "/" + dia)
}
fechaHoy();

//2. Según el día de la semana y la hora actual, informa por pantalla si estás o no en clase de M04.
function estoyM04(){

    let userDiaSemana = parseInt(prompt('Introduce un dia de la semana (0-7)'));
    let userHora = parseInt(prompt('Introduce una hora (0-23)'));
    let userMinutos = parseInt(prompt('Introduce los minutos (0-59)'));

    /*
    let any = date.getFullYear();
    let mes = date.getMonth();
    let dia = date.getDate();
    let diaSemana = date.getDay();
    let hora = date.getHours();
    let minutos = date.getMinutes();
    */

    let tenemosClase = false;

    if (userDiaSemana == 1){
        if (userHora == 11){
            if (userMinutos > 15){
                tenemosClase = true
            }
        } else if (userHora == 12){
            if (userMinutos < 10){
                tenemosClase = true
            }
        }
    } else if (userDiaSemana == 5){
        if (userHora == 8 || userHora == 9){
            if (userMinutos < 50){
                tenemosClase = true
            }
        } 
    }

    if (tenemosClase == true){
        console.log("Tienes M04");
    } else{
        console.log("No tienes M04");
    }
}
estoyM04();


//3. Desde hoy calcula cuánto tiempo falta para tu cumpleaños. (s, min, h, días)
function cumple(){
    let cumple = new Date()
}