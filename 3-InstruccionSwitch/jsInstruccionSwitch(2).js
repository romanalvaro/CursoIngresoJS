function mostrar()
{
//tomo el mes 
var mesDelAño 

mesDelAño = document.getElementById('mes').value

switch (mesDelAño) {
    case "Agosto":
        alert("Abrigate que hace frio!")
        break;
    case "Julio":
        alert("Abrigate que hace frio")
    case "Septiembre":
        alert("Ya paso el invierno")
        break;
    case "Octubre":
        alert("Ya paso el invierno")
        break;
    case "Noviembre":
        alert("Ya paso el invierno")
        break;
    case "Diciembre":
        alert("Ya paso el invierno")
        break;
    default:
        alert("Falta para el invierno")
        break;
}



}//FIN DE LA FUNCIÓN