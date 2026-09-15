"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const command = "npx skills add pratham-srivastava-07/create-expressive-skill";

export function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="nav-wrap"><nav className="nav shell" aria-label="Primary navigation"><a className="brand" href="#top" aria-label="create-expressive home"><Image className="brand-symbol" src="/icon.svg" alt="" width={38} height={38} unoptimized /><span>create-expressive</span></a><button className="menu-button" type="button" aria-expanded={open} aria-controls="nav-links" onClick={() => setOpen((value) => !value)}>Menu</button><div className={`nav-links${open ? " open" : ""}`} id="nav-links" onClick={() => setOpen(false)}><a href="#benchmark">Benchmark</a><a href="#architecture">Architecture</a><a href="#install">Install</a><a href="https://github.com/pratham-srivastava-07/create-expressive-skill">GitHub</a></div></nav></header>;
}

export function CopyCommand({ large = false }: { large?: boolean }) {
  const [copied, setCopied] = useState(false);
  async function copy() { try { await navigator.clipboard.writeText(command); setCopied(true); window.setTimeout(() => setCopied(false), 1600); } catch { setCopied(false); } }
  return <button className={`command-copy${large ? " command-large" : ""}`} type="button" onClick={copy}><code>{command}</code><span aria-live="polite">{copied ? "Copied" : "Copy"}</span></button>;
}

const layers = [
  ["Routes", "01", "Maps HTTP methods and paths. No business logic."],
  ["Controllers", "02", "Parses validated input, calls services, and shapes responses."],
  ["Services", "03", "Owns orchestration, business rules, hashing, and tokens."],
  ["Repositories", "04", "Contains Prisma data access and nothing else."],
  ["Prisma", "05", "Defines the persistent data model and relationships."],
] as const;

export function ArchitectureStack() {
  const [active, setActive] = useState(0);
  return <div className="layer-zone reveal"><div className="layer-stack" role="list" aria-label="Application layers">{layers.map(([name, number], index) => <button className={`layer${active === index ? " active" : ""}`} type="button" role="listitem" key={name} onClick={() => setActive(index)}><span>{name}</span><small>{number}</small></button>)}</div><p className="layer-detail" aria-live="polite">{layers[active][2]}</p></div>;
}

const samples = { class: `export class ProductService {\n  async create(input: CreateProductInput) {\n    return productRepository.create(input)\n  }\n}`, functional: `export async function createProduct(\n  input: CreateProductInput\n) {\n  return productRepository.create(input)\n}` };

export function StyleSwitcher() {
  const [style, setStyle] = useState<keyof typeof samples>("class");
  return <div><div className="style-toggle" role="group" aria-label="Code style"><button type="button" className={style === "class" ? "active" : ""} onClick={() => setStyle("class")}>Class</button><button type="button" className={style === "functional" ? "active" : ""} onClick={() => setStyle("functional")}>Functional</button></div><div className="code-window"><div className="code-bar"><span>src/services/product.ts</span><span>{style}</span></div><pre><code>{samples[style]}</code></pre></div></div>;
}

export function RevealObserver() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { elements.forEach((element) => element.classList.add("visible")); return; }
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (!entry.isIntersecting) return; entry.target.classList.add("visible"); observer.unobserve(entry.target); }), { threshold: 0.14 });
    elements.forEach((element, index) => { element.style.transitionDelay = `${Math.min(index % 3, 2) * 55}ms`; observer.observe(element); });
    return () => observer.disconnect();
  }, []);
  return null;
}
