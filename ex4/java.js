function media(){

    num1 = Number(window.prompt("primeira nota: "));

    num2 = Number(window.prompt("segunda nota: "));

    num3 = Number(window.prompt("terceira nota: "));

    resu = (num1 + num2 + num3) / 3;

    if (resu > 60){
        alert("voce esta aprovado , sua nota e "+resu)
    }

    else if (resu == 60){
        alert("voce esta aprovado , sua nota e "+resu)
    }
    else{
        falta = 60 - resu
        alert("voce esta reprovado, sua nota e "+resu+ " e falta "+ falta)
    }       
    
}