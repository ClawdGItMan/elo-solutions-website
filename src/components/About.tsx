import { ImageSlot } from "./ImageSlot";
import { site } from "@/lib/site";

export function About() {
  return (
    <section className="section" id="about">
      <div className="wrap about__grid">
        <div className="about__portrait reveal">
          <ImageSlot placeholder="Drop a founder portrait" />
          <p className="ann">Founder · {site.name}</p>
        </div>
        <div className="about__body reveal">
          <span className="eyebrow eyebrow--plain section-label">04 — About</span>
          <p className="display-q" style={{ marginTop: "18px" }}>
            When you work with Elo, you’re talking to the person writing the
            code.
          </p>
          <p className="prose">
            For over a decade I shipped product inside startups and one very
            large company — the kind of place where good ideas go to wait for a
            roadmap. Elo is what’s left when you strip that down to the part
            that matters.
          </p>
          <p className="prose">
            No account managers. No hand-offs. No decks that outlive the code.
            Just a small, senior practice that designs, builds and ships — and
            treats your deadline like its own. If you can see the thing clearly
            and just need it built, that’s the whole job.
          </p>
          <div className="about__sign">
            <div>
              <div className="sig">{site.founder}</div>
              <div className="role">{site.founderRole}</div>
            </div>
          </div>
          <div className="about__stats">
            <div className="stat">
              <div className="n">10+ yrs</div>
              <div className="l">Shipping product</div>
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
