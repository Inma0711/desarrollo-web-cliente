let parrafo = document.querySelector("p");
let clasecita = parrafo.getAttribute("class");


/*
parrafo.addEventListener("click", function(){
    if(parrafo.classList.contains('uno')){
        parrafo.classList.remove('uno');
        parrafo.classList.add('dos');
        
    }else{
        parrafo.classList.remove('dos');
        parrafo.classList.add('uno');
    }

});*/

parrafo.addEventListener("click", function(){
    if(clasecita == "uno"){
        parrafo.setAttribute("class", "dos");
        clasecita = "dos";
    }else{
        parrafo.setAttribute("class", "uno");
        clasecita = "uno";
    }
});