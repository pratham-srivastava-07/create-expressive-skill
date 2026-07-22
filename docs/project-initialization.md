# Project Initialization

## Command

```bash
npx create-expressive <folder>
# equivalent:
npm init expressive <folder>
```

### Flags

| Flag | Effect |
|---|---|
| `--force` | Scaffold into a non-empty directory instead of aborting |

## Flow the skill follows

1. **Ask for the root folder name.** This is the only input required to scaffold.
2. **Run the generator** with that folder name.
3. **Report post-scaffold steps** — don't run them silently, because they depend on
   secrets the user must provide.

## Post-scaffold steps

```bash
cd <folder>
# 1. Configure environment
#    Set DATABASE_URL and JWT_SECRET in .env
npm install
npm run prisma:migrate
npm run dev
```

The server starts on the port defined in `.env` / `src/config/env.ts`.

## What gets generated

```
<folder>/
├── .env.example
├── .gitignore
├── package.json
├── tsconfig.json
├── prisma/
│   └── schema.prisma
└── src/
    ├── index.ts
    ├── config/env.ts
    ├── controllers/   (index.ts, user.ts)
    ├── services/      (index.ts, user.ts)
    ├── repositories/  (user.repository.ts)
    ├── routes/        (index.ts, user.ts)
    ├── validators/    (index.ts, user.ts)
    ├── interfaces/    (error.ts, user.ts)
    ├── middlewares/   (auth.ts)
    ├── utils/         (AppError.ts, error.ts)
    └── helpers/       (prisma.ts)
```

The `user` slice is a complete, working vertical slice — treat it as the template for
every other entity.
