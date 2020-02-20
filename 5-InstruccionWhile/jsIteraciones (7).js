function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta="*";
	var numero;



	
	while (true) {

		contador=contador+1
		respuesta=prompt("Ingrese un numero o * para salir")

			if(respuesta=="*"){
				break;
		}else{
			while (isNaN(respuesta)) {
				
				acumulador=acumulador+numero
				numero=parseInt(numero);	
			}
		}
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN