/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var dato1;
    var dato2;
    var resultado
    dato1=document.getElementById("numeroUno").value;
    dato2=document.getElementById("numeroDos").value;

    dato1=parseInt(dato1);
    dato2=parseInt(dato2);
    resultado=dato1+dato2;
    //comentario, aca se suma dato1 y dato2

    alert("La Suma de Es igual a " + (dato1+dato2));

}

