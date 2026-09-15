# Changelog

All notable changes to this skill are documented here. Format based on
[Keep a Changelog](https://keepachangelog.com/); versioning follows
[SemVer](https://semver.org/).

## [Unreleased]

### Added
- Initialization now creates `AGENTS.md` as an exact copy of the generator's `CLAUDE.md`, with
  an overwrite guard for pre-existing repository instructions.
- **Code-style awareness** (tracks generator v1.1.0): initialization now asks for and passes
  `--style class|functional`; the add-entity flow reads the project's `CLAUDE.md` to detect the
  style and mirrors the matching idiom (class methods vs exported functions). Both styles share
  the same layered architecture and Prisma.
- Initial skill: `SKILL.md` wrapping the `create-expressive` generator.
- Hard rule: always scaffold via `npx create-expressive`, never hand-write boilerplate.
- Initialization flow (ask for root folder → run generator → report post-scaffold steps).
- The 7-touchpoint pattern for adding an entity (mirror the `user` slice).
- `docs/`: architecture, project-initialization, supported-stack, faq.
- `examples/`: initialize-project, add-crud, add-auth, add-websocket, project-evolution.

### Changed
- Add-entity flow now checks a project exists first (scaffold before adding when the
  directory is empty) — fixes silent scaffolding without asking for a folder.
- Add-entity reads the project's `CLAUDE.md` for the convention instead of the whole `user`
  slice — cuts input tokens.
- Compile-verification (`npm install` + `prisma generate`) is now opt-in, not automatic —
  cuts tokens and wall-clock time; user runs `npm run prisma:migrate` when ready.

### Planned
- `create-expressive add <entity>` generator subcommand to move add-entity boilerplate
  off-model (hybrid: generator writes the skeleton, Claude fills domain-specific fields).
- Stack detection + per-stack convention docs for Express+Mongo, Fastify+MySQL/Postgres.
