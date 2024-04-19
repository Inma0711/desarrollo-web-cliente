function toggleSpoiler(button) {
    const content = button.nextElementSibling;
    if (content.style.display === "none" || content.style.display === "") {
      content.style.display = "inline"; // Muestra el contenido
      button.textContent = "Ocultar";
    } else {
      content.style.display = "none"; // Oculta el contenido
      button.textContent = "Mostrar";
    }
  }