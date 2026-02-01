import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import PostCard from "@/components/blog/post-card";

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <main className="container py-10">
      {/* Hero */}
      <section className="py-16 text-center">
        <h1 className="text-[40px] font-bold leading-tight tracking-tighter text-dark-100 dark:text-light-900 sm:text-[56px]">
          Hi, I&apos;m <span className="primary-text-gradient">Spanwich</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl paragraph-regular text-dark-500 dark:text-light-700">
          Software engineer &amp; researcher. I build things and write about them.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/projects"
            className="rounded-lg bg-primary-500 px-6 py-2.5 body-medium text-white transition-colors hover:bg-primary-500/90"
          >
            View Projects
          </Link>
          <Link
            href="/blog"
            className="rounded-lg border border-light-700 px-6 py-2.5 body-medium text-dark-400 transition-colors hover:bg-light-800 dark:border-dark-400 dark:text-light-500 dark:hover:bg-dark-300"
          >
            Read Blog
          </Link>
        </div>
      </section>

      {/* Recent posts */}
      {recentPosts.length > 0 && (
        <section className="mt-10">
          <div className="flex items-center justify-between">
            <h2 className="h2-bold text-dark-100 dark:text-light-900">Recent Posts</h2>
            <Link href="/blog" className="body-medium text-primary-500 hover:underline">
              View all &rarr;
            </Link>
          </div>
          <div className="mt-6 grid gap-5">
            {recentPosts.map((post) => (
              <PostCard key={post.slug} {...post} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
