const imagenes = document.querySelectorAll('.gallery .container-image');
const imagenModal = document.getElementById('image-modal');

imagenes.forEach((imagen) => {
    imagen.addEventListener('click', () => {
        const ruta = imagen.querySelector('img').src;
        imagenModal.src = ruta;
    });
});