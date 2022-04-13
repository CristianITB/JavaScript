//window.onload = afegirTaula();
//Aquest no he sapigut com fer-ho sense el boto, es a dir
//qe nomes obrir la pagina ja et demani el nº de files i columnes
//i faci la taula.


function afegirTaula(){
    var files = parseInt(prompt('Nombre de files?'));
    var columnes = parseInt(prompt('Nombre de columnes?'));

    var table = document.getElementById("Taula");

    for (i = 0; i < files; i++) {
        console.log("manolo");
        var row = table.insertRow(i);
        for(j = 0; j < columnes; j++){
            var cell = row.insertCell(j);
            cell.innerHTML = "manolo";
            cell.style.fontSize = "1.5em";
            cell.style.backgroundColor = "lightgreen";
            cell.style.color = "coral";
        }
    }
}