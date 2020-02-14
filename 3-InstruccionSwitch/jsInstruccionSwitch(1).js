function mostrar()
{
     //declaro variables
    var mesDelAño 
    //tomo el mes 
    mesDelAño = document.getElementById('mes').value;
//sentencia witch que me permite mostrar alertas dependiendo de la seleccion del user

    switch (mesDelAño) {
        case "Enero":
            alert("Que comiences bien el año");
            break;
    
        case "Marzo":
            alert("A Clases!")
            break;
        case "Julio":
            alert("Se vienen las vacaciones");
            break;
        case "Diciembre":
            alert("Felices Fiestas!");
            break;  
        default:
            break;
    }


}//FIN DE LA FUNCIÓN