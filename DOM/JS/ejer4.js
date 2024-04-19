function sumar(){
    let lista = document.querySelectorAll("img");
    for(let i = 0; i < lista.length; i++){
        let fotito = lista[i];
        let clasecita = fotito.getAttribute('class');
        if (clasecita == 'visible'){
            fotito.setAttribute('class', 'noVisible');
            lista[i + 1].setAttribute('class', 'visible');
            if (i + 1 == lista.length - 1) {
                //let botonSumar = document.querySelector('button#sumar');
                //let botonSumar = document.querySelector('#sumar');
                let botonSumar = document.getElementById('sumar');
                botonSumar.setAttribute('disabled', null);
            }
            break;
        }
    }
    let botonRestar = document.querySelector('button#restar');
    botonRestar.removeAttribute('disabled'); /*removeAttribute sirve para quitar por completo un atributo*/ 
}

function restar(){
  let lista = document.querySelectorAll("img");
  for(let i = 1; i < lista.length; i++){
    let fotito = lista[i];
    let clasecita = fotito.getAttribute('class');
    if(clasecita == 'visible'){
        fotito.setAttribute('class', 'noVisible');
        lista[i - 1].setAttribute('class', 'visible');
        if (i - 1 == 0) {
            let botonRestar = document.querySelector('button#restar');
            botonRestar.setAttribute('disabled', null);
        }
        break;

    }
  }
  let botonSumar = document.querySelector('button#sumar');
  botonSumar.removeAttribute('disabled');
}
