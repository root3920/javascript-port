//Declaración de Variables 
let inputName = document.getElementById('name');
let inputEmail = document.getElementById('email');
let inputSubject = document.getElementById('materia');
let boton = document.getElementById('boton');
let mensaje = document.querySelector('.mensaje');

//Funcion para verificar los datos ingresados
const verificarForm =()=> { 
    let error1 = [];
    if(inputName.value.length < 5){
        error1[0] = false;
        error1[1] ="Su nombre debe tener más de 5 caracteres. EJ: 'Jhon Doe'";
        return error1;
    }else if(inputName.value.length > 30){
        error1[0] = false;
        error1[1] ="Su nombre debe ser mas corto. EJ: 'Jhon Doe'";
        return error1;
    }else if(inputEmail.value.indexOf("@") == -1 || inputEmail.value.indexOf(".") == -1){
        error1[0] = false;
        error1[1] = "Email Invalido";
        return error1;
    }
    error1[0] = true;
    error1[1] = "Formulario enviado correctamente :)"
    return error1;
}

//Event Listener(Click) aplicado al boton del formulario
boton.addEventListener("click",(e)=>{
e.preventDefault();
let error = verificarForm();
if(!error[0]){
    mensaje.classList.remove('acierto');
    mensaje.classList.add('error');
    mensaje.textContent = error[1];
}else{
    mensaje.classList.remove('error');
    mensaje.classList.add('acierto');
    mensaje.textContent = error[1];
}
});



