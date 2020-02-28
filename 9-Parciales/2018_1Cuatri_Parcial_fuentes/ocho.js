function mostrar()
{
    var respuesta;
    var numero;
    var letra;
    var cdorCero;
    var cdorImpar;
    var cdorNum;
    var cdorNegativos;
    var cdorPar;
    var cdorPositivos;
    var promPositivos;
    var promNegativos;
    var max;
    var min;
    var priVez=true;

    do{
        do{
            numero = prompt("Ingrese numero");
            numero = parseInt(numero);
        }while (isNaN(numero));

        do{
            letra = prompt("Ingrese una letra")
        }while (!isNaN(letra));

         if(numero%2==0){
            cdorPar=cdorPar+1
        }
        if (numero%2==1) {
            cdorImpar=cdorImpar+1
        }
        if(numero==0){
            cdorCero==cdorCero+1
        }
        if(numero>0){
            cdorPositivos=cdorPositivos+1
            acumPositivos=acumPositivos+acumPositivos;
        }
        if(numero<0){
            cdorNegativos=cdorNegativos+1;
            acumNegativos=acumNegativos+acumNegativos;
        }
        if(priVez){
            priVez=false
            minimo = numero;
            maximo = numero;
            minimoLetra = letra;
            maximoLetra = letra;
        }else {
            if(numero>minimo){
                minimo=numero;
                minumiLetra=letra;
            }
            if(numero<maximo){
                maximo=numero;
                maximoLetra=letra;
            }
        }

        

           

        respuesta=confirm("Desea continua?");

    }while (respuesta);

    if(cdorPositivos !=0){
        promNegativos=acumNegativos/cdorNegativos;
        promPositivos=acumPositivos/cdorPositivos;
     }
    document.write("Pomedio Positivos"+ promPositivos);
    document.write("Peomedio Negativos" + promNegativos);
}
