let texto = document.getElementsByName("dni")[0];
let letras =
['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

// 12345678M

texto.addEventListener("focusout", function(){
    let dni = texto.value.toUpperCase();
    if(dni[dni.length -1] < "A" || dni[dni.length -1] > "Z"){
        alert("Fallo, debe tener una letra al final");
    }else{
        //if((dni.length) < 9 || (dni.length ) > 9){
        if (dni.length != 9){
            alert("Fallo, el DNI debe tener 9 digitos");
        }else{
            let letra = dni[dni.length - 1];
            
            let num = parseInt(dni.substring(0, 8));
            let modulo = num % 23;
            let letramodulo = letras[modulo];

            if(letramodulo === letra)
                alert("DNI CORRECTO");
            else
                alert("DNI INCORRECTO");
        }
    }
});

/*
let texto = document.getElementsByName("dni")[0];
let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

texto.addEventListener("focusout", function () {
    let dni = texto.value.trim();

    if (dni.length !== 9 || !/[0-9]/.test(dni.substring(0, 8)) || !/[A-Za-z]/.test(dni.charAt(8))) {
        alert("Fallo, el DNI debe tener 9 dígitos y una letra al final.");
    } else {
        let letraUsuario = dni.charAt(8).toUpperCase();
        let num = parseInt(dni.substring(0, 8));

        let modulo = num % 23;
        let letraCalculada = letras[modulo];

        if (letraCalculada === letraUsuario) {
            alert("DNI CORRECTO");
        } else {
            alert("DNI INCORRECTO");
        }
    }
});*/ 