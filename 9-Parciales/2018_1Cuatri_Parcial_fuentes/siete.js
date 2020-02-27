function mostrar()
{
    //ingreso de notas
    var nota;
    var sexo;
    var totalNotas=0;
    var promNotas;
    var cantNotas
    var cdor=0;

    while(cdor<1){
        cdor=cdor+1

        do{
            nota = prompt("Ingrese Nota");
            nota = parseInt(nota);

            }while (isNaN(nota) || nota>10 || nota<0) {
                totalNotas=totalNotas+totalNotas
                cantNotas=cantNotas+1

            }


        do{

        }while (sexo!="m"&&sexo!="f") {
            
        }
    }
    promNotas=totalNotas/cantNotas;
}
