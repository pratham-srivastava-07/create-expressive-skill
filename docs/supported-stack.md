# Supported Stack

## Current (v1)

| Concern | Choice |
|---|---|
| Language | TypeScript |
| Framework | Express 5 |
| ORM | Prisma |
| Validation | Zod |
| Auth | JWT (`jsonwebtoken`) + bcrypt password hashing |
| Errors | Centralized `AppError` + error middleware |

## Planned

The generator is designed to grow into a multi-stack tool. Planned combinations:

- Express + **MongoDB** (Mongoose / Prisma Mongo)
- **Fastify** + MySQL
- Fastify / Express + **PostgreSQL** with connection pooling

## How multi-stack stays lean

When more stacks land, the skill should **not** bloat SKILL.md with every stack's rules.
The intended design:

1. The generator records the chosen stack (e.g. a marker file or `package.json`
   dependencies) in each project.
2. This skill detects the stack and loads only that stack's convention doc from `docs/`
   on demand (progressive disclosure).

Until additional stacks ship, this doc describes the Express + Prisma default only.
