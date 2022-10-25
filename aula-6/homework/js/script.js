//Questão 1
function exibirMensagem(){
    setTimeout(() => {
        alert('Sua conexão falhou!! Tente conectar novamente!')
    }, 3000);
}

//Questão 2
function verHora(){
    let hora = new Date().toLocaleTimeString();
    setTimeout(() => {
        document.getElementById('horario').innerHTML = hora;
    }, 2000);
}
function resetarHora(){
    document.getElementById('horario').innerHTML = "";
}

//Questão 3
let x;
function trocarCor(){
    const listaCores =  ["pink", "black", "blue", "yellow", "orange", "red", "gray", "green"];
    let contador = 0;
    let espaco = document.getElementById('cores');

   x =setInterval(() => {
       if(contador<listaCores.length){
        espaco.style.backgroundColor=listaCores[contador];
        contador++;
    } else{
        contador = 0;
    }
   },1000)
}

function resetarCor(){
    clearInterval(x);
}

//Questão 4
function sorteando(){
        const nomes = ["Maria","João","Pafúncia","Robesval","Josidelte"];
        let auxVelocidade = document.getElementById('input-Velocidade').value;
        let velocidade = parseInt(auxVelocidade);
        let auxDuracao = document.getElementById('input-Tempo').value;
        let duracao = parseInt(auxDuracao);

        if(!isNaN(velocidade) && !isNaN(duracao)){
            const sorteio = setInterval(() =>{
                let sorteio = Math.floor(Math.random()*nomes.length);
                document.getElementById('nomeSorteado').value = nomes[sorteio];
            }, velocidade);
    
            setTimeout(() => {
                clearInterval(sorteio);
            }, duracao);
        }else{
            alert("A duração e Velocidade devem ser em milisegundos.")
        }
 
        
 }
 
