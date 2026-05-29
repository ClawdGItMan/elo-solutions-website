import { site, mailto } from "@/lib/site";

export function Cta() {
  return (
    <section className="cta" id="contact">
      <div className="cta__glow" aria-hidden="true" />
      <div className="wrap cta__inner">
        <p className="eyebrow reveal">Let’s build</p>
        <h2 className="cta__headline reveal">
          Have something only you can see clearly?{" "}
          <span className="em">Let’s ship it.</span>
        </h2>
        <div className="cta__row reveal">
          <a className="btn btn--primary btn--on-dark" href={mailto}>
            Book a call{" "}
            <span className="arrow" aria-hidden="true">
              →
            </span>
          </a>
          <a className="btn btn--ghost btn--on-dark" href={mailto}>
            {site.email}
          </a>
        </div>
        <div className="cta__meta reveal">
          <span>Taking 2 new projects this quarter</span>
          <a href={mailto}>{site.email}</a>
          <span>Remote · working worldwide</span>
        </div>
      </div>
    </section>
  );
}
