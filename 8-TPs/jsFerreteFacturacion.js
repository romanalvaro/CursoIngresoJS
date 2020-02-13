/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

function Sumar () 
{
    var dato1;
    var dato2;
    var dato3;
    var resultado;

    dato1=document.getElementById("PrecioUno").value;
    dato2=document.getElementById("PrecioDos").value;
    dato3=document.getElementById("PrecioTres").value;

    dato1=parseInt(dato1);
    dato2=parseInt(dato2);
    dato3=parseInt(dato3);
    resultado=dato1+dato2+dato3
    alert("La Suma es igual a " + resultado);
}
function Promedio () 
{
	var dato1;
    var dato2;
    var dato3;
    var resultado;

    dato1=document.getElementById("PrecioUno").value;
    dato2=document.getElementById("PrecioDos").value;
    dato3=document.getElementById("PrecioTres").value;

    dato1=parseInt(dato1);
    dato2=parseInt(dato2);
    dato3=parseInt(dato3);

    resultado=dato1+dato2+dato3/3
    alert("La Suma es igual a " + resultado);
}
function PrecioFinal () 
{
	var dato1;
    var dato2;
    var dato3;
    var resultado;
    var precioFinal;

    dato1=document.getElementById("PrecioUno").value;
    dato2=document.getElementById("PrecioDos").value;
    dato3=document.getElementById("PrecioTres").value;

    dato1=parseInt(dato1);
    dato2=parseInt(dato2);
    dato3=parseInt(dato3);
    resultado=dato1+dato2+dato3
    precioFinal=(resultado*21/100)+resultado;
    alert("La Suma es igual a " + resultado + "Precio Final: " + precioFinal);
}