import Link from "next/link";

export function Hero() {
  return (
    <section id="hero" className="hero-grid sec-hero">
      <div className="h-left">
        <div className="hero-tag reveal">Bespoke Carpentry Studio</div>
        <h1 className="hero-title reveal">
          Where
          <br />
          <em>Wood</em>
          <br />
          Becomes Legacy.
        </h1>
        <p className="hero-desc reveal">
          Handcrafted furniture, custom cabinetry, and architectural joinery.
          Each piece is built to last generations and shaped to your vision.
        </p>
        <div className="hero-actions reveal">
          <a href="#portfolio" className="btn-primary">
            <span>View Our Work</span>
          </a>
          <Link href="/blog" className="btn-ghost">
            Read the Journal <span className="arr">→</span>
          </Link>
        </div>
      </div>

      <div className="h-right" aria-hidden="true">
        <div className="hero-wood-bg in" />
        <div className="hero-stats">
          <div className="hero-stat reveal">
            <span className="hero-stat-num">5+</span>
            <span className="hero-stat-label">Years of Craft</span>
          </div>
          <div className="hero-stat reveal">
            <span className="hero-stat-num">100+</span>
            <span className="hero-stat-label">Projects Built</span>
          </div>
          <div className="hero-stat reveal">
            <span className="hero-stat-num">100%</span>
            <span className="hero-stat-label">Handcrafted</span>
          </div>
        </div>
      </div>
    </section>
  );
}
