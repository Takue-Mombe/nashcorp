import Link from "next/link";

export default function BlogPostNotFound() {
  return (
    <main className="not-found-page">
      <h1 className="section-title">Article not found</h1>
      <p>This journal entry may have moved or been unpublished.</p>
      <Link href="/blog" className="btn-primary">
        Back to Journal
      </Link>
    </main>
  );
}
