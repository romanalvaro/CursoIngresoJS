/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var salario

    salario=document.getElementById("sueldo").value
    salario=parseInt(salario);
    document.getElementById("el salario es "+salario+"$").placeholder;
}
