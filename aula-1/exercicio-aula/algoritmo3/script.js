var valor1 = 12;
var valor2 = 64;
var valor3 = 23;

function somaValores(){
    let soma =  valor1+valor2+valor3;
    return soma;
}

document.getElementById("Soma-3-Numeros").innerHTML = `A SOMA DOS 3 VALORES É: ${somaValores()}`;

