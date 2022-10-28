
const urlApi ="https://jsonplaceholder.typicode.com/posts/"
const listaComentarios = [];
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

async function verComentarios(){
    const [respostaPost, respostaComentarios] = await Promise.all([
        fetch(`${urlApi}/${id}`),
        fetch(`${urlApi}/${id}/comments`),
      ]);
    
      const dataPost = await respostaPost.json();
    
      const dataComments = await respostaComentarios.json();

    const title = document.createElement("h1");
    const body = document.createElement("p");

  title.innerText = dataPost.title;
  body.innerText = dataPost.body;

    dataComments.forEach((comentario) =>{
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
verComentarios();

function criarComentario(){

    let novoComentario = [
        id = listaComentarios.length,
        nome = document.getElementById('entradaNome').value, 
        email = document.getElementById('entradaEmail').value, 
        comentario = document.getElementById('entradaComentario').value];


listaComentarios.push(novoComentario);

console(novoComentario);

}



