/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var dato;
	dato=prompt("Ingresar Dato");
	
	document.getElementById("elNombre").value=dato;
	alert(dato);

}

