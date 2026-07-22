# Example: Add a CRUD resource

**User:** "Add a `product` resource with full CRUD."

First confirm a create-expressive project exists here (`src/` + `prisma/schema.prisma`). If
not, scaffold it first, then add the entity.

Read the project's **`CLAUDE.md`** to recall the convention — one file, not the whole user
slice. The `user` slice is the reference if a detail is unclear. Then touch exactly these 7
places for `product`:

## 1. Interface — `src/interfaces/product.ts`
Define the entity type and DTOs (create/update input shapes), mirroring `interfaces/user.ts`.

## 2. Validator — `src/validators/product.ts`
Zod schemas for create/update, mirroring `validators/user.ts`. Then register it in
`src/validators/index.ts`.

## 3. Repository — `src/repositories/product.repository.ts`
Prisma data access only (`findMany`, `findById`, `create`, `update`, `delete`), mirroring
`repositories/user.repository.ts`. Import the client from `helpers/prisma.ts`.

## 4. Service — `src/services/product.ts`
Business logic; calls the repository, throws `AppError` for expected failures. Mirror
`services/user.ts`. Register in `src/services/index.ts`.

## 5. Controller — `src/controllers/product.ts`
Parse validated input, call the service, shape the response. Mirror `controllers/user.ts`.
Register in `src/controllers/index.ts`.

## 6. Route — `src/routes/product.ts`
Wire paths to controller functions; apply `auth` middleware where needed. Mirror
`routes/user.ts`. Mount it in `src/routes/index.ts`.

## 7. Prisma model — `prisma/schema.prisma`
Add the `Product` model. Then tell the user to run:

```bash
npm run prisma:migrate
```

Don't auto-run `npm install` + `prisma generate` to verify unless the user asks — the
migrate command above covers it in one step.

## Rule of thumb

Do not invent a new structure. If it exists for `user`, it must exist the same way for
`product`. Missing an `index.ts` registration is the most common bug — check all four
barrels (validators, services, controllers, routes).
