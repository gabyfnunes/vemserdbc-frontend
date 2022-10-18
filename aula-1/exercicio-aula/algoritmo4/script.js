var valor1 = 12;
var valor2 = 64;
var valor3 = 23;

function multiplicacaoValores(){
    let soma =  valor1*valor2*valor3;
    return soma;
}

document.getElementById("Multiplicacao-3-Numeros").innerHTML = `A MULTIPLICAÇÃO DOS 3 VALORES É: ${multiplicacaoValores()}`;

