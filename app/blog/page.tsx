import { getAllPosts } from "@/lib/blog";
import BlogListing from "@/components/blog/blog-listing";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="container py-10">
      <h1 className="h1-bold text-dark-100 dark:text-light-900">Blog</h1>
      <BlogListing posts={posts} />
    </main>
  );
}
