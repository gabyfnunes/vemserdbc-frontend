var entradaIdade1 = prompt("Informe a primeira idade: ");
let idade1 = parseInt(entradaIdade1);
var entradaIdade2 = prompt("Informe a segunda idade: ");
let idade2 = parseInt(entradaIdade2);

function diferencaIdades(){
    let diferencaIdade = idade1-idade2;
    return diferencaIdade;
}

    document.getElementById("Diferenca-Idades").innerHTML =`A DIFERENÇA DAS IDADES É : ${diferencaIdades()}`;