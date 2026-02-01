import Link from "next/link";

interface PaperCardProps {
  slug: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  summary: string;
}

export default function PaperCard({ slug, title, authors, venue, year, summary }: PaperCardProps) {
  return (
    <article className="rounded-lg border border-light-700 p-5 dark:border-dark-400">
      <Link href={`/research/${slug}`}>
        <h3 className="h3-semibold text-dark-200 dark:text-light-900 hover:text-primary-500">
          {title}
        </h3>
      </Link>
      <p className="body-regular mt-1 text-light-400">
        {authors.join(", ")} — {venue}, {year}
      </p>
      <p className="paragraph-regular mt-2 text-dark-500 dark:text-light-700">
        {summary}
      </p>
    </article>
  );
}
