//9. Pide los elementos de un vector. Posteriormente, pide al usuario una posición y un 
//valor, de forma que insertes ese valor en la posición correspondiente. Devuelve el 
//array resultado. 

let posicion = "";
let valor = "";
let mapa = new Map();
let tamanoVector = prompt("De que  tamaño quiere su vector");
let tamanoVec = Number.parseFloat(tamanoVector);

for (let i = tamanoVec; i >= 1; i--) {
    posicion = prompt("Introduzca la posición");
    valor = prompt("Introduzca el valor");
    mapa.set(posicion, valor);
}
//converción de map en un array
const entries = [...structuredClone(mapa)];
entries.constructor.name;//"Array" 
console.log(entries);
//visualizar que tenemos
for (let map of entries)
    console.log(map);