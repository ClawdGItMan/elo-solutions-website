const items = [
  {
    n: "01",
    title: "Custom apps, production-grade.",
    body: "Not prototypes that rot. Typed, tested, deployed — a codebase your team can keep building on the day we hand it over.",
  },
  {
    n: "02",
    title: "AI that earns its keep.",
    body: "LLM features wired into real workflows — retrieval, agents, evals, the unglamorous reliability work — not a chatbot bolted to the corner of the screen.",
  },
  {
    n: "03",
    title: "Crypto & web3, done properly.",
    body: "On-chain products that actually settle. Wallets, contracts, indexers and the plumbing in between — handled by someone who’s shipped it before.",
  },
  {
    n: "04",
    title: "0→1, at speed.",
    body: "From napkin to in-market in weeks. We find the smallest sharp version that proves the thing, and put it in front of real users fast.",
  },
];

export function Capabilities() {
  return (
    <section className="section section--alt" id="capabilities">
      <div className="wrap cap__grid">
        <div className="cap__intro reveal">
          <span className="eyebrow eyebrow--plain section-label">
            01 — What we do
          </span>
          <h2 className="h-sec">A studio that ships, not a vendor that bills.</h2>
          <p className="prose">
            Four things we’re unreasonably good at. No retainers for slideware,
            no army of juniors — the person scoping your project is the person
            building it.
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
