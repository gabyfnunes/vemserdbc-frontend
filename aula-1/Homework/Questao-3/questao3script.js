var texto = prompt("Insira um texto: ").toUpperCase();

function confirmacao(texto){
  if(texto ==="SIM"){
    alert ('Parabéns')
  }
  else if(texto ==="NAO"){
    var texto2 = prompt("Insira um texto: ").toUpperCase();
     alert(`O ultimo texto foi: ${texto2}`)
  }
  else{
    confirm("Você tem noção dos seus atos? ")
  }
}
    document.getElementById("Confirmacao-texto").innerHTML = confirmacao(texto);




   
         