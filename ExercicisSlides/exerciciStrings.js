//1)
var input = document.getElementById("userWord");

input.addEventListener("keypress", function(event){
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("check").click();
  }
});


function comprovarAs(){
    input.focus()

    if(input.value.includes('As', 0) || input.value.includes('as', 0)){
        console.log(input.value);
    } else{
        console.log('As'+input.value);
    }
    input.value = "";
}

//2)
function comprovarLength(){
    let paraula21 = document.getElementById("userWord21").value;
    let paraula22 = document.getElementById("userWord22").value;
    let lengthChecker = checkLength(paraula21, paraula22);

    if(lengthChecker){
        window.alert(paraula21.slice(0, paraula22-1) + "..." + paraula21.slice(paraula22, paraula21.length));
    } 
}

function checkLength(paraula21, paraula22){
    if(paraula21.length >= paraula22){
        return true;
    } else if(paraula22 < 0){
        return false;
    } else{
        window.alert("La paraula no té tantes lletres:(");
        return false;
    }
}


//3)
function changeCapiCua(){
    let paraula3 = document.getElementById("userWord3").value;
    let lengthChecker = checkPositiveLength(paraula3);

    if(lengthChecker){
        let cap = paraula3.slice(0, 1)
        let mig = paraula3.substr(1, paraula3.length-2)
        let cua = paraula3.slice(paraula3.length-1, paraula3.length)
        window.alert(
            cua + mig + cap
        )
    }


}

function checkPositiveLength(paraula){
    if(paraula.length > 0){
        return true;
    } else{
        return false;
    }
}
