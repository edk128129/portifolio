function somar(){
     num1 = Number(window.prompt("primeiro numero:  "));
     num2 = Number(window.prompt("segundo numero:"));
    
     num3 = num1 + num2 

     function checkevenorodd(num3){
     if (num3 % 2 == 0 ){
          alert("o numero "+ num3 + " e par.")
     }
     else
     {
          alert("o numero "+ num3 + " e impar.")
     }
     }
     checkevenorodd(num3);

}
function diminuir(){
     num1 = Number(window.prompt("numero 1: "));
     num2 = Number(window.prompt("numero 2: "));
    
     num3 = num1 - num2 

     function checkevenorodd(num3){
          if (num3 % 2 == 0 ){
               alert("o numero "+ num3 + " e par.")
          }
          else
          {
               alert("o numero "+ num3 + " e impar.")
          }
          }
          checkevenorodd(num3);
}
function divisao(){
     num1 = Number(window.prompt("numero 1: "));
     num2 = Number(window.prompt("numero 2: "));
    
     num3 = num1 / num2 

     function checkevenorodd(num3){
          if (num3 % 2 == 0 ){
               alert("o numero "+ num3 + " e par.")
          }
          else
          {
               alert("o numero "+ num3 + " e impar.")
          }
          }
          checkevenorodd(num3);
}
function multiplicaçao(){
     num1 = Number(window.prompt("numero 1: "));
     num2 = Number(window.prompt("numero 2: "));
    
     num3 = num1 * num2 

     function checkevenorodd(num3){
          if (num3 % 2 == 0 ){
               alert("o numero "+ num3 + " e par.")
          }
          else
          {
               alert("o numero "+ num3 + " e impar.")
          }
          }
          checkevenorodd(num3);
}