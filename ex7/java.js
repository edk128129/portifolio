let num = 0
//resetar 
let reset = 0

//acessa a tag resultado para poder alterar
let mostrar = document.querySelector('#resultado');

function mais() {
    
   //faz somar
    num += 1 

    //transforma o tag resultado no que estiver dentro da crase
    mostrar.innerHTML = `<P> o valor total e ${num} </P>`
}