"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image"

const nav = [
  [
    "Discover",
    [
      ["Home", "/", "⌂"],
      ["Explore psychology", "/explore", "◌"],
      ["Psychological effects", "/effects", "◎"],
      ["Learning paths", "/learning-paths", "↗"],
    ],
  ],
  [
    "Your library",
    [
      ["Saved articles", "/saved", "♡"],
      ["Glossary", "/glossary", "Å"],
      ["References", "/references", "≡"],
    ],
  ],
  ["Mind Atlas", [["About & standards", "/about", "i"]]],
] as const;

type Theme = "light" | "dark" | "system";

function applyTheme(value: Theme) {
  const dark =
    value === "dark" ||
    (value === "system" && matchMedia("(prefers-color-scheme: dark)").matches);
  document.documentElement.dataset.theme = dark ? "dark" : "light";
}

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("system");
  useEffect(() => {
    const saved =
      (localStorage.getItem("mind-atlas-theme") as Theme) || "system";
    const id = setTimeout(() => setTheme(saved), 0);
    applyTheme(saved);
    return () => clearTimeout(id);
  }, []);
  useEffect(() => {
    const id = setTimeout(() => setOpen(false), 0);
    return () => clearTimeout(id);
  }, [path]);
  const cycle = () => {
    const next: Theme =
      theme === "system" ? "light" : theme === "light" ? "dark" : "system";
    setTheme(next);
    localStorage.setItem("mind-atlas-theme", next);
    applyTheme(next);
  };
  const sidebar = (
    <aside
      className={`sidebar ${open ? "is-open" : ""}`}
      aria-label="Site navigation"
    >
      <div className="sidebar-top">
        <Link className="brand" href="/" aria-label="Mind Atlas home">
          <span className="brand-mark">M</span>

          <div>

            <span>
              Mind Atlas<small>Psychology, mapped</small>
            </span>

         

          </div>

          
          
        </Link>

      
        <button
          className="drawer-close"
          onClick={() => setOpen(false)}
          aria-label="Close navigation"
        >
          ×
        </button>
      </div>
      <nav aria-label="Primary navigation">
        {nav.map(([label, links]) => (
          <div key={label}>
            <p className="nav-label">{label}</p>
            {links.map(([name, href, icon]) => (
              <Link
                className={
                  (href === "/" ? path === href : path.startsWith(href))
                    ? "active"
                    : ""
                }
                href={href}
                key={href}
              >
                <span>{icon}</span>
                {name}
              </Link>
            ))}
          </div>
        ))}
      </nav>
      <div className="sidebar-footer">
        <Link
          className="software-credit"
          href="/about"
          aria-label="A Launch Narrative Software project"
        >
          <span>Created by</span>
          <Image
            src="/softwareLogo-display.png"
            alt="Launch Narrative Software"
            width={1400}
            height={792}
            sizes="190px"
          />
        </Link>
        <button
          onClick={cycle}
          aria-label={`Theme: ${theme}. Activate to change`}
        >
          <span aria-hidden="true">◐</span>
          <span>{theme[0].toUpperCase() + theme.slice(1)} theme</span>
          <small>↻</small>
        </button>
        <p>Educational, not clinical advice.</p>
      </div>
    </aside>
  );
  return (
    <div className="site-shell">
      {sidebar}
      {open && (
        <button
          className="drawer-scrim"
          onClick={() => setOpen(false)}
          aria-label="Close navigation"
        />
      )}
      <div className="content-column">
        <header className="mobile-header">
          <Link className="brand" href="/">
            <span className="brand-mark">M</span>Mind Atlas
          </Link>
          <button onClick={() => setOpen(true)} aria-label="Open navigation">
            ☰
          </button>
        </header>
        {children}
      </div>
    </div>
  );
}
