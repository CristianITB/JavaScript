function estiljs(){

    let pText = document.getElementById("text");
    var backColorSetting = pText.style.backgroundColor;

    if (backColorSetting == "white"){
        pText.style.backgroundColor = "lightgreen";
        pText.style.color = "coral";
        pText.style.fontSize = "2em";
        pText.innerHTML = "Text ja canviat amb JavaScript"
    } else {
        pText.style.backgroundColor = "white";
        pText.style.color = "black";
        pText.style.fontSize = "1em";
        pText.innerHTML = "Text a canviar amb JavaScript"
    }

}

function estiljs2(){

    let pText2 = document.getElementById("text2");
    var displaySetting = pText2.style.display;
    var textButton = document.getElementById('showHideButton');
 
    if (displaySetting == 'block') {
        // clock is visible. hide it
        pText2.style.display = 'none';
        // change button text
        textButton.innerHTML = 'Show text';
        //showHideButton.innerHTML = 'Show text';
        //nse pq pero si poses aixo directament ja t'ho agafa, sense haver
        //de definir que es "showHideButton"
    } else {
        // clock is hidden. show it
        pText2.style.display = 'block';
        // change button text
        textButton.innerHTML = 'Hide text';
    }
}