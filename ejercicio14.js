/*2. Programa que reciba dos strings y devuelvan el número de caracteres diferentes que 
hay entre los dos (comparando posición por posición). Ejemplo: casa y cala, devolvería 
1. */

let cadena1 = prompt("Introduce una palabra");
let cadenaDevuelta=prompt("Introduce una palabra");

let numCaracteresDiferentes=0;
let numCaracteresDiferente1=0;


for(let i=0;i<=cadena1.length-1;i++){

if(cadena1.charAt(i)===cadenaDevuelta.charAt(i)){

}else{
    numCaracteresDiferentes++;
}

}

for(let i=0;i<=cadenaDevuelta.length-1;i++){

if(cadena1.charAt(i)===cadenaDevuelta.charAt(i)){

}else{
    numCaracteresDiferente1++;
}

}

if(numCaracteresDiferente1>numCaracteresDiferentes){
    console.log(numCaracteresDiferente1);
}else if(numCaracteresDiferente1<numCaracteresDiferentes){
 console.log(numCaracteresDiferentes);
}else{
       console.log(numCaracteresDiferente1);
}
