import { getAllPapers } from "@/lib/research";
import PaperCard from "@/components/research/paper-card";

export default function ResearchPage() {
  const papers = getAllPapers();

  return (
    <main className="container py-10">
      <h1 className="h1-bold text-dark-100 dark:text-light-900">Research</h1>
      <div className="mt-8 grid gap-5">
        {papers.map((paper) => (
          <PaperCard key={paper.slug} {...paper} />
        ))}
      </div>
    </main>
  );
}
