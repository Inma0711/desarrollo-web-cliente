function validarFormulario() {
    const dni = document.getElementById('dni').value.trim();
    const nombre = document.getElementById('nombre').value.trim();
    const apellidos = document.getElementById('apellidos').value.trim();
    const fechaNacimiento = document.getElementById('fechaNacimiento').value.trim();
    const webPersonal = document.getElementById('webPersonal').value.trim();
    const contrasena = document.getElementById('contrasena').value;

    if (!dni || dni.length !== 9) {
        alert('El DNI debe tener una longitud de 9 caracteres.');
        document.getElementById('dni').focus();
        return;
    }

    if (!validarFechaNacimiento(fechaNacimiento)) {
        alert('La fecha de nacimiento debe tener el formato dd/mm/yyyy.');
        document.getElementById('fechaNacimiento').focus();
        return;
    }

    if (!validarPalabras(nombre, 1, 2)) {
        alert('El campo de nombre debe tener una o dos palabras.');
        document.getElementById('nombre').focus();
        return;
    }

    if (!validarPalabras(apellidos, 1, 2)) {
        alert('El campo de apellidos debe tener una o dos palabras.');
        document.getElementById('apellidos').focus();
        return;
    }

    if (!webPersonal.startsWith('https://')) {
        alert('La web personal debe empezar por https://.');
        document.getElementById('webPersonal').focus();
        return;
    }

    if (contrasena.length < 8 || contrasena.length > 12) {
        alert('La longitud de la contraseña debe estar entre 8 y 12 caracteres.');
        document.getElementById('contrasena').focus();
        return;
    }

    // Si todas las validaciones son exitosas, redirige a la página de éxito
    window.location.href = 'exito.html';
}

function validarFechaNacimiento(fecha) {
    const regex = /^\d{2}\/\d{2}\/\d{4}$/;
    return regex.test(fecha);
}

function validarPalabras(cadena, minPalabras, maxPalabras) {
    const palabras = cadena.split(' ').filter(palabra => palabra.trim() !== '');
    return palabras.length >= minPalabras && palabras.length <= maxPalabras;
}