//Ex. 1:
function getArrayNums(){
    let array = [];
    while(array.length < 5){
        let num = Math.floor((Math.random() * 10));
        array.push(num);
    }
    return array;
}

//Ex. 2:
function checkNumberAppearance(userNum, arrayList){
    let counter = 0;
    for(let i = 0; i <= arrayList.length; i++) {
        if (arrayList[i] == userNum){
            counter++;
        }
    }
    return counter;
}

//Ex. 3:
function checkNumberPosition(userNum, userPosition, arrayList){
    let exists = false;
    if (arrayList[userPosition] == userNum){
        exists = true;
    }
    return exists;
}
//console.log(checkNumberPosition(5, 0, [1, 2, 3, 4, 5]));

//Ex. 4:
function checkAll(randomArray){
    let userInputArray = [];
    while(userInputArray.length < 5){
        let userNum = parseInt(prompt('Introduce un número'));
        userInputArray.push(userNum);
    }
    console.log(userInputArray);

    let userReturnArray = ["x", "x", "x", "x", "x"];
    for(let i = 0; i < userInputArray.length; i++){
        check = checkNumberPosition(userInputArray[i], i, randomArray);
        if (check == true){
            userReturnArray[i] = "Ok";
        }
    }
    console.log(userReturnArray);

    let checker = false;
    for(let i = 0; i < userReturnArray.length; i++){
        if(userReturnArray[i] == "Ok"){
            checker = true;
        } else{
            checker = false;
            break;
        }
    }
    return checker
    //intenté hacer las comprobaciones con el codigo que hay en la 
    //función llamada "prueba" que hay más abajo, pero no se porqué
    //no funciona. 
}

//Ex. 5:
function main(){
    let arrayRandomNums = getArrayNums();
    console.log("Array generada aleatoriamente:")
    console.log(arrayRandomNums);
    console.log("Juego del usuario:")

    let i = 0;
    while(i < 4){
        let resultat = checkAll(arrayRandomNums);
        if (resultat == true){
            alert("Muy bien! Has ganado!");
            break;
        }
        i += 1;
    }
    if (i = 4){
        alert("Has perdido :(")
    }
}
main();
//prueba());

/*
function prueba(){
    let list = ["Ok", "Ok", "Ok", "Ok", "Ok"];
    if (list == ["Ok", "Ok", "Ok", "Ok", "Ok"]){
        console.log("Todo ok");
    } else {
        console.log("Todo mal");
    }
}
*/
