# 📚 CRUD de Livros – React + Node.js + MongoDB

Este projeto consiste em uma aplicação **CRUD de Livros**, composta por **Frontend em React**, **Backend em Node.js (Express)** e **Banco de Dados MongoDB**, permitindo **cadastrar, listar, editar e excluir livros** através de uma interface amigável.  
A comunicação entre o frontend e o backend ocorre via API REST no endpoint:

> **http://localhost:3030/livros**

---

## 🚀 Tecnologias Utilizadas

| Camada        | Tecnologia        |
|--------------|-------------------|
| **Frontend** | React + Bootstrap |
| **Backend**  | Node.js + Express |
| **Banco**    | MongoDB           |
| **Extras**   | Fetch API, CORS, Nodemon |

---

## 📌 Funcionalidades

✔️ Listar livros  
✔️ Cadastrar novo livro  
✔️ Editar livro existente  
✔️ Excluir livro (com confirmação)  
✔️ Modal estilizado (abre/fecha com `ESC`)  
✔️ Integração total com API REST  
✔️ Atualização automática após cada operação  

---

## 📁 Estrutura do Projeto
```
projeto-crud-livros
│
├── backend
│ ├── server.js
│ ├── database.js
│ ├── routes/livros.js
│ └── models/Livro.js
│
└── frontend (React)
└── src
├── App.js
├── LivroLista.jsx
├── LivroFormModal.jsx
└── App.css
```
---

## ⚙️ Instalação e Execução

### 🛠️ **Backend (Node + MongoDB)**

1. Acesse a pasta do backend:
   ```sh
   cd livro-servidor

2. Instale as dependências:
   ```sh
   npm install

3. Inicie o servidor:
   ```sh
   npm start
   
4. O backend rodará em:
   ```arduino
   http://localhost:3030
---
<h2>🖥️ Frontend (React)</h2>

1. Acesse a pasta do frontend:
   ```sh
   cd livro-react

2. Instale as dependências:
   ```sh
   npm install

3. Execute o projeto:
   ```sh
   npm start
   
4. O frontend abrirá em:
   ```arduino
   http://localhost:3000
---
<h2>🌐 Endpoints da API</h2>

| Método   | Rota          | Descrição             |
| -------- | ------------- | --------------------- |
| `GET`    | `/livros`     | Lista todos os livros |
| `POST`   | `/livros`     | Cadastra um livro     |
| `PUT`    | `/livros/:id` | Edita um livro        |
| `DELETE` | `/livros/:id` | Remove um livro       |

---
<h2>🖼️ Prints da Aplicação</h2>

📌 Lista de livros:

<img width="1353" height="620" src="https://github.com/user-attachments/assets/3a89df99-7ef9-4119-8f3f-f3d97ffde3ca" />

📌 Modal de cadastro:

<img width="681" height="485" src="https://github.com/user-attachments/assets/4e488269-1e50-41f5-9082-9905bec6c48d" />

📌 Modal de edição:

<img width="680" height="485" src="https://github.com/user-attachments/assets/d4d02091-c5f2-4315-a224-a9b0b67c4866" />

---
<h2>📌 Observações</h2>

O modal fecha ao clicar no fundo ou pressionar ESC

O backend usa CORS para permitir acesso do React

A exclusão usa window.confirm() como confirmação do navegador

---
<h2 align="center">👨‍🏫 Créditos Acadêmicos</h2>

<p align="center">
  <strong>Desenvolvido por:</strong> Gabriel Cosso Cavalcanti<br>
  <strong>Disciplina:</strong> <em>Integração de Páginas Web com Banco de Dados</em>
</p>
 

