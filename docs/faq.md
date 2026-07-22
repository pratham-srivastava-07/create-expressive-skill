# FAQ

### Does this skill save tokens? How?

Two ways:

- **At creation:** running `npx create-expressive` writes all boilerplate files directly to
  disk, so Claude doesn't spend thousands of *output* tokens typing `package.json`,
  `tsconfig.json`, controllers, etc.
- **Over time:** the skill encodes the project's fixed structure, so the user never spends
  *input* tokens re-explaining "put this in services, that in repositories" each session.

### Why not just let Claude write the server from scratch?

That regenerates the same boilerplate every time and costs output tokens on each project.
The generator produces it deterministically and identically. Hand-writing also drifts from
the conventions this skill relies on.

### The skill has docs/ and examples/ — doesn't that cost tokens?

No, as long as `SKILL.md` stays lean. Only `SKILL.md` loads by default; `docs/` and
`examples/` are read on demand, only when a request needs them.

### How do I add a new resource?

Replicate the `user` slice across the 7 touchpoints (interface, validator, repository,
service, controller, route, prisma model). See the "Adding an entity" section of SKILL.md
and `examples/add-crud.md`.

### Where does business logic go? Where do database calls go?

Business logic → `src/services/`. Database access → `src/repositories/` (the only layer
that imports Prisma). Controllers only translate between HTTP and services.

### Can I use this on a project I didn't scaffold?

The conventions assume the create-expressive layout. If a project matches that layout, the
patterns apply. If not, this skill's structural assumptions won't hold.

### What about MongoDB / Fastify / Postgres?

Planned — see `docs/supported-stack.md`. Not available yet.
