# Elo Solutions — elosolutions.org

Marketing site for **Elo Solutions**, Max Allaire's one-person software studio. Elo ships production software for founders and small businesses using AI-directed development: Max writes the spec, directs AI coding agents to build it, tests the result like a user, and ships it.

Live at **https://elosolutions.org**. Full case studies for the work shown here live on Max's portfolio at https://maxallaire.com/work.

## What's on the page

A single, scroll-through landing page:

- **Hero** — positioning and an index of the four featured projects
- **What I do** — custom apps, AI features, crypto/web3, 0→1 builds
- **Selected work** — Hearth (a family operations platform for a staffed household, anonymised), Marathon Training App, Personal OS, Leads CRM. Each links to its case study on maxallaire.com.
- **How I work** — the spec → agents → verify → ship method
- **About** and **Contact**

The Hearth case is rendered as a live CSS mock with placeholder data only; the client's details are not on the site. The other three project frames are abstract CSS renderings, not screenshots.

## Stack

- [Next.js](https://nextjs.org) 16 (App Router) + React 19, TypeScript strict
- Plain CSS with design tokens in `src/app/globals.css` (no Tailwind)
- Fonts via `next/font`: Schibsted Grotesk (display), Hanken Grotesk (body), JetBrains Mono, plus Newsreader/Manrope for the Hearth mock
- Hosted on Vercel; no database, no auth, no environment variables

Site-wide details (name, contact email, domain, portfolio URL) live in `src/lib/site.ts`. The four projects are defined in `src/components/projects.ts`.

## Running it locally

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # production build
pnpm lint
```

## Deploying

The Vercel project is `elo-solutions` on the `maxallaire-1603s-projects` team, with `elosolutions.org` attached.

```bash
vercel --prod
```
