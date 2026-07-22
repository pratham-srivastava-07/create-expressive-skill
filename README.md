<!-- Add assets/banner.png here once available -->

# create-expressive skill

A Claude skill that pairs with the [`create-expressive`](https://www.npmjs.com/package/create-expressive)
npm generator ([source](https://github.com/pratham-srivastava-07/backend-sdk)).

Load this skill and Claude will:

1. **Bootstrap** new Express 5 + Prisma + Zod + TypeScript backends by running the
   generator — not by hand-writing boilerplate (saves output tokens).
2. **Extend** those projects by following the exact layered structure the generator
   produces — so you never re-explain "put this in services, that in repositories"
   (saves input tokens, every session).

## Why it saves tokens

| Phase | Without the skill | With the skill |
|---|---|---|
| Creating a project | Claude hand-types `package.json`, `tsconfig`, controllers… (thousands of output tokens) | Runs `npx create-expressive` — files land on disk for near-zero tokens |
| Adding features later | You re-explain the architecture each session | Claude already knows the fixed layout and mirrors the `user` slice |

## Installation

**Option A — Claude Code plugin (recommended)**

From within Claude Code, add the marketplace, then install:

```
/plugin marketplace add pratham-srivastava-07/backend-sdk-skill
/plugin install create-expressive@create-expressive
```

This repo is a single-skill plugin (its `SKILL.md` lives at the root), so it installs and
auto-loads across all your projects.

**Option B — manual (per-machine)**

Copy this folder into your Claude Code skills directory:

```
~/.claude/skills/create-expressive/
```

(Ensure the entry file is named `SKILL.md`.) The skill then auto-loads when you ask to
scaffold or extend an Express backend.

## Usage

- "Set me up a new Express backend called `orders-api`."
- "Add a `product` resource with full CRUD."
- "Protect the order routes with auth."

See `examples/` for worked walkthroughs and `docs/` for architecture and stack details.

## The generated stack

TypeScript · Express 5 · Prisma · Zod · JWT + bcrypt · centralized error handling.
Layered: **Routes → Controllers → Services → Repositories → Prisma**.

More stacks (Express + Mongo, Fastify + MySQL/Postgres) are planned — see
`docs/supported-stack.md`.

## License

MIT — see `LICENSE`.
