function verificarCampos() {
    // Obtener los valores de los campos
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const comentario = document.getElementById('comentario').value;
    if (nombre === '' || email === '' || comentario === '') {
        alert('Por favor, completa todos los campos.');
    } else {
        alert('Su Mensaje Fue Enviado Satisfactoriamente.');
        
    }
}