import Link from "next/link";
import TagBadge from "./tag-badge";

interface PostCardProps {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
}

export default function PostCard({ slug, title, date, summary, tags }: PostCardProps) {
  return (
    <article className="rounded-lg border border-light-700 p-5 transition-shadow hover:shadow-md dark:border-dark-400">
      <Link href={`/blog/${slug}`}>
        <h3 className="h3-semibold text-dark-200 dark:text-light-900 hover:text-primary-500">
          {title}
        </h3>
      </Link>
      <p className="body-regular mt-1 text-light-400">{date}</p>
      <p className="paragraph-regular mt-2 text-dark-500 dark:text-light-700">
        {summary}
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <TagBadge key={tag} tag={tag} />
        ))}
      </div>
    </article>
  );
}
