function mostrar()
{
//tomo la edad  
var mesDelAño 

mesDelAño= document.getElementById('mes').value;

switch (mesDelAño) {
    case "Febrero":
        alert("Este mes tiene 29 dias");
        break;
    case "Enero":
        alert("Este mes tiene 31 dias");
         break;
    case "Marzo":
        alert("Este mes tiene 31 dias")
        break;
    case "Mayo":
        alert("Este mes tiene 31 dias")
        break;
    case "Julio":
        alert("Este mes tiene 31 dias")
        break;
    case "Agosto":
        alert("Este mes tiene 31 dias")
        break;
    case "Octubre":
        alert("Este mes tiene 31 dias")
        break;
    case "Diciembre":
        alert("Este mes tiene 31 dias")
        break;
    default:
        alert("este mes tiene 30 dias")
        break;
}
	
	



}//FIN DE LA FUNCIÓN