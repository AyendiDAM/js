/*
7. Crea un mapa con cinco pares de elementos, de manera que tanto las claves como los 
valores sean cadenas de caracteres. Luego ordena un mecanismo para ordenar 
alfabéticamente los valores del mapa. Muestra el resultado en consola. 
*/


let mapa=new Map();
mapa.set(123,"kyendi");
mapa.set(1234,"jyendi3");
mapa.set(1235,"zayendi5");
mapa.set(1238,"Ayendi");
mapa.set(1239,"myendi9");

let arrayValores=[];
 for(let persona of mapa.values()){
    arrayValores.push(persona);
    
 }
 console.log(arrayValores);
let arrayOrdenado=arrayValores.sort();
 console.log(arrayOrdenado);