function changePStyle(){

    var paragrafs = document.getElementsByTagName("p");
    var backColorSetting = paragrafs[0].style.backgroundColor;
    console.log(backColorSetting);

    for (i = 0; i < paragrafs.length; i++) {
        if (backColorSetting == "white" || backColorSetting == ""){
            paragrafs.item(i).style.backgroundColor = "lightgreen";
            paragrafs.item(i).style.color = "coral";
        } else {
            paragrafs.item(i).style.backgroundColor = "white";
            paragrafs.item(i).style.color = "black";
        }
    }
}