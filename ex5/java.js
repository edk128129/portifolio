let aleatorio = parseInt(maht.random() * 101);
let computador 
let jogador 

function adnum(){
    jogador = number(window.prompt("digite um numero de 0 a 100"));

    let resultado = document.querySelector('#resultado');

    if (jogador != aleatorio) {
        if (jogador > aleatorio ){
            resultado.innerHTML = `<P>voce errou, tente um numero menor</P>`;
        }
        else {
            resultado.innerHTML= `<P>voce errou, tente um numero maior </P>`;
        }
    }
    else{
        resultado.innerHTML = `<P>parabens!, voce acertou, o numero era ${aleatorio}</P>`;
    }
}