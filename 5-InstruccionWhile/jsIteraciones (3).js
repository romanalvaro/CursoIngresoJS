function mostrar()
{
    var clave=prompt("Ingrese Clave", "utn750");
    var cdor=0

    while(clave.toLowerCase!= "utn750" && cdor==3){

        clave=prompt("Error de calve");

        cdor=cdor+1
          
    }

    if (cdor==3){
        alert("Maximo de intentos permitidos");

    }else{
        alert("Bienvenido");
    }



}//FIN DE LA FUNCIÓN
