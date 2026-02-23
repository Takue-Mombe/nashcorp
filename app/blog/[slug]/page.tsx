import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { ScrollEffects } from "@/components/ScrollEffects";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/cms";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return { title: "Article Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: `${post.title} | Tinashe Gore Journal`,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      type: "article",
      images: [{ url: post.image, alt: post.title }],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const posts = await getBlogPosts();
  const related = posts.filter((entry) => entry.slug !== post.slug).slice(0, 3);

  return (
    <>
      <NavBar />
      <main className="blog-post-page">
        <header className="blog-post-hero">
          <div className="blog-card-tag">{post.tag}</div>
          <h1 className="blog-post-title">{post.title}</h1>
          <div className="blog-meta">
            <span>{new Date(post.date).toLocaleDateString()}</span>
            <span>{post.readTime}</span>
          </div>
        </header>

        <article className="blog-post-content">
          <Link href="/blog" className="blog-back-link">
            ← Back to Journal
          </Link>
          <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
        </article>

        <section className="blog-related">
          <p className="section-label">More from the Journal</p>
          <h2 className="section-title">
            Related <em>articles</em>
          </h2>
          <div className="blog-related-grid">
            {related.map((entry) => (
              <Link key={entry.slug} href={`/blog/${entry.slug}`} className="blog-card">
                <div className="blog-card-tag">{entry.tag}</div>
                <h3 className="blog-card-title">{entry.title}</h3>
                <p className="blog-card-excerpt">{entry.excerpt}</p>
                <div className="blog-meta">
                  <span>{new Date(entry.date).toLocaleDateString()}</span>
                  <span>{entry.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <ScrollEffects />
    </>
  );
}
