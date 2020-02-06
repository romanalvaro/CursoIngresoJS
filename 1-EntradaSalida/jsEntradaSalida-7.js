/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var dato1;
    var dato2;

    dato1=document.getElementById("numeroUno").value;
    dato2=document.getElementById("numeroDos").value;

    dato1=parseInt(dato1);
    dato2=parseInt(dato2);

    alert("La Suma es igual a " + (dato1+dato2)); 
}

function restar()
{
	var dato1;
    var dato2;

    dato1=document.getElementById("numeroUno").value;
    dato2=document.getElementById("numeroDos").value;

    dato1=parseInt(dato1);
    dato2=parseInt(dato2);

    alert("La resta es igual a " + (dato1-dato2)); 
}

function multiplicar()
{ 
	var dato1;
    var dato2;

    dato1=document.getElementById("numeroUno").value;
    dato2=document.getElementById("numeroDos").value;

    dato1=parseInt(dato1);
    dato2=parseInt(dato2);

    alert("El resultado de la multiplicacion Es igual a " + (dato1*dato2)); 
}

function dividir()
{
	var dato1;
    var dato2;

    dato1=document.getElementById("numeroUno").value;
    dato2=document.getElementById("numeroDos").value;

    dato1=parseInt(dato1);
    dato2=parseInt(dato2);

    alert("La division Es igual a " + (dato1/dato2)); 
}

