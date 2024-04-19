let datos = sessionStorage.getItem("aBuscar");
let libro = JSON.parse(datos);

let section = document.querySelector("section");

let h2 = document.createElement("h2");
h2.innerText = `${libro.title}`;
section.appendChild(h2);

let table = document.createElement("table");

for (let i in libro) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");

    td1

    tr.appendChild(td1);
    tr.appendChild(td2);
    table.appendChild(tr);

}


section.appendChild(table);