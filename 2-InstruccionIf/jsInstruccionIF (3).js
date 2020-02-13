function mostrar()
{
    //declaro las variables
    var edad1;
    //tomo la edad  
    edad1=document.getElementById("edad").value
    //utilizo sentencia if para comparar datos
    if(edad1>=18){
        alert("Esta persona es mayor de edad")
    }else{
        alert("Esta persona es menor de edad");
    }

}//FIN DE LA FUNCIÓN