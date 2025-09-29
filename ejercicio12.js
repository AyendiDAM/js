//12. Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro cada 
//una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, 
//por ejemplo, la tabla es de 7×5 los números irán del 35 al 1. 

let elements = [];
let elements2 = [];
let tamanoVector = prompt("Introduce el tamaño del prumer arrays");
let tamanoVec = Number.parseFloat(tamanoVector);

let tamanoVector2 = prompt("Introduce el tamaño del segundo arrays");
let tamanoVec2 = Number.parseFloat(tamanoVector);

for(let i=0;i<=tamanoVec;i++){
  valorArray = prompt("Introduce un valores para tu array");
elements.push(valorArray);
   
}