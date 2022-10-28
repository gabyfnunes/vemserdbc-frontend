const urlApi ="https://jsonplaceholder.typicode.com/posts"

const loading = document.querySelector('#loading');
let espacoPosts = document.querySelector('#posts-espaco');

loading.classList.add("hide");

const carregarPosts = async ()=>{
    const respostaApi = await fetch(urlApi);
    const posts = await respostaApi.json();

    
    posts.forEach(element => {
        espacoPosts.innerHTML += 
        `<div>
            <div>
                <h5>${element.title}</h5>
                <p>${element.body}</p>
                <a class="btn btn-danger" onclick="window.location.href = './comentarios.html'">Ver comentarios</a>
            </div>
         </div><hr>`
            
        });

}

carregarPosts();