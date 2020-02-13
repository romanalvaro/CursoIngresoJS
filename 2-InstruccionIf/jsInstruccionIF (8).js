function mostrar()
{   
    var edad1;
    var estado;
    edad1=document.getElementById("edad").value
	estado=document.getElementById("estadoCivil").value
    
if (!(edad1 < 18 && estado != "Soltero")) {
    alert("Es soltero y no es menor")   
}

	


}//FIN DE LA FUNCIÓN