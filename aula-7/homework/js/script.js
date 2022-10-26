const url = "https://jsonplaceholder.typicode.com/posts";

const loadingElement = document.querySelector("#loading");
const postsContainer = document.querySelector("#posts-container");

const paginaPost = document.querySelector("#post");
const postBlog = document.querySelector("#post-container");
const comentariosBlog = document.querySelector("#comments-container");

const formularioComentario = document.querySelector("#comment-form");
const entradaEmail = document.querySelector("#email");
const entradaComentario = document.querySelector("#body");

// Load post
const urlSearchParams = new URLSearchParams(window.location.search);
const postId = urlSearchParams.get("id");

// Get all posts
async function carregarPosts() {
  const response = await fetch(url);

  console.log(response);

  const data = await response.json();

  console.log(data);

  loadingElement.classList.add("hide");

  data.map((post) => {
    const div = document.createElement("div");
    const title = document.createElement("h2");
    const body = document.createElement("p");
    const link = document.createElement("a");

    title.innerText = post.title;
    body.innerText = post.body;
    link.innerText = "Visualizar";
    link.setAttribute("href", `/post.html?id=${post.id}`);

    div.appendChild(title);
    div.appendChild(body);
    div.appendChild(link);
    postsContainer.appendChild(div);
  });
}

// Ver Post 
async function carregarPostIndividual(id) {
  const [responsePost, responseComments] = await Promise.all([
    fetch(`${url}/${id}`),
    fetch(`${url}/${id}/comments`),
  ]);

  const dataPost = await responsePost.json();

  const dataComments = await responseComments.json();

  loadingElement.classList.add("hide");
  paginaPost.classList.remove("hide");

  const title = document.createElement("h1");
  const body = document.createElement("p");

  title.innerText = dataPost.title;
  body.innerText = dataPost.body;

  postBlog.appendChild(title);
  postBlog.appendChild(body);

  dataComments.map((comment) => {
    createComment(comment);
  });
}

function createComment(comment) {
  const div = document.createElement("div");
  const email = document.createElement("h3");
  const commentBody = document.createElement("p");

  email.innerText = comment.email;
  commentBody.innerText = comment.body;

  div.appendChild(email);
  div.appendChild(commentBody);
  comentariosBlog.appendChild(div);
}

//comentar
async function postComment(comment) {
  const response = await fetch(url, {
    method: "POST",
    body: comment,
    headers: {
      "Content-type": "application/json",
    },
  });

  const data = await response.json();

  createComment(data);
}

if (!postId) {
  carregarPosts();
} else {
carregarPostIndividual(postId);

  formularioComentario.addEventListener("submit", (e) => {
    e.preventDefault();

    let comment = {
      email: entradaEmail.value,
      body: entradaComentario.value,
    };

    comment = JSON.stringify(comment);

    postComment(comment);
  });
}