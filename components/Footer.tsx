import Image from "next/image";
import Link from "next/link";
import { getSiteSettings } from "@/lib/cms";

export async function Footer() {
  const settings = await getSiteSettings();

  return (
    <footer>
      <Link href="/" className="footer-logo" aria-label="Tinashe Gore Carpentry Studio home">
        <span className="brand-logo-frame" aria-hidden="true">
          <Image
            src="/logo.png"
            alt="Tinashe Gore Carpentry Studio"
            width={230}
            height={74}
            className="brand-logo-img"
          />
        </span>
      </Link>
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
