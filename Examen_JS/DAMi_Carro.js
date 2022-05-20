let productos = [{
    nombre: "Milkybar",
    foto: "milkybar.jpg",
    descripcion: "Chocolate blanco Nestlé Milkybar 100 g.",
    precio: 1.20,
    descuento: "10%",
}, {
    nombre: "Crunch",
    foto: "crunch.jpg",
    descripcion: "Chocolate crujiente Crunch Nestlé sin gluten 100 g.",
    precio: 1.32,
    descuento: "20%",
}, {
    nombre: "Croissants - La Bella Easo",
    foto: "croissant.jpg",
    descripcion: "Croissants 0% azucares La Bella Easo 360 g.",
    precio: 2.59,
    descuento: "",
}, {
    nombre: "Nesquik",
    foto: "nesquik.jpg",
    descripcion: "Chocolate con leche con relleno cremoso Nestlé Nesquik 100 g.",
    precio: 1.31,
    descuento: "30%",
}];

let subtotal;

function muestraProductos() {
   /** Función para crear los elementos necesarios para poder visualziar los productos. */
   const raiz = document.getElementById("productos");

   for(i = 0; i <= productos.length-1; i++){
       let articulo = document.createElement("article");
       articulo.setAttribute('class', 'articulo');

       let divArticulo = document.createElement("div");

       let nombreW50 = document.createElement("p");
       nombreW50.setAttribute('class', 'nombre w50');
       nombreW50.innerHTML = productos[i].nombre;
       divArticulo.appendChild(nombreW50);
       
       if(productos[i].descuento != ""){
           let descuento = document.createElement("p");
           descuento.setAttribute('class', 'descuento');
           descuento.innerHTML = productos[i].descuento;
           divArticulo.appendChild(descuento);
       } 

       articulo.appendChild(divArticulo);

       let img = document.createElement("img");
       img.setAttribute('src', 'src/'+productos[i].foto);
       articulo.appendChild(img);

       let precioP = document.createElement("p");
       let precioSpan = document.createElement("span");
       precioSpan.innerHTML = productos[i].precio + '€';
       precioP.appendChild(precioSpan);
       articulo.appendChild(precioP);

       let descripcion = document.createElement("p");
       descripcion.innerHTML = productos[i].descripcion;
       articulo.appendChild(descripcion);

       let cantidadP = document.createElement("p");
       let cantidadInput = document.createElement("input");
       cantidadInput.setAttribute('type', 'number');
       cantidadInput.setAttribute('id', ''+productos[i].nombre);
       cantidadInput.setAttribute('step', '1');
       cantidadInput.setAttribute('min', '0');
       cantidadInput.setAttribute('value', '0');
       cantidadP.appendChild(cantidadInput);
       articulo.appendChild(cantidadP);

       raiz.appendChild(articulo);
   }

   let boton = crearBoton();
   raiz.appendChild(boton);
}

function crearBoton(){
    let boton = document.createElement("button");
    boton.setAttribute('class', 'w90');
    boton.setAttribute('id', 'anadirProductos');
    boton.setAttribute('onclick', 'anadirProductos()');
    boton.innerHTML = "Añadir productos"

    return boton;
}



function anadirProductos() {
 /** Función que muestra el ticket con los productos, precios y descuentos así como el total del precio de la compra. */
    vaciaCarro();
    let totalItems = getTotalItems();
    let productosComprados = getProductosComprados();

    const raizTabla = document.getElementById("tablebody");
    var total = 0;
    for(i = 0; i <= totalItems; i++){
        let fila = document.createElement("tr");
        console.log(productosComprados[i].nombre);
        let celdaNombre = creaCelda(productosComprados[i].nombre);      //a tot això si canvio productosComprados[i] per productos[i] sí que funciona, però no sé
        let celdaPrecio = creaCelda(productosComprados[i].precio);      //perquè tal i com ho tinc no funciona.
        let descuento = productosComprados[i].descuento.slice(0, productosComprados[i].descuento.length-1);
        let descuentoCalculado = productosComprados[i].precio * descuento/100;
        let celdaDescuento = creaCelda(descuentoCalculado);
        let celdaCantidad = creaCelda(document.getElementById(""+productosComprados[i].nombre).value);
        let celdaTotal = creaCelda((productosComprados[i].precio * (100-descuento)/100)+'€');
        total += (productosComprados[i].precio * (100-descuento)/100);

        fila.appendChild(celdaNombre);
        fila.appendChild(celdaPrecio);
        fila.appendChild(celdaDescuento);
        fila.appendChild(celdaCantidad);
        fila.appendChild(celdaTotal);
        
        raizTabla.appendChild(fila);
    }
    console.log(total);
    document.getElementById("subtotal").innerHTML = total;
}

function getTotalItems(){
    var totalItems = 0;
    for(i = 0; i <= productos.length-1; i++){
        let cantidad = document.getElementById(""+productos[i].nombre).value;
        if(cantidad > 0){
            totalItems++;
        }
    }
    return totalItems;
}

function getProductosComprados(){
    var productosComprados = [];
    for(i = 0; i <= productos.length-1; i++){
        let cantidad = document.getElementById(""+productos[i].nombre).value;
        if(cantidad > 0){
            console.log(productos[i]);
            productosComprados.push(productos[i]);
        }
    }
    console.log(productosComprados)
    return productosComprados;
}


function creaCelda(valor) {
    let celda = document.createElement("td");
    celda.innerText = valor;
    return celda;
}

function vaciaCarro() {
    let tabla = document.getElementById("tablebody");
    while (tabla.hasChildNodes()) {
        tabla.removeChild(tabla.firstChild)
    }
}