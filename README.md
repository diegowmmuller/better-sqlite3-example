# better-sqlite3-example

Projeto desenvolvido para estudar a utilização do SQLite com Node.js, TypeScript e `better-sqlite3`.

O projeto explora operações de persistência, migrations, tipagem e relacionamentos entre tabelas, incluindo relacionamentos muitos-para-muitos.

## Tecnologias

- Node.js
- TypeScript
- SQLite
- better-sqlite3

## Estrutura

```text
src/
├── repository/
│   ├── course.repository.ts
│   ├── post.repository.ts
│   ├── user_course.repository.ts
│   └── user.repository.ts
│
├── types/
│   ├── Courses.ts
│   ├── Post.ts
│   └── User.ts
│
├── database.ts
├── migrations.ts
└── index.ts
```

| SQL                      | Método              | Retorno               |
| ------------------------ | ------------------- | --------------------- |
| `SELECT` — uma linha     | `.get()`            | objeto ou `undefined` |
| `SELECT` — várias linhas | `.all()`            | array                 |
| `INSERT`                 | `.run()`            | `RunResult`           |
| `UPDATE`                 | `.run()`            | `RunResult`           |
| `DELETE`                 | `.run()`            | `RunResult`           |
| `INSERT ... RETURNING`   | `.get()` / `.all()` | linha(s) retornada(s) |
| `SELECT EXISTS(...)`     | `.get()`            | objeto com resultado  |
| `CREATE TABLE`           | `.run()`            | `RunResult`           |
| `CREATE INDEX`           | `.run()`            | `RunResult`           |
| `DROP ...`               | `.run()`            | `RunResult`           |

## Objetivo

Este projeto tem finalidade exclusivamente didática e foi desenvolvido
para compreender o funcionamento do `better-sqlite3` e implementar as
operações da camada de **Repository**.

O foco está no acesso e na persistência dos dados, utilizando SQL e os
recursos disponibilizados pelo `better-sqlite3`.

Não fazem parte do escopo deste projeto:

- Regras de negócio
- Camada Service
- Controllers
- Rotas HTTP
- Autenticação ou autorização
- Validações relacionadas ao domínio

O projeto busca compreender principalmente:

- Como executar operações SQL através do `better-sqlite3`
- Como estruturar repositories
- Como trabalhar com `Prepared Statements`
- Como realizar operações CRUD
- Como utilizar `get()`, `all()`, `run()` e `iterate()`
- Como trabalhar com migrations
- Como utilizar Primary Keys e Foreign Keys
- Como implementar relacionamentos entre tabelas
- Como trabalhar com relacionamentos muitos-para-muitos
- Como utilizar transações e recursos do SQLite
