let foto = document.querySelector("img");
let tigre = "../FOTOS/img2.jpg";
let erizo = "../FOTOS/img3.jpg";

function cambiarFoto(nueva){
    foto.src= nueva;
}

foto.addEventListener("mouseover", function(){
    cambiarFoto(erizo);

});

foto.addEventListener("mouseout", function(){
    cambiarFoto(tigre);

});



/*function cambiaImg(){
    let img = document.querySelector("img");
    img.src="FOTOS/img3.jpg";
    
}

function vueltaImg(){
    let img = document.querySelector("img");
    img.src="FOTOS/img2.jpg";
    
}*/