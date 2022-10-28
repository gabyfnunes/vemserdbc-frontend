const urlApi ="https://jsonplaceholder.typicode.com/posts/"
let listaComentarios = [];
let espacoComentarios = document.querySelector('#comentarios-espaco');
let espacoPost = document.querySelector('#post-espaco');


const carregarPost = async () =>{
    const respostaApiPost = await fetch(`${urlApi}`);
    const post = await respostaApiPost.json();

    post.forEach( element =>{
        espacoPost.innerHTML = 
        `<div>
           <div>
               <h3>${element.title}</h3>
               <p>${element.body}</p>
           </div>
        </div><hr>`
    });           
}

carregarPost();

const criarComentario = () =>{

        let nome = document.getElementById('entradaNome').value;
        let email = document.getElementById('entradaEmail').value;
        let comentario = document.getElementById('entradaComentario').value;

console.log(nome,email,comentario)
let novoComentario = {
    nome: nome,
    email: email,
    comentario: comentario};
    
console.log(listaComentarios);
verComentarios(novoComentario);
}


const verComentarios = (novoComentario) => {

listaComentarios.push(novoComentario);
espacoComentarios.innerHTML = "";

   listaComentarios.forEach((comentario) =>{
    console.log(comentario)
    espacoComentarios.innerHTML +=
        `<div>
            <div>
                <h5>${comentario.nome}</h5>
                <h5>${comentario.email}</h5>
                <p>${comentario.comentario}</p>
            </div>
        </div><hr>`
    })
   
    
}


