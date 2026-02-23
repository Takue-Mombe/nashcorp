import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { ScrollEffects } from "@/components/ScrollEffects";
import { getBlogPosts } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Woodworking tips, project guides, and craftsmanship insights from Tinashe Gore Carpentry Studio.",
  alternates: { canonical: "/blog" },
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <>
      <NavBar />
      <main className="blog-list-page">
        <section className="blog-list-hero">
          <p className="section-label">The Journal</p>
          <h1 className="blog-list-title">
            Wood Wisdom <span>&amp;</span> Craft Stories
          </h1>
          <p className="blog-list-copy">
            Practical carpentry advice, design decisions, and behind-the-scenes
            lessons from the studio.
          </p>
        </section>

        <section className="blog-list-grid">
          {posts.map((post, index) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-list-item">
              <span className="blog-list-index">{String(index + 1).padStart(2, "0")}</span>
              <p className="blog-card-tag">{post.tag}</p>
              <h2 className="blog-list-item-title">{post.title}</h2>
              <p className="blog-card-excerpt">{post.excerpt}</p>
              <div className="blog-meta">
                <span>{new Date(post.date).toLocaleDateString()}</span>
                <span>{post.readTime}</span>
              </div>
            </Link>
          ))}
        </section>
      </main>
      <Footer />
      <ScrollEffects />
    </>
  );
}
