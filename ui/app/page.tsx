import { ArchitectureStack, CopyCommand, Navbar, RevealObserver, StyleSwitcher } from "./components";

const touchpoints = [
  ["01", "interface", "product.ts"], ["02", "validator", "product.ts"],
  ["03", "repository", "product.repository.ts"], ["04", "service", "product.ts"],
  ["05", "controller", "product.ts"], ["06", "route", "product.ts"],
  ["07", "schema", "schema.prisma"],
] as const;

export default function Home() {
  return (
    <>
      <RevealObserver />
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="ambient" aria-hidden="true"><span /><span /></div>
      <Navbar />
      <main id="main">
        <section className="hero shell" id="top">
          <div className="hero-copy">
            <p className="eyebrow">The backend skill that remembers</p>
            <h1>Your agent already knows the backend.</h1>
            <p className="hero-sub">Generate Express + Prisma once. Extend the same architecture without re-explaining it.</p>
            <div className="hero-actions"><CopyCommand /><a className="text-link" href="#benchmark">See the measured comparison</a></div>
          </div>
          <div className="hero-artifact" aria-label="Generated project guidance preview">
            <div className="orbit-line orbit-one" /><div className="orbit-line orbit-two" />
            <article className="file-card file-primary">
              <div className="file-head"><span>CLAUDE.md</span><small>source</small></div>
              <pre><code>{`Style: functional
ORM: prisma

Routes → Controllers
→ Services → Repositories
→ Prisma`}</code></pre>
            </article>
            <article className="file-card file-secondary">
              <div className="file-head"><span>AGENTS.md</span><small>synced</small></div>
              <div className="sync-lines" aria-hidden="true"><i /><i /><i /><i /></div>
            </article>
            <div className="sync-chip">byte-for-byte</div>
          </div>
        </section>

        <section className="proof shell reveal" aria-label="Key benchmark results">
          <div><strong>~19×</strong><span>fewer output tokens</span></div>
          <div><strong>~4×</strong><span>faster scaffolding</span></div>
          <p>One measured comparison. Same prompt, model, and empty target folder.</p>
        </section>

        <section className="benchmark shell" id="benchmark">
          <div className="section-heading reveal"><h2>20,600 tokens became ~1,100.</h2><p>The generator writes the repeatable structure. The agent spends its context on your domain.</p></div>
          <div className="benchmark-stage reveal">
            <div className="benchmark-labels" aria-hidden="true"><span>WITHOUT SKILL</span><span>WITH SKILL</span></div>
            <div className="token-field without" aria-label="Without the skill: 20,600 output tokens">
              <div className="token-number"><strong>20,600</strong><span>output tokens</span></div>
              <div className="token-cloud" aria-hidden="true">{Array.from({ length: 20 }, (_, i) => <i key={i} />)}</div>
            </div>
            <div className="token-arrow" aria-hidden="true">→</div>
            <div className="token-field with" aria-label="With the skill: 1,100 output tokens"><div className="token-number"><strong>1,100</strong><span>output tokens</span></div><code>npx create-expressive</code></div>
          </div>
          <div className="time-chart reveal" aria-label="Wall clock time comparison">
            <div className="time-copy"><h3>Wall-clock time</h3><p>About 9 minutes without the skill. Roughly 2 to 3 minutes with it.</p></div>
            <div className="timeline"><div className="ticks" aria-hidden="true"><span>0</span><span>3m</span><span>6m</span><span>9m</span></div><div className="time-row"><span>without</span><i className="long" /><b>~9 min</b></div><div className="time-row"><span>with</span><i className="short" /><b>~2-3 min</b></div></div>
          </div>
        </section>

        <section className="architecture" id="architecture"><div className="shell architecture-inner"><div className="architecture-copy reveal"><h2>The architecture stays put.</h2><p>Each layer has one job. Select a layer to see where your agent puts the work.</p></div><ArchitectureStack /></div></section>

        <section className="artifacts shell" aria-labelledby="artifact-title">
          <div className="section-heading reveal"><h2 id="artifact-title">Seven touchpoints. Zero guesswork.</h2><p>Every new entity follows the same vertical slice, in class or functional style.</p></div>
          <div className="rail-mask reveal"><div className="artifact-rail">{[...touchpoints, ...touchpoints].map(([number, label, file], index) => <article key={`${number}-${index}`} aria-hidden={index >= touchpoints.length || undefined}><span>{number}</span><strong>{label}</strong><code>{file}</code></article>)}</div></div>
        </section>

        <section className="styles shell reveal" aria-labelledby="styles-title"><div className="style-intro"><h2 id="styles-title">Class or functional. Same contract.</h2><p>The file paths and layer boundaries stay fixed. Only the implementation idiom changes.</p></div><StyleSwitcher /></section>

        <section className="roadmap shell" aria-labelledby="roadmap-title">
          <div className="roadmap-copy reveal">
            <p className="eyebrow">Coming soon</p>
            <h2 id="roadmap-title">New languages. Same head start.</h2>
            <p>Python and Rust are next on the roadmap, with database choices and architecture patterns tailored to each framework.</p>
          </div>
          <div className="roadmap-lines reveal" aria-label="Planned stack support">
            <article className="stack-plan">
              <span className="stack-language">Python</span>
              <div><h3>FastAPI</h3><p>PostgreSQL · SQLAlchemy</p><p>Layered services and repositories</p></div>
              <small>planned</small>
            </article>
            <article className="stack-plan">
              <span className="stack-language">Python</span>
              <div><h3>Django</h3><p>MySQL · Django ORM</p><p>Modular apps with domain services</p></div>
              <small>planned</small>
            </article>
            <article className="stack-plan">
              <span className="stack-language">Rust</span>
              <div><h3>Axum</h3><p>PostgreSQL · SQLx</p><p>Hexagonal architecture with ports and adapters</p></div>
              <small>planned</small>
            </article>
            <article className="stack-plan">
              <span className="stack-language">Rust</span>
              <div><h3>Actix Web</h3><p>SQLite · Diesel</p><p>Feature modules with explicit application state</p></div>
              <small>planned</small>
            </article>
          </div>
          <p className="roadmap-note">Also planned: Express + MongoDB and Fastify + MySQL / PostgreSQL. These stacks are not available in the generator yet.</p>
        </section>

        <section className="install shell" id="install">
          <div className="install-panel reveal"><div><h2>One command. Then build the domain.</h2><p>Add the skill to a supported agent and stop regenerating your architecture from memory.</p></div><CopyCommand large /></div>
          <div className="install-options reveal"><details open><summary>Skills CLI <span>recommended</span></summary><code>npx skills add pratham-srivastava-07/create-expressive-skill</code></details><details><summary>Claude Code plugin</summary><code>/plugin marketplace add pratham-srivastava-07/create-expressive-skill</code></details><details><summary>Manual install</summary><code>~/.claude/skills/create-expressive/</code></details></div>
        </section>
      </main>
      <footer className="footer shell"><span>create-expressive</span><p>Scaffold less. Reason about more.</p><a href="https://github.com/pratham-srivastava-07/create-expressive-skill">View source</a></footer>
    </>
  );
}
