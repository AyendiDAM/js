
//. Dado un número entero n, retorne un array con todos los números enteros en orden 
//decreciente, desde n a 1. 
let num=prompt("Introduzce un número"); 
let numIntroducido=Number.parseFloat(num);
let arrayNum=[];
let longi;
console.log(arrayNum.constructor.name);
while(numIntroducido>=1){
    arrayNum.push(numIntroducido);
    numIntroducido--;
}


for(let i in arrayNum){
console.log(`Numero ${i} es: ${arrayNum[i]}`);
}
