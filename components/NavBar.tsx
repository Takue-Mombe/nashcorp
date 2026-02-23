import Link from "next/link";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#testimonials", label: "Reviews" },
  { href: "/blog", label: "Journal" },
];

export function NavBar() {
  return (
    <nav className="nav-shell" aria-label="Primary">
      <Link href="/" className="nav-logo">
        Tinashe <span>Gore</span>
      </Link>
      <ul className="nav-links">
        {links.map((link) => (
          <li key={link.href}>
            {link.href.startsWith("/") ? (
              <Link href={link.href}>{link.label}</Link>
            ) : (
              <a href={link.href}>{link.label}</a>
            )}
          </li>
        ))}
      </ul>
      <a href="#contact" className="nav-cta">
        Free Consultation
      </a>
    </nav>
  );
}
