# Example: Initialize a project

**User:** "Set me up a new Express backend called `orders-api`."

**Correct behavior:**

1. Confirm the folder name (`orders-api`) — nothing else needed to scaffold.
2. Run the generator (do NOT hand-write files):

```bash
npx create-expressive orders-api
```

3. Report the post-scaffold steps:

```bash
cd orders-api
# Set DATABASE_URL and JWT_SECRET in .env
npm install
npm run prisma:migrate
npm run dev
```

**Incorrect behavior (what this skill prevents):**

- Typing out `package.json`, `tsconfig.json`, `src/index.ts`, controllers, etc. by hand.
- This burns thousands of output tokens reproducing exactly what the generator writes.

## Scaffolding into a non-empty folder

```bash
npx create-expressive orders-api --force
```
