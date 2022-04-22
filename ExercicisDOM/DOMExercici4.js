function obtenirAtributs(){
    var element = document.getElementById('itb');
    
    /*
    const attrNames = element.getAttributeNames();
    console.log(attrNames); // 👉️ ['id', 'data-id', 'class']

    const attrValues = element
    .getAttributeNames()
    .map(name => element.getAttribute(name));

    console.log(attrValues); // 👉️ ['blue', 'example', 'box']
    */
    let attrNames = element.getAttributeNames();

    let attribute_array = [];

    for (i = 0; i < attrNames.length; i++){
        attribute_array.push(element.getAttribute(attrNames[i]))
    }
    console.log(attribute_array);
}
