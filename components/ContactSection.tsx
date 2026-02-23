import { ContactForm } from "@/components/ContactForm";
import { getSiteSettings } from "@/lib/cms";

export async function ContactSection() {
  const settings = await getSiteSettings();

  return (
    <section id="contact" className="sec">
      <div>
        <div className="section-label reveal">Get In Touch</div>
        <h2 className="section-title reveal">
          Start your <em>project</em>
          <br />
          today
        </h2>
        <p className="contact-desc reveal">
          Ready to bring your vision to life? Fill in the form or reach us
          directly. Every new project starts with a free consultation.
        </p>
        <div className="contact-info reveal">
          <div className="contact-item">
            <div>
              <div className="contact-item-label">Studio</div>
              <div className="contact-item-val">
                {settings.streetAddress}, {settings.city}
              </div>
            </div>
          </div>
          <div className="contact-item">
            <div>
              <div className="contact-item-label">Phone</div>
              <div className="contact-item-val">{settings.phone}</div>
            </div>
          </div>
          <div className="contact-item">
            <div>
              <div className="contact-item-label">Email</div>
              <div className="contact-item-val">{settings.email}</div>
            </div>
          </div>
          <div className="contact-item">
            <div>
              <div className="contact-item-label">Hours</div>
              <div className="contact-item-val">{settings.hours}</div>
            </div>
          </div>
        </div>
      </div>
      <ContactForm />
    </section>
  );
}
