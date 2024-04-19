const divPosiciones = document.getElementById('divPosiciones');
        const divBotonPulsado = document.getElementById('divBotonPulsado');

        document.addEventListener('mousemove', function(event) {
            const posX = event.clientX;
            const posY = event.clientY;

            divPosiciones.textContent = `Posiciones del ratón: (${posX}, ${posY})`;
        });

        document.addEventListener('mousedown', function(event) {
            switch (event.button) {
                case 0:
                    divBotonPulsado.textContent = 'Botón pulsado: Izquierdo';
                    break;
                case 1:
                    divBotonPulsado.textContent = 'Botón pulsado: Central';
                    break;
                case 2:
                    divBotonPulsado.textContent = 'Botón pulsado: Derecho';
                    break;
            }
        });

        document.addEventListener('contextmenu', function(event) {
            event.preventDefault(); // Impide que aparezca el menú contextual al hacer clic derecho
        });