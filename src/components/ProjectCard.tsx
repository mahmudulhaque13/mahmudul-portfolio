import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github, Globe } from "lucide-react";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article
      className={`project-card ${project.featured ? "project-featured" : ""}`}
    >
      <Link
        className="project-art"
        href={`/projects/${project.slug}`}
        aria-label={`View ${project.name} details`}
      >
        <Image
          src={project.image}
          alt={`${project.name} project preview`}
          width={900}
          height={560}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <span className="project-index">
          {String(index + 1).padStart(2, "0")}
        </span>
      </Link>

      <div className="project-content">
        <div className="project-kicker">{project.eyebrow}</div>

        <h3>{project.name}</h3>

        <p>{project.short}</p>

        <div className="tag-list">
          {project.stack.slice(0, 5).map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <div className="project-actions">
          <Link
            className="button button-primary button-small"
            href={`/projects/${project.slug}`}
          >
            View details <ArrowUpRight size={16} />
          </Link>

          {project.live && (
            <a
              className="icon-link"
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.name} live demo`}
              title="Live demo"
            >
              <Globe size={19} />
            </a>
          )}

          {project.clientRepo && (
            <a
              className="icon-link"
              href={project.clientRepo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} client repository`}
              title="Client GitHub repository"
            >
              <Github size={19} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
