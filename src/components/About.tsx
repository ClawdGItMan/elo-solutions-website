import { site } from "@/lib/site";

export function About() {
  return (
    <section className="section" id="about">
      <div className="wrap about__grid">
        <div className="about__portrait reveal">
          <div className="monogram" aria-hidden="true">
            <span>MA</span>
          </div>
          <p className="ann">
            {site.founder} · Founder, {site.name}
          </p>
        </div>
        <div className="about__body reveal">
          <span className="eyebrow eyebrow--plain section-label">04 — About</span>
          <p className="display-q" style={{ marginTop: "18px" }}>
            When you work with Elo, you’re talking to the person directing the
            build.
          </p>
          <p className="prose">
            I’m Max. I’ve spent my career in business development and ecosystem
            work in crypto — Solana Foundation, AgriDex, Wormhole — figuring
            out what people actually need and getting deals over the line.
            In 2026 I started building the software myself, directing AI
            coding agents instead of hiring a team, and shipped sixteen
            projects in seven months. Elo Solutions is that practice, offered
            to founders and small businesses.
          </p>
          <p className="prose">
            No account managers. No hand-offs. No decks that outlive the code.
            One person who scopes, builds and ships — and treats your deadline
            like his own. If you can see the thing clearly and just need it
            built, that’s the whole job.
          </p>
          <div className="about__sign">
            <div>
              <div className="sig">{site.founder}</div>
              <div className="role">{site.founderRole}</div>
            </div>
          </div>
          <a className="btn btn--text about__link" href={site.portfolioUrl}>
            Research, resume and every project at maxallaire.com{" "}
            <span className="arrow" aria-hidden="true">
              →
            </span>
          </a>
          <div className="about__stats">
            <div className="stat">
              <div className="n">16</div>
              <div className="l">Projects built in 2026</div>
            </div>
            <div className="stat">
              <div className="n">3–6 wk</div>
              <div className="l">Typical 0→1</div>
            </div>
            <div className="stat">
              <div className="n">1:1</div>
              <div className="l">Founder to builder</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
