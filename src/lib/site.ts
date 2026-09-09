/**
 * Central site configuration. Every component reads names, contact details
 * and outbound links from here so the site has a single source of truth.
 */
export const site = {
  name: "Elo Solutions",
  tagline: "Production software for founders, shipped by one person",
  description:
    "Elo Solutions is Max Allaire's one-person studio. It ships production software for founders and small businesses using AI-directed development: custom apps, AI features and 0→1 products, delivered in weeks.",

  email: "max.allaire@gmail.com",
  founder: "Max Allaire",
  founderRole: "Founder",
  domain: "elosolutions.org",
  url: "https://elosolutions.org",

  /** Max's portfolio; case studies live there under /work/<slug>. */
  portfolioUrl: "https://maxallaire.com",
} as const;

export const mailto = `mailto:${site.email}`;

export const caseStudyUrl = (slug: string) => `${site.portfolioUrl}/work/${slug}`;
