/**
 * Central site configuration.
 * The three values flagged below are placeholders carried over from the
 * design prototype — swap them for the real details before going live.
 */
export const site = {
  name: "Elo Solutions",
  tagline: "Custom software for founders",
  description:
    "Elo Solutions is a boutique AI & software studio that designs and ships production-grade apps for founders. Custom apps, AI features, crypto & web3, 0→1 products.",

  // TODO(confirm): real contact email for the "Book a call" links
  email: "hello@elosolutions.com",
  // TODO(confirm): real founder name shown in the About signature
  founder: "Daniel Elo",
  founderRole: "Founder & principal engineer",
  // TODO(confirm): production domain (drives metadata + canonical URL)
  domain: "elosolutions.com",
  url: "https://elosolutions.com",
} as const;

export const mailto = `mailto:${site.email}`;
