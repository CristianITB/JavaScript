function insertarFilaPrincipi(){
    var table = document.getElementById("Taula");
    var row = table.insertRow(0);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    // Add some text to the new cells:
    cell1.innerHTML = "Fila 0 cel·la 1";
    cell2.innerHTML = "Fila 0 cel·la 2"; 
}


function insertarFilaFinal(){
    var table = document.getElementById("Taula");
    var row = table.insertRow(2);
    //com puc fer per no haver de posar el 2 aquí i a l'altre funció el 0?
    //algo tipo lastIndex o length?
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    // Add some text to the new cells:
    cell1.innerHTML = "Fila 3 cel·la 1";
    cell2.innerHTML = "Fila 3 cel·la 2"; 
}


function canviarCela(){
    var table = document.getElementById("Taula");
    var fila = document.getElementsByName("fila");
    var cela = document.getElementsByName("cela");
    var contingut = document.getElementsByName("contingut");
    table.rows[fila[0].value-1].cells[cela[0].value-1].innerHTML = contingut[0].value;
}


