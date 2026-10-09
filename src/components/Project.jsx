import { useMemo, useState } from "react";
import {
  LuArrowUpRight,
  LuBrainCircuit,
  LuCalendarDays,
  LuGlobe,
  LuLayers3,
} from "react-icons/lu";

const domains = [
  { id: "all", label: "All projects", icon: LuLayers3 },
  { id: "ai", label: "AI & developer tools", icon: LuBrainCircuit },
  { id: "web", label: "Web platforms", icon: LuGlobe },
  { id: "events", label: "Events & community", icon: LuCalendarDays },
];

const projects = [
  {
    name: "LearnifAI",
    domain: "ai",
    domainLabel: "AI & developer tools",
    description:
      "An AI-powered Chrome extension that explains code and documentation through voice commands using Groq API integration.",
    image: "/assets/projects/learnifai.png",
    href: "https://learnifai-3.onrender.com/",
    accent: "from-cyan-400/25 via-emerald-400/10 to-transparent",
    technologies: [
      { src: "/assets/logos/groq.png", alt: "Groq" },
      { src: "/assets/logos/react.svg", alt: "React" },
      { src: "/assets/logos/tailwindcss.svg", alt: "Tailwind CSS" },
      { src: "/assets/logos/expressjsWhite.svg", alt: "Express" },
      { src: "/assets/logos/mongodb.svg", alt: "MongoDB" },
    ],
  },
  {
    name: "Maidaan",
    domain: "web",
    domainLabel: "Web platforms",
    description:
      "A tech-driven web platform that promotes sports participation and infrastructure access across India.",
    image: "/assets/projects/maidaan.png",
    href: "https://maidaan-extra-cool.vercel.app/",
    accent: "from-orange-400/25 via-yellow-400/10 to-transparent",
    technologies: [
      { src: "/assets/logos/react.svg", alt: "React" },
      { src: "/assets/logos/tailwindcss.svg", alt: "Tailwind CSS" },
      { src: "/assets/logos/expressjsWhite.svg", alt: "Express" },
      { src: "/assets/logos/postgresql.svg", alt: "PostgreSQL" },
    ],
  },
  {
    name: "Prism 2.0",
    domain: "events",
    domainLabel: "Events & community",
    description:
      "The official website for a college tech fest, with event details, registrations, and a club dashboard.",
    image: "/assets/projects/prism2.0.png",
    href: "https://www.prism2025.tech/",
    accent: "from-pink-400/25 via-indigo-400/10 to-transparent",
    technologies: [
      { src: "/assets/logos/react.svg", alt: "React" },
      { src: "/assets/logos/tailwindcss.svg", alt: "Tailwind CSS" },
      { src: "/assets/logos/expressjsWhite.svg", alt: "Express" },
      { src: "/assets/logos/postgresql.svg", alt: "PostgreSQL" },
    ],
  },
];

function ProjectCard({ project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.07]">
      <div className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${project.accent}`}>
        <img
          src={project.image}
          alt={`${project.name} project preview`}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030412]/70 via-transparent to-transparent" />
        <span className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-black/35 px-3 py-1 text-xs text-neutral-200 backdrop-blur-md">
          {project.domainLabel}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold text-white sm:text-2xl">{project.name}</h3>
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.name} live demo`}
            className="rounded-full border border-white/15 p-2 text-neutral-300 transition hover:border-aqua hover:bg-aqua/10 hover:text-aqua"
          >
            <LuArrowUpRight size={18} />
          </a>
        </div>
        <p className="mt-3 flex-1 text-sm leading-6 text-neutral-400">{project.description}</p>
        <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-white/10 pt-4">
          {project.technologies.map((technology) => (
            <img
              key={technology.alt}
              src={technology.src}
              alt={technology.alt}
              title={technology.alt}
              className="h-5 w-auto object-contain opacity-70 transition group-hover:opacity-100"
            />
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Project() {
  const [selectedDomain, setSelectedDomain] = useState("all");
  const visibleProjects = useMemo(
    () =>
      selectedDomain === "all"
        ? projects
        : projects.filter((project) => project.domain === selectedDomain),
    [selectedDomain],
  );

  return (
    <div className="w-full py-8 sm:py-10">
      <div
        className="mb-8 flex gap-3 overflow-x-auto pb-2 sm:mb-10 sm:grid sm:grid-cols-4 sm:overflow-visible"
        role="tablist"
        aria-label="Project domains"
      >
        {domains.map((domain) => {
          const Icon = domain.icon;
          const isSelected = selectedDomain === domain.id;

          return (
            <button
              key={domain.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => setSelectedDomain(domain.id)}
              className={`flex min-w-max items-center gap-2 rounded-xl border px-4 py-3 text-left text-sm transition sm:min-w-0 ${
                isSelected
                  ? "border-aqua/60 bg-aqua/10 text-white shadow-lg shadow-aqua/5"
                  : "border-white/10 bg-white/[0.03] text-neutral-400 hover:border-white/25 hover:bg-white/[0.07] hover:text-neutral-200"
              }`}
            >
              <Icon size={17} className={isSelected ? "text-aqua" : "text-neutral-500"} />
              <span>{domain.label}</span>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}
