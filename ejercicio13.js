/*
1. Programa que pide una cadena y devuelva una nueva, obtenida a partir de 
modificaciones de la primera: 
a. Las minúsculas se convierten en mayúsculas, y a la inversa 
b. Se eliminan los espacios en blanco 
c. Las a se convierten en 1, las e en 2, las i en 3, las o en 4 y las u en 5. 
*/

let cadena1 = prompt("Introduce una palabra");
let cadenaDevuelta="";


for(let i=0;i<=cadena1.length-1;i++){
let cadeComprobar=cadena1.charAt(i);
let mayu=cadena1.charAt(i).toUpperCase();
let mini=cadena1.charAt(i).toLowerCase();

if(cadeComprobar===mayu){
    if(mayu==="A"){
cadenaDevuelta+="1";
    }else if(mayu==="A"){
cadenaDevuelta+="2";
    }else if(mayu==="I"){
cadenaDevuelta+="3";
    }else if(mayu==="O"){
cadenaDevuelta+="4";
    }else if(mayu==="U"){
cadenaDevuelta+="5";
    }else{
            cadenaDevuelta+=mini;
    }

}else
    {    if(mini==="a"){
cadenaDevuelta+="1";
    }else if(mini==="e"){
cadenaDevuelta+="2";
    }else if(mini==="i"){
cadenaDevuelta+="3";
    }else if(mini==="o"){
cadenaDevuelta+="4";
    }else if(mini==="u"){
cadenaDevuelta+="5";
    }else{
              cadenaDevuelta+=mayu;
    }
  
}


}
let cadenaResultado=cadenaDevuelta.trim();
console.log(cadenaDevuelta.trim());