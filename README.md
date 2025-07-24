# 📚 Desafio 05 - API Biblioteca (RID-135603)

Este é o projeto desenvolvido para o Desafio 05 da DNC, que consiste em criar uma **API REST em Node.js com Express** e integrá-la com um **front-end em React**. A aplicação simula o sistema de uma biblioteca online.
dispoivel no site: https://classy-cuchufli-585474.netlify.app/
---

## 🚀 Tecnologias Utilizadas

### Back-end:
- Node.js
- Express
- CORS
- Nodemon

### Front-end:
- React
- React Router DOM
- Axios
- Vite

---

## ⚙️ Funcionalidades da API

| Método | Rota              | Descrição                       |
|--------|-------------------|---------------------------------|
| GET    | /livros           | Lista todos os livros           |
| GET    | /livros/:id       | Retorna um livro específico     |
| POST   | /livros           | Cadastra um novo livro          |
| PUT    | /livros/:id       | Atualiza um livro existente     |
| DELETE | /livros/:id       | Deleta um livro pelo ID         |

---

## 🧪 Como executar a API localmente

```bash
# 1. Clone o projeto
git clone https://github.com/Cadugonca/RID-135603_Desafio05.git

# 2. Vá para a pasta
cd RID-135603_Desafio05

# 3. Instale as dependências
npm install

# 4. Inicie o servidor em modo desenvolvimento
npm run dev
