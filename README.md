# API To-Do List

Uma API simples de To-Do List criada com NestJS para fins de aprendizado. Esta API permite realizar operações básicas de CRUD (Create, Read, Update, Delete) em uma lista de tarefas.

## Tecnologias Utilizadas

- **NestJS** - Framework para desenvolvimento de APIs em Node.js
- **TypeORM** - ORM para manipulação de banco de dados
- **SQLite** - Banco de dados leve para armazenamento local

## Instalação e Configuração

1. Clone o repositório:
   ```sh
   git clone https://github.com/codebr01/API-TO-DO-LIST.git
   ```

2. Acesse o diretório do projeto:
   ```sh
   cd API-TO-DO-LIST
   ```

3. Instale as dependências:
   ```sh
   npm install
   ```

4. Execute as migrações para criar as tabelas no SQLite:
   ```sh
   npm run typeorm migration:run
   ```

5. Inicie o servidor:
   ```sh
   npm run start
   ```

## Endpoints da API

### Criar uma Tarefa
- **Rota:** `POST /tasks`
- **Descrição:** Cria uma nova tarefa
- **Corpo da requisição:**
  ```json
  {
    "title": "Estudar NestJS",
    "description": "Aprender conceitos básicos de NestJS"
  }
  ```
- **Resposta:**
  ```json
  {
    "id": 1,
    "title": "Estudar NestJS",
    "description": "Aprender conceitos básicos de NestJS",
    "state": 1
  }
  ```

### Listar Todas as Tarefas
- **Rota:** `GET /tasks`
- **Descrição:** Retorna todas as tarefas cadastradas
- **Resposta:**
  ```json
  [
    {
      "id": 1,
      "title": "Estudar NestJS",
      "description": "Aprender conceitos básicos de NestJS",
      "isCompleted": false
    },
    {
      "id": 2,
      "title": "Assistir Filme",
      "description": "Assistir filmes do Adam Sandler",
      "state": 1
    }
  ]
  ```

### Obter uma Tarefa por ID
- **Rota:** `GET /todos/:id`
- **Descrição:** Retorna uma tarefa específica pelo ID

### Atualizar uma Tarefa
- **Rota:** `PATCH /tasks/:id`
- **Rota Exemplo:** `PATCH /tasks/2`
- **Descrição:** Atualiza uma tarefa existente
- **Corpo da requisição:**
  ```json
  {
      "id": 2,
      "title": "Assistir Filme",
      "description": "Assistir filmes do Adam Sandler",
      "state": 1
  }
  ```

### Deletar uma Tarefa
- **Rota:** `DELETE /todos/:id`
- **Rota:** `DELETE /todos/2`
- **Descrição:** Remove uma tarefa pelo ID

## Licença
Este projeto está sob a licença MIT. Para mais detalhes, consulte o arquivo LICENSE.
