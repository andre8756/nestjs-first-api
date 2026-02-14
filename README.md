# 📚 Books API

API REST desenvolvida com **NestJS + TypeScript + PostgreSQL** para
cadastro de livros, com autenticação segura utilizando **JWT (Access
Token + Refresh Token)** e controle de acesso por roles.

------------------------------------------------------------------------

## 🚀 Tecnologias Utilizadas

-   NestJS
-   TypeScript
-   PostgreSQL
-   TypeORM
-   JWT (JSON Web Token)
-   Passport
-   Bcrypt
-   ESLint + Prettier

------------------------------------------------------------------------

## 🔐 Segurança Implementada

-   Senhas criptografadas com bcrypt
-   Access Token com tempo de expiração curto
-   Refresh Token armazenado de forma segura (hash no banco)
-   Proteção de rotas com JwtAuthGuard
-   Controle de acesso por Roles (RBAC)
-   Variáveis de ambiente com `.env`

