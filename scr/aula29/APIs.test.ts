import {test,expect} from 'vitest';

const BASE_URL='https://jsonplaceholder.typicode.com';

test('GET/Metodo POST para criar um novo post',async()=>{
    const res=await fetch(`${BASE_URL}/posts`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            title:'Meu novo post',
            body:'Conteúdo do meu novo post',
            userId:1
        })
    })
    //testa status code
    expect(res.status).toBe(201);
    //testa sse o retornoo é um objeto JSON
    const dados=await res.json();
    expect(dados).toBe('Meu novo post');
    expect(dados).toBe('Conteúdo do meu novo post');
 });



 //MEtodo Put para atualizar um post existente
 test('PUT/Metodo PUT para atualizar um post existente',async()=>{
    const res=await fetch(`${BASE_URL}/posts/1`,{
        method:'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            id:1,
            title:'Post atualizado',
            body:'Conteúdo do post atualizado',
            userId:1
        })
    });
    //testa status code
    expect(res.status).toBe(200);
    //testa sse o retornoo é um objeto JSON
    const dados=await res.json();
    expect(dados).toBe('Post atualizado');
    expect(dados).toBe('Conteúdo do post atualizado');
 });


 //testa metodo PATCH para atualizar parcialmente um post existente
 test('PATCH/Metodo PATCH para atualizar parcialmente um post existente',async()=>{
    const res=await fetch(`${BASE_URL}/posts/1`,{
        method:'PATCH',
        headers:{
            'Content-Type':'application/json'   
        },      
        body:JSON.stringify({
            title:'Post atualizado parcialmente',
            body:'Conteúdo do post atualizado parcialmente'
        })
    });
    //testa status code    
    expect(res.status).toBe(200);
    //testa sse o retornoo é um objeto JSON
    const dados=await res.json();
    expect(dados).toBe('Post atualizado parcialmente');
    expect(dados).toBe('Conteúdo do post atualizado parcialmente');
 });
 
 //testa metodo DELETE para deletar um post existente
 test('DELETE/Metodo DELETE para deletar um post existente',async()=>{
    const res=await fetch(`${BASE_URL}/posts/1`,{
        method:'DELETE'
    });
    //testa status code
    expect(res.status).toBe(200);
 });