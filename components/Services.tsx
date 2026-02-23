import { services } from "@/data/content";

export function Services() {
  return (
    <section id="services" className="sec">
      <div className="services-head reveal">
        <div>
          <div className="section-label">What We Do</div>
          <h2 className="section-title">
            Our <em>Services</em>
          </h2>
        </div>
        <p className="services-quote">
          &quot;The best work starts with a conversation about what you really
          need.&quot;
        </p>
      </div>

      <div className="services-rows stagger">
        {services.map((service) => (
          <article className="service-row" key={service.id}>
            <div className="service-num">{service.id}</div>
            <h3 className="service-name">{service.name}</h3>
            <p className="service-desc">{service.description}</p>
            <span className="service-arrow" aria-hidden="true">
              →
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}
