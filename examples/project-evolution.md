# Example: Evolving a project over time

This shows how a create-expressive project grows while staying consistent — the scenario
the skill is built for.

## Session 1 — scaffold

**User:** "New Express backend, call it `shop-api`."

```bash
npx create-expressive shop-api
```

Post-scaffold: configure `.env`, `npm install`, `npm run prisma:migrate`, `npm run dev`.
Ships with a working `user` slice.

## Session 2 — add a resource

**User:** "Add products."

Claude does NOT ask "where do controllers go?" — the skill already knows. It mirrors the
`user` slice across the 7 touchpoints (see `add-crud.md`) and runs `prisma:migrate`.

## Session 3 — relationships

**User:** "Orders belong to a user and have many products."

- Add an `Order` model in `schema.prisma` with relations to `User` and `Product`.
- Add the `order` slice (7 touchpoints).
- Relationship queries go in the **repository**; order-total / rules go in the **service**.

## Session 4 — protect endpoints

**User:** "Only logged-in users can create orders."

Apply the existing `auth` middleware to the order routes (see `add-auth.md`). No new auth
system is built.

## Why it stays clean

Every addition follows the same fixed pattern. The user never re-explains structure, and
Claude never invents a new one — which is exactly where the ongoing token savings come
from.
