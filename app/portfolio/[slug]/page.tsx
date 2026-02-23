import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { ScrollEffects } from "@/components/ScrollEffects";
import { getPortfolioItemBySlug, getPortfolioItems } from "@/lib/cms";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const items = await getPortfolioItems();
  return items.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await getPortfolioItemBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/portfolio/${project.slug}` },
    openGraph: {
      title: `${project.title} | Tinashe Gore Carpentry Studio`,
      description: project.summary,
      type: "article",
      url: `/portfolio/${project.slug}`,
      images: [
        {
          url: project.image,
          alt: project.alt,
        },
      ],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = await getPortfolioItemBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <NavBar />
      <main className="project-page">
        <Link href="/portfolio" className="project-backlink">
          Back to portfolio
        </Link>

        <article className="project-card">
          <div className="project-image">
            <Image src={project.image} alt={project.alt} fill priority sizes="100vw" />
          </div>
          <p className="portfolio-tag">{project.category}</p>
          <h1 className="section-title">{project.title}</h1>
          <p className="project-summary">{project.summary}</p>
        </article>
      </main>
      <Footer />
      <ScrollEffects />
    </>
  );
}
