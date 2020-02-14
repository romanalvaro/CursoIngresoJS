/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
//declaro variables 	 
     var marca1;
     var cant;
     var descuento1;
     var aumento1;
     var precio;
     var precioFinal;
     precio=35;
     
//tomo los valores ingresados
marca1=document.getElementById("Marca").value;
cant=document.getElementById("Cantidad").value;
descuento1=document.getElementById("precioDescuento").value

// A.
    if (cant >= 6 )
    {
        descuento1=0.5;
        
    }else
    {
        //B.
        if (cant==5 && marca1=="ArgentinaLuz")
        {
            descuento1=0.4;

        }else
        {
            if(cant==5){

                descuento=0.3;
            }else{

            
                    //C.
                    if (cant==4 && (marca1=="ArgentinaLuz" || marca1=="FelipeLamparas")) {

                            descuento1=0.25;

                    } else
                            {

                                descuento1=0.20

                            // D.
                                if (cant==3 && marca1=="ArgentinaLuz") 
                                {
                                    descuento1=0.15

                                    if(marca1=="FelipeLamparas")
                                    {
                                        decuento1=0.10;

                                    }else
                                    {
                                        descuento1=0.5
                                        
                                    }
                                }
                            }
                    }
            }
            }
    
   //E.
    precioFinal = descuento1 * precio * cant;
    alert(precioFinal)
    if(precioFinal > 120){
        impuesto=precioFinal*10/100;
        alert("Usted Pagó: " + impuesto + " En concepto de IIBB")
    }
        
}
