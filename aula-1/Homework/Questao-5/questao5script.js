var entradaSegundos = prompt("Insira a quantidade de segundos:")
var segundos = parseInt(entradaSegundos);

function conversao(){
    var auxDia = segundos/86400;
    var dia = parseInt(auxDia);
    var sobraDia = segundos%86400;

    var auxHora = sobraDia/3600;
    var hora = parseInt(auxHora);
    var sobraHora = sobraDia%3600;

    var auxMinutos = sobraHora/60;
    var minutos = parseInt(auxMinutos);
    var segundosRestantes = sobraHora%60;

    alert(`Em ${segundos} segundos, temos ${dia} dia(s), ${hora} horas, ${minutos} minutos e ${segundosRestantes} segundos.`)

}

    document.getElementById("Conversao").innerHTML(conversao());