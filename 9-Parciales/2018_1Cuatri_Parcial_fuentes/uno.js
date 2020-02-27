function mostrar() {

    var ancho;
    var alto;
    var resultado;

    alto=prompt("Ingrese el alto");
    ancho=prompt("Ingrese el ancho");

    alto=parseInt(alto);
    ancho=parseInt(ancho);

    resultado=ancho*alto/2;
    alert("El perimetro es: " + resultado);

}