let parrafo = document.querySelector("p");

parrafo.addEventListener("click", function(){
    if(this.style.backgroundColor == "blue"){
        this.style.backgroundColor = "red";
    }else{
        this.style.backgroundColor = "blue";
    }
});