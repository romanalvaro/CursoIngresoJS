function mostrar()
{
//tomo la edad  
    var edad1;
    var estado;
    edad1=document.getElementById("edad").value
	estado=document.getElementById("estadoCivil").value
    
if (edad1 < 18 && estado != "Soltero") {
    alert("Es muy pequeño para NO ser soltero.")   
}

}//FIN DE LA FUNCIÓN