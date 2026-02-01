import { getAllPosts, getAllTags } from "@/lib/blog";
import PostCard from "@/components/blog/post-card";
import Link from "next/link";

export async function generateStaticParams() {
  return getAllTags().map((tag) => ({ tag }));
}

export default async function TagPage({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag } = await params;
  const decoded = decodeURIComponent(tag);
  const posts = getAllPosts().filter((p) => p.tags.includes(decoded));

  return (
    <main className="container py-10">
      <Link href="/blog" className="body-medium text-primary-500 hover:underline">
        &larr; Back to blog
      </Link>
      <h1 className="h1-bold mt-4 text-dark-100 dark:text-light-900">
        Posts tagged &ldquo;{decoded}&rdquo;
      </h1>
      <div className="mt-8 grid gap-5">
        {posts.map((post) => (
          <PostCard key={post.slug} {...post} />
        ))}
      </div>
    </main>
  );
}
