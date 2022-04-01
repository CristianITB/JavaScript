//1. Crea el objeto estudiante con las propiedades: nombre, curso y edad.
//  a) Listar las propiedades del objeto.
//  b) Elimina una propiedad al gusto y vuelve a listar las propiedades del objeto. 
//  c) Añade dos propiedades (fecha_nacimiento, apellidos) y vuelve a listarlo.

var alumno =  {
    nombre: "Crotolamo",
    curso: "1r DAMi",
    edad: "79"
}
// a)
function printProperty(object){
    var result = ``;
    for (var i in object){
        if(object.hasOwnProperty(i)){
            result += `${i} = ${object[i]}\n`;
        }
    }
    return result;
}
console.log(printProperty(alumno));

//  b)
function deleteProperty(object){
    delete object.edad;
    console.log(printProperty(object));
}
console.log(deleteProperty(alumno));

//  c)
function addProperty(object){
    object.fecha_nacimiento = '1943/01/04';
    object.apellidos = 'Obo Ucciono';
    console.log(printProperty(object));
}
console.log(addProperty(alumno));

//  d) 
function calculateAge(object){
    let birthday = new Date(object.fecha_nacimiento);

    let date = new Date();

    let any = date.getFullYear();
    let mes = date.getMonth();
    let dia = date.getDate();
    let dateActual = new Date(any, mes, dia);

    console.log(birthday);
    console.log(dateActual);

    let diff = dateActual.getTime() - birthday.getTime();

    /*
    let difSec = dif/1000;

    let secRes = (diffSec/60 - parseInt(difSec/60)) * 60

    let difMin = (difSec - secRes)/60 ;
    let minRes = (diffMin/60 - parseInt(difMin/60)) * 60

    let difHours = parseInt(difMin/60);
    
    let difDays = difHoras/24;

    console.log(difSegundos + ' s');
    console.log(difMinutos + ' min');
    console.log(difHoras + ' h');
    console.log(difDias + ' dias');
       */

    let days = diff/(1000*60*60*24);
    let daysResHours = days/24 - parseInt(days/24);
    let hoursRes = daysResHours * 24;

    let months = (days - daysResHours)/30;
    let monthsResDays = months/30 - parseInt(months/30);
    let daysRes = monthsResDays * 30;

    let years = (months - daysRes)/12;
    let yearsResDays = years/12 - parseInt(years/12);
    let monthsRes = yearsResDays * 12;

 

    let age = dateActual.getFullYear() - birthday.getFullYear();
    return age;
}
console.log(calculateAge(alumno));