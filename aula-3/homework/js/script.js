// Exercício 1:

var auxNota1 = document.getElementById(nota1);
var nota1 = parseFloat(auxNota1);
var auxNota2 = document.getElementById(nota2);
var nota2 = parseFloat(auxNota2);
var auxNota3 = document.getElementById(nota3);
var nota3 = parseFloat(auxNota3);
let auxMedia;
let media = parseFloat(auxMedia);

function calcularMedia(){
    var auxNota1 = document.getElementById("nota1").value;
    var nota1 = parseFloat(auxNota1);
    var auxNota2 = document.getElementById("nota2").value;
    var nota2 = parseFloat(auxNota2);
    var auxNota3 = document.getElementById("nota3").value;
    var nota3 = parseFloat(auxNota3);
    
    let media = (nota1+nota2+nota3)/3;
     
document.getElementById("mediaFinal").innerText = media;

    if(media<5){
    alert("Aluno Reprovado")
        }
    if(media>=5 && media<=7){
    alert("Aluno em Recuperação")
        }
    if(media>7){
    alert("Aluno Aprovado")
        }
    document.getElementById("situacao").innerHTML = situacao();
}


function situacao(){
    if(media<5){
    alert("Aluno Reprovado")
}
if(media>=5 && media<=7){
    alert("Aluno em Recuperação")
}
if(media>7){
    alert("Aluno Aprovado")
}
document.getElementById("situacao").innerHTML = situacao();
}

// Exercício 2:
    // var contador;
    // let soma;

    // while (contador<50){
    //     contador+=1;
    //     soma = contador*2;
    // }
    // document.getElementById("soma").innerText = soma;


    function contadorPares(){
        let numero = 2;
        let contagem = 0;
        let soma = 0;
        while (contagem < 50){
            if(numero%2 == 0){
                soma += numero;
                contagem++;
                numero++;
            }else{numero++;}
        }
        document.getElementById("contador").innerText = `A soma dos 50 primeiros numeros pares a partir de 2 é: ${soma}`;
    }

// Exercício 3:
    function start(){


        for(let i=0; i<60; i++){
    
            setTimeout(function(){

            document.getElementById("segundos").innerText = i}, i*1000)
            
        }
    }

// Exercício 4:
    function checkin(){
        alert("Bem-vindo");
    }
    function checkout(){
        confirm("Tem certeza?");
        alert("Tá bom, tchau.")
    }
    function estenderHospedagem(){
        let auxDias = prompt("Em quantos dias quer estender a estadia?");
        let dias = parseInt(auxDias);
        if (dias>0){
            alert(`Estadia adiada em ${dias} dias.`);
        }
    }
    function sair(){
        alert("Ok");
    }

// Exercício 5:
    function compararElementos(){

        let auxCarbono1 = document.getElementById("carbono1").value;
        let carbono1 = parseInt(auxCarbono1);
        let auxCarbono2 = document.getElementById("carbono2").value;
        let carbono2 = parseInt(auxCarbono2);
        let carbono2Ajustado;
       
       carbono2Ajustado = (carbono2 + 2);

        if(carbono1 == carbono2Ajustado){
            alert("Os elementos tem a mesma quantidade de carbono.");
        }else{
            alert("Quantidade de carbono diferentes");
            }
    }

// Exercício 6:
function contarAte100(){

    let i = 1;
    while (i <= 100) {
        if (i % 2 == 0) {
            console.log(i);
            document.getElementById("conta").innerText = i;
        }
        i++;
    }
    document.getElementById("conta").innerHTML = "fim";
}

// Exercício 7:
function notANumber(){
    var entradaIdade = prompt('Qual a sua idade: ');
    var idade = parseInt(entradaIdade);


    while(isNaN(idade)){
        idade = parseInt(prompt('Qual a sua idade: '));
    }
    alert(`Sua Idade é ${idade}`);
}


// Exercício 8:
function aumentoSalario(){
    let salario = 1000;
    let aumento = 0.15;
    for (let ano =2013; ano <=2022; ano++) {
        if(ano < 2017){
            salario = salario*(aumento+1);
            console.log(`Em ${ano}, seu salario foi ${salario} e obteve o aumento de ${aumento}%`);
            document.getElementById("salarioAumento").innerHTML = `Em ${ano}, seu salario foi ${salario} e obteve o aumento de ${aumento}%`;

        }else{
            aumento = 2*aumento;
            salario = salario*(aumento+1);
            console.log(`Em ${ano}, seu salario foi ${salario} e obteve o aumento de ${aumento}%`);
            document.getElementById("salarioAumento").innerHTML = `Em ${ano}, seu salario foi ${salario} e obteve o aumento de ${aumento}%`;
        }
    }
        document.getElementById("totalAumento").innerHTML = `O total de Aumento(%) foi: ${aumento}%`;
}


// Exercício 9:
function sequenciaFibonacci(){
    let numeroAnterior = 0;
    let numeroAtual = 1;
    let proximoNumero = 0;

    // document.getElementById("numeroAnterior").innerHTML= numeroAnterior;
    // document.getElementById("numeroAtual").innerHTML = numeroAtual;
    // console.log(numeroAnterior);
    // console.log(numeroAtual);

    for (let index = 0; index < 20; index++) {
        proximoNumero = numeroAtual + numeroAnterior;
        numeroAnterior = numeroAtual;
        numeroAtual = proximoNumero;
        document.getElementById("numero").innerHTML = proximoNumero;
        console.log(proximoNumero)
    }
}