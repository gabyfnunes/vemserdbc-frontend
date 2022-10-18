let anoInicio = 1500;
let anoAtual = 2022;

function calculoMediaGeracoes(){
    let quantidadeAnos = anoAtual-anoInicio;
    let auxmediaQuantidadeGeracoes = quantidadeAnos/28;
    let mediaQuantidadeGeracoes = parseInt(auxmediaQuantidadeGeracoes)
    alert (mediaQuantidadeGeracoes);
}
    document.getElementById("Media-Geracoes").innerHTML(calculoMediaGeracoes());