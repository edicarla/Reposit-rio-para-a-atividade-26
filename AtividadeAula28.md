Este documento apresenta a análise de dois endpoints da API ReqRes, sendo um endpoint de consulta (GET) e um endpoint de criação (POST).

Os endpoints analisados são:

GET /api/users/2

POST /api/users

1. Identificação e Finalidade GET

Endpoint/Rota: Qual é o caminho da URL? (ex: /api/users). 
/api/users/2

Objetivo de Negócio: Para que serve essa chamada no mundo real? (Explique em 1 ou 2 linhas).
Esse endpoint permite consultar os dados de um usuário específico a partir do seu identificador.

1. Identificação e Finalidade POST

Endpoint/Rota: Qual é o caminho da URL? (ex: /api/users).
/api/users

Objetivo de Negócio: Para que serve essa chamada no mundo real? (Explique em 1 ou 2 linhas).

2. Estrutura do Request (O que o cliente envia)

Método HTTP: (GET ou POST).
GET

URL Completa: O endereço exato e completo da chamada.
https://reqres.in/api/users/2

Headers (Cabeçalhos): Quais cabeçalhos são obrigatórios para a chamada funcionar? (ex: Content-Type: application/json).
x-api-key: SUA_API_KEY

Body (Corpo): O payload em formato JSON que deve ser enviado. Nota: Para requisições GET, preencha com "N/A" (Não se aplica).
N/A

2. Estrutura do Request (O que o cliente envia)

Método HTTP: (GET ou POST).
POST

URL Completa: O endereço exato e completo da chamada.
https://reqres.in/api/users

Headers (Cabeçalhos): Quais cabeçalhos são obrigatórios para a chamada funcionar? (ex: Content-Type: application/json).
Content-Type: application/json
x-api-key: SUA_API_KEY

Body (Corpo): O payload em formato JSON que deve ser enviado. Nota: Para requisições GET, preencha com "N/A" (Não se aplica).
{
  "name": "Edicarla",
  "job": "QA Engineer"
}


3 Estrutura do Response (O que o servidor devolve)

Status Code Esperado: Qual o código numérico de sucesso documentado? (ex: 200 OK, 201 Created).
200 OK

Payload de Retorno: Execute a chamada (usando Postman ou um script TypeScript com fetch) e cole aqui um exemplo real do JSON que o servidor devolveu.
{
  "data": {
    "id": 2,
    "email": "edicarla.silva@reqres.in",
    "first_name": "Edicarla",
    "last_name": "Silva",
    "avatar": "https://reqres.in/img/faces/2-image.jpg"
  }
}


3 Estrutura do Response (O que o servidor devolve)

Status Code Esperado: Qual o código numérico de sucesso documentado? (ex: 200 OK, 201 Created).
201 Created

Payload de Retorno: Execute a chamada (usando Postman ou um script TypeScript com fetch) e cole aqui um exemplo real do JSON que o servidor devolveu.
{
  "name": "Edicarla",
  "job": "QA Engineer",
  "id": "123",
  "createdAt": "2026-02-06T10:30:00.000Z"
}
