function mostrar(){


    var edad1;

        //tomo la edad  

    edad1=document.getElementById("edad").value;
        //utilizo if para comparar datos
        //utilizo If dentro de IF para el caso de que deba comparar un rango de numeros etc.
        //se puede tambier utilizar operadores logicos en este caso &&
    if(edad1>13 || edad1<17){
        alert("Esta Persona no es adolescente");
    }
}