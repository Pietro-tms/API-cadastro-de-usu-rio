# API de Cadastro de Usuários

API REST para cadastrar, listar e excluir usuários, desenvolvida com Node.js, Express e MongoDB.

## Funcionalidades

- Cadastro com nome, e-mail e idade
- Listagem de usuários
- Exclusão de usuários
- Verificação de e-mail já cadastrado

## Tecnologias

- Node.js e Express
- MongoDB e Mongoose
- Dotenv e CORS

## Rotas

- `POST /users` — cadastra um usuário
- `GET /users` — lista os usuários
- `DELETE /users/:id` — exclui um usuário

Exemplo de dados para `POST /users`:

```json
{
  "name": "Maria",
  "email": "maria@exemplo.com",
  "age": 25
}
```

## Como executar

```bash
git clone https://github.com/Pietro-tms/API-cadastro-de-usu-rio.git
cd API-cadastro-de-usu-rio
npm install
```

Crie um arquivo `.env` na raiz do projeto com a conexão do MongoDB:

```env
MONGODB_URI=mongodb://127.0.0.1:27017/cadastro-usuarios
```

Com o MongoDB em execução, inicie a API:

```bash
node index.js
```

A API ficará disponível em `http://localhost:3000`.
