function acierto(lasTarjetas){
    lasTarjetas.forEach(function(elemento){
       elemento.classList.add("acertada");
       lasTarjetas2 = document.querySelectorAll(".acertada");
       if(lasTarjetas2.length==totalCartas.length){ 
       alert("ganaste");}
    });
   }

   function desacierto(lasTarjetas){
       lasTarjetas.forEach(function(elemento){
               elemento.classList.add("error");
          
           setTimeout(function(){
            elemento.classList.remove("descubierta");
            elemento.classList.remove("error");
           },1000);
        })
   }