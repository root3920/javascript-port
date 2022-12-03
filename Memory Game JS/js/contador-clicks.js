//Declaracion de variables
var counter = 0;
let contador = document.querySelector("#contador");

function incrementClick() {
    counter++;
    if(counter < 10){
        contador.textContent = "0"+counter;
    }else{
        contador.textContent = counter;
    }
   
    console.log(counter)
}

