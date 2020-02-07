/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var dato1;
    var resultado1;

    dato1=document.getElementById("importe").value;

    dato1=parseInt(dato1);

    resultado1=dato1*25/100;

    document.getElementById("resultado").value=resultado1;
}
