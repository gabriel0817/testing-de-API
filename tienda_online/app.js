document.addEventListener('DOMContentLoaded', function() {
    const botones = document.querySelectorAll('button');
    botones.forEach(boton => {
        boton.addEventListener('click', function() {
            alert('Producto añadido al carrito!');
        });
    });
});
