import { getAllPapers, getPaperBySlug } from "@/lib/research";
import Link from "next/link";

export async function generateStaticParams() {
  return getAllPapers().map((p) => ({ slug: p.slug }));
}

export default async function PaperPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const paper = await getPaperBySlug(slug);

  return (
    <main className="container py-10">
      <Link href="/research" className="body-medium text-primary-500 hover:underline">
        &larr; Back to research
      </Link>
      <article className="mt-6">
        <h1 className="h1-bold text-dark-100 dark:text-light-900">{paper.title}</h1>
        <p className="body-regular mt-2 text-light-400">
          {paper.authors.join(", ")} — {paper.venue}, {paper.year}
        </p>
        {paper.url && (
          <a
            href={paper.url}
            target="_blank"
            rel="noopener noreferrer"
            className="body-medium mt-2 inline-block text-primary-500 hover:underline"
          >
            View paper
          </a>
        )}
        <div
          className="markdown mt-8"
          dangerouslySetInnerHTML={{ __html: paper.content }}
        />
      </article>
    </main>
  );
}
