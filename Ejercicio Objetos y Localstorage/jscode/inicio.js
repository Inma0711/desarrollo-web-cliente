window.onload = function () {

    let h1 = document.querySelector("h1");

    //h1.innerText = "Hay " + library.length + " libros en la biblioteca";
    h1.innerText = `Hay ${library.length} libros en la biblioteca`;

    let titulos = [];
    let cover = [];

    for (let libro of library) {
        titulos.push(libro.title);
        cover.push(libro.cover);
    }

    let section = document.querySelector("section");


    for (let i in titulos) {
        let article = document.createElement("article");

        //article.setAttribute("class", "presentacion");
        article.classList.add('presentacion');

        let h3 = document.createElement("h3");
        h3.innerText = titulos[i];
        article.appendChild(h3);

        let img = document.createElement("img");
        //img.src = cover[i];
        img.setAttribute('src', cover[i]);
        article.appendChild(img);

        section.appendChild(article);

            //Funcion, cuando pincho en el articulo me lleva a esta pagina
        article.addEventListener("click", function(){
           let cadena = JSON.stringify(library[i]);

           sessionStorage.setItem("aBuscar", cadena);
           location.href = "mostrar.html";

        });
    }

};