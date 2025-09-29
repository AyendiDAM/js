/*
10. Solicita dos arrays. Entonces debes concatenar esos dos arrays, alternando un 
elemento de uno y otro del otro array. Muestra el array resultante 
*/
let elements = [];
let elements2 = [];
let tamanoVector = prompt("Introduce el tamaño del prumer arrays");
let tamanoVec = Number.parseFloat(tamanoVector);

let tamanoVector2 = prompt("Introduce el tamaño del segundo arrays");
let tamanoVec2 = Number.parseFloat(tamanoVector);

     let valorArray="";
     let valorArray2="";
for(let i=0;i<=tamanoVec;i++){
  valorArray = prompt("Introduce un valores para tu array");
elements.push(valorArray);
   
}
for(let i=0;i<=tamanoVec2;i++){
  valorArray2 = prompt("Introduce un valores para tu array");
elements2.push(valorArray2);
   
}


let reversedElements=structuredClone(elements);
 elements=reversedElements.concat(elements2);
  
  
let arrayResultante=[];
let posicionInicial=0;
 let posicionFinal=elements.length-1;
for(let i=0;i<=elements.length-1;i++){

       if(i%2==0){
              arrayResultante.push(elements[posicionInicial])
        posicionInicial++;
       }else{
      arrayResultante.push(elements[posicionFinal])
       posicionFinal--;
       }
}


console.log(elements);
console.log(elements2);
console.log(reversedElements);
console.log(arrayResultante);

