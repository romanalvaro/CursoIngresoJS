function mostrar()
{
    var planeta1;

    planeta1=prompt("@Ingrese un Planeta")

    switch (planeta1) {
        case "mercurio":
        case "venus":
            alert("Aqui hace mas calor")    
            break;
        case "tierra":
            alert("Vivimos acá");
            break;
        case "Marte":
        case "júpiter":
        case "saturno":
        case "urano":
        case "neptuno":
            alert("Hace mas Frío");
            break;
        default:
            alert("No es un planeta Valido");
            break;
    }
}
