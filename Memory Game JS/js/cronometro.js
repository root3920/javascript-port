function iniciarCronometro(){
    var segundos = 0;
    var minutos = 0;
    var segundosTexto;
    var minutosTexto;




function actualizarCronometro(){
    segundos = segundos + 1;
    if(segundos > 59){
        segundos = 0;
        minutos = minutos + 1;
    }
    if(minutos < 0){
        segundos = 00;
        minutos = 00;
        clearInterval(cronometro);
        alert("perdiste :C");
    }

    segundosTexto = segundos;
    minutosTexto = minutos;

    if(segundos < 10){
        segundosTexto =  "0"+segundos;
    }
    if(minutos < 10){
        minutosTexto =  "0"+minutos;
    }

    document.querySelector("#minutos").innerText = minutosTexto;
    document.querySelector("#segundos").innerText = segundosTexto;

}

cronometro = setInterval(actualizarCronometro,1000);

}