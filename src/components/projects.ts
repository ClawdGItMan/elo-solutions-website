/**
 * The four projects shown on the site. Each links to its full case study on
 * Max's portfolio (maxallaire.com/work/<slug>). Hearth is anonymised: it was
 * built for a private client and is described without names or details.
 */
export type Project = {
  slug: string;
  name: string;
  kind: string;
  when: string;
  status: string;
  frameUrl: string;
  what: string;
  problem: string;
  built: string;
  outcome: string;
};

export const projects: Project[] = [
  {
    slug: "hearth",
    name: "Hearth",
    kind: "household ops · in production",
    when: "May–Jun 2026",
    status: "In production",
    frameUrl: "hearth · today",
    what: "A family operations platform for a staffed household.",
    problem:
      "A household with staff, school runs, travel and a full calendar was running on group chats and one person’s memory. Nothing was written down in one place, so everything got asked twice.",
    built:
      "One calm home for today’s plan, the shared calendar, inbox triage, travel and the kids’ schedules — with scheduled jobs that pull the day together before anyone wakes up. Built for a private client; details and data are withheld.",
    outcome:
      "Live since June 2026 and used every day. 721 commits, 95 database migrations, 138 test files and 13 scheduled jobs — production software, not a demo.",
  },
  {
    slug: "marathon-training-app",
    name: "Marathon Training App",
    kind: "consumer web app · live demo",
    when: "Jul–Aug 2026",
    status: "Live demo",
    frameUrl: "marathon · plan",
    what: "A training plan that adapts to the runs you actually did.",
    problem:
      "Generic marathon plans assume a perfect athlete. Miss a week and the PDF doesn’t care; you either fake it or quit.",
    built:
      "A web app that generates a plan around your race date, logs each run, and re-shapes the weeks ahead from what you actually completed. Public demo mode so anyone can try it without an account.",
    outcome:
      "Shipped as a live public demo in August 2026 — sign in, see the plan, log a run, watch it adjust.",
  },
  {
    slug: "personal-os",
    name: "Personal OS",
    kind: "personal data dashboard · demo",
    when: "May 2026",
    status: "Demo",
    frameUrl: "personal-os · today",
    what: "One dashboard for a life’s data.",
    problem:
      "Calendar, sleep, training, health and money all live in different apps with different logins. There was no single place to see how a week actually went.",
    built:
      "A private dashboard that syncs Google Calendar, Whoop, Strava, Apple Health and Plaid on a schedule, encrypts every token at rest, and shows the day on one screen. Single-user by design, with a plain-language privacy page.",
    outcome:
      "A working demo, a mobile client in progress, and a design write-up of what worked and what I’d change.",
  },
  {
    slug: "leads-crm",
    name: "Leads CRM",
    kind: "internal tool · working MVP",
    when: "Apr 2026",
    status: "Working MVP",
    frameUrl: "leads · pipeline",
    what: "A lightweight CRM for a lead pipeline that outgrew its spreadsheet.",
    problem:
      "The pipeline lived in a spreadsheet that three people edited at once. Stages drifted, follow-ups slipped, and nobody trusted the numbers.",
    built:
      "A pipeline board with stages, notes, follow-up dates and an import from the old sheet — on Supabase with row-level security, so each user only sees their own leads.",
    outcome:
      "Working MVP in April 2026, replatformed from the spreadsheet in under two weeks.",
  },
];
