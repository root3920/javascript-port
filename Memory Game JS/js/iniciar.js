reparteTarjetas();
iniciarCronometro();

//const obtenerClase = (name,hola,klk)=> console.log(this.getAttribute(name+" "+hola+" "+klk));

/*Seleccionamos del documento a cada div:'cartas' que creamos arriba
    y Le asignamos al div:'cartas' el elemento:'elemento'*/
document.querySelectorAll(".cartas").forEach(function(elemento){
/*Le añadimos la funcion:'descubrir' cada vez que se ejecute 
el evento del click en 'elemento'*/
elemento.addEventListener("click",descubrir);       
});