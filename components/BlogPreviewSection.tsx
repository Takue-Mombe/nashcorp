import Link from "next/link";
import { getBlogPosts } from "@/lib/cms";

export async function BlogPreviewSection() {
  const posts = await getBlogPosts();
  const featured = posts.find((post) => post.featured) ?? posts[0];
  const secondary = posts.filter((post) => post.slug !== featured?.slug).slice(0, 2);

  if (!featured) {
    return null;
  }

  return (
    <section id="blog-sec" className="sec">
      <div className="blog-head reveal">
        <div>
          <div className="section-label">The Journal</div>
          <h2 className="section-title">
            Wood <em>wisdom</em>
            <br />
            &amp; craft stories
          </h2>
        </div>
        <Link href="/blog" className="btn-ghost">
          All Articles <span className="arr">→</span>
        </Link>
      </div>

      <div className="blog-grid reveal">
        <Link href={`/blog/${featured.slug}`} className="blog-featured">
          <div className="blog-featured-overlay" />
          <div className="blog-featured-content">
            <div className="blog-featured-tag">{featured.tag}</div>
            <h3 className="blog-featured-title">{featured.title}</h3>
            <div className="blog-meta">
              <span>{new Date(featured.date).toLocaleDateString()}</span>
              <span>{featured.readTime}</span>
            </div>
          </div>
        </Link>

        {secondary.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
            <div className="blog-card-tag">{post.tag}</div>
            <h3 className="blog-card-title">{post.title}</h3>
            <p className="blog-card-excerpt">{post.excerpt}</p>
            <div className="blog-meta">
              <span>{new Date(post.date).toLocaleDateString()}</span>
              <span>{post.readTime}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
