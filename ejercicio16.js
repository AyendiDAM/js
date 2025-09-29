/*
4. Crea un conjunto vacío y añádele todos los elementos de los arrays [12,12,12,14], 
[11,11,13,15],[“i”,”j”,”k”,”l”] . ¿Cuántos elementos tiene el conjunto? ¿Por qué? Haz un 
recorrido del conjunto, mostrando en consola cada uno de los elementos. 
*/

let conjuntoVacio=new  Set();

let arrays= [12,12,12,14]; 
let arrays2=[11,11,13,15];
let arrays3=["i","j","k","l"];

let arrayTotal=arrays2.concat(arrays,arrays3);
console.log(...arrayTotal);


console.log(conjuntoVacio);

for(let i of arrayTotal){
    conjuntoVacio.add(i);
}
console.log(conjuntoVacio);
//se eliminarán los elementos repetidos