import { getProjects } from "@/lib/projects";
import ProjectCard from "@/components/projects/project-card";

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <main className="container py-10">
      <h1 className="h1-bold text-dark-100 dark:text-light-900">Projects</h1>
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </main>
  );
}
