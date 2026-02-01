"use client";

import { useState } from "react";
import PostCard from "@/components/blog/post-card";
import { useLang } from "@/context/lang-context";

interface PostMeta {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  summary: string;
  lang: string;
}

export default function BlogListing({ posts }: { posts: PostMeta[] }) {
  const { lang } = useLang();
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filtered = posts.filter((p) => {
    const langMatch = p.lang === lang;
    const tagMatch = selectedTag ? p.tags.includes(selectedTag) : true;
    return langMatch && tagMatch;
  });

  const allTags = Array.from(new Set(posts.flatMap((p) => p.tags))).sort();

  return (
    <>
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedTag(null)}
          className={`subtle-medium rounded-full px-3 py-1 transition-colors ${
            selectedTag === null
              ? "bg-primary-500 text-white"
              : "bg-light-800 text-dark-400 dark:bg-dark-300 dark:text-light-500"
          }`}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`subtle-medium rounded-full px-3 py-1 transition-colors ${
              selectedTag === tag
                ? "bg-primary-500 text-white"
                : "bg-light-800 text-dark-400 dark:bg-dark-300 dark:text-light-500"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-5">
        {filtered.length === 0 && (
          <p className="paragraph-regular text-light-400">No posts found.</p>
        )}
        {filtered.map((post) => (
          <PostCard key={post.slug} {...post} />
        ))}
      </div>
    </>
  );
}
