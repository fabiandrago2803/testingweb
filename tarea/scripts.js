const expresiones = {
	apellido:  /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos./^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	dni: /^\d{7,8}$/ // 7 a 8 numeros.



function validate()
{
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("E-mail").value;

    //validacion de que el mail este completo
alert(nombre + " " + apellido);

    if (nombre == "" || apellido == "" || email == "" || dni == "" || fecha de nacimiento == "" || contraseña == "" || repetir contraseña == "") {
      alert ("Todos los campos son obligatorios");
      //return false;
} else {
  //alert('Los datos ingresados son correctos');
  //return true;
}
}






  
 
  