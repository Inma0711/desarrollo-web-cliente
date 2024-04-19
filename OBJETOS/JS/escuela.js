/*1. Crea un objeto TUTOR, el cual tendrá los campos: nombre, edad, DNI y titulo
universitario.
2. Crea un objeto ASIGNATURA. De cada asignatura necesitamos saber su nombre, el
curso al que pertenece (un número entero) y el número de horas totales. A continuación
crea una lista de, al menos, 4 objetos asignaturas diferentes.
3. Haciendo uso del objeto TUTOR creado en el ejercicio 1 y de la lista de objetos
ASIGNATURA creada en el ejercicio 2, define un objeto ALUMNO.
Un alumno tendrá un nombre, una edad, el ciclo que estudia, el curso en el que está (un
número entero), un tutor, una lista de asignaturas y una lista de nota media de cada
asignatura.
4. Haciendo uso de las distintas estructuras FOR recorre el objeto ALUMNO y muestra,
dentro de un DIV maquetado en CSS, todos los datos del alumno.
Imagina que estás haciendo una aplicación para gestionar alumnos que va a usar gente
que no sabe programar. Es decir, muestra la información del alumno de la forma más
clara posible.*/


// crear objeto tutor
function Tutor(nombre, edad, DNI, titulo) {
    const tutor = {
        "nombre": nombre,
        "edad": edad,
        "DNI": DNI,
        "titulo": titulo,
        "mostrar": mostrar,
        "cambiarNombre": function (nombre) {
            this.nombre = nombre;
        }
    };
    return tutor;
};

function mostrar() {
    let s = "";
    s += "nombre: " + this.nombre + "\n";
    s += "edad: " + this.edad + "\n";
    s += "DNI: " + this.DNI + "\n";
    s += "titulo: " + this.titulo + "\n";
    return s;
}

let t1 = Tutor("Jaime", 40, "5748375G", "Programacion");
console.log(t1.mostrar());
t1.cambiarNombre("Tato");
console.log(t1.mostrar());
//console.log(mostrar2(t1));

/*function mostrar2(obj){
    let s = "";
    for(let ele in obj){
        if (typeof obj[ele] != 'function')
            s += ele + ": " + obj[ele] + "\n";
    }
    return s;
}
*/
// crear un objeto con los valores y lo devuelve
function Asignatura(nombre, curso, horas_totales = 0) {
    const asignatura = {
        'nombre': nombre,
        'curso': curso,
        'horas_totales': horas_totales

    };
    return asignatura;
};
let a1 = Asignatura("dibujo", 2, 50);
let a2 = Asignatura("fundamentos", 1);
let a3 = Asignatura("ampliacion", 3, 70);
let a4 = Asignatura("recreo", 4, 100);
const listita = [a1, a2, a3, a4];



// crear un objeto alumno
function Alumno(nombre, edad, ciclo, curso, tutor, asignaturas, medias) {
    const alumno = {
        'nombre': nombre,
        'edad': edad,
        'ciclo': ciclo,
        'curso': curso,
        'calcularMedia': media,
        'mostrarAsignatura': function () {
            let s = "";
            let nombres = [];
            for (let i in this.asignaturas) {
                nombres.push(this.asignaturas[i].nombre);
            }

            for(let i in this.medias){
                s += nombres[i] + ": " + this.medias[i] + "\n";
            }
            return s;
            
        },
        'tutor': tutor,
        'asignaturas': asignaturas,
        'medias': medias,
        'toString': function () {
            return (nombre + " " + edad + " " + ciclo + " " + curso + " " + tutor.nombre + " " + medias);
        },
    };
    return alumno;
};


function media() {
    let suma = 0;
    for (let ele of this.medias) {
        suma += ele;
    }
    let media = suma / this.medias.length;
    return media;
}

let alum1 = Alumno("inma", 21, "arte", 2, t1, listita, [7, 9, 8, 4]);


let div = document.getElementById("div");

let p = document.createElement("p");
let texto = document.createTextNode(alum1.toString());

p.appendChild(texto);
div.appendChild(p);