function mostrar()
{
    //delcaro variables inicializando contadores y acumuladores.
    var respuesta;
    var tempPar=0;
    var temperatura=0;
    var marca;
    var mayorPeso=0;
    var marcaMayorPeso;
    var masFrio=0;
    var promPeso;
    var pesoGral=0;
    var cantProductos=0;
    var pesoMax=0;
    var pesoMinimo=9999;
    var priVez=true;
//verifico datos de ingreso
    do{
       do{ 

            peso=prompt("Ingrese un peso entre 1 y 100");
            peso=parseInt(peso);

         }while (isNaN(peso));

         do{

                temperatura=prompt("Ingrese Temperatura de almacenamiento (-30 y 30)")
                temperatura=parseInt(temperatura);

         }while (isNaN(temperatura));

         do{
             marca=prompt("Marca del producto");

         } while(!isNaN(marca));

//ejecuto bandera primera vez

         if(priVez){
            priVez=false

        }else {
            if(peso>pesoMax){
               pesoMax=peso;
               marcaMayorPeso=marca;
            }else
                if (pesoMinimo<peso) {
                pesoMinimo=peso;
                }
            if (masFrio<temperatura){
                masFrio=temperatura;
            }
            if (pesoGral<peso) {
                pesoGral=peso;
            }
            if (temperatura%2==0) {
                tempPar=tempPar+1
            }
        }

//corroborar datos e ir pisando valores acorde a la necesidad.

        if(peso>pesoMax){
               pesoMax=peso;
               marcaMayorPeso=marca;
        }else 
            if (pesoMinimo<peso) {
                pesoMinimo=peso;  
            }
        if (masFrio<temperatura){
                masFrio=temperatura;
        }
               
        if (peso>pesoMax) {
                pesoMax=peso;
        }
        if (temperatura%2==0) {
                tempPar=tempPar+1 
        }

                
        pesoGral=peso+pesoGral;
        cantProductos=cantProductos+1


        respuesta=confirm("Desea continuar?");
    }while(respuesta);

//calculo de promedios

    if(cantProductos>0){

    promedioPeso=pesoGral/cantProductos;
    }else{
        alert("No hay productos");
    }
//imprimir valores de resultado;

    document.write("Menor Peso: "+pesoMinimo+"<br>");
    document.write("Mayor Peso: "+pesoMax+"<br>")
    document.write("Producto mas frío: "+masFrio+"<br>");
    document.write("Promedio de peso de productos: " + promedioPeso+"<br>");
    document.write("Cantidad de Temperaturas Pares: "+tempPar+"<br>");
    document.write("Marca con producto Mas Pesado: "+marcaMayorPeso+"<br>");
}
