let botones = document.querySelectorAll("input");

botones.forEach(function (boton) {
  boton.addEventListener("click", darColorDeBotonAlBody);
});

function darColorDeBotonAlBody(ev) {
  // Sacar la primera clase de un elemento (cuyo evento se ha disparado)
  //console.log(ev.target.classList[0]);
  //window.getComputedStyle(this)['backgroundColor'];
  document.body.classList = this.classList[0];
}

/*function cambiaFondo() {
    for(let i = 0; i < boton.length; i++){
        let fotito = boton[i];
        let clasecita = fotito.getAttribute('class');
    }
   
}*/

/*foto.addEventListener("click", function(clase){
   switch (clase){
    case "azul": document.body.style.background
   }
});*/
