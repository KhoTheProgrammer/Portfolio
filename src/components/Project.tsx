import { FiGithub, FiExternalLink } from "react-icons/fi";
import projects from "../constants/Projects";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

interface SectionProps {
  id: string;
}

const ProjectSection = ({ id }: SectionProps) => {
  return (
    <section id={id} className="relative bg-slate-50 py-24 dark:bg-ink-2">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Portfolio"
            title="Featured projects"
            subtitle="A curated selection of things I've built to solve real problems — across full-stack web, mobile, and creative applications."
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal
              as="article"
              key={project.title}
              delay={(index % 3) * 90}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:-translate-y-1.5 hover:border-violet-300 hover:shadow-2xl hover:shadow-violet-500/10 dark:border-white/10 dark:bg-white/5 dark:hover:border-violet-500/40"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                {/* Hover links */}
                <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 translate-y-2">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} on GitHub`}
                      className="grid h-9 w-9 place-items-center rounded-full bg-white/90 text-slate-800 backdrop-blur transition-colors hover:bg-white"
                    >
                      <FiGithub />
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} live demo`}
                      className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white transition-transform hover:scale-105"
                    >
                      <FiExternalLink />
                    </a>
                  )}
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-violet-500/10 px-2 py-1 text-xs font-medium text-violet-600 dark:text-violet-300"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-500 dark:bg-white/5 dark:text-slate-400">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
