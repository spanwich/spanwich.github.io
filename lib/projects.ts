import fs from "fs";
import path from "path";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  url?: string;
  github?: string;
}

export function getProjects(): Project[] {
  const raw = fs.readFileSync(
    path.join(process.cwd(), "content/projects.json"),
    "utf-8"
  );
  return JSON.parse(raw);
}
