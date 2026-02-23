export function About() {
  return (
    <section id="about" className="sec about-grid">
      <div className="about-vis reveal">
        <div className="about-block" />
        <div className="about-floating-stat">
          <span className="stat-value">340+</span>
          <span className="stat-label">Pieces crafted with care</span>
        </div>
      </div>

      <div className="about-body">
        <div className="section-label reveal">About the Studio</div>
        <h2 className="section-title reveal">
          Craftsmanship
          <br />
          <em>in every detail</em>
        </h2>
        <p className="about-desc reveal">
          Tinashe Gore is a master carpenter with over a decade of experience
          shaping raw timber into timeless pieces. Every project is approached
          with measured precision and clear collaboration.
        </p>
        <p className="about-desc reveal">
          The studio is built on a simple belief: quality woodwork should
          outlast trends. From first sketch to final fit, each piece is tailored
          to its space and purpose.
        </p>

        <div className="about-values reveal">
          <article>
            <h3>Sustainably Sourced</h3>
            <p>Ethically certified timber, traceable from forest to finish.</p>
          </article>
          <article>
            <h3>Client-Led Design</h3>
            <p>Every piece begins with your vision and practical needs.</p>
          </article>
          <article>
            <h3>10-Year Guarantee</h3>
            <p>We stand behind the durability of every handcrafted piece.</p>
          </article>
          <article>
            <h3>Local Artisans</h3>
            <p>Supporting skilled local craftspeople across every stage.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
