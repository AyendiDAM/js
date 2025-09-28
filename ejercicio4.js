
let num1=prompt("Introduzca el numero 1"); 

let num2=prompt("Introduzca el numero 2"); 

let num3=prompt("Introduzca el numero 3"); 
let num11=Number.parseFloat(num1);
let num22=Number.parseFloat(num2);
let num33=Number.parseFloat(num3);
let suma=(num11+num22+num33);
let media=suma/3;
   console.log(suma);
      console.log(media);
if(num1>media){
     console.log("El primer numero introducido es mayor que la media:"+num11);
}else{
     console.log("El primer numero introducido es menor que la media:"+num11);
}

if(num2>media){
     console.log("El segundo numero introducido es mayor que la media:"+num22);
}else{
     console.log("El segundo numero introducido es menor que la media:"+num22);
}

if(num3>media){
     console.log("El tercer numero introducido es mayor que la media:"+num33);
}else{
     console.log("El  tercer numero introducido es menor que la media:"+num33);
}
