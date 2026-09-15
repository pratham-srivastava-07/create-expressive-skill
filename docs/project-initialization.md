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
| `--style <class\|functional>` | Code idiom for controllers/services/repositories. `class` is the default; omit the flag to be prompted interactively. |
| `--force` | Scaffold into a non-empty directory instead of aborting |

### Code styles (since generator v1.1.0)

Both styles produce the **same layered architecture** and use **Prisma** — only the idiom
inside each layer differs:

| Style | Controllers / services / repositories are… |
|---|---|
| `class` (default) | classes |
| `functional` | modules of exported functions |

The generator writes a `CLAUDE.md` into the generated project recording the chosen style. After
scaffolding, the skill copies that file byte-for-byte to `AGENTS.md`, giving tools that follow
either convention the same project instructions.

## Flow the skill follows

1. **Ask for the root folder name.** The only strictly required input.
2. **Ask for the code style** (`class` default, or `functional`) — or omit `--style` and let
   the generator prompt.
3. **Run the generator** with the folder name and `--style`.
4. **Create `AGENTS.md`** by copying the generated `CLAUDE.md` exactly. If an existing
   `AGENTS.md` differs, preserve it and ask before overwriting.
5. **Report post-scaffold steps** — don't run them silently, because they depend on
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
├── AGENTS.md            (identical copy of generated CLAUDE.md, added by the skill)
├── CLAUDE.md
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
