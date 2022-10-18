var valor1aux = prompt("Insira o primeiro valor:");
let valor1 = parseInt(valor1aux);
var valor2aux = prompt("Insira o segundo valor:");
let valor2 = parseInt(valor2aux);
var valor3aux = prompt("Insira o terceiro valor:");
let valor3 = parseInt(valor3aux)


function somaValores(){
    let soma= valor1+valor2+valor3;
    return soma;
}

document.getElementById("Soma-3-Numeros").innerHTML = `A SOMA DOS 3 VALORES É: ${somaValores()}`;
