//8. Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con 
//“cancelar” deben mostrarse todas las cadenas concatenadas con un guión -. 
let num=[];
let cadena="";
let variable=true;

while(variable){
    cadena=prompt("Introduzca un texto, y para dejar de introducir pulse cancelar."); 
    if(cadena==null){
        variable=false;
    }else{
  num.push(cadena);
    }
  }

  //Aquí separo por guiones
let cadenaformada= num.join("-");
console.log(cadenaformada);


 for(let i in num){
console.log(` ${i} es: ${num[i]}`);
}


