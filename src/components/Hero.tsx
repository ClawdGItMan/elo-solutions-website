export function Hero() {
  return (
    <section className="hero wrap">
      <div className="hero__grid">
        <div className="hero__lead">
          <p className="eyebrow reveal">Boutique AI &amp; software studio</p>
          <h1 className="hero__headline reveal">
            We build the software you <span className="em">can’t buy.</span>
          </h1>
          <p className="hero__sub lede reveal">
            Elo is a studio that designs and ships production-grade apps for
            founders — AI features, custom SaaS, and 0→1 products. Built fast.
            Built to keep.
          </p>
          <div className="hero__ctas reveal">
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

        <aside className="hero__aside reveal">
          <span className="section-label">Selected work</span>
          <ul className="workindex">
            <li>
              <a href="#case-hearth">
                <span className="wi-name">Hearth</span>
                <span className="wi-meta">family OS · 2025</span>
              </a>
            </li>
            <li>
              <a href="#case-personal-os">
                <span className="wi-name">Personal OS</span>
                <span className="wi-meta">knowledge · 2025</span>
              </a>
            </li>
            <li>
              <a href="#case-crypto-leads">
                <span className="wi-name">Crypto Leads</span>
                <span className="wi-meta">on-chain · 2024</span>
              </a>
            </li>
          </ul>
        </aside>
      </div>

      <div className="hero__meta reveal">
        <span className="avail">
          <span className="dot" />
          Taking 2 new projects this quarter
        </span>
        <span className="sep">·</span>
        <span>Solo-founder-led, studio-grade output</span>
        <span className="sep">·</span>
        <span>Design → ship in weeks, not quarters</span>
      </div>
    </section>
  );
}
