function simulateLoading(id, buttonId) {
    const progressBar = document.getElementById(id);
    const loadButton = document.getElementById(buttonId);
    const max = parseInt(progressBar.getAttribute('max'));
    let value = parseInt(progressBar.value);

    // Desactivar el botón mientras se completa la carga
    loadButton.disabled = true;

    const intervalId = setInterval(function () {
      value += 5; // Simula un progreso del 5%
      progressBar.value = value;

      if (value >= max) {
        clearInterval(intervalId); // Detener el intervalo al alcanzar el máximo
        loadButton.disabled = false; // Reactivar el botón
        alert('Carga completada'); // Mostrar un mensaje cuando se complete
      }
    }, 1000); // Actualizar cada segundo (1000 ms)
  }