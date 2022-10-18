var nomeCliente = prompt("Informe o nome do Cliente:");
var nomeAtendente = prompt("Informe o nome do Atendente:");


document.getElementById("Mensagem-Alerta").innerHTML = alert(`Olá ${nomeCliente}, eu me chamo ${nomeAtendente}. Como posso ajudar?`);