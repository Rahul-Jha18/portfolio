
// src/components/Projects.tsx
import { useMemo, useState } from "react";
import { ExternalLink, Github, X, Tags, Sparkles, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: "Full-Stack" | "Frontend" | "Backend" | "AI";
  githubLink: string;
  liveLink?: string;
  highlights?: string[];
};

const cx = (...a: (string | false | null | undefined)[]) => a.filter(Boolean).join(" ");

const Projects = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.15 });

  const projects: Project[] = useMemo(
    () => [
      {
        title: "Asset Management System (Nepal Life)",
        description:
          "An asset management system to track IT assets for Nepal Life Insurance with structured inventory and reporting.",
        image:
          "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200",
        tags: ["JavaScript", "React", "Node", "MySQL"],
        category: "Full-Stack",
        githubLink: "https://github.com/Rahul-Jha18/Asset-Management-System",
        highlights: ["Inventory tracking", "Branch-wise records", "Reporting module"],
      },
      {
        title: "AI Interview Coach",
        description:
          "A production-style AI interview workflow that helps users practice interviews and improve answers.",
        image:
          "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=1200",
        tags: ["JavaScript", "AI", "API", "Web App"],
        category: "AI",
        githubLink: "https://github.com/Rahul-Jha18/AI-Interview-Coach",
        highlights: ["AI-driven feedback", "Interview workflow", "Real-use project"],
      },
      {
        title: "BizSewa (Digital Business Renewal)",
        description:
          "An e-governance platform to register and renew business licenses digitally.",
        image:
          "https://images.pexels.com/photos/3184632/pexels-photo-3184632.jpeg?auto=compress&cs=tinysrgb&w=1200",
        tags: ["JavaScript", "Web App", "GovTech"],
        category: "Full-Stack",
        githubLink:
          "https://github.com/Rahul-Jha18/BizSewa---Digital-Business-Renewal-System",
        highlights: ["E-governance", "Registration & renewal", "Digital workflow"],
      },
      {
        title: "IMS (Inventory Management System)",
        description:
          "Internship project: web-based IMS for tracking assets and organizational records (in progress).",
        image:
          "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1200",
        tags: ["React", "Node", "Express", "MySQL"],
        category: "Full-Stack",
        githubLink: "https://github.com/Rahul-Jha18/Project-IMS",
        highlights: ["CRUD modules", "Asset records", "Internship project"],
      },
      {
        title: "SportHub (E-commerce)",
        description:
          "E-commerce platform for sports items with product listing and shopping flow.",
        image:
          "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200",
        tags: ["React", "Express", "Node", "E-commerce"],
        category: "Full-Stack",
        githubLink: "https://github.com/Rahul-Jha18/SportHub-E-commerce-",
        highlights: ["Product pages", "Shopping flow", "Full-stack structure"],
      },
      {
        title: "MeroPalika",
        description:
          "Municipal services platform with local government information and citizen services.",
        image:
          "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=1200",
        tags: ["HTML", "Django", "Bootstrap", "MySQL"],
        category: "Full-Stack",
        githubLink: "https://github.com/Rahul-Jha18/MeroPalika",
        highlights: ["Citizen services", "Government info", "Web portal"],
      },
      {
        title: "Calculator App",
        description:
          "A simple calculator app built with HTML/CSS/JS for quick and responsive calculations.",
        image:
          "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200",
        tags: ["JavaScript", "HTML", "CSS"],
        category: "Frontend",
        githubLink: "https://github.com/Rahul-Jha18/Calculator-page-using-Js",
        highlights: ["Responsive UI", "Basic operations", "Clean layout"],
      },
      {
        title: "Portfolio (This Website)",
        description:
          "My personal portfolio built with React + TypeScript and modern UI design.",
        image:
          "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=1200",
        tags: ["React", "TypeScript", "Tailwind", "Vite"],
        category: "Frontend",
        githubLink: "https://github.com/Rahul-Jha18/portfolio",
        liveLink: "https://portfolio-zeta-ten-5zi2c841av.vercel.app/",
        highlights: ["Modern UI", "Responsive sections", "Deployed on Vercel"],
      },
    ],
    []
  );

  const categories = ["All", "Full-Stack", "Frontend", "Backend", "AI"] as const;
  type Category = (typeof categories)[number];

  const [active, setActive] = useState<Category>("All");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    const base = active === "All" ? projects : projects.filter((p) => p.category === active);
    const q = query.trim().toLowerCase();
    if (!q) return base;

    return base.filter((p) => {
      const hay = [
        p.title,
        p.description,
        p.category,
        ...(p.tags || []),
        ...(p.highlights || []),
      ]
        .join(" ")
        .toLowerCase();
      return hay.includes(q);
    });
  }, [active, projects, query]);

  const detailsTagClass =
    "px-3 py-1 rounded-full text-xs font-semibold bg-black/5 text-gray-800 border border-black/10";

  return (
    <section id="projects" className="relative min-h-screen py-24 overflow-hidden">
      {/* Background (premium + neutral with subtle red accents) */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-white to-slate-50" />
      <div className="absolute -top-24 left-10 w-80 h-80 bg-black/10 blur-3xl rounded-full" />
      <div className="absolute -bottom-24 right-10 w-96 h-96 bg-red-500/10 blur-3xl rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-black/5 blur-[120px] rounded-full" />

      <div ref={elementRef} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div
          className={cx(
            "text-center mb-10 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 bg-white/60 backdrop-blur shadow-sm">
            <Sparkles className="w-4 h-4 text-red-600" />
            <span className="text-sm font-semibold text-gray-800">Selected Work</span>
          </div>

          <h2 className="mt-4 text-4xl md:text-5xl font-black tracking-tight text-gray-900">
            Projects
          </h2>

          <div className="w-28 h-[3px] bg-gradient-to-r from-black/70 via-red-600 to-black/70 mx-auto my-5 rounded-full" />

          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Full-stack systems, AI workflows, and clean frontend apps—built with focus on real usability and solid structure.
          </p>
        </div>

        {/* Filters + Search */}
        <div
          className={cx(
            "flex flex-col gap-4 md:gap-5 md:flex-row md:items-center md:justify-between mb-12 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          <div className="flex flex-wrap justify-center md:justify-start gap-2">
            {categories.map((c) => {
              const isOn = active === c;
              return (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={cx(
                    "px-5 py-2 rounded-full text-sm font-bold border transition-all duration-300",
                    isOn
                      ? "bg-black text-white border-black shadow-[0_18px_45px_rgba(0,0,0,0.25)] ring-1 ring-black/10"
                      : "bg-white/70 backdrop-blur border-black/10 text-gray-800 hover:bg-white hover:border-black/20"
                  )}
                >
                  {c}
                </button>
              );
            })}
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="w-full md:w-[360px] rounded-2xl border border-black/10 bg-white/70 backdrop-blur px-4 py-2 shadow-sm">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects, tags, highlights..."
                className="w-full bg-transparent outline-none text-sm text-gray-800 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project, index) => (
            <div
              key={`${project.title}-${index}`}
              className={cx(
                "group relative rounded-3xl overflow-hidden",
                "border border-white/50 bg-white/60 backdrop-blur-xl",
                "shadow-[0_20px_50px_rgba(0,0,0,0.08)]",
                "hover:shadow-[0_35px_80px_rgba(0,0,0,0.18)]",
                "transition-all duration-500 hover:-translate-y-3",
                isVisible ? "opacity-100" : "opacity-0"
              )}
            >
              {/* subtle red glow on hover */}
              <div className="pointer-events-none absolute -inset-1 opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="absolute inset-0 rounded-[26px] bg-red-500/10 blur-2xl" />
              </div>

              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />

                {/* overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-90" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition duration-500" />

                {/* category chip */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-white/90 text-gray-900 shadow">
                    {project.category}
                  </span>
                </div>

                {/* title */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-black text-white leading-tight drop-shadow">
                    {project.title}
                  </h3>
                </div>

                {/* hover quick actions */}
                <div className="absolute top-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition duration-500">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/90 hover:bg-white text-gray-900 flex items-center justify-center shadow"
                    aria-label="GitHub"
                    title="GitHub"
                  >
                    <Github size={18} />
                  </a>
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/90 hover:bg-white text-gray-900 flex items-center justify-center shadow"
                      aria-label="Live"
                      title="Live"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.slice(0, 6).map((tag, i) => (
                    <span key={i} className={detailsTagClass}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between gap-3">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-800 hover:text-black font-bold"
                  >
                    <Github size={18} />
                    Code
                    <ArrowRight className="w-4 h-4 opacity-60 group-hover:translate-x-0.5 transition" />
                  </a>

                  <button
                    onClick={() => setSelected(project)}
                    className={cx(
                      "inline-flex items-center gap-2 px-4 py-2 rounded-full",
                      "bg-black text-white text-sm font-extrabold",
                      "shadow-[0_18px_45px_rgba(0,0,0,0.25)]",
                      "hover:shadow-[0_22px_55px_rgba(239,68,68,0.25)]",
                      "transition"
                    )}
                  >
                    <Tags size={16} />
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selected && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"
              onClick={() => setSelected(null)}
            />

            <div className="relative w-full max-w-3xl rounded-3xl overflow-hidden bg-white shadow-2xl border border-white/20">
              {/* Top media */}
              <div className="relative h-60 sm:h-72">
                <img src={selected.image} alt={selected.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-900 w-10 h-10 rounded-full flex items-center justify-center shadow"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>

                <div className="absolute bottom-4 left-5 right-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-white/90 text-gray-900">
                      {selected.category}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-black/40 text-white border border-white/20">
                      {selected.tags.length} tags
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white drop-shadow">
                    {selected.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <p className="text-gray-700 leading-relaxed mb-6 text-[15px] sm:text-base">
                  {selected.description}
                </p>

                {/* Highlights */}
                {selected.highlights?.length ? (
                  <div className="mb-6">
                    <h4 className="font-black text-gray-900 mb-3 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-red-600" />
                      Highlights
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {selected.highlights.map((h, i) => (
                        <div
                          key={i}
                          className="rounded-2xl border border-black/10 bg-white/70 backdrop-blur p-4 shadow-sm"
                        >
                          <div className="text-sm font-bold text-gray-900">{h}</div>
                          <div className="text-xs text-gray-600 mt-1">
                            Built with focus on structure and usability.
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}

                {/* All tags */}
                <div className="flex flex-wrap gap-2 mb-7">
                  {selected.tags.map((tag, i) => (
                    <span key={i} className={detailsTagClass}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={selected.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex justify-center items-center gap-2 px-5 py-3 rounded-full bg-black text-white font-extrabold hover:bg-gray-900 transition shadow-[0_18px_45px_rgba(0,0,0,0.25)]"
                  >
                    <Github size={18} />
                    View Code
                  </a>

                  {selected.liveLink && (
                    <a
                      href={selected.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex justify-center items-center gap-2 px-5 py-3 rounded-full bg-white text-gray-900 font-extrabold border border-black/10 hover:border-black/20 transition shadow-sm"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}

                  <button
                    onClick={() => setSelected(null)}
                    className="inline-flex justify-center items-center gap-2 px-5 py-3 rounded-full bg-black/5 text-gray-900 font-extrabold hover:bg-black/10 transition border border-black/10"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Projects;
