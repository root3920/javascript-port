//Declaración de variables
let boton = document.getElementById("boton");
let contenedorRegisted = document.querySelector(".contenedor__registed");
let input = document.getElementById("register");

window.addEventListener("keypress", (e)=> {
    if (e.key === 'Enter') {
        if(input.value == "" || input.value == undefined) {
            throw "Agregue un nombre"
        } else{
            let botonEliminar = document.createElement("div");
            let div = document.createElement("div");
            div.classList.add("contenedor__registed__items");
            div.innerHTML = `<p class="texto1">${input.value}</p>`
            contenedorRegisted.appendChild(div);
            botonDelete(div,botonEliminar);
        }
}
})


boton.addEventListener("click", (e) => {
    if(input.value == "" || input.value == undefined) {
        throw "Agregue un nombre";
    }else{
        let botonEliminar = document.createElement("div");
        let div = document.createElement("div");
        div.classList.add("contenedor__registed__items");
        div.innerHTML = `<p class="texto1">${input.value}</p>`
        contenedorRegisted.appendChild(div);
        botonDelete(div,botonEliminar);
    }
});

const botonDelete = (item,botonEliminar) =>{
    input.value = "";
 item.addEventListener("mouseover", (e) =>{

    botonEliminar.innerHTML = `-`;
    item.appendChild(botonEliminar);
    botonEliminar.classList.add("activo");
 })

 item.addEventListener("mouseleave", (e)=>{
    botonEliminar.classList.remove("activo");
    botonEliminar.innerHTML = ``
 })

 botonEliminar.addEventListener("click", (e) =>{
    let confirmacion = confirm("¿Estas seguro que ya completaste la tarea?")
    if(confirmacion) {
        item.remove();
    localStorage.removeItem("tareas");
}
})
}

Sortable.create(contenedorRegisted,{
    dragClass: "fantasma",
    swapThreshold: 1,
    chosenClass: "seleccionado",
    animation: 150
})
