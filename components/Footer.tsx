import { getSiteSettings } from "@/lib/cms";

export async function Footer() {
  const settings = await getSiteSettings();

  return (
    <footer>
      <div className="footer-logo">
        Tinashe <span>Gore</span>
      </div>
      <div className="footer-copy">
        © {new Date().getFullYear()} Tinashe Gore Carpentry Studio. All rights
        reserved.
      </div>
      <div className="footer-links">
        <a href={settings.instagramUrl} target="_blank" rel="noreferrer">
          Instagram
        </a>
        <a href={settings.facebookUrl} target="_blank" rel="noreferrer">
          Facebook
        </a>
        <a href={settings.whatsappUrl} target="_blank" rel="noreferrer">
          WhatsApp
        </a>
      </div>
    </footer>
  );
}
