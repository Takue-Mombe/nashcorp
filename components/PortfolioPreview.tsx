import Image from "next/image";
import Link from "next/link";
import { getPortfolioItems } from "@/lib/cms";

export async function PortfolioPreview() {
  const portfolioItems = await getPortfolioItems();

  return (
    <section id="portfolio" className="sec">
      <div className="portfolio-intro reveal">
        <div>
          <div className="section-label">Portfolio</div>
          <h2 className="section-title">
            Selected <em>work</em>
          </h2>
        </div>
        <Link href="/portfolio" className="btn-ghost">
          View all projects
        </Link>
      </div>

      <div className="portfolio-grid stagger reveal">
        {portfolioItems.map((item) => (
          <Link
            href={`/portfolio/${item.slug}`}
            key={item.slug}
            className="portfolio-item"
          >
            <div className="portfolio-thumb image-wrap">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
            <div className="portfolio-overlay">
              <div className="portfolio-tag">{item.category}</div>
              <div className="portfolio-label">{item.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
