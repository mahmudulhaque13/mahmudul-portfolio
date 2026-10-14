import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Github,
  Globe,
  Lightbulb,
} from "lucide-react";
import { projects } from "@/data/projects";
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return {
    title: project
      ? `${project.name} | Mahmudul Haque`
      : "Project | Mahmudul Haque",
  };
}
export default async function ProjectDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return (
    <main className="detail-page">
      <section className="detail-hero section-pad">
        <div className="container">
          <Link className="back-link" href="/#projects">
            <ArrowLeft size={16} /> Back to projects
          </Link>
          <span className="eyebrow">{project.eyebrow}</span>
          <h1>
            {project.name}
            <span>.</span>
          </h1>
          <p className="detail-lead">{project.short}</p>
          <div className="detail-links">
            {project.live ? (
              <a
                className="button button-primary"
                href={project.live}
                target="_blank"
                rel="noreferrer"
              >
                Live project <Globe size={16} />
                <ArrowUpRight size={15} />
              </a>
            ) : (
              <span className="button button-muted">Live link to be added</span>
            )}
            {project.clientRepo ? (
              <a
                className="button button-quiet"
                href={project.clientRepo}
                target="_blank"
                rel="noreferrer"
              >
                Client repository <Github size={16} />
                <ArrowUpRight size={15} />
              </a>
            ) : (
              <span className="button button-muted">
                Client repo to be added
              </span>
            )}
            {project.backendRepo && (
              <a
                className="text-link"
                href={project.backendRepo}
                target="_blank"
                rel="noreferrer"
              >
                Backend repository <ArrowUpRight size={14} />
              </a>
            )}
          </div>
          <div className="detail-art">
            <Image
              src={project.image}
              alt={`${project.name} project artwork`}
              width={1200}
              height={720}
              priority
            />
          </div>
        </div>
      </section>
      <section className="section-pad section-border">
        <div className="container detail-grid">
          <div className="detail-main">
            <span className="eyebrow">OVERVIEW</span>
            <h2>What it is</h2>
            <p>{project.description}</p>
            <div className="detail-subsection">
              <h2>Challenges & decisions</h2>
              <ul className="detail-list">
                {project.challenges.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="detail-subsection">
              <h2>Potential improvements</h2>
              <ul className="detail-list">
                {project.improvements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <aside className="detail-sidebar">
            <div className="sidebar-card">
              <span className="eyebrow">MY ROLE</span>
              <h3>{project.role}</h3>
            </div>
            <div className="sidebar-card">
              <span className="eyebrow">TECH STACK</span>
              <div className="skill-pills detail-pills">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
            <div className="sidebar-note">
              <Lightbulb size={18} />
              <p>
                For a strong portfolio case study, add real screenshots and
                describe a specific technical decision you made and why.
              </p>
            </div>
          </aside>
        </div>
      </section>
      <section className="section-pad">
        <div className="container next-project">
          <div>
            <span className="eyebrow">KEEP EXPLORING</span>
            <h2>
              More work, more <span>details.</span>
            </h2>
          </div>
          <Link className="button button-primary" href="/#projects">
            All projects <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
      <footer className="footer">
        <div className="container footer-inner">
          <Link className="brand" href="/">
            <span className="brand-mark">MH</span>
            <span>
              Mahmudul Haque<span className="brand-dot">.</span>
            </span>
          </Link>

          <span>Designed with intent. Built with code.</span>

          <Link href="/#contact">Contact ↗</Link>

          <small>© {new Date().getFullYear()} Mahmudul Haque</small>
        </div>
      </footer>
    </main>
  );
}
