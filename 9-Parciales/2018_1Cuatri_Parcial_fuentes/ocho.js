function mostrar()
{
    var respuesta;
    var numero;
    var letra;
    var cdorNum;

    do{
        do{
            numero = prompt("Ingrese numero");
            numero = parseInt(numero);
        }while (isNaN(numero));
    
            
        do{
            letra = prompt("Ingrese una letra")
        }while (!isNaN(letra)); 


        if(numero%2==0){
            cdorNum=cdorNum+1
        }
        if (numero%2!=0) {
            cdorImpar=cdorImpar+1
        }
        respuesta=confirm("Desea ccontinua?");

    }while (respuesta);
        
        
    
}
