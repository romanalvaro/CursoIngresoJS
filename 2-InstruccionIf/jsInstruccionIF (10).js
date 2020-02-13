function mostrar()
{
	var aleatorio
	 
	 var max;
	 var min;

	 max=11;
	 min=1;

	aleatorio=Math.floor(Math.random()*(max-min))+min

	if (aleatorio == 9 && aleatorio == 10) {
		alert(aleatorio+" EXCELENTE");
	}else {
		if (aleatorio > 4) {
			alert(aleatorio +" vamos para la proxima");
		}else{
			if (aleatorio <= 4) {
				alert(aleatorio+" reprobado");
			}
		}
	}
	

}//FIN DE LA FUNCIÓN