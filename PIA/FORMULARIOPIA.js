const form = document.querySelector("form"); 
const username = document.querySelector("#username"); 
const password = document.querySelector("#password");

form.addEventListener("submit", (event) => {
event.preventDefault(); 
// Validar si se escribió el usuario y la contraseña
var usuario = document.getElementById('username').value; 
if(usuario.length == 0) {
     alert("no has escrito nada en el usuario")
     return;
    }
    var clave = document.getElementById('password').value;
    if (clave.length < 3) {
         alert('La clave no es válida');
    return;
    }
    // Validar el usuario "EDUARDO" y la contraseña "FENIX1117" son las correctas 
    if (username.value === "EDUARDO" && password.value === "FENIX1117") {
      document.write("<center><h1>Inició sesión correctamente<br><img src='FENIX2.jpeg'><br>Bienvenido: <br> Aqui podras contactarnos en la tienda XD nose que poner aqui jejej<")
    
    form.reset();    
    
    } else {
    
    document.write("<center><h2>Usuario o contraseña incorrectos</h2><br><br>"); 
    password.value = ""; 
    password.focus(); 
    document.write('<h3><a href="formulariojava.html">Regresar</a>');

    } });