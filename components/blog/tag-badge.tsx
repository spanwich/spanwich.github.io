import Link from "next/link";

export default function TagBadge({ tag }: { tag: string }) {
  return (
    <Link
      href={`/blog/tags/${tag}`}
      className="subtle-medium rounded-full bg-light-800 px-3 py-1 text-dark-400 transition-colors hover:bg-primary-100 hover:text-primary-500 dark:bg-dark-300 dark:text-light-500 dark:hover:bg-dark-400"
    >
      {tag}
    </Link>
  );
}
