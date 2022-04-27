function insertarFilaPrincipi(){
    var table = document.getElementById("Taula");
    var row = table.insertRow(0);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    cell1.innerHTML = "Fila 0 cel·la 1";
    cell2.innerHTML = "Fila 0 cel·la 2"; 
}

//Es podria fer tot de forma que s'anés actualitzant quan inserim una fila a sobre
function insertarFilaFinal(){
    var table = document.getElementById("Taula");
    var row = table.insertRow(table.rows.length);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    cell1.innerHTML = "Fila " + table.rows.length + " cel·la 1";
    cell2.innerHTML = "Fila " + table.rows.length + " cel·la 2";
}


//Funció Ruben
function insertRow () {
    var table_row = document.getElementById("Taula");

    var tag_tr = document.createElement("tr");
    var tag_td_0 = document.createElement("td");

    var text_td_0 = document.createTextNode("Fila 3 ce·la 1");
    tag_td_0.appendChild(text_td_0);

    var tag_td_1 = document.createElement("td");

    var text_td_1 = document.createTextNode("Fila 3 ce·la 2");
    tag_td_1.appendChild(text_td_1)

    tag_tr.appendChild(tag_td_0);
    tag_tr.appendChild(tag_td_1);
    table_row.appendChild(tag_tr)
}



