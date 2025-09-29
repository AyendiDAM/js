let respuesta=prompt("Introduzca su calificación"); 

//switch(true) cuando quiero una condicion
//case(numero>=7 && numero<=6):
//console.log()
//break;

if(respuesta>=0 && respuesta<=10){

if(respuesta>=0 && respuesta<=3){
        console.log("La calificación es muy deficiente");
}

else if(respuesta>3 && respuesta<5){
        console.log("La calificación es deficiente");
}
else if(respuesta>4 && respuesta<6){
        console.log("La calificación es Suficiente");
}
else if(respuesta>5 && respuesta<7){
        console.log("La calificación es Bien");
}
else if(respuesta>6 && respuesta<9){
        console.log("La calificación es Notable");
}else{
          console.log("La calificación es Sobresaliente");
}

}
