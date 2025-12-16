# Blog Pessoal API

API REST para um blog pessoal desenvolvida com **NestJS**, **TypeORM** e **MySQL**.

## 📋 Funcionalidades

- **Postagens** - CRUD completo de postagens
- **Temas** - Categorização de postagens por tema
- **Usuários** - Gerenciamento de usuários com autenticação
- **Relacionamentos** - Postagens vinculadas a temas e usuários
- **Autenticação JWT** - Login seguro com tokens JWT
- **Documentação Swagger** - Interface interativa para testar a API
- **Testes E2E** - Testes de integração automatizados
- **CORS** - Configurado para permitir requisições cross-origin
- **Validação Global** - Validação automática de DTOs com class-validator

## 🔐 Autenticação

O projeto implementa autenticação com **JWT (JSON Web Token)** usando **Passport.js**.

### Fluxo de Autenticação

```
1. Cliente envia POST /usuarios/logar com {usuario, senha}
2. LocalAuthGuard valida credenciais via LocalStrategy
3. AuthService verifica usuário e compara senha (bcrypt)
4. Se válido, gera token JWT com expiração de 1 hora
5. Cliente usa token no header: Authorization: Bearer <token>
6. JwtAuthGuard protege rotas que exigem autenticação
```

### Componentes

| Componente       | Descrição                        |
| ---------------- | -------------------------------- |
| `LocalStrategy`  | Valida usuário/senha no login    |
| `JwtStrategy`    | Valida token JWT nas requisições |
| `LocalAuthGuard` | Guard para rota de login         |
| `JwtAuthGuard`   | Guard para rotas protegidas      |
| `Bcrypt`         | Hash e comparação de senhas      |

### Exemplo de Login

```bash
# Request
curl -X POST http://localhost:4000/usuarios/logar \
  -H "Content-Type: application/json" \
  -d '{"usuario": "email@email.com", "senha": "senha123"}'

# Response
{
  "id": 1,
  "nome": "Nome do Usuário",
  "usuario": "email@email.com",
  "senha": "",
  "foto": "https://...",
  "token": "Bearer eyJhbGciOiJIUzI1NiIs..."
}
```

## 📚 Documentação Swagger

O projeto inclui documentação interativa com **Swagger/OpenAPI**.

### Acessando a documentação

Após iniciar a aplicação, acesse:

```
http://localhost:4000/swagger
```

### Funcionalidades do Swagger

- **Explorar endpoints** - Visualize todos os endpoints disponíveis
- **Testar requisições** - Execute chamadas diretamente pela interface
- **Autenticação** - Suporte a Bearer Token para endpoints protegidos
- **Schemas** - Visualize os modelos de dados (DTOs e Entidades)

## 🧪 Testes

O projeto possui testes End-to-End (E2E) com **Jest** e **Supertest**.

### Executando os testes

```bash
# Testes unitários
npm run test

# Testes E2E
npm run test:e2e

# Testes com cobertura
npm run test:cov

# Testes em modo watch
npm run test:watch
```

### Configuração dos Testes E2E

Os testes E2E utilizam **SQLite em memória** para isolar o ambiente de teste:

```typescript
TypeOrmModule.forRoot({
  type: 'sqlite',
  database: ':memory:',
  synchronize: true,
  dropSchema: true,
})
```

Isso garante que cada execução de teste comece com um banco limpo.

## 🏗️ Arquitetura

```
src/
├── auth/           # Módulo de autenticação
│   ├── bcrypt/     # Utilitários de hash
│   ├── constants/  # Configurações JWT
│   ├── controllers/
│   ├── guard/      # Guards de autenticação
│   ├── services/
│   └── strategy/   # Estratégias Passport
├── postagem/       # Módulo de postagens
├── tema/           # Módulo de temas
├── usuario/        # Módulo de usuários
├── app.module.ts   # Módulo principal
└── main.ts         # Ponto de entrada
test/
├── jest-e2e.json   # Configuração Jest E2E
└── usuario.e2e-spec.ts  # Testes E2E de usuário
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

### Instalação Manual das Dependências

Dependências do projeto:

```bash
# Dependências principais do NestJS
npm install @nestjs/common @nestjs/core @nestjs/platform-express

# Banco de dados (TypeORM + MySQL)
npm install @nestjs/typeorm typeorm mysql2

# Autenticação (JWT + Passport)
npm install @nestjs/passport @nestjs/jwt passport passport-jwt passport-local bcrypt

# Documentação (Swagger)
npm install @nestjs/swagger swagger-ui-express

# Validação
npm install class-validator class-transformer

# SQLite para testes E2E
npm install sqlite3
```

### Dependências de Desenvolvimento

```bash
# Tipos TypeScript
npm install -D @types/bcrypt @types/passport-jwt @types/passport-local @types/supertest

# Testes
npm install -D @nestjs/testing jest ts-jest supertest
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

| Pacote              | Versão  | Descrição                   |
| ------------------- | ------- | --------------------------- |
| @nestjs/core        | ^11.0.1 | Framework NestJS            |
| @nestjs/typeorm     | ^11.0.0 | Integração TypeORM          |
| @nestjs/passport    | ^11.0.5 | Integração Passport         |
| @nestjs/jwt         | ^11.0.2 | Suporte JWT                 |
| @nestjs/swagger     | ^11.2.3 | Documentação OpenAPI        |
| swagger-ui-express  | ^5.0.1  | Interface Swagger           |
| passport            | ^0.7.0  | Middleware de autenticação  |
| passport-jwt        | ^4.0.1  | Estratégia JWT              |
| passport-local      | ^1.0.0  | Estratégia Local            |
| typeorm             | ^0.3.27 | ORM para banco de dados     |
| mysql2              | ^3.15.3 | Driver MySQL                |
| sqlite3             | ^5.1.7  | Driver SQLite (testes E2E)  |
| bcrypt              | ^6.0.0  | Hash de senhas              |
| class-validator     | ^0.14.3 | Validação de DTOs           |
| class-transformer   | ^0.5.1  | Transformação de objetos    |

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

- `GET /usuarios/all` - Listar todos (requer autenticação)
- `GET /usuarios/:id` - Buscar por ID
- `POST /usuarios/cadastrar` - Cadastrar novo usuário
- `PUT /usuarios/atualizar` - Atualizar (requer autenticação)

### Autenticação

- `POST /usuarios/logar` - Login (retorna token JWT)

## 📄 Licença

Este projeto está sob a licença UNLICENSED.
