function resaltar(){
    var paraules = document.getElementsByTagName("strong");
    for (i = 0; i < paraules.length; i++) {
        paraules.item(i).style.backgroundColor = "lightgreen";
        paraules.item(i).style.color = "coral";
        paraules.item(i).style.fontSize = "2em";    
        paraules.item(i).style.transition = "all .5s";
    }
}

function tornaNormal(){
    var paraules = document.getElementsByTagName("strong");
    for (i = 0; i < paraules.length; i++) {
        paraules.item(i).style.backgroundColor = "white";
        paraules.item(i).style.color = "black";
        paraules.item(i).style.fontSize = "1em";    
    }
}