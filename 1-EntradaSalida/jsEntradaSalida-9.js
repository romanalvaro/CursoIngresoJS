/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

    var dato1;
    var resultado1;

    dato1=document.getElementById("sueldo").value;

    dato1=parseInt(dato1);

    resultado1=(dato1*10/100)+dato1;

    document.getElementById("resultado").value=resultado1;
}
