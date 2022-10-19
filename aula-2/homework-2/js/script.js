//Exercício 2

function mudarCor(x){
   let aux = document.getElementById("texto");
    aux.addEventListener('click', () => {
        aux.style.color=x;
    })
}

//----------------------------------------------------------------------------

//Exercício 3
var numero = 0;
function contadorJs(){
    console.log(numero);
    numero++
    document.getElementById('contador').innerText = numero;
}
function reset(){
    numero = 0;
    document.getElementById('contador').innerText = numero;
}
//----------------------------------------------------------------------------
//Exercício 4
function filtro1(){
    document.querySelector("img").style.filter="blur(10px)";
}
function filtro2(){
    document.querySelector("img").style.filter="sepia(60%)";
}
function resetar(){
    document.querySelector("img").style.filter="none";

}

//Exercício 5

function calcular(){
    const valor1 = Number(document.getElementById('valor1').value);
    const valor2 = Number(document.getElementById('valor2').value);
    const operacao = document.querySelector('select').value;
  
    switch(operacao){
      case 'somar': 
        document.getElementById('resultado').value = valor1 + valor2;
        break;
        case 'subtrair': 
          document.getElementById('resultado').value = valor1 - valor2;
          break;
        case 'dividir':
          if(valor2 !== 0){
            document.getElementById('resultado').value = valor1 / valor2
            break;
          }else{
            document.getElementById('resultado').value = 'Divisão por zero não permitida.';
            break;
          }
        case 'multiplicar': 
          document.getElementById('resultado').value = valor1 * valor2;
          break;
      default:
        document.getElementById('resultado').value = 'Operação inválida.';
    }
    
  }

  function reset(){
    document.getElementById('valor1').innerText = "";
    document.getElementById('valor2').innerText = "";
    document.getElementById('resultado').innerText = "";
}