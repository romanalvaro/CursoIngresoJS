/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	

    //declaro variables
	var nombre;
    var edad;

    
//obtengo datos del .html
    nombre=document.getElementById("elNombre").value
    edad=document.getElementById("laEdad").value
   
   
    //muestro por pantalla los datos tomados por pantalla y los muestro concatenados en una alerta.
    alert("su nombre es " + nombre + "Su edad es " + edad)

}

