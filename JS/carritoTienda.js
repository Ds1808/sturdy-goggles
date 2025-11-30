let description = document.getElementById('text');
let precio = document.getElementById('precio');
const carrito = [];

// Agregar al carrito
function agregarCarritoTienda(descripcion, precio) {
    const producto = {
        descripcion: descripcion,
        precio: precio,
        cantidad: 1 // Puedes agregar funcionalidad para incrementar la cantidad más adelante
    };

    // Agregar el producto al carrito
    carrito.push(producto);

    // Mostrar el carrito si no está visible
    mostrarCarrito();

    // Actualizar la visualización del carrito
    updateCarritoDisplay();
}

// Mostrar carrito
function mostrarCarrito() {
    const carritoContainer = document.getElementById('carrito-container');
    carritoContainer.style.display = 'block'; // Cambia de 'none' a 'block'
}

// Eliminar del carrito
function eliminarDelCarrito(index) {
    carrito.splice(index, 1); // Elimina el elemento en el índice especificado

    // Actualizar la visualización del carrito
    updateCarritoDisplay();
}

// Actualizar visualización del carrito
function updateCarritoDisplay() {
    const carritoItemElement = document.getElementById('items-carrito'); // Donde se mostrará el carrito
    carritoItemElement.innerHTML = ''; // Limpiar antes de agregar los nuevos elementos

    const ulElement = document.createElement('ul');
    carrito.forEach(producto => {
        const liElement = document.createElement('li');

        // Crear los elementos dentro del carrito con más organización
        const descripcionElement = document.createElement('span');
        descripcionElement.textContent = producto.descripcion;

        const cantidadElement = document.createElement('span');
        cantidadElement.textContent = `Cantidad: ${producto.cantidad}`;

        const precioElement = document.createElement('span');
        precioElement.textContent = `Precio: $${(producto.precio * producto.cantidad).toFixed(2)}`;

        // Añadir los elementos al <li>
        liElement.appendChild(descripcionElement);
        liElement.appendChild(cantidadElement);
        liElement.appendChild(precioElement);

        // Añadir <li> a la lista
        ulElement.appendChild(liElement);
    });

    carritoItemElement.appendChild(ulElement);

    // Mostrar el total
    const totalElement = document.getElementById('total');
    totalElement.textContent = `Total: $${calculoTotal().toFixed(2)}`;
}

// Calcular total
function calculoTotal() {
    let total = 0;
    carrito.forEach(producto => {
        total += producto.precio * producto.cantidad;
    });
    return total;
}
