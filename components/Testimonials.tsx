import { testimonials } from "@/data/content";

export function Testimonials() {
  return (
    <section id="testimonials" className="sec">
      <div className="section-label reveal">Client Stories</div>
      <h2 className="section-title reveal">
        Words from those
        <br />
        who <em>trust us</em>
      </h2>

      <div className="testimonials-grid stagger reveal">
        {testimonials.map((item) => (
          <article key={item.id} className="testimonial-card">
            <div className="testimonial-stars">★★★★★</div>
            <p className="testimonial-text">{item.quote}</p>
            <div className="testimonial-author">
              <div className="author-avatar">{item.initials}</div>
              <div>
                <div className="author-name">{item.author}</div>
                <div className="author-role">{item.role}</div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
