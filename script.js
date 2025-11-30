const boton = document.getElementById('miBoton');
const contenedorLink = document.getElementById('linkContainer');

boton.addEventListener('click', function() {
    contenedorLink.classList.toggle('hidden');
    
    if (contenedorLink.classList.contains('hidden')) {
        boton.innerHTML = '<i class="fab fa-github"></i> Ver mis redes';
    } else {
        boton.innerHTML = '<i class="fas fa-eye-slash"></i> Ocultar mis redes';
    }
});