function mostrar()
{
    var edad1;
    edad1=document.getElementById("edad").value;
    
    if (edad1>18) {
        alert("Es mayor");
    }else{
        if (edad1>17) {
            alert("Es adolescente");
        }else{
            alert("es menor");
        }
    }
}
//FIN DE LA FUNCIÓN