# Changelog

All notable changes to this skill are documented here. Format based on
[Keep a Changelog](https://keepachangelog.com/); versioning follows
[SemVer](https://semver.org/).

## [Unreleased]

### Added
- Initial skill: `SKILL.md` wrapping the `create-expressive` generator.
- Hard rule: always scaffold via `npx create-expressive`, never hand-write boilerplate.
- Initialization flow (ask for root folder → run generator → report post-scaffold steps).
- The 7-touchpoint pattern for adding an entity (mirror the `user` slice).
- `docs/`: architecture, project-initialization, supported-stack, faq.
- `examples/`: initialize-project, add-crud, add-auth, add-websocket, project-evolution.

### Planned
- Stack detection + per-stack convention docs for Express+Mongo, Fastify+MySQL/Postgres.
- A generated `CLAUDE.md` dropped into scaffolded projects (lives in the generator repo).
