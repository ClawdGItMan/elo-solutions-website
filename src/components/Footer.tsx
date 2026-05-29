import { BrandMark } from "./BrandMark";
import { site, mailto } from "@/lib/site";

export function Footer() {
  return (
    <footer className="foot">
      <div className="wrap foot__inner">
        <a className="brand" href="#top" aria-label="Elo Solutions — home">
          <BrandMark bg="#201E16" ring="#ECE7DB" dot="#6FB492" />
          Elo <span>Solutions</span>
        </a>
        <div className="foot__links">
          <a href="#work">Work</a>
          <a href="#process">How we work</a>
          <a href="#about">About</a>
          <a href={mailto}>Contact</a>
        </div>
        <div className="foot__copy">© 2026 {site.name} · built by Elo</div>
      </div>
    </footer>
  );
}
