

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let num1=getRandomInt(100);
let num2=getRandomInt(100);
let num3=getRandomInt(100);

while(num1==num2 || num2==num3 || num1==num3){
 let num1=getRandomInt(100);
let num2=getRandomInt(100);
let num3=getRandomInt(100);

}
     console.log(num1);
     console.log(num2);        
     console.log(num3);