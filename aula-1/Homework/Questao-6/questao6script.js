var entradaAno = prompt("Insira um ano (AAAA):");
let ano = parseInt(entradaAno);

function calculoAnoBissexto(ano){
    let auxAno = ano%4;
    let auxAno2 = ano%400;
    let auxAno3 = ano%100;

   if (auxAno == 0){
        return ("O ano é bissexto");
   }
   else if (auxAno2  == 0){
        return ("O ano é bissexto");
   }
   else {
        return ("O ano não é bissexto")
   }
}

    document.getElementById("Ano-Bissexto").innerHTML = calculoAnoBissexto(ano);


  
