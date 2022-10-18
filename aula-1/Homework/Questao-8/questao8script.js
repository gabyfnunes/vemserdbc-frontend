var sinalOperacao = prompt("Insira o sinal da operação: ");
var entradaValor1 = prompt("Insira um valor: ");
var valor1 = parseInt(entradaValor1);
var entradaValor2 = prompt("Insira um valor: ");
var valor2 = parseInt(entradaValor2);

function calculadora(){
    if(sinalOperacao ==="+"){
        let calculo = valor1+valor2;
        alert(`${valor1} + ${valor2} = ${calculo}`)
    }
    if(sinalOperacao ==="-"){
        let calculo = valor1-valor2;
        alert(`${valor1} - ${valor2} = ${calculo}`)
    }
    if(sinalOperacao ==="*"){
        let calculo = valor1*valor2;
        alert(`${valor1} * ${valor2} = ${calculo}`)
    }
    if(sinalOperacao ==="/" && valor2!=0){
        let calculo = valor1/valor2;
        alert(`${valor1} / ${valor2} = ${calculo}`)
    }
    else{
        alert("Erro. Tente novamente.")
    }
}
    document.getElementById("Calculadora").innerHTML = calculadora();