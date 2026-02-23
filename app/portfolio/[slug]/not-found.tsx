import Link from "next/link";

export default function ProjectNotFound() {
  return (
    <main className="not-found-page">
      <h1 className="section-title">Project not found</h1>
      <p>This project may have been removed or renamed.</p>
      <Link href="/portfolio" className="btn-primary">
        View portfolio
      </Link>
    </main>
  );
}
