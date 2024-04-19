let inputs = document.querySelectorAll("input");

/*
for(let i = 0; i<inputs.length; i++ ){
    inputs[i].addEventListener("input" , function(){
        let lista = document.getElementById("selector");
        if(inputs[i].checked){
            let op = document.createElement('option');
            op.innerText = op.value = inputs[i].value;
            lista.appendChild(op);
        } else {
            lista.removeChild(
                document.querySelector('option[value="' + inputs[i].value + '"]')
                );
        }
    });
}
*/
    /* Version 1*/ 
    inputs.forEach(
        (input) => {
            input.addEventListener("input" , function(){
                let lista = document.getElementById("selector");
                if(input.checked){
                    let op = document.createElement('option');
                    //Con inner text es para que se vea en el google osea para q lo veamos nosotros
                    op.innerText = op.value = input.value;  
                    lista.appendChild(op);
                } else {
                    lista.removeChild(
                        //Query selector selecciona el primer elemento
                        document.querySelector('option[value="' + input.value + '"]')
                        );
                }
            });
        }
    );
         /* Version 2*/ 
         /*
    inputs.forEach(
        function funcioncita(input) {
            input.addEventListener("input" , function(){
                let lista = document.getElementById("selector");
                if(input.checked){
                    let op = document.createElement('option');
                    op.innerText = op.value = input.value;
                    lista.appendChild(op);
                } else {
                    lista.removeChild(
                        document.querySelector('option[value="' + input.value + '"]')
                        );
                }
            });
        }
    );
    */