let inscritos = 0

function cal() {
    equi = inscritos 
    n1 = 3 
    equi = equi / n1 
}
function inscrever() {
    let quantidade = document.querySelector('#resultado');

    inscritos += 1 

    if (inscritos >= 12) {    
        cal()

        quantidade.innerhtml = `<P>ha ${inscritos} inscritos </p>`;
        quantidade.innerhtml += `<P> se tem ${equi} equipes </p>`;
    }
    else {
        quantidade.innerhtml = `<P>a quantidade minima ainda nao foi atingida, ha ${inscritos} inscriçoes oculpadas. </P>`
    }
    
}