//Ex. 1:
function getArrayNums(){
    let array = [];
    while(array.length < 5){
        let num = Math.floor((Math.random() * 10));
        array.push(num);
    }
    return array
}

//Ex. 2:
function checkNumberAppearance(userNum, arrayList){
    let counter = 0;
    for(let i = 0; i <= arrayList.length; i++) {
        if (arrayList[i] == userNum){
            counter += 1;
        }
    }
    return counter
}

//Ex. 3:
function checkNumberPosition(userNum, userPosition, arrayList){
    let exists = false;
    if (arrayList[userPosition] == userNum){
        exists = true;
    }
    return exists
}
//console.log(checkNumberPosition(5, 0, [1, 2, 3, 4, 5]));

//Ex. 4:
function checkAll(randomArray){
    let userArray = [];
    while(userArray.length < 5){
        let userNum = parseInt(prompt('Introduce un número'));
        userArray.push(userNum);
    }
    let userReturnArray = ["x", "x", "x", "x", "x"];
    for(let i = 0; i < userArray.length; i++){
        check = checkNumberPosition(userArray[i], i, randomArray);
        if (check == true){
            userReturnArray[i] = "Ok";
        }
    }
    if (userReturnArray = ["Ok","Ok", "Ok", "Ok", "Ok"]){
        return true
    } else{
        return userReturnArray
    }
}

//Ex. 5:
function main(){
    let arrayNums = getArrayNums();
    console.log(arrayNums);

    let i = 0;
    while(i < 5){
        let resultat = checkAll(arrayNums);
        if (resultat == true){
            alert("Muy bien! Has ganado!");
            break;
        } else{
            document.writeln(resultat);
        }
        i += 1;
    }

}
main();