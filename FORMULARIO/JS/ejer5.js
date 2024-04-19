let inputs = document.querySelectorAll("input");

inputs[2].addEventListener("click", function(){
    var texto1 = inputs[0].value;
    var texto2 = inputs[1].value;
    var comprovasion = esAnagrama(texto1, texto2);
    if(comprovasion){
        alert("Sí es anagrama");
    }else{
        alert("No es anagrama");
    }
});

function esAnagrama(p1, p2){
    if (p1.length == 0 || p2.length == 0){
        return false;
    }

    let array1 = [...p1].sort();    //El spread hace lo mismo q el split en este caso
    let array2 = [...p2].sort();
    return array1.join('') == array2.join('');
}


//! Paso a paso
/*

p1 = "hola";
...p1 = 'h', 'o', 'l', 'a'
[...p1] = ['h', 'o', 'l', 'a']
[...p1].sort() = ['a', 'h', 'l', 'o']
[...p1].sort().join('') = "ahlo"

p2 = "aloh";
...p2 = 'a', 'l', 'o', 'h'
[...p2] = ['a', 'l', 'o', 'h']
[...p2].sort() = ['a', 'h', 'l', 'o']
[...p2].sort().join('') = "ahlo"

*/