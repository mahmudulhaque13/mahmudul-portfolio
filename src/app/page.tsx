import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Github,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import type { IconType } from "react-icons";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiTanstack,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiPrisma,
  SiRedis,
  SiCloudinary,
  SiGithub,
  SiVercel,
  SiRender,
  SiPostman,
} from "react-icons/si";
import { FiCode, FiShield, FiUsers, FiCheckCircle } from "react-icons/fi";

import Image from "next/image";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import ContactForm from "@/components/ContactForm";
import { projects } from "@/data/projects";

const skills = [
  {
    group: "Frontend",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "TanStack Query",
      "TanStack Form",
    ],
  },
  {
    group: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "Role-based access",
      "Zod validation",
    ],
  },
  {
    group: "Data & Tools",
    items: [
      "PostgreSQL",
      "Prisma ORM",
      "Redis",
      "Cloudinary",
      "Git & GitHub",
      "Vercel",
      "Render",
      "Postman",
    ],
  },
];

const skillIcons: Record<string, IconType> = {
  "Next.js": SiNextdotjs,
  React: SiReact,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  "Tailwind CSS": SiTailwindcss,
  "TanStack Query": SiTanstack,
  "TanStack Form": SiTanstack,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  "REST APIs": FiCode,
  "JWT Authentication": FiShield,
  "Role-based access": FiUsers,
  "Zod validation": FiCheckCircle,
  PostgreSQL: SiPostgresql,
  "Prisma ORM": SiPrisma,
  Redis: SiRedis,
  Cloudinary: SiCloudinary,
  "Git & GitHub": SiGithub,
  Vercel: SiVercel,
  Render: SiRender,
  Postman: SiPostman,
};

const services = [
  {
    number: "01",
    title: "Full-Stack Web Development",
    description:
      "Building responsive web applications with modern frontend interfaces, backend APIs, and database integration.",
  },
  {
    number: "02",
    title: "REST API Development",
    description:
      "Developing structured APIs with authentication, validation, role-based authorization, and consistent error handling.",
  },
  {
    number: "03",
    title: "Dashboard & Business Systems",
    description:
      "Creating role-specific dashboards and workflows for managing users, operations, and business data.",
  },
];

