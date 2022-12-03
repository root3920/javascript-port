//declaracion de variables
let alumnos = [{
    nombre : "Federico Alarcón",
    email: "fede3920@gmail.com",
    materia : "Fisica"
},{ 
    nombre : "Carlos Javier",
    email: "carlos@gmail.com",
    materia : "Quimica"
},{
    nombre : "Carolina Uribe",
    email: "carouribesalas@gmail.com",
    materia : "Español"
}];
let boton = document.querySelector("#boton");
let contenedor = document.querySelector(".contenedor");

//funcion para confirmar matricula de estudiantes
function confirmarMatricula(){
    //ciclo para añadir estudiantes matriculados al sistemas
    for(const alumno in alumnos){
        let datos = alumnos[alumno];
        let Name = datos["nombre"];
        let Mail = alumnos[alumno].email;
        let Subject = alumnos[alumno].materia;
        let HTML =  "<div class='contenedor__item nombre'>"+Name+"</div>"+
      "<div class='contenedor__item email'>"+Mail+"</div>"+
        "<div class='contenedor__item materia'>"+Subject+"</div>"+
           "<div class='contenedor__item semana2'><select class='semana'><option value='1'>Semana 1</option><option value='2'>Semana 2</option><option value='3'>Semana 3</option></select></div>";
           let div = document.createElement("div");
           contenedor.appendChild(div);
           div.innerHTML = HTML;
    }
        //evento para confirmar la matricula
    boton.addEventListener("click", (e)=>{
        let confirmar = confirm("¿Esta seguro que desea confirmar?")
        if(confirmar){
            var select = document.querySelectorAll(".semana");
            let cont__select = document.querySelectorAll(".semana2");
            e.preventDefault();
            for(const i in cont__select){
                cont__select[i].innerHTML = "Semana "+select[i].value;
            }
            boton.remove();
        }}) 
}//Fin de la funcion

confirmarMatricula();

