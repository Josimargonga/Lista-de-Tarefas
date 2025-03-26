# API de Lista de Tarefas

Uma API simples para gerenciamento de tarefas, construída com **NestJS**, **Prisma** e **TypeScript** seguindo a arquitetura **MVC**.

## 📌 Funcionalidades

- Criar tarefas
- Listar todas as tarefas
- Buscar tarefa por ID
- Atualizar título ou descrição
- Marcar tarefa como concluída

## 🚀 Tecnologias

- **NestJS** - Framework para aplicações Node.js
- **Prisma** - ORM para banco de dados
- **TypeScript** - Linguagem tipada para JavaScript

## ⚙️ Instalação

```sh
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
npm install
```

## 🛠️ Configuração

Antes de rodar a API, configure o banco de dados no arquivo `.env`:

```sh
DATABASE_URL="postgresql://user:password@localhost:5432/todo"
```

## ▶️ Executando a API

```sh
npm run start:dev
```

A API estará disponível em `http://localhost:3000`.

## 📖 Endpoints

### Criar Tarefa
**POST** `/tasks`

```json
{
  "title": "Minha nova tarefa",
  "description": "Descrição da tarefa opcional"
}
```

### Listar Tarefas
**GET** `/task`

### Buscar Tarefa por ID
**GET** `/task/{id}`

### Atualizar Tarefa
**PATCH** `/task/{id}`

```json
{
  "title": "Novo título"
}
```

### Marcar como Concluída
**PATCH** `/task/{id}/done`

### Excluir Tarefa
**DELETE** `/task/{id}`

## 📌 Contribuição

Contribuições são bem-vindas! Siga os passos:

1. Faça um fork do repositório
2. Crie uma branch com a feature (`git checkout -b minha-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona minha feature'`)
4. Faça push para a branch (`git push origin minha-feature`)
5. Abra um Pull Request

---
📌 **Criado por [Josimar Gonga](https://github.com/Josimargonga/)** 🚀