export default function Home() {
  return (
    <main id="top">
      {/* 1. HOME */}
      <section className="hero section-pad" id="home">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="availability">
              <span className="status-dot" />
              FULL-STACK JAVASCRIPT DEVELOPER
              <span className="availability-spark">
                <Sparkles size={14} />
              </span>
            </div>

            <h1>
              I build digital products with <span>purpose.</span>
            </h1>

            <p className="hero-lead">
              I&apos;m Mahmudul Haque — a full-stack developer focused on
              building dependable web applications, thoughtful user experiences,
              and APIs that solve real business problems.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="/resume.pdf" download>
                Download resume <Download size={17} />
              </a>

              <a className="button button-quiet" href="#projects">
                Explore my work <ArrowDown size={16} />
              </a>
            </div>

            <div className="hero-socials">
              <a
                href="https://github.com/mahmudulhaque13"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={17} />
                GitHub
                <ArrowUpRight size={13} />
              </a>

              <a href="mailto:m.h.upal13@gmail.com">
                <Mail size={17} />
                Email
                <ArrowUpRight size={13} />
              </a>

              <span className="social-divider" />

              <span>
                <MapPin size={15} />
                Dhaka, Bangladesh
              </span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />

            <div className="profile-frame">
              <div className="profile-placeholder">
                <Image
                  src="/profile.png"
                  alt="Mahmudul Haque - Full-Stack Developer"
                  width={600}
                  height={700}
                  priority
                  className="profile-photo"
                />
              </div>

              <div className="profile-bottom">
                <span className="mini-status" />
                Building useful things <span>↗</span>
              </div>
            </div>

            <div className="floating-card card-top">
              <span className="floating-icon">TS</span>
              <span>
                <strong>Type-safe</strong>
                <small>by design</small>
              </span>
            </div>

            <div className="floating-card card-bottom">
              <span className="floating-icon">API</span>
              <span>
                <strong>Full-stack</strong>
                <small>from UI to database</small>
              </span>
            </div>
          </div>
        </div>

        <div className="container hero-bottom">
          <span>SELECTED WORK</span>
          <a href="#about">
            Scroll to explore <ArrowDown size={14} />
          </a>
        </div>
      </section>

      {/* 2. ABOUT ME */}
      <section id="about" className="section-pad section-border">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">01 / ABOUT ME</span>

            <h2>
              Curious by nature.
              <br />
              <span>Engineer by mindset.</span>
            </h2>
          </div>

          <div className="about-grid">
            <div className="about-intro">
              <p className="large-copy">
                I enjoy turning complex requirements into clear, reliable
                software that people can actually use.
              </p>

              <p>
                My path combines professional engineering experience with a
                focused journey into full-stack web development. I work across
                frontend interfaces, backend APIs, relational data,
                authentication, and role-based business workflows.
              </p>

              <p>
                I especially enjoy breaking down a large feature into smaller
                pieces, understanding why each architectural decision matters,
                and improving the product through testing and iteration.
              </p>

              <p className="personal-note">
                <Sparkles size={17} />I enjoy learning new technologies, solving
                technical problems, and building practical software projects.
              </p>
            </div>

            <div className="about-facts">
              <div>
                <span>01</span>
                <h3>Product-minded</h3>
                <p>
                  I think about the user workflow and business rule, not just
                  the component.
                </p>
              </div>

              <div>
                <span>02</span>
                <h3>Structured problem-solving</h3>
                <p>
                  My engineering background taught me to inspect details,
                  document work, and coordinate carefully.
                </p>
              </div>

              <div>
                <span>03</span>
                <h3>Always learning</h3>
                <p>
                  I like understanding the trade-offs behind tools instead of
                  using them without a reason.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROJECTS */}
      <section id="projects" className="section-pad section-border">
        <div className="container">
          <div className="section-heading projects-heading">
            <div>
              <span className="eyebrow">02 / SELECTED PROJECTS</span>

              <h2>
                Built to solve <span>real problems.</span>
              </h2>
            </div>

            <p className="section-subtitle">
              A closer look at full-stack workflows, architecture, and product
              decisions.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. SKILLS WITH LOGOS */}
      <section id="skills" className="section-pad section-border">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">03 / SKILLS & TOOLKIT</span>

            <h2>
              Tools I use to turn <span>ideas into software.</span>
            </h2>

            <p className="section-subtitle">
              A practical toolkit for shipping modern full-stack web
              applications.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((group, index) => (
              <article className="skill-card" key={group.group}>
                <div className="skill-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3>{group.group}</h3>

                <div className="skill-logo-grid">
                  {group.items.map((item) => {
                    const SkillIcon = skillIcons[item] ?? FiCode;

                    return (
                      <div className="skill-logo-item" key={item}>
                        <SkillIcon className="skill-logo" aria-hidden="true" />
                        <span>{item}</span>
                      </div>
                    );
                  })}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. EXPERIENCE */}
      <section id="experience" className="section-pad section-border">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">04 / EXPERIENCE</span>

            <h2>
              Professional experience <span>that travels with me.</span>
            </h2>
          </div>

          <article className="experience-card">
            <div className="experience-date">APR 2019 — DEC 2021</div>

            <div className="experience-main">
              <h3>Assistant Engineer (Electrical)</h3>

              <p className="company">
                13 Fertilizer Buffer Godown Project · BCIC
              </p>

              <ul>
                <li>
                  Supervised electrical works across project sites and
                  coordinated with contractors and project stakeholders.
                </li>

                <li>
                  Inspected installations, checked compliance with project
                  requirements, and recommended improvements.
                </li>

                <li>
                  Reviewed contractor billing, maintained project documentation,
                  and reported progress to project leadership.
                </li>
              </ul>
            </div>

            <span className="experience-badge">Engineering</span>
          </article>

          <div className="experience-note">
            The same habits—careful verification, documentation, and
            ownership—inform how I approach software projects.
          </div>
        </div>
      </section>

      {/* 6. EDUCATION / TRAINING */}
      <section id="education" className="section-pad section-border">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">05 / EDUCATION & TRAINING</span>

            <h2>
              Learning is a <span>long game.</span>
            </h2>
          </div>

          <div className="education-grid">
            <article className="education-card">
              <span className="education-mark">01</span>

              <div>
                <span className="eyebrow">ACADEMIC QUALIFICATION</span>

                <h3>B.Sc. in Electrical & Electronic Engineering</h3>

                <p>American International University-Bangladesh (AIUB)</p>

                <small>
                  Degree details and graduation year available on request.
                </small>
              </div>
            </article>

            <article className="education-card">
              <span className="education-mark">02</span>

              <div>
                <span className="eyebrow">PROFESSIONAL TRAINING</span>

                <h3>Full-Stack Web Development</h3>

                <p>Programming Hero</p>

                <small>
                  Focused on modern JavaScript full-stack development.
                </small>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 7. SERVICES */}
      <section id="services" className="section-pad section-border">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">06 / SERVICES</span>

            <h2>
              How I can help you <span>build better.</span>
            </h2>

            <p className="section-subtitle">
              Practical development services focused on useful features,
              maintainable code, and reliable web applications.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <span className="service-number">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CONTACT */}
      <section
        id="contact"
        className="section-pad contact-section section-border"
      >
        <div className="container contact-panel">
          <div>
            <span className="eyebrow">07 / GET IN TOUCH</span>

            <h2>
              Have a good problem?
              <br />
              <span>Let&apos;s build a solution.</span>
            </h2>

            <p>
              I&apos;m interested in full-stack opportunities, thoughtful teams,
              and meaningful products.
            </p>

            <a
              className="button button-primary"
              href="mailto:m.h.upal13@gmail.com"
            >
              Email me directly <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="contact-form-column">
            <ContactForm />

            <div className="contact-links">
              <a href="mailto:m.h.upal13@gmail.com">
                <span className="contact-icon">
                  <Mail size={18} />
                </span>

                <span>
                  <small>EMAIL</small>
                  <strong>m.h.upal13@gmail.com</strong>
                </span>

                <ArrowUpRight size={16} />
              </a>

              <a href="tel:+8801717089067">
                <span className="contact-icon">
                  <Phone size={18} />
                </span>

                <span>
                  <small>PHONE</small>
                  <strong>+880 1717-089067</strong>
                </span>

                <ArrowUpRight size={16} />
              </a>

              <a
                href="https://github.com/mahmudulhaque13"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-icon">
                  <Github size={18} />
                </span>

                <span>
                  <small>GITHUB</small>
                  <strong>mahmudulhaque13</strong>
                </span>

                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
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
