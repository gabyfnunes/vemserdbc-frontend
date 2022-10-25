function cadastrar(){
const myPromise = new Promise((resolve, reject) =>{
        var nome = document.getElementById('input-Name').value;
        var email = document.getElementById('input-Email').value;
        var senha = document.getElementById('input-Senha').value;

        var re = /\S+@\S+\.\S+/;
        if(re.test(email) == true && senha.length >= 6){
            resolve('login feito com sucesso!');
        } else{
            reject('Login inválido');
        } 
        
    })
   
myPromise.then((data) => {
    alert(data);});
}


