function mostrar()
{
    //ingreso de notas
    var nota;
    var sexo;
    var totalNotas=0;
    var promNotas;
    var cantNotas
    var cdor=0;
    var notaMenor=999;
    var sexoMenorNota;
    var notaVarones;

    while(cdor<5){
        cdor=cdor+1

        do{
            nota = prompt("Ingrese Nota");
            nota = parseInt(nota);

            }while (isNaN(nota) || nota>10 || nota<0);
                totalNotas=totalNotas+totalNotas
                cantNotas=cantNotas+1

           
        do{
            sexo=prompt("Ingrese Sexo (f/m)")
        }while (sexo!="m" && sexo!="f");

        promNotas=totalNotas/cantNotas;

        if(nota<notaMenor){
            notaMenor=nota;
            sexoMenorNota=sexo;
        }
        if(sexo=="m" && nota>=6){
            notaVarones=notaVarones+1
        }
        if (cdor>=5) {
            alert("Varones con nota 6 o mas: "+notaVarones);
            alert("Menor nota: "+notaMenor);
            alert("Sexo de la menor nota: "+sexoMenorNota);

        }
    }
    
}
