function mostrar()
{
//tomo la hora 
var laHora 
laHora= document.getElementById('hora').value;

 //transformo el valor string a number

laHora=parseInt(laHora, 10);

//determino el rango horario

if (laHora<0 && laHora>24){
    alert("El dia tiene solo 24 horas")
    
}else{          //si entra en el rango admitido se ejecuta el switch
    switch (laHora) {
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
            alert("Es de Dia")
            break;
        default:

            break;
    }
}
	



}//FIN DE LA FUNCIÓN