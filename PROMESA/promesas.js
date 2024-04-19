const alsa = [
    {
        nombre: "Pablo",
        precio: 450,
        localidad: "Nerja"
    },
    {
        nombre: "Aaron",
        precio: 350,
        localidad: "San Pedro"
    },
    {
        nombre: "Nico",
        precio: 750,
        localidad: "Alahurino"
    },
    {
        nombre: "Fernando",
        precio: 150,
        localidad: "El Motel de al lado"
    },
    {
        nombre: "Miguel",
        precio: 750,
        localidad: "Huelin"
    }
];

function getAlsa() {
    return new Promise(function (resolve, reject) {
        if (alsa.length == 0) reject("No hay datos en el array");
        setTimeout(() => {
            resolve(alsa);
        }, 1000);
    });
}

const salida = document.querySelector('#salida');

getAlsa()
    .then((respuestaResolve) => {
        const ul = document.createElement('ul');
        respuestaResolve.forEach((objetito, indice) => {
            const li = document.createElement('li');
            li.textContent = `Objeto ${indice}:`;
            const liul = document.createElement('ul');
            for (const clave in objetito) {
                const liulli = document.createElement('li');
                liulli.textContent = `${clave} -> ${objetito[clave]}`;
                liul.appendChild(liulli);
            }
            li.append(liul);
            ul.appendChild(li);
        });
        salida.appendChild(ul);
    })
    .catch((respuestaReject) => {
        console.log(respuestaReject);
    });
