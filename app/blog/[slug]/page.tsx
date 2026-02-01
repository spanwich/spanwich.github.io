import { getAllPosts, getPostBySlug } from "@/lib/blog";
import TagBadge from "@/components/blog/tag-badge";
import Link from "next/link";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(decodeURIComponent(slug));

  return (
    <main className="container py-10">
      <Link href="/blog" className="body-medium text-primary-500 hover:underline">
        &larr; Back to blog
      </Link>
      <article className="mt-6">
        <h1 className="h1-bold text-dark-100 dark:text-light-900">{post.title}</h1>
        <p className="body-regular mt-2 text-light-400">{post.date}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <TagBadge key={tag} tag={tag} />
          ))}
        </div>
        <div
          className="markdown mt-8"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </main>
  );
}
