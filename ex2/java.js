function maior(){

    let num1 = 0;
    const ano = 2025
    
 num1 = Number(window.prompt("em que ano voce nasceu: "));
 
 let idade = ano - num1
 
 alert(idade)
 
 if(idade > 18){
     alert("voce pode tirar a carteira de motorista");
 }
 if(idade == 18){
     alert("voce pode tirar a carteira de motorista");
 }
 else{
     let quant = 18 - idade
 alert("voce tem q esperar " + quant + "anos")
 alert
 }
 
 
 
 }