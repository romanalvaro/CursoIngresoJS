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
        if (numero%2!=0) {
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
            acumNegativos=acumNegativos-acumNegativos;
        }

        promNegativos=acumNegativos*cdorNegativos;
        promPositivos=acumPositivos*cdorPositivos;

        respuesta=confirm("Desea continua?");

    }while (respuesta!=true);
    
}
