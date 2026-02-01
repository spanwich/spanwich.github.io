interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  url?: string;
  github?: string;
}

export default function ProjectCard({ title, description, tags, url, github }: ProjectCardProps) {
  return (
    <div className="rounded-lg border border-light-700 p-5 dark:border-dark-400">
      <h3 className="h3-semibold text-dark-200 dark:text-light-900">{title}</h3>
      <p className="paragraph-regular mt-2 text-dark-500 dark:text-light-700">
        {description}
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="subtle-medium rounded-full bg-light-800 px-3 py-1 text-dark-400 dark:bg-dark-300 dark:text-light-500"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-4 flex gap-3">
        {url && (
          <a href={url} target="_blank" rel="noopener noreferrer" className="body-medium text-primary-500 hover:underline">
            Live
          </a>
        )}
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" className="body-medium text-accent-blue hover:underline">
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}
