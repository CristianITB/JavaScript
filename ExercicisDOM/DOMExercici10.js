function calcularVolum(){
    let height = document.getElementsByName("alçada");
    let radius = document.getElementsByName("radi");
    let volum = Math.PI * Math.pow(radius[0].value, 2) * height[0].value;
    alert("El volum d'un cilindre d'alçada: " + height[0].value + " i radi: " + radius[0].value + " és: " + volum + ".");
}