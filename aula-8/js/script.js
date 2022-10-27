function verificar(){
    const myPromise = new Promise((resolve, reject) =>{
            var nome = document.getElementById('input-Name').value;
            var ano = document.getElementById('input-Ano').value;
            
    
            if (ano>=1981 && ano<=1995){
                alert(`${nome}, nascido em ${ano} é Millenial.`)
            } else if (ano>1996 && ano<=2010){
                alert(`${nome}, nascido em ${ano} é GenZ.`)
            } else{
                alert(`${nome}, nascido em ${ano} não se encaixa na brincadeira.`)
            }
            
        })
    
       
    myPromise.then((data) => {
        alert(data);});
 
}