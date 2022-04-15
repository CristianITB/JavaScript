let date = new Date();

//1. Obtén la fecha de hoy y sacala por pantalla.
function fechaHoy(){
    let date = new Date();
    let any = date.getFullYear();
    let mes = date.getMonth();
    let dia = date.getDate();
    console.log(any + "/" + (mes+1) + "/" + dia)
}
//fechaHoy();

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
//estoyM04();


//3. Desde hoy calcula cuánto tiempo falta para tu cumpleaños. (s, min, h, días)
function cumple(){
    let cumple = new Date(2023, 00, 04);

    let any = date.getFullYear();
    let mes = date.getMonth();
    let dia = date.getDate();
    let dateActual = new Date(any, mes, dia);

    console.log(cumple);
    console.log(dateActual);

    let dif = cumple.getTime() - dateActual.getTime();
    let difSegundos = dif/1000;
    let difMinutos = difSegundos/60;
    let difHoras = difMinutos/60;
    let difDias = difHoras/24;
    console.log(difSegundos + ' s');
    console.log(difMinutos + ' min');
    console.log(difHoras + ' h');
    console.log(difDias + ' dias');
}
//cumple();

//4. Mira si el día de la Mercé cae en domingo o sábado los próximos años. 
//   Informa con 20XX-dia, cuando el día no sea ni domingo ni sábado, 
//   comprueba hasta 2060.
function merce(){
    let diaMerce = 24;
    let mesMerce = 08;
    let anyMerce = 2022;
    let difAnys = 2060-2022;
    console.log(difAnys);
    for (let i = 0; i <= difAnys; i++){
        let data = new Date (anyMerce+i, mesMerce, diaMerce);
        if (data.getDay() != 0 && data.getDay() != 6){
            if (data.getDay() == 1){
            console.log(anyMerce+i + ' - Lunes');
            } else if (data.getDay() == 2){
                console.log(anyMerce+i + ' - Martes');
            } else if (data.getDay() == 3){
                console.log(anyMerce+i + ' - Miércoles');
            } else if (data.getDay() == 4){
                console.log(anyMerce+i + ' - Jueves');
            } else if (data.getDay() == 5){
                console.log(anyMerce+i + ' - Viernes');
            }
        }
    }
}
//merce();

//5. Crea un reloj con horas, minutos y segundos que haga “tick” cada segundo. 
//   El formato de salida cada segundo será:
function imprimirSegons(){
    let date = new Date();
    let hora = date.getHours();
    let minuts = date.getMinutes();
    let segons = date.getSeconds();
    console.log(hora + ':' + minuts + ':' + segons);
    var time = setTimeout(function(){imprimirSegons()}, 1000)
}
imprimirSegons();