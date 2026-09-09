import { HearthMock } from "./HearthMock";
import { WorkCard } from "./WorkCard";
import { projects } from "./projects";
import { caseStudyUrl } from "@/lib/site";

export function Work() {
  const [hearth, ...rest] = projects;

  return (
    <section className="section" id="work">
      <div className="wrap">
        <div className="work__head reveal">
          <div>
            <span className="eyebrow eyebrow--plain section-label">
              02 — Selected work
            </span>
            <h2 className="h-sec" style={{ marginTop: "18px" }}>
              Four things that shipped this year.
            </h2>
          </div>
          <p className="prose" style={{ maxWidth: "42ch" }}>
            Each one started as a spec and went to production. Full case
            studies — what was built, what I learned — live on{" "}
            <a className="link" href={caseStudyUrl("hearth").replace("/work/hearth", "/work")}>
              maxallaire.com
            </a>
            .
          </p>
        </div>

        {/* Featured case: Hearth, rendered as a live product mock */}
        <article className="case case--featured" id={`case-${hearth.slug}`}>
          <div className="case__media reveal">
            <div className="frame">
              <div className="frame__bar">
                <div className="frame__dots">
                  <i />
                  <i />
                  <i />
                </div>
                <span className="frame__url">{hearth.frameUrl}</span>
              </div>
              <div className="frame__body">
                <HearthMock />
              </div>
            </div>
          </div>
          <div className="case__text reveal">
            <span className="case__index">
              Case 01 — {hearth.when} · {hearth.status}
            </span>
            <h3 className="case__name">{hearth.name}</h3>
            <p className="case__what">{hearth.what}</p>
            <dl className="case__facts">
              <div className="case__fact">
                <dt>Problem</dt>
                <dd>{hearth.problem}</dd>
              </div>
              <div className="case__fact">
                <dt>What I built</dt>
                <dd>{hearth.built}</dd>
              </div>
              <div className="case__fact case__fact--out">
                <dt>Evidence</dt>
                <dd>{hearth.outcome}</dd>
              </div>
            </dl>
            <a className="btn btn--text case__link" href={caseStudyUrl(hearth.slug)}>
              Read the case study{" "}
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </article>

        {/* The rest, as a grid of cards */}
        <div className="work__grid reveal-stagger">
          {rest.map((p, i) => (
            <WorkCard key={p.slug} project={p} index={i + 2} />
          ))}
        </div>
      </div>
    </section>
  );
}
