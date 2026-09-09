const items = [
  {
    n: "01",
    title: "Custom apps, production-grade.",
    body: "Not prototypes that rot. Typed, tested, deployed — with a database, auth and row-level security from day one — so it keeps working after hand-over.",
  },
  {
    n: "02",
    title: "AI features that earn their keep.",
    body: "LLM features wired into real workflows — triage, summaries, agents, evals and the unglamorous reliability work — not a chatbot bolted to the corner of the screen.",
  },
  {
    n: "03",
    title: "Crypto & web3, from the inside.",
    body: "I’ve spent years in business development across the Solana ecosystem and have prototyped agentic payments end to end. If it needs to settle on-chain, I know what actually works.",
  },
  {
    n: "04",
    title: "0→1, at speed.",
    body: "From napkin to in-market in weeks. I find the smallest sharp version that proves the thing, then put it in front of real users fast.",
  },
];

export function Capabilities() {
  return (
    <section className="section section--alt" id="capabilities">
      <div className="wrap cap__grid">
        <div className="cap__intro reveal">
          <span className="eyebrow eyebrow--plain section-label">
            01 — What I do
          </span>
          <h2 className="h-sec">A studio that ships, not a vendor that bills.</h2>
          <p className="prose">
            Four things I’m unreasonably good at. No retainers for slideware,
            no army of juniors — the person scoping your project is the person
            directing every line of it.
          </p>
        </div>

        <div className="cap__list reveal-stagger">
          {items.map((item) => (
            <article className="cap__item" key={item.n}>
              <div className="cap__num">{item.n}</div>
              <div>
                <h3 className="cap__title">{item.title}</h3>
                <p className="cap__body">{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
