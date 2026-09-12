import Link from "next/link";
import StroopDemo from "@/components/stroop-demo";
import { articles, articlePath } from "@/lib/content";
import Image from "next/image";

const featured = [
  {
    number: "01",
    title: "The architecture of memory",
    copy: "How remembering is rebuilt—not replayed—and why that matters in daily life.",
    href: "/articles/reconstructive-memory",
  },
  {
    number: "02",
    title: "Why first numbers linger",
    copy: "Anchors can quietly shape estimates, negotiations, and everyday judgments.",
    href: "/effects/anchoring",
  },
  {
    number: "03",
    title: "The social mind",
    copy: "A clear-eyed introduction to influence, belonging, and behavior in groups.",
    href: "/topics/social-psychology",
  },
];

export default function Home() {
  return (
    <main id="main-content" className="home-main">
      <section className="hero" aria-labelledby="hero-title">
        <div className="eyebrow">
          <span /> An evidence-led guide to psychology
        </div>
        <h1 id="hero-title">
          Understand the mind
          <br />
          behind <em>everyday life.</em>
        </h1>
        <p className="hero-copy">
          Explore the ideas, psychological effects, and research that help
          explain how we think, feel, remember, and connect.
        </p>
        <form className="hero-search" action="/explore">
          <label className="sr-only" htmlFor="q">
            Search Mind Atlas
          </label>
          <span aria-hidden="true">⌕</span>
          <input
            id="q"
            name="q"
            placeholder="Search concepts, effects, or questions…"
          />
          <kbd>⌘ K</kbd>
        </form>
        <div className="hero-actions">
          <Link className="primary-button" href="/explore">
            Start exploring <span>→</span>
          </Link>
          <Link className="text-link" href="/learning-paths">
            Browse learning paths
          </Link>
        </div>

  
        <div
          className="orbit-figure"
          aria-label="Conceptual illustration of ideas connecting across the mind"
        >
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit orbit-three" />
          <span className="node n1">memory</span>
          <span className="node n2">choice</span>
          <span className="node n3">emotion</span>
          <span className="node n4">attention</span>
          <div className="core">
            MIND
            <br />
            <small>ATLAS</small>
          </div>
        </div>
      </section>
      <section className="featured-section" aria-labelledby="featured-title">
        <div className="section-heading">
          <div>
            <p className="kicker">Selected reading</p>
            <h2 id="featured-title">Begin with a question.</h2>
          </div>
          <Link href="/explore">
            View the full library <span>→</span>
          </Link>
        </div>
        <div className="featured-grid">
          {featured.map((item) => (
            <Link className="feature-card" href={item.href} key={item.number}>
              <span className="card-number">{item.number}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                <span className="read-link">Read the article →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="topic-section">
        <div className="section-heading">
          <div>
            <p className="kicker">Ways into the library</p>
            <h2>Follow your curiosity.</h2>
          </div>
        </div>
        <div className="topic-grid">
          {[
            [
              "Thinking & decisions",
              "The shortcuts, reference points, and tradeoffs behind everyday choice.",
              "thinking-and-decisions",
              "12 articles",
            ],
            [
              "Memory & learning",
              "How knowledge is encoded, reconstructed, practiced, and retrieved.",
              "memory-and-learning",
              "9 articles",
            ],
            [
              "Social psychology",
              "Why other people change what we notice, believe, and do.",
              "social-psychology",
              "10 articles",
            ],
            [
              "Emotion & motivation",
              "The processes that energize, direct, and regulate behavior.",
              "emotion-and-motivation",
              "8 articles",
            ],
          ].map(([title, copy, slug, count]) => (
            <Link className="topic-card" href={`/topics/${slug}`} key={slug}>
              <span>{count}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <b>Explore collection →</b>
            </Link>
          ))}
        </div>
      </section>
      <section className="fundamentals">
        <div>
          <p className="kicker">Guided learning path · 42 min</p>
          <h2>Start with the fundamentals.</h2>
          <p>
            Five connected readings build a map of psychology—from attention and
            memory to behavior, emotion, and evidence.
          </p>
          <Link className="primary-button" href="/learning-paths/fundamentals">
            Begin the path <span>→</span>
          </Link>
        </div>
        <ol>
          {[
            "Working memory",
            "Classical conditioning",
            "Emotion regulation",
            "Self-concept",
            "Correlation and causation",
          ].map((x, i) => (
            <li key={x}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              {x}
            </li>
          ))}
        </ol>
      </section>
      <section className="demo-section">
        <StroopDemo />
      </section>
      <section className="evidence-section">
        <div>
          <p className="kicker">Our evidence standard</p>
          <h2>Curious, careful, and clear about uncertainty.</h2>
        </div>
        <div>
          <p>
            Mind Atlas distinguishes memorable demonstrations from durable
            conclusions. Claims are linked to sources, classic findings sit
            beside newer evidence, and limitations stay visible.
          </p>
          <Link href="/about">How we work →</Link>
        </div>
      </section>
      <section className="studio-section" aria-labelledby="studio-title">
        <div className="studio-copy">
          <p className="kicker">The studio behind Mind Atlas</p>
          <h2 id="studio-title">Research shaped into a clearer story.</h2>
          <p>
            Mind Atlas is designed and built by Launch Narrative Software—turning
            complex ideas into thoughtful, approachable digital experiences.
          </p>
          <Link href="/about">About this project →</Link>
        </div>
        <div className="studio-logo-frame">
          <Image
            src="/softwareLogo-display.png"
            alt="Launch Narrative Software"
            width={1400}
            height={792}
            sizes="(max-width: 760px) 90vw, 520px"
          />
        </div>
      </section>
      <section className="updated-section">
        <div className="section-heading">
          <div>
            <p className="kicker">Recently reviewed</p>
            <h2>Fresh from the atlas.</h2>
          </div>
        </div>
        <div className="updated-list">
          {articles
            .slice(-3)
            .reverse()
            .map((a) => (
              <Link href={articlePath(a)} key={a.slug}>
                <span>{a.title}</span>
                <small>{a.category} · Updated Sep 12, 2026</small>
                <b>→</b>
              </Link>
            ))}
        </div>
      </section>
    </main>
  );
}
