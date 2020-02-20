/*function mostrar()
{

var sexo = prompt("ingrese f ó m .");

while(sexo!="f" && sexo!="m"){
   if(sexo=="f"){
   alert("Sexo femenino") 
   document.getElementById('Sexo').value=sexo;
    }else{
        if(sexo="m"){
            alert("Sexo masculino")
        }else{
        alert("ingrese sexo");
        }
    }    
}
}
document.getElementById('Sexo').value=sexo;
*/
var sexo=prompt("ingrese sexo f o m");

while (sexo!="f" || sexo !="m"){
    sexo=prompt("Error, ingrese f o m");
}
document.getElementById("sexo").value=sexo;
//FIN DE LA FUNCIÓN