import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { ScrollEffects } from "@/components/ScrollEffects";
import { getPortfolioItems } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore handcrafted furniture, bespoke cabinetry, and restoration projects by Tinashe Gore.",
  alternates: { canonical: "/portfolio" },
};

export default async function PortfolioPage() {
  const portfolioItems = await getPortfolioItems();

  return (
    <>
      <NavBar />
      <main className="portfolio-page">
        <section className="portfolio-page-header">
          <p className="section-label">Portfolio</p>
          <h1 className="section-title">
            Completed <em>projects</em>
          </h1>
          <p className="portfolio-page-copy">
            A selection of recent work across furniture, cabinetry, joinery, and
            restoration.
          </p>
        </section>

        <section className="portfolio-page-grid">
          {portfolioItems.map((item) => (
            <Link key={item.slug} href={`/portfolio/${item.slug}`} className="portfolio-page-card">
              <div className="portfolio-page-image">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <p className="portfolio-tag">{item.category}</p>
              <h2 className="portfolio-page-title">{item.title}</h2>
              <p className="portfolio-page-summary">{item.summary}</p>
            </Link>
          ))}
        </section>
      </main>
      <Footer />
      <ScrollEffects />
    </>
  );
}
