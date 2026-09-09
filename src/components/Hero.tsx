import { projects } from "./projects";

export function Hero() {
  return (
    <section className="hero wrap">
      <div className="hero__backdrop" aria-hidden="true" />
      <div className="hero__grid">
        <div className="hero__lead">
          <p className="eyebrow hero__in" style={{ "--i": 0 } as React.CSSProperties}>
            A one-person software studio
          </p>
          <h1 className="hero__headline">
            <span className="hero__line hero__in" style={{ "--i": 1 } as React.CSSProperties}>
              Software you’d hire
            </span>
            <span className="hero__line hero__in" style={{ "--i": 2 } as React.CSSProperties}>
              a team for.
            </span>
            <span className="hero__line hero__in" style={{ "--i": 3 } as React.CSSProperties}>
              <span className="em">Shipped by one.</span>
            </span>
          </h1>
          <p className="hero__sub lede hero__in" style={{ "--i": 4 } as React.CSSProperties}>
            Elo Solutions is Max Allaire’s studio. I spec the product, direct
            AI coding agents to build it, test what comes back, and ship it to
            production — for founders and small businesses who need real
            software, not a roadmap.
          </p>
          <div className="hero__ctas hero__in" style={{ "--i": 5 } as React.CSSProperties}>
            <a className="btn btn--primary" href="#contact">
              Book a call{" "}
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </a>
            <a className="btn btn--ghost" href="#work">
              See the work
            </a>
          </div>
        </div>

        <aside className="hero__aside hero__in" style={{ "--i": 3 } as React.CSSProperties}>
          <span className="section-label">Selected work · 2026</span>
          <ol className="workindex">
            {projects.map((p, i) => (
              <li key={p.slug}>
                <a href={`#case-${p.slug}`}>
                  <span className="wi-num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="wi-name">{p.name}</span>
                  <span className="wi-meta">{p.kind}</span>
                </a>
              </li>
            ))}
          </ol>
        </aside>
      </div>

      <div className="hero__meta hero__in" style={{ "--i": 6 } as React.CSSProperties}>
        <span className="avail">
          <span className="dot" />
          Taking 2 new projects this quarter
        </span>
        <span className="sep">·</span>
        <span>One person, AI-directed, production-grade</span>
        <span className="sep">·</span>
        <span>Spec → ship in weeks, not quarters</span>
      </div>
    </section>
  );
}
