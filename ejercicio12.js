//12. Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro cada 
//una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, 
//por ejemplo, la tabla es de 7×5 los números irán del 35 al 1. 

let numColumnas = parseInt(prompt("Introduce el número de columnas"));
let numFilas = parseInt(prompt("Introduce el número de filas"));

// Declaración del array 
let nuevoArray = new Array(numColumnas);

let total=numColumnas*numFilas;

//crear el array con las dimenciones que introduzca en el prompt
for (let i = 0; i < numColumnas; i++) {
    nuevoArray[i] = new Array(numFilas);
}

// Llenar la matriz con valores
for (let i = 0; i < numColumnas; i++) {
    for (let j = 0; j < numFilas; j++) {
        nuevoArray[i][j] = total;
        total--;
    }
}

console.log(nuevoArray);

