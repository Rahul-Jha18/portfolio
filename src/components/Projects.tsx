import { useMemo, useState } from 'react';
import { ExternalLink, Github, X, Sparkles, ArrowUpRight, Tag, Search, FolderOpen } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Image from '../assets/image.png';

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
category:
  | 'Full-Stack'
  | 'Frontend'
  | 'Backend'
  | 'AI'
  | 'Enterprise System';
  githubLink: string;
  liveLink?: string;
  highlights?: string[];
  accentColor: string;
  accentGlow: string;
};

const cx = (...a: (string | false | null | undefined)[]) => a.filter(Boolean).join(' ');

const Projects = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const projects: Project[] = useMemo(
    () => [
      {
        title: 'Asset Management System',
        description: 'Enterprise-grade IT asset tracking system for Nepal Life Insurance — inventory management, branch-wise records, and smart reporting.',
        image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200',
        tags: ['React', 'Node.js', 'MySQL', 'Express'],
        category: 'Full-Stack',
        githubLink: 'https://github.com/Rahul-Jha18/Asset-Management-System',
        highlights: ['Inventory tracking', 'Branch-wise records', 'Reporting module'],
        accentColor: '#7c3aed',
        accentGlow: 'rgba(124,58,237,0.35)',
      },
      {
        title: 'Nepal Life Digital Library System',
        description:
          'Enterprise document management and internal memo workflow system for Nepal Life Insurance — secure document upload, department-wise access, memo approval flow, audit tracking, and digital library search.',
        image: Image,
        tags: ['React', 'TypeScript', '.NET', 'SQL Server'],
        category: 'Enterprise System',
        githubLink: 'https://github.com/Rahul-Jha18/Digital-library-Main',
        highlights: [
          'Digital document library',
          'Internal memo workflow',
          'Role-based access control',
          'Department-wise permissions',
          'Audit logs and approval tracking',
        ],
        accentColor: '#2563eb',
        accentGlow: 'rgba(37,99,235,0.35)',
      },
      {
        title: 'AI Interview Coach',
        description: 'Production-style AI interview workflow that helps users practice with real-time AI-driven feedback and structured sessions.',
        image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=1200',
        tags: ['JavaScript', 'AI', 'OpenAI API', 'Web App'],
        category: 'AI',
        githubLink: 'https://github.com/Rahul-Jha18/AI-Interview-Coach',
        highlights: ['AI-driven feedback', 'Interview workflow', 'Real-world use case'],
        accentColor: '#06b6d4',
        accentGlow: 'rgba(6,182,212,0.35)',
      },
      {
        title: 'BizSewa',
        description: 'E-governance platform for digital business license registration and renewal — simplifying government processes for citizens.',
        image: 'https://images.pexels.com/photos/3184632/pexels-photo-3184632.jpeg?auto=compress&cs=tinysrgb&w=1200',
        tags: ['JavaScript', 'GovTech', 'Web App', 'Node.js'],
        category: 'Full-Stack',
        githubLink: 'https://github.com/Rahul-Jha18/BizSewa---Digital-Business-Renewal-System',
        highlights: ['E-governance', 'Registration flow', 'Digital workflow'],
        accentColor: '#10b981',
        accentGlow: 'rgba(16,185,129,0.35)',
      },
      {
        title: 'IMS — Inventory System',
        description: 'Web-based inventory management system for tracking organizational assets and records, built during internship at Nepal Life.',
        image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1200',
        tags: ['React', 'Node.js', 'Express', 'MySQL'],
        category: 'Full-Stack',
        githubLink: 'https://github.com/Rahul-Jha18/Project-IMS',
        highlights: ['CRUD modules', 'Asset records', 'Internship project'],
        accentColor: '#f59e0b',
        accentGlow: 'rgba(245,158,11,0.35)',
      },
      {
        title: 'SportHub E-Commerce',
        description: 'Full-stack e-commerce platform for sports equipment — product listings, cart, and complete shopping flow.',
        image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200',
        tags: ['React', 'Express', 'Node.js', 'E-Commerce'],
        category: 'Full-Stack',
        githubLink: 'https://github.com/Rahul-Jha18/SportHub-E-commerce-',
        highlights: ['Product catalog', 'Shopping flow', 'Full-stack structure'],
        accentColor: '#ec4899',
        accentGlow: 'rgba(236,72,153,0.35)',
      },
      {
        title: 'MeroPalika',
        description: 'Municipal services web portal with local government information and streamlined citizen services.',
        image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=1200',
        tags: ['HTML', 'Django', 'Bootstrap', 'MySQL'],
        category: 'Full-Stack',
        githubLink: 'https://github.com/Rahul-Jha18/MeroPalika',
        highlights: ['Citizen services', 'Gov info portal', 'Clean web UI'],
        accentColor: '#8b5cf6',
        accentGlow: 'rgba(139,92,246,0.35)',
      },
      {
        title: 'Calculator App',
        description: 'Clean, responsive calculator built with vanilla HTML/CSS/JS — focused on pixel-perfect UI and smooth UX.',
        image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200',
        tags: ['JavaScript', 'HTML', 'CSS'],
        category: 'Frontend',
        githubLink: 'https://github.com/Rahul-Jha18/Calculator-page-using-Js',
        highlights: ['Responsive UI', 'Keyboard support', 'Clean layout'],
        accentColor: '#34d399',
        accentGlow: 'rgba(52,211,153,0.35)',
      },
      {
        title: 'This Portfolio ✦',
        description: 'My personal portfolio — built with React + TypeScript, Tailwind CSS, and modern UI design patterns. Deployed on Vercel.',
        image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=1200',
        tags: ['React', 'TypeScript', 'Tailwind', 'Vite'],
        category: 'Frontend',
        githubLink: 'https://github.com/Rahul-Jha18/portfolio',
        liveLink: 'https://portfolio-zeta-ten-5zi2c841av.vercel.app/',
        highlights: ['Modern UI design', 'Fully responsive', 'Deployed on Vercel'],
        accentColor: '#f97316',
        accentGlow: 'rgba(249,115,22,0.35)',
      },
    ],
    []
  );

  const categories = ['All', 'Full-Stack', 'Frontend', 'AI', 'Backend'] as const;
  type Category = typeof categories[number];

  const categoryColors: Record<string, string> = {
    'Full-Stack': 'from-violet-500 to-purple-600',
    'Frontend': 'from-cyan-500 to-blue-600',
    'AI': 'from-emerald-500 to-teal-600',
    'Backend': 'from-amber-500 to-orange-600',
  };

  const [active, setActive] = useState<Category>('All');
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    const base = active === 'All' ? projects : projects.filter((p) => p.category === active);
    const q = query.trim().toLowerCase();
    if (!q) return base;
    return base.filter((p) =>
      [p.title, p.description, p.category, ...p.tags, ...(p.highlights || [])]
        .join(' ')
        .toLowerCase()
        .includes(q)
    );
  }, [active, projects, query]);

  return (
    <section id="projects" className="relative py-28 bg-[#070c1a] overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-violet-600/8 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-600/8 rounded-full blur-[100px]" />
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div ref={elementRef} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/[0.08] text-violet-300 text-xs font-semibold uppercase tracking-widest mb-5">
            <FolderOpen size={12} />
            Selected Work
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
            Featured{' '}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="mt-4 text-white/40 text-lg max-w-2xl mx-auto">
            Full-stack systems, AI tools, and polished frontends — built with focus on real usability.
          </p>
        </div>

        {/* Filters + Search */}
        <div className={`flex flex-col md:flex-row gap-4 justify-between items-center mb-12 transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {categories.map((c) => {
              const isOn = active === c;
              return (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={cx(
                    'px-5 py-2 rounded-xl text-sm font-bold border transition-all duration-300',
                    isOn
                      ? 'bg-gradient-to-r from-violet-600 to-cyan-600 text-white border-transparent shadow-[0_0_20px_rgba(139,92,246,0.4)]'
                      : 'border-white/[0.08] bg-white/[0.03] text-white/50 hover:text-white hover:border-white/20 hover:bg-white/[0.06]'
                  )}
                >
                  {c}
                </button>
              );
            })}
          </div>

          <div className="relative w-full md:w-80">
            <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects, tags..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-white/[0.08] bg-white/[0.04] text-white placeholder:text-white/25 text-sm outline-none focus:border-violet-500/50 focus:bg-white/[0.06] transition-all"
            />
          </div>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, index) => (
            <div
              key={project.title}
              className={cx(
                'group relative rounded-3xl overflow-hidden border border-white/[0.06] bg-white/[0.02]',
                'hover:border-white/[0.12] transition-all duration-500 hover:-translate-y-2',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              )}
              style={{
                transitionDelay: `${index * 60}ms`,
                boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 60px ${project.accentGlow}, 0 4px 24px rgba(0,0,0,0.4)`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 24px rgba(0,0,0,0.3)';
              }}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${project.accentColor}, transparent)` }}
              />

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070c1a] via-[#070c1a]/50 to-transparent" />

                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <span
                    className={`inline-flex px-2.5 py-1 rounded-lg text-xs font-bold text-white bg-gradient-to-r ${categoryColors[project.category] || 'from-gray-600 to-gray-700'}`}
                    style={{ boxShadow: `0 0 12px ${project.accentGlow}` }}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Hover actions */}
                <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-black/70 backdrop-blur border border-white/20 flex items-center justify-center text-white hover:text-white/80 transition"
                    onClick={(e) => e.stopPropagation()}
                    title="View on GitHub"
                  >
                    <Github size={16} />
                  </a>
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-xl bg-black/70 backdrop-blur border border-white/20 flex items-center justify-center text-white hover:text-white/80 transition"
                      onClick={(e) => e.stopPropagation()}
                      title="View Live"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>

              {/* Card body */}
              <div className="p-5">
                <h3 className="text-lg font-black text-white mb-2 group-hover:text-white transition">{project.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed mb-4 line-clamp-2">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.slice(0, 4).map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-semibold border border-white/[0.06] bg-white/[0.04] text-white/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-white/40 hover:text-white text-sm font-semibold transition group/gh"
                  >
                    <Github size={15} />
                    <span>Code</span>
                    <ArrowUpRight size={12} className="opacity-0 group-hover/gh:opacity-100 transition" />
                  </a>

                  <button
                    onClick={() => setSelected(project)}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white transition-all duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${project.accentColor}30, ${project.accentColor}20)`,
                      border: `1px solid ${project.accentColor}40`,
                      color: project.accentColor,
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = `linear-gradient(135deg, ${project.accentColor}50, ${project.accentColor}30)`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = `linear-gradient(135deg, ${project.accentColor}30, ${project.accentColor}20)`;
                    }}
                  >
                    <Tag size={12} />
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-white/30">
            <FolderOpen size={40} className="mx-auto mb-4 opacity-40" />
            <p className="text-lg font-semibold">No projects match your search.</p>
          </div>
        )}
      </div>

      {/* Project Modal */}
      {selected && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={() => setSelected(null)}
          />
          <div className="relative w-full max-w-2xl rounded-3xl overflow-hidden bg-[#0d1224] border border-white/[0.08] shadow-2xl animate-[modalIn_250ms_ease-out]">
            {/* Image header */}
            <div className="relative h-56">
              <img src={selected.image} alt={selected.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1224] via-[#0d1224]/60 to-transparent" />

              {/* Accent top border */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px]"
                style={{ background: `linear-gradient(90deg, transparent, ${selected.accentColor}, transparent)` }}
              />

              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-black/60 backdrop-blur border border-white/20 flex items-center justify-center text-white/70 hover:text-white transition"
              >
                <X size={18} />
              </button>

              <div className="absolute bottom-4 left-5">
                <span
                  className={`inline-flex mb-2 px-2.5 py-1 rounded-lg text-xs font-bold text-white bg-gradient-to-r ${categoryColors[selected.category] || 'from-gray-600 to-gray-700'}`}
                >
                  {selected.category}
                </span>
                <h3 className="text-2xl font-black text-white">{selected.title}</h3>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-white/55 leading-relaxed mb-6">{selected.description}</p>

              {/* Highlights */}
              {selected.highlights?.length ? (
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles size={14} style={{ color: selected.accentColor }} />
                    <span className="text-white font-bold text-sm">Highlights</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {selected.highlights.map((h, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-xl border text-center"
                        style={{
                          borderColor: `${selected.accentColor}30`,
                          background: `${selected.accentColor}08`,
                        }}
                      >
                        <div className="text-xs font-bold" style={{ color: selected.accentColor }}>{h}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {selected.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 rounded-lg border border-white/[0.06] bg-white/[0.04] text-white/50 text-xs font-semibold">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3">
                <a
                  href={selected.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-gray-900 font-bold text-sm hover:opacity-90 transition"
                >
                  <Github size={16} />
                  View on GitHub
                </a>
                {selected.liveLink && (
                  <a
                    href={selected.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white transition"
                    style={{ background: selected.accentColor }}
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
                <button
                  onClick={() => setSelected(null)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/[0.08] bg-white/[0.04] text-white/50 font-bold text-sm hover:text-white transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.96) translateY(12px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Projects;