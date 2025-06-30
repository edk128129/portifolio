//acessa a tag resultado para poder alterar
let mostrar = document.querySelector('#resultado');

let num1
let num2

function comparar(){

    num1 = Number(window.prompt("digite um numero: "));
    num2 = Number(window.prompt("digite um numero: "));

if(num1 > num2){

    
    //transforma o tag resultado no que estiver dentro da crase
    mostrar.innerHTML = `<P> o valor maior e ${num1} </P>`
}





}