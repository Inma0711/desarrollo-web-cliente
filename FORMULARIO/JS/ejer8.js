let radiosillos = document.querySelectorAll('input[type="radio"]');

radiosillos.forEach(elem => elem.addEventListener("click", function(evento){
    let cajita = document.querySelector('.cajita, .rojo, .azul, .verde');
    //console.log(evento.target);
  //  console.count(evento.target.value);
  //  console.count(this.value);

    //console.log(evento);

    // Casi pero no esta bien, sobre-escribe la clase cajita
    //cajita.setAttribute('class', evento.target.value);

    // Esta bien
    cajita.classList.remove("azul", "rojo", "verde");
    cajita.classList.add(evento.target.value);
}));

// querySelector y querySelectorAll tienen como parámetro un selector de CSS
//TODO estudiarme los selectores
//TODO estudiarme querySelector y querySelectorAll
