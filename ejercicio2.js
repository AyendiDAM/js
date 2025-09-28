 let suma=0;
 let num=0;
 let contador=0;
let num20=true;
 let suma2=1;
 let num2=0;
 let contador2=1;
let num201=true;
 while(num20){
    contador++;
    if(contador%2==0){
        suma+=contador;
        num++;
        if(num==20){
            num20=false;
        }
    } 

 }
  while(num201){
    contador2++;
    if(contador2%3==0){
        suma2=contador2*suma2;
        num2++;
        if(num2==20){
            num201=false;
        }
    } 

 }
 console.log(suma2);
 console.log(suma);