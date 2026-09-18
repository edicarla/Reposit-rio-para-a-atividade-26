const BASE_URL='https://jsonplaceholder.typicode.com'
//deinir contratos de tipo
type Post={
    userId:number;
    id?:number;//campo opcional
    title:string;
    body:string;
};
type Coment={
    postId:number;
    id:number;
    name:string;
    email:string;
    body:string;
};

//GET/Post
async function listarPost() {
    console.log('---1 metodo GET/Post----');
    const res=await fetch(`${BASE_URL}/Post`);
    const dados:Post[]=await res.json();
    console.log(`Status:${res.status}`);
    console.log(`Lidos ${dados.length}, post.
                    EX: do primeiro:`,dados[0].title);
    
    
};

//GET/post/1
async function buscarPorId(id:number) {
    console.log('-----1. metodo GET/posts------');
    const res=await fetch(`${BASE_URL}/post`);
    const dados:Post=await res.json();
    console.log(`Status:${res.status}`);
    console.log(`Titulo post ${id}:`, dados.title);
};

//GET/post/1/comment
async function listarComent(postId:number) {
    console.log('1. metodo GET/comment-----');
    const res=await fetch(`${BASE_URL}/posts`);
    const dados:Coment[]=await res.json();
    console.log(`Status:${res.status}`);
    console.log(`O post ${postId} tem ${dados.length} comentarios
                    EX: email do primero comentario`, dados[0].email);
};

async function chamarReqs() {
    listarPost();
    buscarPorId(1);
    listarComent(1);
};

chamarReqs();