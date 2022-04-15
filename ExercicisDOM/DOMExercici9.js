var llistaAliments = ["Tomàquets", "Patates", "Enciam", "Pasta", "Arròs", 
"Oli", "Sal", "Pernil", "Butifarres", "Ceba"];

function printarElementsHTML(foodList){
    var option = "";
    for (i = 0; i < foodList.length; i++){
        option += '<option value="' + foodList[i] + '">' + foodList[i] + "</option>"
    }
    document.getElementById("llistaElements").innerHTML = option;
}
printarElementsHTML(llistaAliments);


function mostrarElements(){
    var count = 0;
    var elements = "";
    for (i = 0; i < llistaAliments.length; i++){
        count++;
        if (i  == llistaAliments.length -2){
            elements += llistaAliments[i] + " i "
        } else if (i == llistaAliments.length -1){
            elements += llistaAliments[i] + "."
        } else {
            elements += llistaAliments[i] + ", ";
        }
    }
    alert("Hola, bon dia. \nTens " + count + " elements, els quals són:\n" + elements);
}