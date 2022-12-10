
// 1 == X == JUGADOR 1
// 2 == O == JUGADOR 2
var tablero = [[0,0,0],[0,0,0],[0,0,0]];
var player = "X"   
let mensaje = document.querySelector(".contenedor-mensaje");
let boxes = document.querySelectorAll(".contenedor__grid-items")
mensaje.textContent = "Bienvenido a Tic-Tac-Toe"
//Funcion para restaurar el juego y empezar de nuevo

    function restaurar () {
     mensaje.textContent = "Bienvenido a Tic-Tac-Toe"
    for(i of tablero){
    for(j in tablero){
    i[j]=0;} }
    pintarBoxes(boxes)
    }
            
const pintar = (array)=>  array.forEach(element => element.innerHTML = " ");   

         const pintarBoxes = (box) => {
            console.log("empezo el juego")  
        
                pintar(box);

                box.forEach((element,index)=>{
                    element.addEventListener("click", ()=>{
                        if( element.innerHTML == " "){
                        if(player=="X"){
                            let mensaje = document.querySelector(".contenedor-mensaje");
                            mensaje.innerHTML = "Turno Jugador O"
                                element.style.color = "red"
                                element.innerHTML = player;
                                 player = "O";
                                pintarJugador1(index)
                        }else if(player=="O"){
                            let mensaje = document.querySelector(".contenedor-mensaje");
                            mensaje.innerHTML = "Turno Jugador X"
                            element.style.color = "blue"
                            element.innerHTML = player; 
                            player = "X";    
                            pintarJugador2(index);        
                            }
                    }})
                 })     
               };
                

const pintarJugador1 = (p) =>{
    switch(p){
        
        case 0: 
        tablero[0][0] = 1;
        break;
        case 1: 
        tablero[0][1] = 1;
        break;
        case 2: 
        tablero[0][2] = 1;
        break;
        case 3: 
        tablero[1][0] = 1;
        break;
        case 4: 
        tablero[1][1] = 1;
        break;
        case 5: 
        tablero[1][2] = 1;
        break;
        case 6: 
        tablero[2][0] = 1;
        break;
        case 7: 
        tablero[2][1] = 1;
        break;
        case 8: 
        tablero[2][2] = 1;
        break;
    }
    verificarGanador();  
}

const pintarJugador2 = (p) =>{
        switch(p){
            
            case 0: 
            tablero[0][0] = 2;
            break;
            case 1: 
            tablero[0][1] = 2;
            break;
            case 2: 
            tablero[0][2] = 2;
            break;
            case 3: 
            tablero[1][0] = 2;
            break;
            case 4: 
            tablero[1][1] = 2;
            break;
            case 5: 
            tablero[1][2] = 2;
            break;
            case 6: 
            tablero[2][0] = 2;
            break;
            case 7: 
            tablero[2][1] = 2;
            break;
            case 8: 
            tablero[2][2] = 2;
            break;
        }
        verificarGanador(); 
     }
    


const verificarGanador = ()=>{
        if( (tablero[0][0] === 1 && tablero[0][1] === 1 && tablero[0][2] === 1) ||
        (tablero[1][0] === 1 && tablero[1][1] === 1 && tablero[1][2] === 1) ||
        (tablero[2][0] === 1 && tablero[2][1] === 1 && tablero[2][2] === 1) ||
        (tablero[0][0] === 1 && tablero[1][0] === 1 && tablero[2][0] === 1) ||
        (tablero[0][1] === 1 && tablero[1][1] === 1 && tablero[2][1] === 1) ||
        (tablero[0][2] === 1 && tablero[1][2] === 1 && tablero[2][2] === 1) ||
        (tablero[0][0] === 1 && tablero[1][1] === 1 && tablero[2][2] === 1) ||
        (tablero[0][2] === 1 && tablero[1][1] === 1 && tablero[2][0] === 1)){
            let boton = document.createElement("div");
            boton.classList.add("boton");
            boton.innerText ="Jugar otra vez"
            mensaje.innerText = " 🎉Ganaste Jugador X 🎉"
            mensaje.appendChild(boton);
            boton.addEventListener("click",restaurar);
        }
        else if( (tablero[0][0] === 2 && tablero[0][1] === 2 && tablero[0][2] === 2) ||
        (tablero[1][0] === 2 && tablero[1][1] === 2 && tablero[1][2] === 2) ||
        (tablero[2][0] === 2 && tablero[2][1] === 2 && tablero[2][2] === 2) ||
        (tablero[0][0] === 2 && tablero[1][0] === 2 && tablero[2][0] === 2) ||
        (tablero[0][1] === 2 && tablero[1][1] === 2 && tablero[2][1] === 2) ||
        (tablero[0][2] === 2 && tablero[1][2] === 2 && tablero[2][2] === 2) ||
        (tablero[0][0] === 2 && tablero[1][1] === 2 && tablero[2][2] === 2) ||
        (tablero[0][2] === 2 && tablero[1][1] === 2 && tablero[2][0] === 2)){
            let boton = document.createElement("div");
            boton.classList.add("boton");
            boton.innerText ="Jugar otra vez";
            mensaje.innerText = " 🎉Ganaste Jugador O 🎉";
            mensaje.appendChild(boton); 
            boton.addEventListener("click",restaurar); 
        }
        else if(tablero[0].indexOf(0) === -1 &&tablero[1].indexOf(0) === -1&&tablero[2].indexOf(0) === -1){
            let boton = document.createElement("div");
            boton.classList.add("boton");
            boton.innerText ="Jugar otra vez";
            mensaje.innerText = "Empate🥵";
            mensaje.appendChild(boton); 
            boton.addEventListener("click",restaurar); 
        }

    }

pintarBoxes(boxes);