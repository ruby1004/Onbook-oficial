//alert("Formulario de registro"); Funcion de javascript para enviar mensajes al navegador

//const nombre = "Rubileisy";
//alert(nombre);

//const Nombre= prompt ("¿Cual es tu nombre?");
//alert("Tu nombre:"+ nombre) 



const correoelectronico = document.getElementById("Correoelectronico");



const contrasena = document.getElementById("Contrasena");



const btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {
    e.preventDefault ();
   
    console.log(correoelectronico.value);
    console.log(contrasena.value);
    


    
    correoelectronico.value =""
    contrasena.value = ""
    
  
   });