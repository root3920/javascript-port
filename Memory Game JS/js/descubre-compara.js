   

function descubrir(){
    var descubiertas;
    var totalDescubierta = document.querySelectorAll(".descubierta:not(.acertada)");
    
    if(totalDescubierta.length>1){
        
        
        return;
    }
    
    this.classList.add("descubierta");

    descubiertas = document.querySelectorAll(".descubierta:not(.acertada)");
   
    if(descubiertas.length<2){
        return;
    }
 comparar(descubiertas);

}
function comparar(tarjetasAComparar){
    
    if(tarjetasAComparar[0].dataset.valor === tarjetasAComparar[1].dataset.valor){
        acierto(tarjetasAComparar);
      }else{
        desacierto(tarjetasAComparar);
      }
      
}
