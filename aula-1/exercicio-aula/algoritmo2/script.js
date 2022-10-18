var nota1 = 3.5;
var nota2 = 5;
var nota3 = 10;

function mediaNotas(){
    let media =  (nota1+nota2+nota3)/3;
    return media;
}

document.getElementById("Media-Notas").innerHTML = mediaNotas();

