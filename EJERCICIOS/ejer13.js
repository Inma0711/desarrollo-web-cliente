/*Crea una función llamada likes la cual va a recibir como único
parámetro un array de nombres. Esta función debe devolver una cadena siguiendo el
patrón que se muestra en el ejemplo siguiente:
[] --> "no one likes this"
["Peter"] --> "Peter likes this"
["Jacob", "Alex"] --> "Jacob and Alex like this"
["Max", "John", "Mark"] --> "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"] --> "Alex, Jacob and 2 others like this"*/


function likes(nombres) {
    switch (nombres.length) {
        case 0:
            return "No one likes this";
        case 1:
            return nombres[0] + " likes this";
        case 2:
            return nombres[0] + " and " + nombres[1] + " like this";
        case 3:
            return nombres[0] + ", " + nombres[1] + " and " + nombres[2] + " like this";
        default:
            return nombres[0] + ", " + nombres[1] + " and " + (nombres.length - 2) + " others like this";
    }
}



