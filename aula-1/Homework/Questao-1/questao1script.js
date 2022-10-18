var asteristos = "*".repeat(40)

var frase1 = ("BEM VINDO AO MEU PROGRAMA")
var frase2 = ("ELE REALMENTE FUNCIONA")
var frase3 = ("EU USEI FUNÇÃO PRA FAZER ISSO")

function escreverTexto(){
    document.getElementById("Linha-1").innerHTML = frase1;
}
document.getElementById("Asteristos").innerHTML = asteristos;
document.getElementById("Linha-1").innerHTML = frase1;

function escreverTexto2(){
    document.getElementById("Linha-2").innerHTML = frase2;
}
document.getElementById("Asteristos2").innerHTML = asteristos;
document.getElementById("Linha-2").innerHTML = frase2;

function escreverTexto3(){
    document.getElementById("Linha-3").innerHTML = frase3;
}
document.getElementById("Asteristos3").innerHTML = asteristos;
document.getElementById("Linha-3").innerHTML = frase3;