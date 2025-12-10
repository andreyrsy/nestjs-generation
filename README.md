# Blog Pessoal API

API REST para um blog pessoal desenvolvida com **NestJS**, **TypeORM** e **MySQL**.

## 📋 Funcionalidades

- **Postagens** - CRUD completo de postagens
- **Temas** - Categorização de postagens por tema
- **Usuários** - Gerenciamento de usuários com autenticação
- **Relacionamentos** - Postagens vinculadas a temas e usuários

## 🏗️ Arquitetura

```
src/
├── auth/           # Módulo de autenticação
├── postagem/       # Módulo de postagens
├── tema/           # Módulo de temas
├── usuario/        # Módulo de usuários
├── app.module.ts   # Módulo principal
└── main.ts         # Ponto de entrada
```

## 🔧 Pré-requisitos (Windows)

### Node.js
Baixe e instale o [Node.js LTS](https://nodejs.org/) (versão 18 ou superior).

### MySQL
1. Baixe o [MySQL Community Server](https://dev.mysql.com/downloads/mysql/)
2. Durante a instalação, defina a senha do root como `mysql`
3. Crie o banco de dados:

```sql
CREATE DATABASE db_blogpessoal;
```

## 🚀 Instalação

```bash
# Clone o repositório
git clone <url-do-repositorio>
cd nestjs-generation

# Instale as dependências
npm install
```

## ▶️ Executando

```bash
# Desenvolvimento (com hot-reload)
npm run start:dev

# Produção
npm run build
npm run start:prod
```

A API estará disponível em `http://localhost:4000`.

## 📦 Dependências do Projeto

| Pacote | Versão | Descrição |
|--------|--------|-----------|
| @nestjs/core | ^11.0.1 | Framework NestJS |
| @nestjs/typeorm | ^11.0.0 | Integração TypeORM |
| typeorm | ^0.3.27 | ORM para banco de dados |
| mysql2 | ^3.15.3 | Driver MySQL |
| bcrypt | ^6.0.0 | Hash de senhas |
| class-validator | ^0.14.3 | Validação de DTOs |
| class-transformer | ^0.5.1 | Transformação de objetos |

## 🗄️ Modelo de Dados

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│ tb_usuarios │     │tb_postagens │     │   tb_temas  │
├─────────────┤     ├─────────────┤     ├─────────────┤
│ id          │──┐  │ id          │  ┌──│ id          │
│ nome        │  │  │ titulo      │  │  │ descricao   │
│ usuario     │  └─>│ texto       │<─┘  └─────────────┘
│ senha       │     │ data        │
│ foto        │     │ tema_id     │
└─────────────┘     │ usuario_id  │
                    └─────────────┘
```

## 📝 Endpoints

### Postagens
- `GET /postagens` - Listar todas
- `GET /postagens/:id` - Buscar por ID
- `POST /postagens` - Criar
- `PUT /postagens` - Atualizar
- `DELETE /postagens/:id` - Deletar

### Temas
- `GET /temas` - Listar todos
- `GET /temas/:id` - Buscar por ID
- `POST /temas` - Criar
- `PUT /temas` - Atualizar
- `DELETE /temas/:id` - Deletar

### Usuários
- `GET /usuarios` - Listar todos
- `GET /usuarios/:id` - Buscar por ID
- `POST /usuarios/cadastrar` - Cadastrar
- `PUT /usuarios/atualizar` - Atualizar


## 📄 Licença

Este projeto está sob a licença UNLICENSED.
