const steps = [
  {
    n: "01",
    title: "We start at the sharp edge.",
    body: "One call to find the smallest version that proves the thing. We scope ruthlessly so we can move.",
  },
  {
    n: "02",
    title: "We build in the open, weekly.",
    body: "Working software every week — not status decks. You steer with your hands on the real thing.",
  },
  {
    n: "03",
    title: "Production from day one.",
    body: "Typed, tested, deployed. No throwaway demos that have to be rebuilt before they can ship.",
  },
  {
    n: "04",
    title: "We hand you the keys.",
    body: "A clean, documented codebase that’s yours. Keep us on, or take it in-house — no lock-in.",
  },
];

export function Process() {
  return (
    <section className="section section--alt" id="process">
      <div className="wrap proc__grid">
        <div className="proc__intro reveal">
          <span className="eyebrow eyebrow--plain section-label">
            03 — How we work
          </span>
          <h2 className="h-sec" style={{ marginTop: "18px" }}>
            Opinionated, on purpose.
          </h2>
          <p className="prose" style={{ marginTop: "20px", maxWidth: "34ch" }}>
            A way of working that trades meetings for momentum. You’ll see real
            software, weekly, from the first week.
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
