function reparteTarjetas()
{
    var cartasBarajadas = barajaCartas(); //Aplica la función:'barajaCartas' a la variable:'cartasBarajadas' 
    //Esto es lo se va a crear cada vez que se ejecute la función 
    mesa.innerHTML = " ";
    
    cartasBarajadas.forEach(function(elemento){ 
    var tarjeta = document.createElement("div");
    tarjeta.addEventListener("click", incrementClick);
    //Esto es lo se va a crear cada vez que se ejecute la función 
    tarjeta.innerHTML = "<div id='cartas' class='cartas' data-valor= "+
    elemento +
    ">"+
    "<div id='contenidoCartas' class='contenidoCartas'>"+
    elemento+
    "</div>"+
    "</div>";
    mesa.appendChild(tarjeta);
      // FIN.

          
    });
}
         
function barajaCartas(){
    var resultado;

    resultado= totalCartas.sort(
        function(){
            return 0.5 - Math.random();
        });
        return resultado;
}