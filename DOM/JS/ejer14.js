function toggleSubmenu(index) {
  const submenus = document.querySelectorAll(".submenu");
  submenus.forEach((submenu, i) => {
    if (i === index - 1) {
      submenu.classList.toggle("active");
    } else {
      submenu.classList.remove("active");
    }
  });
}