# Example: Initialize a project

**User:** "Set me up a new Express backend called `orders-api`."

**Correct behavior:**

1. Confirm the folder name (`orders-api`) — nothing else needed to scaffold.
2. Run the generator (do NOT hand-write files):

```bash
npx create-expressive orders-api
```

3. Copy the generated project guidance exactly:

```bash
cp orders-api/CLAUDE.md orders-api/AGENTS.md
```

If `AGENTS.md` already exists and differs, preserve it and ask before overwriting.

4. Report the post-scaffold steps:

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
