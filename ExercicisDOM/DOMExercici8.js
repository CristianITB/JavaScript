var llistaAliments = ["Tomàquets", "Patates", "Enciam", "Pasta", "Arròs", 
"Oli", "Sal", "Pernil", "Butifarres", "Ceba"];

function printarElementsHTML(foodList){
    var option = "";
    var aliments = "";
    for (i = 0; i < foodList.length; i++){
        aliments += '<span>' + foodList[i] + '</span>' + ' - ';
        option += '<option value="' + foodList[i] + '">' + foodList[i] + "</option>"
    }
    document.getElementById("llistaCompra").innerHTML = option;
    document.getElementById("llista").innerHTML = aliments;
}
printarElementsHTML(llistaAliments);


function esborrarElement(){
    var alimentAEsborrar = document.getElementById("llistaCompra").value;

    for (i = 0; i < llistaAliments.length; i++){
        if (llistaAliments[i] == alimentAEsborrar){
            console.log("hola");
            let index = llistaAliments.indexOf(alimentAEsborrar);
            llistaAliments.splice(index, 1);
        }
    }
    printarElementsHTML(llistaAliments);
}