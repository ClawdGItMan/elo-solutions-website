/** Small, abstract CSS renderings of each product, used inside the work
 *  grid frames. Purely decorative; styles live in globals.css (.pm-*). */
export function ProjectMock({ slug }: { slug: string }) {
  if (slug === "marathon-training-app") return <MarathonMock />;
  if (slug === "personal-os") return <PersonalOsMock />;
  if (slug === "leads-crm") return <LeadsMock />;
  return null;
}

const weeks = [42, 48, 55, 38, 60, 66, 72, 46, 78, 84, 58, 90, 96, 52, 34, 20];

function MarathonMock() {
  return (
    <div className="pm pm--marathon" aria-hidden="true">
      <div className="pm__head">
        <span>Week 12 of 16</span>
        <b>Long run · 18 mi</b>
      </div>
      <div className="pm-bars">
        {weeks.map((h, i) => (
          <i
            key={i}
            style={{ height: `${h}%` }}
            className={i === 11 ? "now" : i > 11 ? "next" : ""}
          />
        ))}
      </div>
      <div className="pm__foot">
        <span>Race day · Oct 25</span>
        <span>Plan adjusted · Tue</span>
      </div>
    </div>
  );
}

function PersonalOsMock() {
  return (
    <div className="pm pm--os" aria-hidden="true">
      <div className="pm-tile pm-tile--wide">
        <small>Today</small>
        <b>3 events · 1 flight</b>
      </div>
      <div className="pm-tile">
        <small>Sleep</small>
        <b>7h 42</b>
        <span className="pm-ring" />
      </div>
      <div className="pm-tile">
        <small>Recovery</small>
        <b>81%</b>
        <span className="pm-spark" />
      </div>
      <div className="pm-tile">
        <small>Training</small>
        <b>8.2 mi</b>
      </div>
      <div className="pm-tile pm-tile--accent">
        <small>Spend · week</small>
        <b>−12%</b>
      </div>
    </div>
  );
}

const columns = [
  { name: "New", n: 3 },
  { name: "Contacted", n: 4 },
  { name: "Qualified", n: 2 },
  { name: "Won", n: 1 },
];

function LeadsMock() {
  return (
    <div className="pm pm--leads" aria-hidden="true">
      {columns.map((c) => (
        <div className="pm-col" key={c.name}>
          <div className="pm-col__head">
            <span>{c.name}</span>
            <b>{c.n}</b>
          </div>
          {Array.from({ length: c.n }).map((_, i) => (
            <div className="pm-lead" key={i}>
              <i />
              <i className="short" />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
