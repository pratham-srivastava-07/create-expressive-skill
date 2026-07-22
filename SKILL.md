---
name: create-expressive
description: Use when a user wants to bootstrap, scaffold, initialize, or start a new Express/TypeScript backend, or when adding an entity, model, CRUD, resource, route, auth, or feature to a project created by create-expressive. Triggers include "create-expressive", "new express backend", "scaffold a backend", "add a User/Product/Order resource", "add CRUD", "add an endpoint".
---

# create-expressive

## Overview

`create-expressive` is an npm generator that scaffolds a production-ready Express 5 + Prisma + Zod + TypeScript backend in a layered architecture. This skill makes Claude (a) generate projects with the CLI instead of hand-writing boilerplate, and (b) extend those projects by following the fixed layout the generator produces — so the user never re-explains structure.

## The one rule that saves tokens

**Never hand-write the scaffold. Always run the generator.**

When a user asks for a new Express backend, run the CLI. Do NOT type out `package.json`, `tsconfig.json`, `src/index.ts`, controllers, etc. by hand — that burns thousands of output tokens producing what the generator writes for free.

```bash
npx create-expressive <folder>      # or: npm init expressive <folder>
# add --force to scaffold into a non-empty directory
```

Only after scaffolding do you edit files.

**Violating the letter of this rule violates its purpose.** "I'll just write a quick server.ts" defeats the entire skill.

## Initialization flow

1. Ask the user for the **root folder name** (e.g. `my-api`). Nothing else is required up front.
2. Run `npx create-expressive <folder>`.
3. Tell the user the post-scaffold steps (do not run them silently — they need `.env` values):
   - Set `DATABASE_URL` and `JWT_SECRET` in `.env`
   - `npm install`
   - `npm run prisma:migrate`
   - `npm run dev`

See `docs/project-initialization.md` for details and flags.

## The generated architecture (the "brain")

Dependency flow is one-directional:

```
Routes → Controllers → Services → Repositories → Prisma
```

Layout every generated project has:

| Folder | Responsibility |
|---|---|
| `src/routes/` | URL → controller wiring; registered in `routes/index.ts` |
| `src/controllers/` | Parse request, call service, shape response; registered in `controllers/index.ts` |
| `src/services/` | Business logic; registered in `services/index.ts` |
| `src/repositories/` | Prisma data access only |
| `src/validators/` | Zod schemas; registered in `validators/index.ts` |
| `src/interfaces/` | TypeScript types |
| `src/middlewares/` | Cross-cutting (e.g. `auth.ts` = JWT) |
| `src/utils/` | `AppError`, centralized error handling |
| `src/config/` | `env.ts` config loader |
| `src/helpers/` | `prisma.ts` client |
| `prisma/` | `schema.prisma` |

A working **`user`** slice ships as the reference implementation (CRUD, bcrypt hashing, JWT, Zod). **Copy the user slice to build any new entity.**

## Adding an entity — the 7 touchpoints

To add `<Entity>` (e.g. `product`), replicate the user slice across exactly these files:

1. `src/interfaces/<entity>.ts` — types
2. `src/validators/<entity>.ts` — Zod schemas → register in `validators/index.ts`
3. `src/repositories/<entity>.repository.ts` — Prisma queries
4. `src/services/<entity>.ts` — business logic → register in `services/index.ts`
5. `src/controllers/<entity>.ts` — request handling → register in `controllers/index.ts`
6. `src/routes/<entity>.ts` — routes → register in `routes/index.ts`
7. `prisma/schema.prisma` — add the model, then `npm run prisma:migrate`

**Read the existing `user` files first, then mirror their patterns.** Don't invent a new structure.

See `examples/add-crud.md` and `examples/add-auth.md` for worked examples.

## Reference material (load on demand)

- `docs/architecture.md` — layer responsibilities in depth
- `docs/supported-stack.md` — current & planned stacks
- `docs/faq.md` — common questions
- `examples/` — worked walkthroughs (CRUD, auth, websocket, evolution)

## Common mistakes

| Mistake | Fix |
|---|---|
| Hand-writing the initial project | Run `npx create-expressive` |
| Inventing a folder layout | Mirror the `user` slice |
| Adding logic in controllers | Business logic goes in services |
| Prisma calls in services | Data access goes in repositories |
| Forgetting the `index.ts` barrel | Register every new slice in its layer's `index.ts` |
