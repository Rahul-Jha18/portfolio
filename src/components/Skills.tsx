import { Code, Database, Globe, Layers, Smartphone, GitBranch, Server, Cpu } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

type Skill = {
  title: string;
  level: number;
  icon: JSX.Element;
  color: string;
  glow: string;
};

type Category = {
  name: string;
  description: string;
  icon: JSX.Element;
  accent: string;
  skills: Skill[];
};

const Skills = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const categories: Category[] = [
    {
      name: 'Frontend',
      description: 'Building clean, responsive, modern UIs',
      icon: <Layers size={18} />,
      accent: 'from-violet-500 to-fuchsia-500',
      skills: [
        { icon: <Code size={16} />, title: 'HTML5', level: 88, color: '#f97316', glow: 'rgba(249,115,22,0.4)' },
        { icon: <Code size={16} />, title: 'CSS3', level: 82, color: '#38bdf8', glow: 'rgba(56,189,248,0.4)' },
        { icon: <Code size={16} />, title: 'JavaScript', level: 78, color: '#fbbf24', glow: 'rgba(251,191,36,0.4)' },
        { icon: <Code size={16} />, title: 'TypeScript', level: 72, color: '#60a5fa', glow: 'rgba(96,165,250,0.4)' },
        { icon: <Layers size={16} />, title: 'React', level: 78, color: '#22d3ee', glow: 'rgba(34,211,238,0.4)' },
        { icon: <Layers size={16} />, title: 'Tailwind CSS', level: 85, color: '#34d399', glow: 'rgba(52,211,153,0.4)' },
        { icon: <Smartphone size={16} />, title: 'Responsive Design', level: 80, color: '#f472b6', glow: 'rgba(244,114,182,0.4)' },
        { icon: <Layers size={16} />, title: 'UI/UX Basics', level: 65, color: '#a78bfa', glow: 'rgba(167,139,250,0.4)' },
      ],
    },
    {
      name: 'Backend',
      description: 'APIs, server-side logic, and databases',
      icon: <Server size={18} />,
      accent: 'from-cyan-500 to-blue-500',
      skills: [
        { icon: <Server size={16} />, title: 'Node.js', level: 72, color: '#4ade80', glow: 'rgba(74,222,128,0.4)' },
        { icon: <Server size={16} />, title: 'Express.js', level: 70, color: '#1b77f7', glow: 'rgba(26, 120, 252, 0.4)' },
        { icon: <Database size={16} />, title: 'SQL', level: 70, color: '#4716f9', glow: 'rgba(71, 22, 249, 0.4)' },
        { icon: <Database size={16} />, title: 'MySQL', level: 75, color: '#f97316', glow: 'rgba(249,115,22,0.4)' },
        { icon: <Server size={16} />, title: 'ASP.NET Core EF', level: 50, color: '#16f934', glow: 'rgba(22, 249, 22, 0.4)' },
      ],
      },
      {
      name: 'Tools & DevOps',
      description: 'Developer tools and workflow essentials',
      icon: <Cpu size={18} />,
      accent: 'from-emerald-500 to-teal-500',
      skills: [
        { icon: <GitBranch size={16} />, title: 'Git & GitHub', level: 80, color: '#fd3636', glow: 'rgba(248,113,113,0.4)' },
        { icon: <GitBranch size={16} />, title: 'Gitlab', level: 70, color: '#fdf035', glow: 'rgba(237, 250, 61, 0.4)' },
        { icon: <Globe size={16} />, title: 'RESTful APIs', level: 65, color: '#fb7a24', glow: 'rgba(251,191,36,0.4)' },
        { icon: <Server size={16} />, title: 'Vite', level: 70, color: '#a78bfa', glow: 'rgba(167,139,250,0.4)' },
      ],
    },
  ];

  const getLevelLabel = (level: number) => {
    if (level >= 85) return { label: 'Expert', color: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/30' };
    if (level >= 75) return { label: 'Advanced', color: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/30' };
    if (level >= 65) return { label: 'Proficient', color: 'text-violet-400 bg-violet-400/10 border-violet-400/30' };
    return { label: 'Learning', color: 'text-amber-400 bg-amber-400/10 border-amber-400/30' };
  };

  return (
    <section id="skills" className="relative py-28 bg-[#050810] overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-600/8 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-600/8 rounded-full blur-[100px]" />
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div ref={elementRef} className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className={`text-center mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/[0.08] text-cyan-300 text-xs font-semibold uppercase tracking-widest mb-5">
            <Cpu size={12} />
            Technical Skills
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
            My{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <p className="mt-4 text-white/40 text-lg max-w-2xl mx-auto">
            Tools and technologies I use to build modern, performant web applications.
          </p>
        </div>

        <div className="space-y-8">
          {categories.map((cat, catIndex) => (
            <div
              key={catIndex}
              className={`relative rounded-3xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl overflow-hidden transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${catIndex * 150}ms` }}
            >
              {/* Card inner glow accent */}
              <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${cat.accent} opacity-60`} />

              <div className="p-8">
                {/* Category header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-8">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.accent} flex items-center justify-center text-white shadow-lg`}>
                      {cat.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-white">{cat.name}</h3>
                      <p className="text-white/40 text-sm">{cat.description}</p>
                    </div>
                  </div>
                  <span className="self-start sm:self-auto px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] text-white/50 text-xs font-semibold">
                    {cat.skills.length} skills
                  </span>
                </div>

                {/* Skills grid */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {cat.skills.map((skill, i) => {
                    const { label, color } = getLevelLabel(skill.level);
                    return (
                      <div
                        key={i}
                        className="group p-4 rounded-2xl border border-white/[0.04] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/[0.10] transition-all duration-300"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2.5">
                            <div
                              className="w-8 h-8 rounded-lg flex items-center justify-center text-white shadow-md flex-shrink-0"
                              style={{ backgroundColor: `${skill.color}20`, color: skill.color, boxShadow: `0 0 12px ${skill.glow}` }}
                            >
                              {skill.icon}
                            </div>
                            <span className="text-white font-bold text-sm">{skill.title}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${color}`}>{label}</span>
                            <span className="text-white/40 text-xs font-mono font-bold">{skill.level}%</span>
                          </div>
                        </div>

                        {/* Progress bar */}
                        <div className="relative h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                          <div
                            className="absolute inset-y-0 left-0 rounded-full transition-all duration-1000 ease-out"
                            style={{
                              width: isVisible ? `${skill.level}%` : '0%',
                              background: `linear-gradient(90deg, ${skill.color}99, ${skill.color})`,
                              boxShadow: `0 0 8px ${skill.glow}`,
                              transitionDelay: `${catIndex * 150 + i * 50}ms`,
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;