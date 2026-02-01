import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";

const papersDir = path.join(process.cwd(), "content/research");

export interface Paper {
  slug: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  url: string;
  lang: string;
  summary: string;
  content: string;
}

export function getAllPapers(): Omit<Paper, "content">[] {
  const files = fs.readdirSync(papersDir).filter((f) => f.endsWith(".md"));
  return files
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const raw = fs.readFileSync(path.join(papersDir, file), "utf-8");
      const { data } = matter(raw);
      return {
        slug,
        title: data.title ?? slug,
        authors: data.authors ?? [],
        venue: data.venue ?? "",
        year: data.year ?? 0,
        url: data.url ?? "",
        lang: data.lang ?? "en",
        summary: data.summary ?? "",
      };
    })
    .sort((a, b) => b.year - a.year);
}

export async function getPaperBySlug(slug: string): Promise<Paper> {
  const raw = fs.readFileSync(path.join(papersDir, `${slug}.md`), "utf-8");
  const { data, content: md } = matter(raw);
  const result = await remark()
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(md);
  return {
    slug,
    title: data.title ?? slug,
    authors: data.authors ?? [],
    venue: data.venue ?? "",
    year: data.year ?? 0,
    url: data.url ?? "",
    lang: data.lang ?? "en",
    summary: data.summary ?? "",
    content: result.toString(),
  };
}
