function cambiarColorFondo() {
    document.getElementById('miSection').style.backgroundColor = 'lightgreen';
}

function cambiarAnchuraParrafo() {
    document.getElementById('miParrafo').style.width = '300px';
}

function confirmarEnlace(event) {
    event.preventDefault(); // Evita que el enlace siga el href por defecto

    const confirmacion = confirm('¿Deseas ir al campus del instituto?');

    if (confirmacion) {
        window.location.href = event.target.href; // Redirige al enlace si el usuario confirma
    }
}

// Asociar eventos
document.getElementById('miSection').addEventListener('click', cambiarColorFondo, true);
document.getElementById('miParrafo').addEventListener('click', cambiarAnchuraParrafo, true);
document.getElementById('miEnlace').addEventListener('click', confirmarEnlace, true);