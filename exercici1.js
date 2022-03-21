//1. Haz una función que de dos números pasados por parámetros indica 
//   (saca por consola) cual de ellos es mayor.
function maxValue (num1, num2){
    if (num1 > num2){
        document.writeln("El número " + num1 + " es mayor que " + num2)
    } else if (num2 > num1){
        document.writeln("El número " + num2 + " es mayor que " + num1)
    } else {
        document.writeln("Los números son iguales")
    }
}
var num1 = parseInt(prompt('num1'));
var num2 = parseInt(prompt('num2'));

//maxValue(num1, num2)

//2. Haz una función que calcule (sin usar *) la multiplicación de dos números.
function multiSinmulti (x, y){
    var multi = 0
    for(let i = 0; i < y; i++) {
        multi += x
        //document.writeln(x + " x " + i + " = " + x*i + "<br>")
    }
    return multi
}

resultat = multiSinmulti(num1, num2)
//document.writeln("multi = " + resultat)

//3. Utilizando la función anterior haz una función que calcule la 
//   multiplicación de 3 números.

var num3 = parseInt(prompt('num3'));

resultatTriple = multiSinmulti(resultat, num3)
document.writeln("multiTriple = " + resultatTriple)


//4. Encuentra entre los primeros 10.000 números naturales los números que 
//   completan la siguiente propiedad: El cubo de la suma de sus cifras cifras 
//   es igual al mismo número.
