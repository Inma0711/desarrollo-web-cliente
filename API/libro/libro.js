
let boton = document.querySelector("button");
const ul = document.createElement("ul");


boton.addEventListener("click", function () {
    const div = document.getElementById("resultado");
    console.log("hola");

    fetch("http://www.jaimeweb.es/medac/books.json")
        .then((respuesta) => {
            return respuesta.json();
        })
        .then((datos) => {
            //console.log(datos.library)
            const array = datos.library;
            for (let i = 0; i < array.length; i++) {
                //    console.log(array[i].book.title);
                if (array[i].book.genre == "Fantasía") {
                    const elemento = document.createElement("li");
                    elemento.textContent = array[i].book.title;
                   
                    ul.appendChild(elemento);
                   /* let img = document.createElement("img");
                    img.setAttribute("src",  array[i].book.cover);
                    div.appendChild(img);
                   */
                }
            }

            div.appendChild(ul);
            
        });

});




// for (let i = 0; i < array.length; i++) {
//     console.log(array[i].book.title);
//     let elemento = document.createElement("li");
//     elemento.appendChild(document.createTextNode(`${array[i].book.title}`));
// }
// ul.appendChild(elemento);
/*datos.library.forEach(ele => {
    let element = document.createElement("li");
    element.appendChild(
        element.appendChild(document.createTextNode(`${ele.book.title}`))
    );
    ul.appendChild(element);
    */