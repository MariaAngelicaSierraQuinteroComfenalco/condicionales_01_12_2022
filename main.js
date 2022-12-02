addEventListener("DOMContentLoaded", (e) => {
//if-else en cuando al tomar decisiones nos devulve un valor negtaivo 
//es uno de los mas utilizados
//if (expresión) { 
    //acciones a realizar en caso positivo 
 //} else { 
    //acciones a realizar en caso negativo 
 //}

//ejemplo

if (credito >= precio) { //pregunta la condicion y si es positivo se ejecuta
    document.write("has comprado el artículo " + nuevoArtículo) //enseño compra 
    carrito += nuevoArticulo 
    credito -= precio 
 } else { //si es negativa se realiza otro procedimiento
    document.write("se te ha acabado el crédito")  
    window.location = "carritodelacompra.html" 	
 }
})