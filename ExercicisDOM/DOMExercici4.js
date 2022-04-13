function obtenirAtributs(){
    const element = document.getElementById('itb');
    
    const attrNames = element.getAttributeNames();
    console.log(attrNames); // 👉️ ['id', 'data-id', 'class']

    const attrValues = element
    .getAttributeNames()
    .map(name => element.getAttribute(name));
  
    console.log(attrValues); // 👉️ ['blue', 'example', 'box']
}
