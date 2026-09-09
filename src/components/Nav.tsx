import { BrandMark } from "./BrandMark";

export function Nav() {
  return (
    <nav className="nav" id="nav">
      <div className="wrap nav__inner">
        <a className="brand" href="#top" aria-label="Elo Solutions — home">
          <BrandMark />
          Elo <span>Solutions</span>
        </a>
        <div className="nav__links">
          <a className="navlink" href="#work">
            Work
          </a>
          <a className="navlink" href="#process">
            How I work
          </a>
          <a className="navlink" href="#about">
            About
          </a>
          <a className="btn btn--primary nav__cta" href="#contact">
            Book a call{" "}
            <span className="arrow" aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}
