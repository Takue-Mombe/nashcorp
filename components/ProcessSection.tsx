import { processSteps } from "@/data/content";

export function ProcessSection() {
  return (
    <section id="process" className="sec">
      <div className="process-grid">
        <div className="process-intro reveal">
          <div className="section-label">How It Works</div>
          <h2 className="section-title">
            From <em>concept</em>
            <br />
            to creation
          </h2>
          <p className="process-copy">
            A meticulous five-stage process keeps you informed from first
            concept to final fitting.
          </p>
        </div>

        <div className="process-steps stagger reveal">
          {processSteps.map((step) => (
            <article className="process-step" key={step.id}>
              <div className="step-dot">{step.id}</div>
              <div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
