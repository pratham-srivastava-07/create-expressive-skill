# Example: Add a CRUD resource

**User:** "Add a `product` resource with full CRUD."

The `user` slice already demonstrates the full pattern. **Read the user files first, then
mirror them** for `product`. Touch exactly these 7 places:

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
Add the `Product` model, then run:

```bash
npm run prisma:migrate
```

## Rule of thumb

Do not invent a new structure. If it exists for `user`, it must exist the same way for
`product`. Missing an `index.ts` registration is the most common bug — check all four
barrels (validators, services, controllers, routes).
