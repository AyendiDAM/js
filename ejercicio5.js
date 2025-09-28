

let num1=prompt("Introduzca un numero ");
let caracter=num1;
let caracterInvertido="";

for(let i=caracter.length-1; i>=0;i--){
caracterInvertido+=caracter.charAt(i);

}
if(caracter===caracterInvertido){
console.log("Es un número capicúa")
}else{
    console.log("No es un número capicúa")
}
