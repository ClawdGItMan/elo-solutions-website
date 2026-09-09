const steps = [
  {
    n: "01",
    title: "Start at the sharp edge.",
    body: "One call to find the smallest version that proves the thing. I write a spec you can read in ten minutes, and we scope ruthlessly so we can move.",
  },
  {
    n: "02",
    title: "Direct the agents, judge the outcome.",
    body: "I don’t type the code by hand. AI coding agents build from the spec; I review what they produce by testing it like a user, not by reading diffs.",
  },
  {
    n: "03",
    title: "Working software, weekly.",
    body: "You get a deployed URL every week — not a status deck. You steer with your hands on the real thing, and production is the default from the first commit.",
  },
  {
    n: "04",
    title: "You keep the keys.",
    body: "A clean, tested, documented codebase in your own GitHub and hosting accounts. Keep me on, or take it in-house — no lock-in.",
  },
];

export function Process() {
  return (
    <section className="section section--alt" id="process">
      <div className="wrap proc__grid">
        <div className="proc__intro reveal">
          <span className="eyebrow eyebrow--plain section-label">
            03 — How I work
          </span>
          <h2 className="h-sec" style={{ marginTop: "18px" }}>
            AI-directed, on purpose.
          </h2>
          <p className="prose" style={{ marginTop: "20px", maxWidth: "34ch" }}>
            One person with a fleet of coding agents ships what used to take a
            small team. The method is the product: spec, plan, build, verify.
          </p>
        </div>
        <div className="proc__steps reveal-stagger">
          {steps.map((step) => (
            <div className="proc__step" key={step.n}>
              <span className="step-n">{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
